import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "The cookies and similar technologies used on widian.tech.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 py-16 md:px-16 md:py-24">
        <article className="mx-auto max-w-2xl space-y-6 text-[15px] leading-relaxed text-text-secondary md:text-base">
          <header>
            <p className="font-mono text-[11px] tracking-[0.12em] text-ember-hover uppercase">Cookie notice</p>
            <h1 className="mt-4 font-display text-[32px] leading-tight font-bold text-navy md:text-[44px]">
              Cookies on widian.tech.
            </h1>
            <p className="mt-4 font-mono text-xs">Applies to widian.tech only · Version 1.0 · 25 October 2026</p>
          </header>

          <section>
            <h2 className="font-display text-xl font-bold text-navy">What this site uses</h2>
            <p className="mt-3">
              widian.tech does not set cookies and does not use advertising, analytics or third-party tracking. The site
              is built so that no page loads a script or embed from another provider.
            </p>
            <p className="mt-3">
              The home page keeps one value in your browser&rsquo;s session storage so that its &ldquo;launching
              soon&rdquo; announcement is not shown again during the same visit. It contains no personal data, is not
              sent to Widian and is removed when you close the tab.
            </p>
            <p className="mt-3">
              Our hosting provider, Vercel, processes technical request data (such as IP address and browser details)
              to deliver the site and keep it secure. See the <Link className="font-semibold text-navy underline" href="/privacy">Privacy Notice</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy">If this changes</h2>
            <p className="mt-3">
              If Widian adds analytics or any non-essential cookie, it will ask for your choice before loading it and
              update this notice first.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy">The Widian application</h2>
            <p className="mt-3">
              Signing in at app.widian.tech takes you to a separate service that uses cookies to keep you signed in and
              to operate securely. This notice does not cover it.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
