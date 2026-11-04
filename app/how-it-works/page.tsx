import type { Metadata } from "next";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { Button } from "@/components/ui/Button";
import { ResponsibilityStages } from "@/components/how-it-works/ResponsibilityStages";

export const metadata: Metadata = {
  title: "How Widian Works: A Continuous Compliance Cycle",
  description: "See how Widian takes a building from inspection through remediation and verification into the record, and back to the next inspection.",
};

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="px-4 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20"><div className="mx-auto max-w-280"><p className="font-mono text-[11px] tracking-[0.12em] text-ember-hover uppercase">The compliance cycle</p><h1 className="mt-4 max-w-3xl font-display text-[30px] leading-[1.16] font-bold text-navy md:text-[52px]">Completion is a claim. Verification is proof.</h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">Finished remediation is not the same as compliance or closure. Evidence, re-inspection and the client&rsquo;s acceptance are distinct decisions, and each verified outcome feeds the next inspection.</p></div></section>
        <section className="bg-grey px-4 py-14 md:px-16 md:py-24"><div className="mx-auto max-w-280"><h2 className="font-display text-2xl font-bold text-navy md:text-[34px]">Ten stages. One continuing cycle.</h2><p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">Select a stage to see who acts and what changes. If the client rejects an outcome, the work returns for corrective action; it does not disappear into a completed status.</p><div className="mt-10"><ResponsibilityStages /></div></div></section>
        <section className="bg-navy px-4 py-14 text-center md:px-16 md:py-20"><h2 className="font-display text-2xl font-bold text-white">See the cycle applied to your own buildings.</h2><p className="mx-auto mt-3 max-w-lg text-on-navy-secondary">Bring your own evidence and approval process, and we will show how it maps across the cycle.</p><Button href="/book-a-demo" className="mt-6">Book a Demo</Button></section>
      </main>
      <SiteFooter />
    </>
  );
}
