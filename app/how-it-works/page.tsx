import type { Metadata } from "next";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { Button } from "@/components/ui/Button";
import { ResponsibilityStages } from "@/components/how-it-works/ResponsibilityStages";

export const metadata: Metadata = {
  title: "How Widian Moves Findings Towards Closure",
  description: "See the distinct evidence, review and acceptance decisions in Widian's proposed ten-stage lifecycle.",
  robots: { index: false, follow: true },
};

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="px-4 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20"><div className="mx-auto max-w-280"><p className="font-mono text-[11px] tracking-[0.12em] text-ember uppercase">Responsibility gates</p><h1 className="mt-4 max-w-3xl font-display text-[30px] leading-[1.16] font-bold text-navy md:text-[52px]">Completion is a claim. Verification is proof.</h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">Contractor evidence, separate checking and—for priority findings—the client&rsquo;s acceptance are distinct decisions. None should be collapsed into “complete”.</p></div></section>
        <section className="bg-grey px-4 py-14 md:px-16 md:py-24"><div className="mx-auto max-w-280"><h2 className="font-display text-2xl font-bold text-navy md:text-[34px]">Ten stages. Each decision remains visible.</h2><p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">Select a stage to see who acts and what changes. Rejection and rework return the record to action; they do not disappear into a completed status.</p><div className="mt-10"><ResponsibilityStages /></div></div></section>
        <section className="bg-navy px-4 py-14 text-center md:px-16 md:py-20"><h2 className="font-display text-2xl font-bold text-white">See the responsibility gates in context.</h2><p className="mx-auto mt-3 max-w-lg text-on-navy-secondary">Use a synthetic building record to discuss how your own evidence and approval process would map across the lifecycle.</p><Button href="/book-a-demo" className="mt-6">Book a Demo</Button></section>
      </main>
      <SiteFooter />
    </>
  );
}
