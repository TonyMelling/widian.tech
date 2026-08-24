import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://widian.tech";

// Only canonical, fully-built, indexable routes belong here — per
// SEO_STRATEGY_AND_TECHNICAL_PLAN.md ("Sitemap contains only canonical
// production URLs"). Every other route currently declares
// `robots: { index: false }` and is deliberately excluded until it has
// real content, not just a stub. Add entries here as each page ships.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/platform`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
