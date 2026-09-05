import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { flavorSlugs } from "@/data/flavors";
import { documentSlugs } from "@/data/documents";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/schools", priority: 0.9 },
    { path: "/product", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/resources", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/learn", priority: 0.5 },
    { path: "/accessibility", priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route.priority,
  }));

  const flavorEntries: MetadataRoute.Sitemap = flavorSlugs.map((slug) => ({
    url: `${base}/flavors/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const documentEntries: MetadataRoute.Sitemap = documentSlugs.map((slug) => ({
    url: `${base}/resources/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticEntries, ...flavorEntries, ...documentEntries];
}
