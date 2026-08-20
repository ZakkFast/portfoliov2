import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { getBlogPosts } from "./lib/contentful";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const projectPages = projects.map((project) => ({
    url: `https://zakkfast.io/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const blogPages = posts.map((post) => ({
    url: `https://zakkfast.io/blog/${post.slug}`,
    lastModified: post.publishedDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://zakkfast.io",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://zakkfast.io/blog",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projectPages,
    ...blogPages,
  ];
}
