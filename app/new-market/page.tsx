import type { Metadata } from "next";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { Button } from "@/components/ui/Button";
import { MarketRoadmap } from "@/components/new-market/MarketRoadmap";

export const metadata: Metadata = { title: "Market Direction | Widian", description: "See the strategic direction behind Widian: shared Building Record infrastructure that can connect responsible organisations.", robots: { index: false, follow: true } };

export default function NewMarketPage() {
  return <><SiteHeader /><main>
    <section className="px-4 py-16 md:px-16 md:py-24"><div className="mx-auto max-w-280"><div className="max-w-4xl border-l-2 border-ember pl-6 md:pl-10"><p className="font-mono text-[11px] tracking-[0.12em] text-ember uppercase">Market direction · not an existing marketplace</p><h1 className="mt-4 font-display text-[32px] leading-tight font-bold text-navy md:text-[54px]">From software tool to market infrastructure.</h1><p className="mt-5 text-lg leading-relaxed text-text-secondary md:text-xl">Not another place to store compliance. The place compliance moves forward.</p></div></div></section>
    <section className="bg-navy px-4 py-14 md:px-16 md:py-24"><div className="mx-auto max-w-280"><h2 className="max-w-2xl font-display text-2xl font-bold text-white md:text-[34px]">The transition starts with the building.</h2><p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-on-navy-secondary">Explore the foundations, hypotheses and future possibilities separately. Their status matters as much as their sequence.</p><div className="mt-10"><MarketRoadmap /></div></div></section>
    <section className="px-4 py-16 text-center md:px-16 md:py-24"><blockquote className="mx-auto max-w-3xl font-display text-2xl font-bold text-navy md:text-[36px]">“The network grows around the record. The record never loses its building.”</blockquote><Button href="/book-a-demo" className="mt-8">Book a Demo</Button></section>
  </main><SiteFooter /></>;
}
