"use client";

import { useState } from "react";

const STAGES = [
  ["Recorded", "Surveyor", "Inspection evidence is saved against a specific building element."],
  ["Submitted", "Surveyor", "The inspection is submitted for review; submission is not approval."],
  ["Reviewed", "Permissioned reviewer", "The inspection is approved or returned for correction."],
  ["Finding raised", "Surveyor", "A prioritised finding remains connected to its originating inspection."],
  ["Assigned", "Compliance team", "A defined remedial scope is routed to a contractor."],
  ["In progress", "Contractor", "Work has started, but no completion decision has been made."],
  ["Remediated", "Contractor", "Photographic evidence is submitted against the defined scope."],
  ["Independently checked", "Separate reviewer", "Someone other than the original submitter reviews the evidence."],
  ["Client verified", "Client approver", "For P1/P2 findings, the client makes a separate acceptance decision."],
  ["Closed", "Recorded decision", "The outcome, actor and time remain attached to the record."],
] as const;

function StageDetail({ index }: { index: number }) {
  const [title, role, body] = STAGES[index];
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.12em] text-ember-hover uppercase">Stage {String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-2 font-display text-xl font-bold text-navy">{title}</h3>
      <dl className="mt-5 space-y-4">
        <div><dt className="font-mono text-[10px] tracking-wide text-text-secondary uppercase">Accountable role</dt><dd className="mt-1 text-sm font-semibold text-navy">{role}</dd></div>
        <div><dt className="font-mono text-[10px] tracking-wide text-text-secondary uppercase">What changes</dt><dd className="mt-1 text-sm leading-relaxed text-text-secondary">{body}</dd></div>
      </dl>
      {index === 8 ? <p className="mt-5 border-l-2 border-amber pl-4 text-sm leading-relaxed text-text-secondary">Current product scope: client verification applies to P1/P2 findings. Lower-priority findings close after the applicable review path.</p> : null}
    </div>
  );
}

type ResponsibilityStagesProps = {
  recordContext?: {
    building: string;
    finding: string;
  };
};

export function ResponsibilityStages({ recordContext }: ResponsibilityStagesProps = {}) {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className="border border-amber bg-[#FFF8EB] px-4 py-3 text-sm leading-relaxed text-navy"><strong>Proposed target lifecycle.</strong> The ten-stage model is planned for the product and must be re-verified before launch. Current client verification remains limited to P1/P2 findings.</div>
      {recordContext ? (
        <div className="mt-4 flex flex-col gap-1 border-l-2 border-ember bg-white px-4 py-3 text-sm text-navy sm:flex-row sm:items-center sm:gap-3">
          <strong>{recordContext.finding}</strong>
          <span className="hidden text-text-secondary sm:inline" aria-hidden="true">·</span>
          <span className="text-text-secondary">Retained against {recordContext.building} throughout all ten stages</span>
        </div>
      ) : null}
      <ol className="mt-8 space-y-2 md:hidden">
        {STAGES.map(([title], index) => {
          const open = selected === index;
          return <li key={title}>
            <button type="button" aria-expanded={open} aria-controls={`stage-mobile-${index}`} onClick={() => setSelected(index)} className={`flex min-h-12 w-full items-center gap-4 border px-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${open ? "border-navy bg-navy text-white" : "border-hairline bg-white text-navy"}`}><span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span><span className="font-semibold">{title}</span></button>
            {open ? <div id={`stage-mobile-${index}`} className="border-x border-b border-hairline bg-grey p-5"><StageDetail index={index} /></div> : null}
          </li>;
        })}
      </ol>
      <div className="mt-10 hidden md:grid md:grid-cols-[1.25fr_0.75fr] md:gap-12">
        <ol className="grid grid-cols-2 gap-px border border-hairline bg-hairline">
          {STAGES.map(([title], index) => {
            const active = selected === index;
            return <li key={title}><button type="button" aria-pressed={active} aria-controls="stage-desktop-detail" onClick={() => setSelected(index)} className={`flex min-h-20 w-full items-center gap-4 px-5 py-4 text-left focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${active ? "bg-navy text-white" : "bg-white text-navy hover:bg-grey"}`}><span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span><span className="font-semibold">{title}</span></button></li>;
          })}
        </ol>
        <div id="stage-desktop-detail" aria-live="polite" className="border-t-2 border-ember pt-6"><StageDetail index={selected} /></div>
      </div>
    </div>
  );
}
