"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ROLES = [
  { name: "Building owner", href: "/solutions/building-owners", question: "What is true across the portfolio?", focus: "Portfolio status, assurance and accountable decisions", action: "See the owner view", image: "/images/building-record-cutaway.webp", alt: "Conceptual cutaway of a residential building connected by one evidence thread." },
  { name: "Compliance team", href: "/solutions/compliance-teams", question: "What needs attention next?", focus: "Open work, evidence gaps and action ownership", action: "See the compliance view", image: "/images/building-record-cutaway.webp", alt: "Conceptual building record cutaway used to represent connected portfolio context." },
  { name: "Surveyor", href: "/solutions/surveyors", question: "How do I record it on site?", focus: "Structured inspection and finding capture, including qualified offline use", action: "See the surveyor view", image: "/images/surveyor-field-capture.webp", alt: "Conceptual scene of a surveyor capturing structured evidence beside a fire door." },
  { name: "Contractor", href: "/solutions/contractors", question: "What evidence is required?", focus: "Defined scope, evidence submission and review status", action: "See the contractor view", image: "/images/contractor-evidence.webp", alt: "Conceptual scene of a contractor recording evidence after remedial work." },
] as const;

export function RoleSwitcher() {
  const [selected, setSelected] = useState(0);
  const role = ROLES[selected];
  return <div className="border border-hairline bg-white md:grid md:grid-cols-[0.85fr_1.15fr]">
    <div role="tablist" aria-label="Choose a responsibility" className="grid grid-cols-2 border-b border-hairline md:block md:border-r md:border-b-0">
      {ROLES.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={selected === index} aria-controls="role-perspective" onClick={() => setSelected(index)} className={`min-h-16 border-r border-b border-hairline px-4 py-4 text-left text-sm font-semibold focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-navy md:block md:w-full md:border-r-0 ${selected === index ? "bg-navy text-white" : "bg-white text-navy hover:bg-grey"}`}>{String(index + 1).padStart(2,"0")} · {item.name}</button>)}
    </div>
    <div id="role-perspective" role="tabpanel" className="relative min-h-80 p-6 md:p-10">
      <div className="grid gap-7 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <div><p className="font-mono text-[11px] tracking-[0.1em] text-ember-hover uppercase">The record stays fixed · Harbour Court · BLD-012</p>
        <h3 className="mt-5 font-display text-2xl font-bold text-navy md:text-[34px]">{role.question}</h3>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary md:text-base">{role.focus}. The underlying building, finding and evidence do not change when the responsibility changes.</p>
        <Link href={role.href} className="mt-8 inline-flex border-b border-ember pb-1 text-sm font-semibold text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">{role.action} →</Link></div>
        <figure><div className="parallax-frame relative aspect-[4/3] overflow-hidden bg-grey"><Image key={role.image + role.name} src={role.image} alt={role.alt} fill sizes="(min-width: 1280px) 36vw, 100vw" className="parallax-media object-cover" /></div><figcaption className="mt-2 font-mono text-[10px] tracking-[0.07em] text-text-secondary uppercase">Conceptual illustration · synthetic scenario, not product evidence</figcaption></figure>
      </div>
    </div>
  </div>;
}
