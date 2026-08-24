"use client";

import { useState } from "react";

const LEVELS = [
  { type: "Stage 01", name: "Recorded", reference: "INS-081", description: "Inspection evidence is recorded against fire door FD-014 at Harbour Court.", context: "Surveyor · evidence saved" },
  { type: "Stage 02", name: "Submitted", reference: "INS-081", description: "The inspection is submitted for review. Submission is not approval.", context: "Surveyor · awaiting review" },
  { type: "Stage 03", name: "Reviewed", reference: "REV-044", description: "A permissioned reviewer approves the inspection or returns it for correction.", context: "Reviewer · decision recorded" },
  { type: "Stage 04", name: "Finding raised", reference: "FND-207", description: "The P1 finding remains connected to its originating inspection, element and building.", context: "P1 · excessive perimeter gap" },
  { type: "Stage 05", name: "Assigned", reference: "WO-031", description: "A defined remedial scope is assigned without separating it from the finding that prompted it.", context: "Compliance team · contractor assigned" },
  { type: "Stage 06", name: "In progress", reference: "WO-031", description: "Work has started, but no completion or verification decision has been made.", context: "Contractor · work underway" },
  { type: "Stage 07", name: "Remediated", reference: "WO-031", description: "The contractor submits completion evidence against the defined remedial scope.", context: "Evidence submitted · not closed" },
  { type: "Stage 08", name: "Independently checked", reference: "CHK-018", description: "Someone other than the original submitter reviews the remedial evidence.", context: "Separate reviewer · check recorded" },
  { type: "Stage 09", name: "Client verified", reference: "VER-009", description: "For this synthetic P1 finding, a client approver makes a separate acceptance decision.", context: "Client approver · P1/P2 scope" },
  { type: "Stage 10", name: "Closed", reference: "CLS-009", description: "The outcome, responsible actor and time remain attached to the building record.", context: "Recorded decision · verified closure" },
] as const;

export function RecordNavigator() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = LEVELS[selectedIndex];

  return (
    <div className="border border-navy-hairline bg-navy text-white">
      <div className="flex flex-col gap-2 border-b border-navy-hairline px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-7">
        <p className="font-mono text-[11px] tracking-[0.09em] text-ember uppercase">Synthetic demonstration</p>
        <p className="text-xs leading-relaxed text-on-navy-muted">Proposed target lifecycle · not a live product screen</p>
      </div>
      <div className="grid min-w-0 lg:grid-cols-[19rem_1fr]">
        <nav className="min-w-0 overflow-hidden border-b border-navy-hairline lg:border-r lg:border-b-0" aria-label="Synthetic ten-stage building record lifecycle">
          <ol className="flex max-w-full overflow-x-auto lg:block">
            {LEVELS.map((level, index) => {
              const active = index === selectedIndex;
              return <li key={level.reference} className="min-w-48 border-r border-navy-hairline last:border-r-0 lg:min-w-0 lg:border-r-0 lg:border-b lg:last:border-b-0">
                <button type="button" onClick={() => setSelectedIndex(index)} aria-current={active ? "step" : undefined} className={`flex w-full items-center gap-3 px-4 py-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white md:px-5 ${active ? "bg-white text-navy" : "text-white hover:bg-navy-800"}`}>
                  <span className={`font-mono text-[10px] ${active ? "text-ember" : "text-on-navy-muted"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span><span className="block text-[11px] tracking-[0.08em] uppercase opacity-70">{level.type}</span><span className="mt-0.5 block text-sm font-semibold">{level.name}</span></span>
                </button>
              </li>;
            })}
          </ol>
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
              <div><dt className="font-mono text-[10px] tracking-[0.08em] text-on-navy-muted uppercase">Finding retained</dt><dd className="mt-1.5 text-sm text-white">FND-207 · Harbour Court · BLD-012</dd></div>
            </dl>
            {selectedIndex < LEVELS.length - 1 && <button type="button" onClick={() => setSelectedIndex(selectedIndex + 1)} className="mt-9 border-b border-ember pb-1 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Continue to {LEVELS[selectedIndex + 1].name.toLowerCase()} →</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
