"use client";

import { useState } from "react";
import { useHorizontalRail } from "@/components/ui/useHorizontalRail";

const LEVELS = [
  { type: "Stage 01", name: "Know", reference: "BLD-012", description: "Harbour Court and its elements, including fire door FD-014, are established in the building record.", context: "Compliance team · building record established" },
  { type: "Stage 02", name: "Inspect", reference: "INS-081", description: "The surveyor inspects FD-014 and captures evidence against it. A permissioned reviewer, not the person who submitted the inspection, approves it or returns it for correction.", context: "Surveyor · evidence saved" },
  { type: "Stage 03", name: "Identify", reference: "FND-207", description: "The P1 finding remains connected to its originating inspection, element and building.", context: "P1 · excessive perimeter gap" },
  { type: "Stage 04", name: "Prioritise", reference: "FND-207", description: "The client sets the remediation priority for the finding.", context: "Client · P1 priority set" },
  { type: "Stage 05", name: "Assign", reference: "WO-031", description: "A defined remedial scope is assigned without separating it from the finding that prompted it.", context: "Compliance team · contractor assigned" },
  { type: "Stage 06", name: "Remediate", reference: "WO-031", description: "The contractor completes the work and submits evidence against the defined scope. Completed work is not yet closure.", context: "Contractor · evidence submitted · not closed" },
  { type: "Stage 07", name: "Re-inspect", reference: "CHK-018", description: "The completed work is checked on re-inspection and signed off, with a note and photo evidence, by someone other than the original inspector.", context: "Reviewer · sign-off recorded" },
  { type: "Stage 08", name: "Verify", reference: "VER-009", description: "The client accepts or rejects the outcome, as for every priority. A rejection returns the work to the contractor.", context: "Client approver · decision recorded" },
  { type: "Stage 09", name: "Update", reference: "REC-009", description: "The verified outcome, with who acted and when, is added to the building record.", context: "Recorded decision · verified outcome" },
  { type: "Stage 10", name: "Monitor", reference: "BLD-012", description: "The action is tracked on the status board and the updated record informs the next inspection of FD-014, which your team starts.", context: "Status board · next inspection led by your team" },
] as const;

export function RecordNavigator() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { railRef, atStart, atEnd, updateRailPosition, scrollRail } =
    useHorizontalRail<HTMLOListElement>(192);
  const selected = LEVELS[selectedIndex];

  return (
    <div className="border border-navy-hairline bg-navy text-white">
      <div className="flex flex-col gap-2 border-b border-navy-hairline px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-7">
        <p className="font-mono text-[11px] tracking-[0.09em] text-ember-on-navy uppercase">Worked example</p>
        <p className="text-xs leading-relaxed text-on-navy-muted">Sample building and data, shown for illustration</p>
      </div>
      <div className="grid min-w-0 lg:grid-cols-[19rem_1fr]">
        <nav className="relative min-w-0 overflow-hidden border-b border-navy-hairline lg:border-r lg:border-b-0" aria-label="Ten-stage compliance cycle example">
          <ol ref={railRef} onScroll={updateRailPosition} className="flex max-w-full overflow-x-auto lg:block">
            {LEVELS.map((level, index) => {
              const active = index === selectedIndex;
              return <li key={`${level.type}-${level.reference}`} className="min-w-48 border-r border-navy-hairline last:border-r-0 lg:min-w-0 lg:border-r-0 lg:border-b lg:last:border-b-0">
                <button type="button" onClick={() => setSelectedIndex(index)} aria-current={active ? "step" : undefined} className={`flex w-full items-center gap-3 px-4 py-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white md:px-5 ${active ? "bg-white text-navy" : "text-white hover:bg-navy-800"}`}>
                  <span className={`font-mono text-[10px] ${active ? "text-ember" : "text-on-navy-muted"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span><span className="block text-[11px] tracking-[0.08em] uppercase opacity-70">{level.type}</span><span className="mt-0.5 block text-sm font-semibold">{level.name}</span></span>
                </button>
              </li>;
            })}
          </ol>
          {!atStart ? <><div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy to-transparent lg:hidden" aria-hidden="true" /><button type="button" aria-label="Show previous lifecycle stages" onClick={()=>scrollRail(-1)} className="absolute top-1/2 left-1 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-navy-hairline bg-navy text-xl text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden">‹</button></> : null}
          {!atEnd ? <><div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy via-navy/90 to-transparent lg:hidden" aria-hidden="true" /><button type="button" aria-label="Show more lifecycle stages" onClick={()=>scrollRail(1)} className="absolute top-1/2 right-1 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-ember bg-navy text-xl text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden">›</button></> : null}
        </nav>
        <div className="relative min-h-96 min-w-0 overflow-hidden px-5 py-8 md:px-10 md:py-12" aria-live="polite">
          <div className="absolute top-0 right-0 h-px w-1/3 bg-ember" aria-hidden="true" />
          <div key={selected.reference}>
            <div className="flex items-start justify-between gap-5">
              <div><p className="font-mono text-[11px] tracking-[0.1em] text-on-navy-muted uppercase">{selected.type}</p><h3 className="mt-3 max-w-xl font-display text-2xl leading-tight font-bold md:text-[34px]">{selected.name}</h3></div>
              <span className="shrink-0 border border-navy-hairline px-2 py-1 font-mono text-[10px] text-on-navy-muted">{selected.reference}</span>
            </div>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-on-navy-secondary md:text-base">{selected.description}</p>
            <dl className="mt-9 grid gap-5 border-t border-navy-hairline pt-5 sm:grid-cols-2">
              <div><dt className="font-mono text-[10px] tracking-[0.08em] text-on-navy-muted uppercase">Record context</dt><dd className="mt-1.5 text-sm text-white">{selected.context}</dd></div>
              <div><dt className="font-mono text-[10px] tracking-[0.08em] text-on-navy-muted uppercase">{selectedIndex < 2 ? "Attached to" : "Finding retained"}</dt><dd className="mt-1.5 text-sm text-white">{selectedIndex < 2 ? "Harbour Court · BLD-012" : "FND-207 · Harbour Court · BLD-012"}</dd></div>
            </dl>
            {selectedIndex < LEVELS.length - 1 && <button type="button" onClick={() => setSelectedIndex(selectedIndex + 1)} className="mt-9 border-b border-ember pb-1 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Next: {LEVELS[selectedIndex + 1].name} →</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
