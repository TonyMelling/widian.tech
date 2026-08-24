import type { Metadata } from "next";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { RecordNavigator } from "@/components/building-record/RecordNavigator";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Building Record Navigation | Widian",
  description: "Follow a synthetic Widian Building Record from organisation and building to element, inspection, finding and remedial work.",
  robots: { index: false, follow: true },
};

const CONTEXT_POINTS = [
  ["Identity", "The building remains visible as you move from the portfolio to one element."],
  ["Lineage", "The finding retains the inspection and element that gave rise to it."],
  ["Responsibility", "Remedial work remains connected to the issue it is intended to address."],
] as const;

export default function BuildingRecordPage() {
  return (
    <><SiteHeader /><main>
      <section className="px-4 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20"><div className="mx-auto max-w-280">
        <p className="font-mono text-[11px] tracking-[0.12em] text-ember uppercase md:text-xs">Building Record</p>
        <h1 className="mt-4 max-w-4xl font-display text-[32px] leading-[1.13] font-bold text-navy md:text-[54px]">Follow every finding back to the building it belongs to.</h1>
        <div className="mt-6 grid gap-7 border-t border-hairline pt-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-[19px] md:leading-[1.55]">Move from the organisation responsible for an estate to a specific building, element, inspection and finding—without separating the evidence from where it belongs.</p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7"><Button href="/book-a-demo">Book a Demo</Button><Button href="/platform" variant="secondary">Explore the platform</Button></div>
        </div>
      </div></section>
      <section className="bg-grey px-4 py-14 md:px-16 md:py-24"><div className="mx-auto max-w-280">
        <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-end"><div><p className="font-mono text-[11px] tracking-[0.1em] text-ember uppercase">The same finding over time</p><h2 className="mt-3 font-display text-2xl leading-tight font-bold text-navy md:text-[34px]">Ten steps from recording to closure.</h2></div><p className="max-w-2xl text-[15px] leading-relaxed text-text-secondary md:justify-self-end md:text-base">Follow the synthetic P1 finding through each responsibility gate. Harbour Court, fire door FD-014 and finding FND-207 remain attached throughout.</p></div>
        <div className="mt-8 md:mt-12"><RecordNavigator /></div>
      </div></section>
      <ScrollReveal><section className="px-4 py-14 md:px-16 md:py-24"><div className="mx-auto max-w-280"><div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div><p className="font-mono text-[11px] tracking-[0.1em] text-ember uppercase">What stays attached</p><h2 className="mt-3 font-display text-2xl leading-tight font-bold text-navy md:text-[34px]">Context travels with every step.</h2></div>
        <dl className="divide-y divide-hairline border-y border-hairline">{CONTEXT_POINTS.map(([term, detail]) => <div key={term} className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6"><dt className="font-mono text-xs font-semibold tracking-wide text-navy uppercase">{term}</dt><dd className="text-[15px] leading-relaxed text-text-secondary">{detail}</dd></div>)}</dl>
      </div></div></section></ScrollReveal>
      <section className="bg-navy px-4 py-14 md:px-16 md:py-20"><div className="mx-auto grid max-w-280 gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
        <div><p className="font-mono text-[11px] tracking-[0.1em] text-ember uppercase">The route does not end at submission</p><h2 className="mt-3 font-display text-2xl font-bold text-white md:text-[32px]">Closure has its own evidence path.</h2><p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-on-navy-secondary md:text-base">Contractor completion, independent checking, client verification and closure are distinct decisions. See how responsibility passes from one stage to the next.</p></div>
        <Button href="/how-it-works" variant="secondary-on-navy">Follow the route to closure</Button>
      </div></section>
      <section className="border-t-[3px] border-ember bg-priority px-4 py-14 text-center md:px-16 md:py-20"><h2 className="font-display text-2xl font-bold text-navy md:text-[32px]">See the structure against your own portfolio.</h2><p className="mt-2.5 text-[15px] text-text-secondary md:text-base">Book a time that works for you.</p><Button href="/book-a-demo" className="mt-5 md:mt-6">Book a Demo</Button></section>
    </main><SiteFooter /></>
  );
}
