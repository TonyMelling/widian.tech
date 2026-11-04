import type { Metadata } from "next";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-grow items-center justify-center px-4 py-24 text-center md:px-16">
        <div className="max-w-lg">
          <p className="font-mono text-xs tracking-wider text-ember-hover uppercase">404</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-navy">This page could not be found.</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
            The page may have moved, or the address may be mistyped. Return to the home page or ask us about Widian.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/">Back to home</Button>
            <Button href="/book-a-demo" variant="secondary">Book a Demo</Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
