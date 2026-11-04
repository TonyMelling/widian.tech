import type { Metadata } from "next";
import Image from "next/image";
import { MarketRoadmap } from "@/components/new-market/MarketRoadmap";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Market Direction",
  description: "See the strategic direction behind Widian: shared Building Record infrastructure that can connect responsible organisations.",
  robots: { index: false, follow: true },
};

export default function NewMarketPage() {
  return <><SiteHeader /><main>
    <section className="relative isolate min-h-[36rem] overflow-hidden bg-navy px-4 md:min-h-[44rem] md:px-16">
      <Image src="/images/market-direction-pressure-field.png" alt="Illustration showing fragmented inspection records, evidence and responsibility markers converging around one persistent residential building, with one continuous orange thread connecting them." fill priority sizes="100vw" className="object-cover object-[62%_center] opacity-70 md:object-center md:opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#141d2b_0%,rgba(20,29,43,0.94)_32%,rgba(20,29,43,0.4)_64%,rgba(20,29,43,0.12)_100%)]" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[36rem] max-w-280 items-end py-14 md:min-h-[44rem] md:items-center md:py-24">
        <div className="max-w-2xl">
          <span className="mb-5 block h-0.5 w-12 bg-ember" aria-hidden="true" />
          <p className="font-mono text-[11px] tracking-[0.12em] text-ember-on-navy uppercase">Where Widian is heading</p>
          <h1 className="mt-4 font-display text-[32px] leading-tight font-bold text-white md:text-[54px]">Responsibility is becoming harder to hand off.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-on-navy-secondary md:text-xl">More evidence. More decisions. More parties expected to show what happened next. A fragmented record makes every change harder to absorb.</p>
          <p className="mt-7 max-w-xl border-t border-navy-hairline pt-5 text-[15px] leading-relaxed font-semibold text-white md:text-base">Widian&rsquo;s direction starts with one persistent Building Record: a place for responsibility to remain visible as the market around it changes.</p>
          <p className="mt-6 font-mono text-[10px] tracking-[0.08em] text-on-navy-muted uppercase">Illustration: scattered records and evidence converging around one building.</p>
        </div>
      </div>
    </section>
    <section className="bg-navy px-4 py-14 md:px-16 md:py-24"><div className="mx-auto max-w-280"><h2 className="max-w-2xl font-display text-2xl font-bold text-white md:text-[34px]">The transition starts with the building.</h2><p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-on-navy-secondary">Six steps from today’s separate tools towards shared building records. The first three describe how Widian works today; the rest look ahead.</p><div className="mt-10"><MarketRoadmap /></div></div></section>
    <section className="px-4 py-16 text-center md:px-16 md:py-24"><blockquote className="mx-auto max-w-3xl font-display text-2xl font-bold text-navy md:text-[36px]">&ldquo;The record never loses its building.&rdquo;</blockquote><Button href="/book-a-demo" className="mt-8">Book a Demo</Button></section>
  </main><SiteFooter /></>;
}
