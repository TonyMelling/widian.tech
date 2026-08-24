import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { getPublishedResources } from "@/lib/resources";

const resources = getPublishedResources();

// Un-deferred from WIDIAN_MARKETING_WEBSITE_SPEC.md §2's "defer until
// sufficient evidence exists" list once real articles were in progress —
// see DECISIONS.md. Indexed only once at least one real article exists,
// matching the site's convention of never indexing empty/stub content.
export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles and guides on passive fire compliance, building records and verified remedial closure.",
  robots: resources.length > 0 ? undefined : { index: false, follow: true },
};

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="px-4 pt-14 pb-10 md:px-16 md:pt-20 md:pb-14">
          <div className="mx-auto max-w-280">
            <p className="font-mono text-[11px] tracking-[0.12em] text-ember uppercase md:text-xs">
              Resources
            </p>
            <h1 className="mt-3.5 font-display text-[28px] leading-tight font-bold text-navy md:mt-5 md:text-[42px]">
              Articles and guides.
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary md:text-lg">
              Passive fire compliance, building records and verified remedial closure —
              written plainly, without fearmongering.
            </p>
          </div>
        </section>

        <section className="border-t border-hairline px-4 py-10 md:px-16 md:py-14">
          <div className="mx-auto max-w-280">
            {resources.length === 0 ? (
              <p className="text-[15px] text-text-secondary">
                Articles are in progress — check back soon.
              </p>
            ) : (
              <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
                {resources.map((article) => (
                  <li key={article.slug} className="border-t-2 border-navy pt-5">
                    <time
                      dateTime={article.publishedAt}
                      className="font-mono text-xs text-text-secondary"
                    >
                      {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <h2 className="mt-2 font-display text-lg font-bold text-navy">
                      <Link
                        href={`/resources/${article.slug}`}
                        className="hover:text-ember"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {article.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
