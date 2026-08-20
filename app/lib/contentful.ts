export interface RichTextNode {
  nodeType: string;
  value?: string;
  marks?: { type: string }[];
  data?: {
    uri?: string;
    target?: {
      sys?: {
        id?: string;
      };
    };
  };
  content?: RichTextNode[];
}

export interface RichTextDocument extends RichTextNode {
  nodeType: "document";
  content: RichTextNode[];
}

export interface BlogImage {
  url: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: RichTextDocument;
  publishedDate: string;
  tags: string[];
  heroImage?: BlogImage;
  seoDescription?: string;
  featured: boolean;
}

interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title?: string;
    description?: string;
    file?: {
      url?: string;
      details?: {
        image?: {
          width?: number;
          height?: number;
        };
      };
    };
  };
}

interface ContentfulEntry {
  sys: {
    id: string;
  };
  fields: {
    title?: string;
    slug?: string;
    excerpt?: string;
    body?: RichTextDocument;
    publishedDate?: string;
    tags?: string[];
    heroImage?: {
      sys?: {
        id?: string;
      };
    };
    seoDescription?: string;
    featured?: boolean;
  };
}

interface ContentfulResponse {
  items: ContentfulEntry[];
  includes?: {
    Asset?: ContentfulAsset[];
  };
}

interface ContentfulConfig {
  preview: boolean;
  spaceId: string;
  environment: string;
  accessToken: string;
}

export function isContentfulPreview() {
  return (
    process.env.VERCEL_ENV === "preview" ||
    process.env.VERCEL_ENV === "development" ||
    process.env.NODE_ENV === "development"
  );
}

function getContentfulConfig(): ContentfulConfig | null {
  const preview = isContentfulPreview();
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";
  const accessToken = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    if (process.env.CI === "true") return null;
    throw new Error(`Missing Contentful ${preview ? "preview" : "delivery"} configuration`);
  }

  return { preview, spaceId, environment, accessToken };
}

function normalizeAssetUrl(url?: string) {
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
}

function mapAsset(asset?: ContentfulAsset): BlogImage | undefined {
  const url = normalizeAssetUrl(asset?.fields.file?.url);
  if (!asset || !url) return undefined;

  return {
    url,
    title: asset.fields.title || "",
    description: asset.fields.description || "",
    width: asset.fields.file?.details?.image?.width,
    height: asset.fields.file?.details?.image?.height,
  };
}

function mapEntry(entry: ContentfulEntry, assets: Map<string, ContentfulAsset>): BlogPost | null {
  const { fields } = entry;

  if (!fields.title || !fields.slug || !fields.excerpt || !fields.body || !fields.publishedDate) {
    return null;
  }

  const heroImageId = fields.heroImage?.sys?.id;

  return {
    id: entry.sys.id,
    title: fields.title,
    slug: fields.slug,
    excerpt: fields.excerpt,
    body: fields.body,
    publishedDate: fields.publishedDate,
    tags: fields.tags || [],
    heroImage: heroImageId ? mapAsset(assets.get(heroImageId)) : undefined,
    seoDescription: fields.seoDescription,
    featured: fields.featured || false,
  };
}

async function fetchBlogEntries(params: Record<string, string>) {
  const config = getContentfulConfig();
  if (!config) return [];

  const { preview, spaceId, environment, accessToken } = config;
  const host = preview ? "preview.contentful.com" : "cdn.contentful.com";
  const searchParams = new URLSearchParams({
    content_type: "blogPost",
    include: "2",
    ...params,
  });
  const url = `https://${host}/spaces/${spaceId}/environments/${environment}/entries?${searchParams}`;
  const options: RequestInit & { next?: { revalidate: number } } = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  if (preview) {
    options.cache = "no-store";
  } else {
    options.next = { revalidate: 300 };
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Contentful request failed with status ${response.status}`);
  }

  const data = (await response.json()) as ContentfulResponse;
  const assets = new Map((data.includes?.Asset || []).map((asset) => [asset.sys.id, asset]));

  return data.items
    .map((entry) => mapEntry(entry, assets))
    .filter((entry): entry is BlogPost => Boolean(entry));
}

export function getBlogPosts() {
  return fetchBlogEntries({ order: "-fields.publishedDate" });
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await fetchBlogEntries({ "fields.slug": slug, limit: "1" });
  return posts[0] || null;
}

function getText(node: RichTextNode): string {
  if (node.nodeType === "text") return node.value || "";
  return (node.content || []).map(getText).join(" ");
}

export function getReadingTime(body: RichTextDocument) {
  const words = getText(body).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
