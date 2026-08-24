import type { MetadataRoute } from "next";
import { getPublishedResources } from "@/lib/resources";

// `||`, not `??` — an accidentally blank (but set) env var must fall
// back too, not just an unset one.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://widian.tech";

// Only canonical, fully-built, indexable routes belong here — per
// SEO_STRATEGY_AND_TECHNICAL_PLAN.md ("Sitemap contains only canonical
// production URLs"). Every other route currently declares
// `robots: { index: false }` and is deliberately excluded until it has
// real content, not just a stub. Add entries here as each page ships.
export default function sitemap(): MetadataRoute.Sitemap {
  const resources = getPublishedResources();

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
    // /resources itself is only indexable once it has real content — see
    // that route's own metadata — but the sitemap always lists it once
    // at least one article exists, matching that same condition.
    ...(resources.length > 0
      ? [
          {
            url: `${siteUrl}/resources`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.6,
          },
          ...resources.map((article) => ({
            url: `${siteUrl}/resources/${article.slug}`,
            lastModified: new Date(article.updatedAt ?? article.publishedAt),
            changeFrequency: "monthly" as const,
            priority: 0.5,
          })),
        ]
      : []),
  ];
}
