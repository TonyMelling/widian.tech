import type { Metadata } from "next";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { RoleSwitcher } from "@/components/solutions/RoleSwitcher";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Widian for Your Role", description: "See how one building record supports building owners, compliance teams, surveyors and contractors.", robots: { index: false, follow: true } };

export default function SolutionsPage() {
  return <><SiteHeader /><main>
    <section className="bg-navy px-4 py-16 md:px-16 md:py-24"><div className="mx-auto max-w-280"><p className="font-mono text-[11px] tracking-[0.12em] text-ember uppercase">Solutions by responsibility</p><h1 className="mt-4 max-w-4xl font-display text-[32px] leading-tight font-bold text-white md:text-[52px]">One record. A different view for every role.</h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-on-navy-secondary md:text-lg">The building record does not change depending on who is looking at it. What you see—and what you are responsible for—does.</p></div></section>
    <section className="bg-grey px-4 py-14 md:px-16 md:py-24"><div className="mx-auto max-w-280"><h2 className="font-display text-2xl font-bold text-navy md:text-[34px]">Change the perspective, not the record.</h2><p className="mt-3 max-w-2xl text-text-secondary">Choose a role to see its question, responsibility and route into Widian.</p><div className="mt-9"><RoleSwitcher /></div></div></section>
    <section className="px-4 py-14 text-center md:px-16 md:py-20"><h2 className="font-display text-2xl font-bold text-navy md:text-[32px]">Discuss your operating model.</h2><p className="mx-auto mt-3 max-w-xl text-text-secondary">See how your organisations could work through the same building record.</p><Button href="/book-a-demo" className="mt-6">Book a Demo</Button></section>
  </main><SiteFooter /></>;
}
