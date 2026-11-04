"use client";

import { useState } from "react";

type Layer = {
  title: string;
  records: string;
  persistsBecause: string;
  contributesToTruth: string;
  claim?: { scope?: string };
};

// Nine record layers. Each `claim.scope` is a limitation that must stay visible beside the layer.
const LAYERS: Layer[] = [
  {
    title: "Building identity",
    records: "The building itself, as the permanent anchor everything else attaches to.",
    persistsBecause:
      "Inspections, findings and evidence are all recorded against a specific building, so nothing sits unattached.",
    contributesToTruth:
      "Every finding traces back to one building.",
    
  },
  {
    title: "Element register",
    records:
      "Individual elements — the specific fire doors, compartmentation lines or assets that make up the building's compliance surface, identifiable by QR scan on site.",
    persistsBecause: "An element outlives any single inspection of it, so its history stays in one place.",
    contributesToTruth:
      "A finding traces to one specific element, not a vague reference to “the building.”",
    
  },
  {
    title: "Inspections",
    records:
      "A structured inspection against a specific element, reviewed and either confirmed or returned for correction.",
    persistsBecause: "It forms the evidence trail that everything else builds on.",
    contributesToTruth: "Shows what was checked, by whom and when.",
  },
  {
    title: "Findings",
    records: "A defect or finding raised from an inspection, with a P1 to P5 remediation priority set by the client.",
    persistsBecause:
      "A finding stays open until it is properly closed, not simply marked “fixed” and forgotten.",
    contributesToTruth: "Priority makes what matters most easy to see.",
    
  },
  {
    title: "Remediation",
    records:
      "The work order assigned to a contractor against a specific finding, including work completed via a secure guest link where a contractor has no full account.",
    persistsBecause:
      "It shows what was done, by whom and against which finding, not just that “the issue was addressed.”",
    contributesToTruth: "Separates “assigned” from “done.”",
    
  },
  {
    title: "Evidence",
    records:
      "Photographs and signatures submitted against a finding or work order, each integrity-checked.",
    persistsBecause:
      "Evidence stays attached to the exact record it was submitted against, not filed separately.",
    contributesToTruth: "Supports later review without another site visit.",
    claim: { scope: "integrity checking, not external notarisation" },
  },
  {
    title: "Independent checking",
    records: "A review carried out by someone other than the person who submitted the original inspection.",
    persistsBecause: "It gives a second, separate confirmation rather than a note added by the same account.",
    contributesToTruth: "The record does not rely on one person’s word.",
    claim: { scope: "a reviewer other than the original submitter" },
  },
  {
    title: "Client verification",
    records:
      "The owning client accepting or rejecting the evidence before any finding closes, for every priority from P1 to P5.",
    persistsBecause: "It records an explicit, attributable acceptance decision, separate from independent review.",
    contributesToTruth: "Separates contractor-reported completion from client-accepted closure.",
  },
  {
    title: "History and issued records",
    records: "Issued reports and doorset records, frozen once issued.",
    persistsBecause:
      "Once issued, a report cannot be edited or deleted, only marked superseded or withdrawn, with the original preserved.",
    contributesToTruth: "Nothing is quietly rewritten after the fact.",
    claim: { scope: "issued reports only" },
  },
];

function LayerDetail({ layer }: { layer: Layer }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-white md:text-2xl">{layer.title}</h3>
      <dl className="mt-6 space-y-5">
        <div>
          <dt className="font-mono text-[11px] tracking-[0.1em] text-ember-on-navy uppercase">What it holds</dt>
          <dd className="mt-1.5 text-[15px] leading-relaxed text-white">{layer.records}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.1em] text-ember-on-navy uppercase">Why it matters</dt>
          <dd className="mt-1.5 text-[15px] leading-relaxed text-on-navy-secondary">{layer.persistsBecause}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.1em] text-ember-on-navy uppercase">What you get</dt>
          <dd className="mt-1.5 text-[15px] leading-relaxed text-on-navy-secondary">{layer.contributesToTruth}</dd>
        </div>
      </dl>
      {layer.claim?.scope ? (
        <p className="mt-6 border-t border-navy-hairline pt-5 text-[13px] leading-relaxed text-on-navy-muted">
          <span className="font-semibold text-on-navy-secondary">Scope:</span>{" "}
          {layer.claim.scope.charAt(0).toUpperCase() + layer.claim.scope.slice(1)}.
        </p>
      ) : null}
    </div>
  );
}

/** Select one of nine record layers to see what it holds, why it matters and what it gives you. */
export function RecordSpine() {
  const [selected, setSelected] = useState(0);
  const active = LAYERS[selected];
  const panelId = "record-spine-detail";

  return (
    <>
      <ol data-testid="record-spine-mobile" className="relative flex flex-col pl-7 md:hidden before:absolute before:top-6 before:bottom-6 before:left-2.5 before:w-0.5 before:bg-navy-hairline">
        {LAYERS.map((layer, i) => {
          const isActive = i === selected;
          const mobilePanelId = `record-layer-${i}`;
          return (
            <li key={layer.title} className="relative pb-3">
              <span
                className={`absolute top-6 -left-7 h-3 w-3 rounded-full ${isActive ? "bg-ember" : "bg-navy-hairline"}`}
                aria-hidden="true"
              />
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={mobilePanelId}
                onClick={() => setSelected(i)}
                className={`w-full rounded-sm px-4 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  isActive ? "bg-white text-navy" : "text-on-navy-secondary hover:bg-navy-800 hover:text-white"
                }`}
              >
                <span className="font-mono text-[11px] tracking-wide">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-0.5 block text-[15px] font-semibold">{layer.title}</span>
                {layer.claim?.scope ? (
                  <span className={`mt-1 block text-xs ${isActive ? "text-text-secondary" : "text-on-navy-muted"}`}>
                    {layer.claim.scope}
                  </span>
                ) : null}
              </button>
              {isActive ? (
                <div id={mobilePanelId} className="border-x border-b border-navy-hairline bg-navy-800 p-5">
                  <LayerDetail layer={layer} />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div data-testid="record-spine-desktop" className="hidden gap-14 md:grid md:grid-cols-[340px_1fr]">
      <ol className="relative flex flex-col pl-8 before:absolute before:top-1.5 before:bottom-1.5 before:left-3 before:w-0.5 before:bg-navy-hairline">
        {LAYERS.map((layer, i) => {
          const isActive = i === selected;
          return (
            <li key={layer.title} className="relative pb-3">
              <span
                className={`absolute top-1/2 -left-7 h-3 w-3 -translate-y-1/2 rounded-full md:-left-8 ${
                  isActive ? "bg-ember" : "bg-navy-hairline"
                }`}
                aria-hidden="true"
              />
              <button
                type="button"
                aria-current={isActive}
                aria-controls={panelId}
                onClick={() => setSelected(i)}
                className={`w-full rounded-sm px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  isActive
                    ? "bg-white text-navy"
                    : "text-on-navy-secondary hover:bg-navy-800 hover:text-white"
                }`}
              >
                <span className="font-mono text-[11px] tracking-wide">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 block text-[15px] font-semibold">{layer.title}</span>
                {layer.claim?.scope ? (
                  <span className={`mt-1 block text-xs ${isActive ? "text-text-secondary" : "text-on-navy-muted"}`}>
                    {layer.claim.scope}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ol>

      <div id={panelId} aria-live="polite" className="min-w-0">
        <LayerDetail layer={active} />
      </div>
      </div>
    </>
  );
}
