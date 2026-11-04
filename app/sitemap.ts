import type { MetadataRoute } from "next";
import { getPublishedResources } from "@/lib/resources";

// `||`, not `??` — an accidentally blank (but set) env var must fall
// back too, not just an unset one.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://widian.tech";

// Only canonical, fully-built, indexable routes belong here — per
// SEO_STRATEGY_AND_TECHNICAL_PLAN.md ("Sitemap contains only canonical
// production URLs"). Deliberately excluded: /privacy (draft until approved),
// /cookies (legal), /new-market (direct access only) and /resources (listed
// below only once an article is published). Add entries as each page ships.
const PAGES: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/platform", changeFrequency: "monthly", priority: 0.8 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.8 },
  { path: "/building-record", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/building-owners", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions/compliance-teams", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions/surveyors", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions/contractors", changeFrequency: "monthly", priority: 0.7 },
  { path: "/security-trust", changeFrequency: "monthly", priority: 0.7 },
  { path: "/book-a-demo", changeFrequency: "monthly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const resources = getPublishedResources();

  return [
    ...PAGES.map(({ path, changeFrequency, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
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
