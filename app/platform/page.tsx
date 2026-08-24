import type { Metadata } from "next";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RecordSpine } from "@/components/platform/RecordSpine";
import { PlatformHeroMotion } from "@/components/platform/PlatformHeroMotion";

// Copy source: docs/copy/platform.md — draft, pending Brand Strategist /
// Senior Copywriter / Product Truth review per that file's header.
export const metadata: Metadata = {
  title: "Inside the Widian Building Record | Platform",
  description:
    "See what's actually inside a Widian Building Record — from element register to independent checking, client verification and issued-record history.",
  openGraph: {
    title: "The building becomes the organising structure.",
    description:
      "Nine layers, one persistent record. See what's inside a Widian Building Record and why it stays connected as evidence accumulates.",
  },
};

const OBJECTIONS = [
  {
    question: "Isn't this just a set of separate module screens?",
    answer:
      "Each layer is explicitly framed by what it persists and how it connects back to the building, not as an independent feature.",
  },
  {
    question: "Why not just keep using reports and spreadsheets?",
    answer:
      "Each layer's persistence is the direct answer: nothing here is a one-off snapshot that goes stale the day it's issued.",
  },
  {
    question: "Can I trust that evidence hasn't been altered?",
    answer:
      "Evidence is integrity-checked and stays attached to the record it was submitted against. Issued reports are frozen — never silently rewritten, only superseded or withdrawn with the original preserved.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero pairs the category argument with a code-native conceptual
            platform animation. It demonstrates record relationships, not
            unverified product UI. */}
        <section className="px-4 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20">
          <div className="mx-auto grid max-w-280 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
            <div>
              <p className="font-mono text-[11px] tracking-[0.12em] text-ember-hover uppercase md:text-xs">
                Building Record Platform
              </p>
              <h1 className="mt-4 max-w-xl font-display text-[30px] leading-[1.16] font-bold text-navy md:text-[48px] md:leading-[1.12]">
                The building becomes the organising structure.
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-text-secondary md:mt-6 md:text-[18px] md:leading-[1.55]">
                Every inspection, finding, remedial action and piece of evidence is recorded
                against the building it belongs to—and stays connected as the record grows.
              </p>
              <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-9 md:gap-7">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button href="/how-it-works" variant="secondary">
                  Explore how it works
                </Button>
              </div>
            </div>
            <PlatformHeroMotion />
          </div>
        </section>

        {/* Record spine — the architectural cutaway. This is the page's
            dominant interaction and its majority of visual weight,
            inverted from Home's structure (dark hero, mostly light body). */}
        <ScrollReveal>
          <section className="bg-navy px-4 py-14 md:px-16 md:py-24">
            <div className="mx-auto max-w-280">
              <h2 className="mx-auto max-w-xl text-center font-display text-2xl font-bold text-white md:text-[32px]">
                Nine record layers. Ten lifecycle stages.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-center text-[15px] leading-relaxed text-on-navy-secondary md:text-base">
                These nine accordions describe what the record contains. The separate ten-stage lifecycle describes how one finding moves from recorded to closed.
              </p>
              <div className="mt-10 md:mt-16">
                <RecordSpine />
              </div>
              <div className="mt-8 text-center"><Button href="/how-it-works" variant="secondary-on-navy">Explore the ten lifecycle stages</Button></div>
            </div>
          </section>
        </ScrollReveal>

        {/* Objections — a stacked Q&A list, not the three-column grid
            Home already used for its own "what this isn't" section. */}
        <ScrollReveal>
          <section className="px-4 py-14 md:px-16 md:py-24">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-center font-display text-2xl font-bold text-navy md:text-[32px]">
                The questions we get asked.
              </h2>
              <dl className="mt-10 space-y-8 md:mt-14">
                {OBJECTIONS.map((item) => (
                  <div key={item.question} className="border-t border-hairline pt-6">
                    <dt className="font-mono text-[13px] font-medium tracking-wide text-navy">
                      {item.question}
                    </dt>
                    <dd className="mt-2.5 text-[15px] leading-relaxed text-text-secondary">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </ScrollReveal>

        {/* Closing CTA — same visual language as Home's close (ember top
            border, priority-soft fill) for sitewide consistency, but its
            own heading; only the primary label itself is standardised
            sitewide (see DECISIONS.md, supersedes D-016). */}
        <section className="border-t-[3px] border-ember bg-priority px-4 py-14 text-center md:px-16 md:py-20">
          <div className="mx-auto max-w-280">
            <h2 className="font-display text-2xl font-bold text-navy md:text-[32px]">
              See your own buildings inside a Widian record.
            </h2>
            <p className="mt-2.5 text-[15px] text-text-secondary md:text-base">
              Book a time that works for you.
            </p>
            <Button href="/book-a-demo" className="mt-5 md:mt-6">
              Book a Demo
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
