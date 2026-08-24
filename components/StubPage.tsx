import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";

/** Routing placeholder — NOT a built page. Phase 4 scope is the Home
 * vertical slice only (docs/README.md "First delivery milestone"); these
 * routes exist so header/footer navigation resolves rather than 404s.
 * Real content for each lives in docs/copy/*.md, awaiting its own
 * implementation slice. */
export function StubPage({ title, question }: { title: string; question: string }) {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-grow items-center justify-center px-4 py-24 text-center md:px-16">
        <div className="max-w-lg">
          <p className="font-mono text-xs tracking-wider text-ember-hover uppercase">
            In development
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-navy">{title}</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">{question}</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
