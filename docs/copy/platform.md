# Platform — Copy Draft

**Status:** Draft for review — not approved. Requires Brand Strategist + Senior Copywriter sign-off (positioning) and Product Truth Reviewer confirmation before this becomes production copy.

**Depends on:** `CLAIMS_REGISTER.md` (2026-08-24 version), `WIDIAN_MARKETING_WEBSITE_SPEC.md` §7.2.

---

## 1. Page objective

Make the Building Record tangible: show what is actually inside it, layer by layer, and why each layer persists rather than existing as a one-off report.

## 2. Primary audience

Compliance leaders and property/asset directors who want to understand the record's substance, not just the pitch; secondary audience: technically curious procurement/IT reviewers and surveyors/contractors wanting to see where their own work sits.

## 3. Visitor question

What is actually inside a Widian Building Record?

## 4. Primary headline

> **The building becomes the organising structure.**

*("Suggested headline" per `SPEC.md` §7.2 — not yet formally approved. Needs Brand Strategist + Senior Copywriter sign-off.)*

## 5. Short standfirst

> Every inspection, finding, remedial action and piece of evidence is recorded against the building it belongs to — and stays connected as the record grows.

*(Deliberately describes the connected data model, not a claim that a single unified "Building Record" screen exists yet — see the "One structured building record" row in `CLAIMS_REGISTER.md`, status Qualified.)*

## 6. Narrative sequence

Layout grammar: architectural cutaway / vertical record spine — not marketing cards (`SPEC.md` §7.2). Dominant interaction: select a layer to reveal what it records, why it persists, and how it contributes to present truth.

### 6.1 Building identity

**Records:** The building itself, as the permanent anchor everything else attaches to.
**Persists because:** Every layer below is created against a specific building and cannot exist independently of it.
**Contributes to present truth:** Nothing in the record is ever "homeless" — a finding always traces back to one building. *[Claim: One structured building record — Qualified, data model only.]*

### 6.2 Element register

**Records:** Individual elements — the specific fire doors, compartmentation lines or assets that make up the building's compliance surface, identifiable by QR scan on site.
**Persists because:** An element outlives any single inspection of it.
**Contributes to present truth:** A finding traces to one specific element, not a vague reference to "the building." *[Claim: QR scanning, photo evidence and P1–P5 priorities — Verified.]*

### 6.3 Inspections

**Records:** A structured inspection against a specific element, reviewed and either confirmed or returned for correction.
**Persists because:** It forms the base evidence trail everything else builds on.
**Contributes to present truth:** Shows what was actually checked, by whom, and when. *(Avoid the marketing "Recorded/Submitted/Reviewed" chain here — describe the review outcome in plain terms instead, per the "Inspection-to-closure lifecycle" row, status Proposed future state pending D-015.)*

### 6.4 Findings

**Records:** A defect or finding raised from an inspection, with a priority from P1 to P5.
**Persists because:** A finding stays open until it is properly closed — not simply marked "fixed" and forgotten.
**Contributes to present truth:** Priority makes what matters most visible without digging. *[Claim: QR scanning, photo evidence and P1–P5 priorities — Verified.]*

### 6.5 Remediation

**Records:** The work order assigned to a contractor against a specific finding, including work completed via a secure guest link where a contractor has no full account.
**Persists because:** It shows exactly what was done, by whom, against which finding — not just that "the issue was addressed."
**Contributes to present truth:** Separates "assigned" from "done." *[Claim: Guest contractor completion — Verified.]*

### 6.6 Evidence

**Records:** Photographs and signatures submitted against a finding or work order, each integrity-checked.
**Persists because:** Evidence stays attached to the exact record it was submitted against, not filed separately.
**Contributes to present truth:** Supports later review without needing to revisit site. *[Claim: Evidence hashing — Qualified. Explain scope: integrity checking of stored evidence, not external notarisation or universal legal tamper-proofing.]*

### 6.7 Independent checking

**Records:** A review carried out by someone other than the person who submitted the original inspection.
**Persists because:** It creates a second, separate confirmation — not a note added by the same account.
**Contributes to present truth:** The record does not rely on a single person's word. *[Claim: Independent inspection — Qualified. Describe as "a reviewer other than the original submitter", not as a distinct "independent inspector" role/persona — that role does not exist yet.]*

### 6.8 Client verification

**Records:** For priority (P1/P2) findings, the client's own nominated approver accepting the evidence before the record closes.
**Persists because:** It creates an explicit, attributable acceptance decision, distinct from independent review.
**Contributes to present truth:** Separates contractor-reported completion from client-accepted closure. *[Claim: Client verification and closure — Qualified, P1/P2 only. Do not imply this applies to every finding.]*

### 6.9 History and issued records

**Records:** Issued reports and doorset records, frozen once issued.
**Persists because:** Once issued, a record cannot be edited or deleted — only marked superseded or withdrawn, with the original preserved.
**Contributes to present truth:** Nothing gets quietly rewritten after the fact. *[Claim: Immutable issued records — Verified, scoped to the `issued_reports` table specifically — do not extend this claim to "every record".]*

## 7. Required proof

`SPEC.md` §7.2 requires "authentic, anonymised product views or faithful demonstrations" for this page, with proposed/future experiences clearly marked. **This is currently blocked** — `CONTENT_ASSET_INVENTORY.md` lists product captures as "Capture/approve" and has no approved anonymised demonstration record yet. Each of the nine layers above should carry a real, captioned screenshot once available; do not launch this page with illustrative-only graphics presented as product screenshots.

## 8. Proof points (traceable to `CLAIMS_REGISTER.md`)

| Layer | Claim area | Status |
|---|---|---|
| Building/element/finding/work-order data model | One structured building record | Qualified |
| QR-identified elements, P1–P5 priority | QR scanning, photo evidence and P1–P5 priorities | Verified |
| Guest contractor completion | Guest contractor completion | Verified |
| Evidence hashing | Evidence hashing | Qualified |
| Independent checking (self-review forbidden) | Independent inspection | Qualified |
| Client verification | Client verification and closure | Qualified — P1/P2 only |
| Immutable issued records | Immutable issued records | Verified — issued reports only |

## 9. Objections answered

- *"Isn't this just a set of separate module screens?"* → each layer is explicitly framed by what it persists and how it connects back to the building, not as an independent feature.
- *"Why not just keep using reports and spreadsheets?"* → each layer's persistence (6.1–6.9) is the direct answer: nothing here is a one-off snapshot.
- *"Can I trust that evidence hasn't been altered?"* → 6.6 and 6.9, both honestly scoped rather than oversold.

## 10. Primary / secondary CTA

Primary: **Book a Widian walkthrough** → `/book-a-walkthrough` (per `SPEC.md` §19 acceptance criteria — primary CTA label is consistent sitewide; see D-016 in `DECISIONS.md`).
Secondary: **Explore how it works** → `/how-it-works` (page differentiation lives in the lead-in argument and this secondary link, not the primary button text).

## 11. SEO title and description

**Title:** `Inside the Widian Building Record | Platform`
**Description:** `See what's actually inside a Widian Building Record — from element register to independent checking, client verification and issued-record history.`

*(Draft only — pending D-013 keyword research.)*

## 12. Social title and description

**Social title:** `The building becomes the organising structure.`
**Social description:** `Nine layers, one persistent record. See what's inside a Widian Building Record and why it stays connected as evidence accumulates.`

## 13. Image/animation captions

One caption per layer, following the "why it persists" line above, e.g.:
- Building identity: *"Every layer below attaches permanently to this building."*
- Evidence: *"Evidence stays attached to the exact finding it was submitted against."*
- History and issued records: *"Once issued, the original is preserved — never silently rewritten."*

## 14. Accessible alternative text

- Record-spine diagram: `Vertical diagram of nine connected record layers, from building identity through to issued records, each selectable for detail.`
- Per-layer icons: individual descriptive alt text per layer (e.g. `Element register icon`, `Evidence icon`).
- Keyboard requirement: each layer must be selectable and its detail revealable via keyboard, with visible focus, per `SPEC.md` §16.

## 15. Claims requiring further evidence before publish

- All nine layers require an approved, anonymised product screenshot before this page can meet `SPEC.md` §7.2's "required proof" standard — currently blocked, same asset dependency as Home §6.6.
- 6.3 Inspections deliberately avoids the blocked 10-stage lifecycle language (D-015) — if that build ships and is re-verified, this section can be rewritten with the fuller state names.
- 6.7/6.8 wording must stay in sync with the equivalent sections in `docs/copy/how-it-works.md` — both were written from the same `CLAIMS_REGISTER.md` rows; if either is revised, check the other.
