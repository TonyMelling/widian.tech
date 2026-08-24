import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { getAllResourceSlugs, getResourceBySlug } from "@/lib/resources";

export function generateStaticParams() {
  return getAllResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    robots: article.draft ? { index: false, follow: true } : undefined,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: { "@type": "Organization", name: article.author ?? "Widian" },
  };

  return (
    <>
      <SiteHeader />
      <main>
        <article className="px-4 py-14 md:px-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <time
              dateTime={article.publishedAt}
              className="font-mono text-xs text-text-secondary"
            >
              {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {article.updatedAt ? ` · Updated ${article.updatedAt}` : ""}
            </time>
            <h1 className="mt-3 font-display text-[28px] leading-tight font-bold text-navy md:text-[38px]">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              {article.description}
            </p>
            <div
              className="prose prose-navy mt-10 max-w-none text-[16px] leading-relaxed text-navy [&_a]:text-navy [&_a]:underline [&_a]:decoration-hairline [&_a]:underline-offset-2 [&_a:hover]:text-ember [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_li]:mt-1 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />
          </div>
        </article>
      </main>
      <SiteFooter />
      {/* Article JSON-LD per SEO_STRATEGY_AND_TECHNICAL_PLAN.md — only
          for genuine editorial resources, which this now is. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
