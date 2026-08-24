# Home — Copy Draft

**Status:** Draft for review — not approved. Requires Brand Strategist + Senior Copywriter sign-off (primary positioning) and Product Truth Reviewer confirmation of claim references before this becomes production copy.

**Depends on:** `CLAIMS_REGISTER.md` (2026-08-24 version), `WIDIAN_MARKETING_WEBSITE_SPEC.md` §7.1, `CONTENT_AND_COPY_PLAN.md`.

---

## 1. Page objective

Establish Widian's Building Record category, make "one building record" tangible within five seconds, and convert qualified visitors into a booked walkthrough.

## 2. Primary audience

Managing agents (5–50 blocks), responsible persons/building owners, heads of compliance/fire-safety managers, property and asset-management directors, housing providers and social landlords.

## 3. Visitor question

What is Widian, and why should I care?

## 4. Primary headline

> **One building record. Every responsible party. Verified from inspection to closure.**

*(Approved primary proposition — do not alter without Brand Strategist + Senior Copywriter review.)*

## 5. Short standfirst

> Widian connects inspections, findings, remedial work, evidence and verification in one accountable operational record for every building.

## 6. Narrative sequence

### 6.1 Category-defining hero

Headline and standfirst as above. Primary CTA: **Book a Demo**. Secondary CTA: **See how it works** (links to `/how-it-works`).

Dominant visual: a building identity surrounded by responsible parties and lifecycle gates, becoming visibly more complete as the visitor scrolls. *(Asset dependency — see `CONTENT_ASSET_INVENTORY.md`, "Building/element visual model", currently "Design".)*

### 6.2 Fragmented activity versus building truth

**Headline:** A building's compliance history is usually scattered.

**Body:** Inspection reports sit in inboxes. Remedial evidence lives in a contractor's own systems. A spreadsheet tracks what's supposedly outstanding. None of it is connected to the building itself, and none of it tells you, today, what is actually true.

**Counter-claim:** Every element, inspection, finding and piece of remedial evidence in Widian is connected to the same building record. *[Claim: "One structured building record" — status Qualified. Describe as the connected data model; do not imply a single unified record screen exists yet.]*

### 6.3 "Reports record moments; Widian records responsibility"

**Body:** A report is a snapshot — accurate on the day it was written, and silent about what happened next. Widian keeps the record open: who owns the next action, what evidence has been added since, and what remains outstanding. Responsibility does not end when a report is issued.

### 6.4 Short lifecycle preview

**Headline:** Every issue moves through the same accountable path.

> Issue identified → Action assigned → Work evidenced → Independently reviewed → Verified¹ → Closed

¹ *Micro-copy, required: "Verification by the client applies to priority findings. Lower-priority findings close once independently reviewed."* *[Claim: "Client verification and closure" — status Qualified, P1/P2 scope only. This line must not read as applying uniformly — see `CLAIMS_REGISTER.md`.]*

Secondary CTA under this section: **See the full lifecycle** (links to `/how-it-works`). *(Note: `/how-it-works` carries the heavier lifecycle-accuracy risk — see D-015 in `DECISIONS.md`. This Home preview intentionally avoids the 10-stage chain and the word "Independently checked" as a named role, to stay inside currently-Qualified claim boundaries.)*

### 6.5 Every responsible party

**Headline:** Every organisation works from the same record.

**Body:** Surveyors capture structured findings on site. Contractors receive clear scope and submit evidence against it. A reviewer who did not do the original work confirms it. The client makes the final call on the findings that matter most. *[Claim: "Multi-organisation roles and permissions" — Verified, roles limited to those implemented: surveyor, supplier/contractor, client, client_admin. "Independent inspection" — Qualified: describe as "someone other than the original submitter reviews it," not as a distinct "independent inspector" role/persona.]*

### 6.6 Authentic product evidence

**Status: blocked.** `CONTENT_ASSET_INVENTORY.md` lists product captures as "Capture/approve" and team/product imagery as outstanding. This section cannot be finalised until anonymised, approved screenshots exist. Placeholder structure only:

- One annotated view of a building record in Widian.
- One caption explaining why the view matters (not just what it shows).
- Explicit label if any interface shown is proposed/future rather than current.

### 6.7 Difference from reports and repositories

**Headline:** Widian is not another place to store compliance.

**Body:** Not a report generator. Not a document repository. Not generic facilities or project management. Widian is the operational record the building keeps as work moves from finding to verified closure. *(Drawn directly from `WIDIAN_MARKETING_WEBSITE_CONTEXT.md` §4 "Widian is not" list — no new claims introduced.)*

### 6.8 Trust preview

**Headline:** Access is controlled. Evidence is kept.

**Body, deliberately modest:** Every user works within their organisation's permissions. Evidence is stored against the record it belongs to. *[Claims used: "Multi-organisation roles and permissions" (Verified), "Time-stamped attribution and audit history" (Verified). Do NOT reference certifications, formal security programme, or hashing/immutability claims here — those remain Withhold/Qualified per `CLAIMS_REGISTER.md`.]* Link: **See our approach to security & trust** (`/security-trust`).

### 6.9 Walkthrough CTA

**Headline:** See Widian against your own buildings.

**Body:** Book a time that works for you. *(Reflects D-009 — immediate calendar booking, not a qualification-first flow.)* Primary CTA: **Book a Demo.**

## 7. Proof points used (all traceable to `CLAIMS_REGISTER.md`)

| Proof point | Claim area | Status |
|---|---|---|
| Connected building/element/inspection/finding/work data model | One structured building record | Qualified |
| Roles: surveyor, contractor, client, client_admin, enforced by RLS | Multi-organisation roles and permissions | Verified |
| Reviewer other than original submitter confirms work | Independent inspection | Qualified |
| Client verification for priority findings | Client verification and closure | Qualified (P1/P2 only) |
| Attribution and audit trail on record events | Time-stamped attribution and audit history | Verified |

No hashing, immutability, certification, security-programme or customer-outcome claims are used on Home — those stay on `/security-trust` (or withheld) per the register.

## 8. Objections answered

- *"Isn't this just another inspection app?"* → 6.7 (difference from reports/repositories).
- *"Who actually has to do anything differently?"* → 6.5 (every responsible party).
- *"How do I know 'verified' really means verified?"* → 6.4 footnote + 6.8 (scoped, not oversold).

## 9. Primary / secondary CTA

Primary: **Book a Demo** → `/book-a-demo` (D-025).
Secondary: **See how it works** → `/how-it-works`.

## 10. SEO title and description

**Title (≤60 chars):** `Widian — One Building Record for Passive Fire | widian.tech`
**Description (≤155 chars):** `Widian connects inspections, findings, remedial work, evidence and verification in one accountable building record. Book a walkthrough.`

*(Draft only — final metadata needs SEO reviewer + D-013 keyword research, currently owned by user outside this session.)*

## 11. Social title and description

**Social title:** `One building record. Every responsible party. Verified from inspection to closure.`
**Social description:** `See how Widian keeps inspections, findings, remedial work and evidence connected to one accountable record — from first finding to verified closure.`
**Asset dependency:** 1200×630 social card — not yet created (`CONTENT_ASSET_INVENTORY.md`).

## 12. Image/animation captions

- Hero building-record visual: *"The record becomes more complete as evidence and decisions are added — not simply as elements move."*
- Lifecycle preview: *"Every issue follows the same accountable path, from identification to closure."*
- Trust preview icon/graphic: *"Access and evidence stay within the record they belong to."*

## 13. Accessible alternative text

- Hero visual: `Illustration of a building record accumulating connected inspection, finding and evidence markers over time.`
- Lifecycle preview: `Diagram showing an issue moving through identification, assignment, evidenced work, independent review, verification and closure.`
- Role icons (6.5): one descriptive alt per role icon (e.g. `Surveyor icon`, `Contractor icon`) — decorative flourishes excluded from the accessibility tree per `WIDIAN_MARKETING_WEBSITE_SPEC.md` §16.

## 14. Claims requiring further evidence before publish

- Section 6.6 (authentic product evidence) — blocked entirely on asset approval.
- Section 6.1 hero visual — blocked on the building/element visual model asset (currently "Design" status).
- Any future edit that reintroduces the full 10-stage lifecycle chain or an "independently checked"/"client verified" claim without the priority-finding qualifier must be routed back through Product Truth Review — see D-015.
