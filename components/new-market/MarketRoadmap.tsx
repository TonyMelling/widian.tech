"use client";

import { useState } from "react";
import { useHorizontalRail } from "@/components/ui/useHorizontalRail";

const STEPS = [
  { title: "Separate tools", status: "Current condition", body: "Each organisation keeps its own report, task list or evidence store. The information stops at organisational boundaries." },
  { title: "Persistent building", status: "Operating principle", body: "The building remains the subject even when the organisations responsible for it change." },
  { title: "Controlled contribution", status: "Verified foundation", body: "Permissioned parties can contribute to connected records within their own role and organisation." },
  { title: "Useful history", status: "Expected value", body: "Connected inspection, work and decision history should be more useful than a record that restarts with each appointment. This value is not yet quantified." },
  { title: "Potential network effects", status: "Strategic hypothesis", body: "Repeated participation may make the building record a natural coordination point. This is a hypothesis, not a measured network effect." },
  { title: "Future services", status: "Future possibility", body: "Trusted workflow infrastructure could support future commercial services. None is presented here as an existing offering or roadmap commitment." },
] as const;

export function MarketRoadmap() {
  const [selected, setSelected] = useState(0);
  const { railRef, atStart, atEnd, updateRailPosition, scrollRail } =
    useHorizontalRail<HTMLDivElement>(176);
  const step = STEPS[selected];

  return <div className="border border-navy-hairline bg-navy-800">
    <div className="relative border-b border-navy-hairline">
      <div ref={railRef} onScroll={updateRailPosition} className="overflow-x-auto" aria-label="Market direction options">
        <ol className="flex min-w-max md:min-w-0">{STEPS.map((item,index)=><li key={item.title} className="w-44 flex-1 border-r border-navy-hairline last:border-r-0"><button type="button" aria-current={selected===index ? "step" : undefined} onClick={()=>setSelected(index)} className={`h-full min-h-28 w-full px-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${selected===index ? "bg-white text-navy" : "text-on-navy-secondary hover:bg-navy"}`}><span className={`font-mono text-[10px] ${selected===index ? "text-ember" : "text-on-navy-muted"}`}>{String(index+1).padStart(2,"0")}</span><span className="mt-2 block text-sm font-semibold">{item.title}</span></button></li>)}</ol>
      </div>
      {!atStart ? <><div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-800 to-transparent md:hidden" aria-hidden="true" /><button type="button" aria-label="Show previous market direction options" onClick={()=>scrollRail(-1)} className="absolute top-1/2 left-1 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-navy-hairline bg-navy text-xl text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden">‹</button></> : null}
      {!atEnd ? <><div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy-800 via-navy-800/90 to-transparent md:hidden" aria-hidden="true" /><button type="button" aria-label="Show more market direction options" onClick={()=>scrollRail(1)} className="absolute top-1/2 right-1 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-ember bg-navy text-xl text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden">›</button></> : null}
    </div>
    <div className="grid gap-7 p-6 md:grid-cols-[0.7fr_1.3fr] md:p-10" aria-live="polite"><div><p className="font-mono text-[10px] tracking-[0.1em] text-ember uppercase">{step.status}</p><h3 className="mt-3 font-display text-2xl font-bold text-white">{step.title}</h3></div><p className="max-w-2xl text-[15px] leading-relaxed text-on-navy-secondary">{step.body}</p></div>
  </div>;
}
