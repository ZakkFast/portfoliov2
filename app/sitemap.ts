import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((project) => ({
    url: `https://zakkfast.io/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://zakkfast.io",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectPages,
  ];
}
