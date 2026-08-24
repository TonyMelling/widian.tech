"use client";

import { useState } from "react";

type ClaimStatus = "Verified" | "Qualified";

type Layer = {
  title: string;
  records: string;
  persistsBecause: string;
  contributesToTruth: string;
  claim?: { label: string; status: ClaimStatus; scope?: string };
};

// Nine record layers from docs/copy/platform.md §6 — draft, pending
// Brand Strategist / Senior Copywriter / Product Truth review per that
// file's header. Claim statuses mirror the §8 proof-points table, which
// mirrors CLAIMS_REGISTER.md (2026-08-24 version).
const LAYERS: Layer[] = [
  {
    title: "Building identity",
    records: "The building itself, as the permanent anchor everything else attaches to.",
    persistsBecause:
      "Every layer below is created against a specific building and cannot exist independently of it.",
    contributesToTruth:
      "Nothing in the record is ever “homeless” — a finding always traces back to one building.",
    claim: { label: "One structured building record", status: "Qualified" },
  },
  {
    title: "Element register",
    records:
      "Individual elements — the specific fire doors, compartmentation lines or assets that make up the building's compliance surface, identifiable by QR scan on site.",
    persistsBecause: "An element outlives any single inspection of it.",
    contributesToTruth:
      "A finding traces to one specific element, not a vague reference to “the building.”",
    claim: { label: "QR scanning, photo evidence and P1–P5 priorities", status: "Verified" },
  },
  {
    title: "Inspections",
    records:
      "A structured inspection against a specific element, reviewed and either confirmed or returned for correction.",
    persistsBecause: "It forms the base evidence trail everything else builds on.",
    contributesToTruth: "Shows what was actually checked, by whom, and when.",
  },
  {
    title: "Findings",
    records: "A defect or finding raised from an inspection, with a priority from P1 to P5.",
    persistsBecause:
      "A finding stays open until it is properly closed — not simply marked “fixed” and forgotten.",
    contributesToTruth: "Priority makes what matters most visible without digging.",
    claim: { label: "QR scanning, photo evidence and P1–P5 priorities", status: "Verified" },
  },
  {
    title: "Remediation",
    records:
      "The work order assigned to a contractor against a specific finding, including work completed via a secure guest link where a contractor has no full account.",
    persistsBecause:
      "It shows exactly what was done, by whom, against which finding — not just that “the issue was addressed.”",
    contributesToTruth: "Separates “assigned” from “done.”",
    claim: { label: "Guest contractor completion", status: "Verified" },
  },
  {
    title: "Evidence",
    records:
      "Photographs and signatures submitted against a finding or work order, each integrity-checked.",
    persistsBecause:
      "Evidence stays attached to the exact record it was submitted against, not filed separately.",
    contributesToTruth: "Supports later review without needing to revisit site.",
    claim: { label: "Evidence hashing", status: "Qualified", scope: "integrity checking, not external notarisation" },
  },
  {
    title: "Independent checking",
    records: "A review carried out by someone other than the person who submitted the original inspection.",
    persistsBecause: "It creates a second, separate confirmation — not a note added by the same account.",
    contributesToTruth: "The record does not rely on a single person's word.",
    claim: { label: "Independent inspection", status: "Qualified", scope: "a reviewer other than the original submitter" },
  },
  {
    title: "Client verification",
    records:
      "For priority (P1/P2) findings, the client's own nominated approver accepting the evidence before the record closes.",
    persistsBecause: "It creates an explicit, attributable acceptance decision, distinct from independent review.",
    contributesToTruth: "Separates contractor-reported completion from client-accepted closure.",
    claim: { label: "Client verification and closure", status: "Qualified", scope: "P1/P2 findings only" },
  },
  {
    title: "History and issued records",
    records: "Issued reports and doorset records, frozen once issued.",
    persistsBecause:
      "Once issued, a record cannot be edited or deleted — only marked superseded or withdrawn, with the original preserved.",
    contributesToTruth: "Nothing gets quietly rewritten after the fact.",
    claim: { label: "Immutable issued records", status: "Verified", scope: "issued reports only" },
  },
];

function ClaimBadge({ claim }: { claim: NonNullable<Layer["claim"]> }) {
  // Both states use a filled pill (bg + white text), not amber-outline
  // text-on-navy — that combination was 3.59:1, failing WCAG AA's 4.5:1
  // for normal text (2026-08-24 accessibility review). Filled amber +
  // white text passes at 5.32:1, matching how "Verified" already works.
  const pillClasses = claim.status === "Verified" ? "bg-verified text-white" : "bg-amber text-white";
  return (
    <div>
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium tracking-wide uppercase ${pillClasses}`}
      >
        {claim.status}
      </span>
      <p className="mt-2 text-[13px] leading-relaxed text-on-navy-muted">
        {claim.label}
        {claim.scope ? ` — ${claim.scope}` : ""}
      </p>
    </div>
  );
}

function LayerVisual({ layer, index }: { layer: Layer; index: number }) {
  return (
    <div
      className="mt-6 border border-navy-hairline bg-navy-800 p-5"
      role="img"
      aria-label={`Conceptual diagram showing ${layer.title} connected to the persistent building record.`}
    >
      <div className="flex items-center gap-3" aria-hidden="true">
        <span className="flex h-11 w-11 items-center justify-center border border-ember font-mono text-xs text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-ember" />
        <span className="border border-navy-hairline bg-navy px-3 py-2 font-mono text-[10px] text-on-navy-secondary uppercase">
          Building record
        </span>
      </div>
      <p className="mt-4 font-mono text-[10px] tracking-[0.08em] text-on-navy-muted uppercase">
        Conceptual record relationship · not a product screen
      </p>
    </div>
  );
}

function LayerDetail({ layer, index }: { layer: Layer; index: number }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-white md:text-2xl">{layer.title}</h3>
      <dl className="mt-6 space-y-5">
        <div>
          <dt className="font-mono text-[11px] tracking-[0.1em] text-ember uppercase">Records</dt>
          <dd className="mt-1.5 text-[15px] leading-relaxed text-white">{layer.records}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.1em] text-ember uppercase">Persists because</dt>
          <dd className="mt-1.5 text-[15px] leading-relaxed text-on-navy-secondary">{layer.persistsBecause}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.1em] text-ember uppercase">Contributes to present truth</dt>
          <dd className="mt-1.5 text-[15px] leading-relaxed text-on-navy-secondary">{layer.contributesToTruth}</dd>
        </div>
      </dl>
      {layer.claim ? (
        <div className="mt-6 border-t border-navy-hairline pt-5">
          <ClaimBadge claim={layer.claim} />
        </div>
      ) : null}
      <LayerVisual layer={layer} index={index} />
    </div>
  );
}

/** Platform's dominant interaction (SPEC §7.2, "architectural cutaway /
 * vertical record spine — not marketing cards"): select one of nine
 * record layers to reveal what it records, why it persists, and how it
 * contributes to present truth. Selection state is plain React state,
 * not a native disclosure element, because desktop shows the list and
 * detail side by side rather than stacking. Every layer's full detail
 * is reachable by keyboard via the button list; only the associated
 * panel content changes, not the available layers. */
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
                  <LayerDetail layer={layer} index={i} />
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
        <LayerDetail layer={active} index={selected} />
      </div>
      </div>
    </>
  );
}
