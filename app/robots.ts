import type { MetadataRoute } from "next";

const isPreviewDeployment =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development" ||
  process.env.NODE_ENV === "development";

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://zakkfast.io/sitemap.xml",
  };
}
