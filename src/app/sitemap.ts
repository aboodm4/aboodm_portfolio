import { MetadataRoute } from "next";
import { siteConfig } from "@/data/navigation";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = ["", "/about", "/experience", "/projects", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date("2026-10-16"),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.9 : 0.7,
  }));

  return [...routes, ...projectRoutes];
}
