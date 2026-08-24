import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LifecycleThread } from "@/components/home/LifecycleThread";
import { RoleCards } from "@/components/home/RoleCards";
import { FragmentDiagram } from "@/components/home/FragmentDiagram";
import { SyntheticRecordDemo } from "@/components/home/SyntheticRecordDemo";
import { ConceptLabel } from "@/components/ui/ConceptLabel";

// Copy source: docs/copy/home.md — draft, pending Brand Strategist /
// Senior Copywriter / Product Truth review per that file's header.
export const metadata: Metadata = {
  title: "Widian — One Building Record for Passive Fire",
  description:
    "Widian connects inspections, findings, remedial work, evidence and verification in one accountable building record. Book a demo.",
  openGraph: {
    title: "One building record. Every responsible party. Verified from inspection to closure.",
    description:
      "See how Widian keeps inspections, findings, remedial work and evidence connected to one accountable record — from first finding to verified closure.",
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 6.1 Category-defining hero */}
        <section className="bg-navy px-4 pt-14 pb-16 md:px-16 md:pt-22 md:pb-20">
          <div className="mx-auto grid max-w-280 gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
            <div>
              <p className="font-mono text-[11px] tracking-[0.12em] text-ember-on-navy uppercase md:text-xs">
                Building Record Platform
              </p>
              <h1 className="mt-3.5 font-display text-[30px] leading-[1.18] font-bold text-white md:mt-5 md:text-[52px] md:leading-[1.12]">
                One building record. Every responsible party. Verified from inspection to
                closure.
              </h1>
              <p className="mt-4.5 max-w-lg text-base leading-relaxed text-on-navy-secondary md:mt-7 md:text-[19px] md:leading-[1.55]">
                Widian connects inspections, findings, remedial work, evidence and
                verification in one accountable operational record for every building.
              </p>
              <div className="mt-7 flex flex-col gap-4 md:mt-10 md:flex-row md:items-center md:gap-7">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button href="/how-it-works" variant="secondary-on-navy">
                  See how it works
                </Button>
              </div>
            </div>
            <figure>
              <div className="parallax-frame relative aspect-[3/2] overflow-hidden border border-navy-hairline bg-navy-800">
                <Image
                  src="/images/building-record-cutaway.webp"
                  alt="Conceptual cutaway of a residential building connected by one evidence thread from inspection to closure."
                  fill
                  priority
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="parallax-media object-cover"
                />
              </div>
              <figcaption className="mt-3 [&_p]:text-on-navy-muted">
                <ConceptLabel>the thread represents connected evidence and decisions</ConceptLabel>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 6.2 Fragmented activity versus building truth */}
        <ScrollReveal>
          <section className="px-4 py-14 md:px-16 md:py-24">
            <div className="mx-auto grid max-w-280 items-center gap-10 md:grid-cols-2 md:gap-20">
              <div>
                <h2 className="font-display text-[25px] leading-tight font-bold text-navy md:text-[34px]">
                  A building&rsquo;s compliance history is usually scattered.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-text-secondary md:mt-5 md:text-[17px]">
                  Inspection reports sit in inboxes. Remedial evidence lives in a
                  contractor&rsquo;s own systems. A spreadsheet tracks what&rsquo;s supposedly
                  outstanding. None of it is connected to the building itself, and none of it
                  tells you, today, what is actually true.
                </p>
                <p className="mt-3.5 text-[15px] leading-relaxed font-semibold text-navy md:mt-4.5 md:text-[17px]">
                  Every element, inspection, finding and piece of remedial evidence in Widian
                  is connected to the same building record.
                </p>
              </div>
              <FragmentDiagram />
            </div>
          </section>
        </ScrollReveal>

        {/* 6.3 "Reports record moments; Widian records responsibility" */}
        <section className="border-y border-hairline bg-grey px-4 py-12 md:py-22">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[23px] leading-snug font-bold text-navy md:text-[32px]">
              &ldquo;Reports record moments; Widian records responsibility.&rdquo;
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary md:mt-6 md:text-[17px]">
              A report is a snapshot — accurate on the day it was written, and silent about
              what happened next. Widian keeps the record open: who owns the next action, what
              evidence has been added since, and what remains outstanding.
            </p>
          </div>
        </section>

        {/* 6.4 Short lifecycle preview */}
        <ScrollReveal>
          <section className="px-4 py-14 md:px-16 md:py-24">
            <div className="mx-auto max-w-280">
              <h2 className="text-center font-display text-2xl font-bold text-navy md:text-[32px]">
                Six responsibility moments shape the path to closure.
              </h2>
              <div className="mt-8 md:mt-16">
                <LifecycleThread />
              </div>
              <div className="mt-5 text-center md:mt-5">
                <Button href="/how-it-works" variant="secondary">
                  See the full lifecycle
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 6.5 Every responsible party */}
        <ScrollReveal>
          <section className="bg-grey px-4 py-14 md:px-16 md:py-24">
            <div className="mx-auto max-w-280">
              <h2 className="mx-auto max-w-lg text-center font-display text-2xl font-bold text-navy md:text-[32px]">
                Every organisation works from the same record.
              </h2>
              <div className="mt-8 md:mt-14">
                <RoleCards />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 6.6 Clearly-labelled synthetic demonstration. */}
        <section className="px-4 py-14 md:px-16 md:py-24">
          <div className="mx-auto max-w-280">
            <h2 className="text-center font-display text-2xl font-bold text-navy md:text-[32px]">
              See how one record retains the next action.
            </h2>
            <div className="mt-8 md:mt-12">
              <SyntheticRecordDemo />
            </div>
          </div>
        </section>

        {/* 6.7 Difference from reports and repositories */}
        <section className="bg-grey px-4 py-14 md:px-16 md:py-24">
          <div className="mx-auto max-w-280">
            <h2 className="mx-auto max-w-2xl text-center font-display text-2xl font-bold text-navy md:text-[32px]">
              Widian is not another place to store compliance.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5.5 md:mt-14 md:grid-cols-3 md:gap-9">
              {[
                {
                  title: "Not a report generator",
                  body: "A report is a snapshot. Widian keeps the record open after it's issued.",
                },
                {
                  title: "Not a document repository",
                  body: "Storage without accountability doesn't move anything forward.",
                },
                {
                  title: "Not generic FM software",
                  body: "Built around the building's accountable record, not a generic task list.",
                },
              ].map((item) => (
                <div key={item.title} className="border-t-2 border-navy pt-5">
                  <div className="text-base font-semibold text-navy">{item.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6.8 Trust preview */}
        <section className="bg-navy px-4 py-14 text-center md:px-16 md:py-20">
          <div className="mx-auto max-w-280">
            <h2 className="font-display text-2xl font-bold text-white md:text-[30px]">
              Access is controlled. Evidence is kept.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-on-navy-secondary md:text-base">
              Every user works within their organisation&rsquo;s permissions. Evidence is
              stored against the record it belongs to.
            </p>
            <Button href="/security-trust" variant="secondary-on-navy" className="mt-4.5 md:mt-5">
              See our approach to security &amp; trust
            </Button>
          </div>
        </section>

        {/* 6.9 Walkthrough CTA */}
        <section className="border-t-[3px] border-ember bg-priority px-4 py-14 text-center md:px-16 md:py-20">
          <div className="mx-auto max-w-280">
            <h2 className="font-display text-2xl font-bold text-navy md:text-[32px]">
              See Widian against your own buildings.
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
