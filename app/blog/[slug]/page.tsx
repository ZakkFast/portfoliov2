import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "../../components/layout/Container";
import RichText from "../../components/blog/RichText";
import { getBlogPostBySlug, getReadingTime } from "../../lib/contentful";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = post.seoDescription || post.excerpt;
  const url = `https://zakkfast.io/blog/${post.slug}`;

  return {
    title: post.title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      publishedTime: post.publishedDate,
      images: post.heroImage ? [{ url: post.heroImage.url }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.heroImage ? [post.heroImage.url] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  const url = `https://zakkfast.io/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.publishedDate,
    author: {
      "@type": "Person",
      name: "Zakk Fast",
      url: "https://zakkfast.io",
    },
    mainEntityOfPage: url,
    image: post.heroImage?.url,
  };

  return (
    <main className="min-h-screen pt-36 pb-20 sm:pt-40">
      <Container>
        <article>
          <Link
            href="/blog"
            className="mb-10 inline-flex text-sm font-medium text-neutral-500 transition-colors hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:text-neutral-400 dark:hover:text-cyan-300"
          >
            ← Back to Blog
          </Link>

          <header className="mb-12">
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/10 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
              <span aria-hidden="true">·</span>
              <span>{getReadingTime(post.body)} min read</span>
            </div>
          </header>

          {post.heroImage && (
            <Image
              src={post.heroImage.url}
              alt={post.heroImage.description || post.heroImage.title}
              width={post.heroImage.width || 1600}
              height={post.heroImage.height || 900}
              className="mb-12 h-auto w-full rounded-xl border border-neutral-200 object-cover dark:border-white/10"
            />
          )}

          <RichText document={post.body} />

          <footer className="mt-14 border-t border-neutral-200 pt-8 dark:border-white/10">
            <p className="font-medium text-neutral-950 dark:text-white">Zakk Fast</p>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Software Engineer</p>
            <Link
              href="/blog"
              className="mt-7 inline-flex text-sm font-medium text-cyan-700 transition-colors hover:text-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              ← Back to Blog
            </Link>
          </footer>
        </article>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
