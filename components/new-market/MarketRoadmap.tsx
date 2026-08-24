"use client";

import { useState } from "react";

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
  const step = STEPS[selected];
  return <div className="border border-navy-hairline bg-navy-800">
    <div className="overflow-x-auto border-b border-navy-hairline"><ol className="flex min-w-max md:min-w-0">{STEPS.map((item,index)=><li key={item.title} className="w-44 flex-1 border-r border-navy-hairline last:border-r-0"><button type="button" aria-current={selected===index ? "step" : undefined} onClick={()=>setSelected(index)} className={`h-full min-h-28 w-full px-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${selected===index ? "bg-white text-navy" : "text-on-navy-secondary hover:bg-navy"}`}><span className={`font-mono text-[10px] ${selected===index ? "text-ember" : "text-on-navy-muted"}`}>{String(index+1).padStart(2,"0")}</span><span className="mt-2 block text-sm font-semibold">{item.title}</span></button></li>)}</ol></div>
    <div className="grid gap-7 p-6 md:grid-cols-[0.7fr_1.3fr] md:p-10" aria-live="polite"><div><p className="font-mono text-[10px] tracking-[0.1em] text-ember uppercase">{step.status}</p><h3 className="mt-3 font-display text-2xl font-bold text-white">{step.title}</h3></div><p className="max-w-2xl text-[15px] leading-relaxed text-on-navy-secondary">{step.body}</p></div>
  </div>;
}
