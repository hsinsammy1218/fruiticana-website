import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { flavorSlugs } from "@/data/flavors";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/flavors", priority: 0.9 },
    { path: "/story", priority: 0.8 },
    { path: "/nutrition", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
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
    priority: 0.6,
  }));

  return [...staticEntries, ...flavorEntries];
}
