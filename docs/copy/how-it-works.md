# How It Works — Copy Draft

**Status:** Draft for review — not approved. This page carries the highest product-truth risk of any first-release page — see D-015 in `DECISIONS.md`. Requires Product Truth Reviewer sign-off before any interactive gate is built, in addition to Brand Strategist + Senior Copywriter review of positioning.

**Depends on:** `CLAIMS_REGISTER.md` (2026-08-24 version), `WIDIAN_MARKETING_WEBSITE_SPEC.md` §7.3, `DECISIONS.md` D-015.

---

## 0. Stage-count problem — read before building the interactive gate

The source documents disagree on how many stages this page's dominant interaction should have:

| Source | Stage count | Stages |
|---|---|---|
| `SPEC.md` §7.3 | "Seven-stage" (unlisted) | Not enumerated in the spec |
| `CONTEXT.md` §5 target lifecycle | Eight | Building → Element → Inspection → Finding → Remedial Work → Independent Inspection → Client Verification → Verified Closure |
| `CONTEXT.md` §5 status distinctions | Ten | Recorded, Submitted, Reviewed, Finding raised, Assigned, In progress, Remediated, Independently checked, Client verified, Closed |
| `SPEC.md` §4 mechanism | Six | Issue identified → Action assigned → Work evidenced → Independently checked → Client verified → Closed |

None of these match today's actual implemented states either (see `CLAIMS_REGISTER.md` "Inspection-to-closure lifecycle" row). **This draft uses the six-stage mechanism line as the working model** — it is the simplest, most defensible, and closest to what the D-015 build is targeting — but you should pick one canonical model and update the source docs before a designer builds the actual interactive component. Building "Building" and "Element" into the gate (per the eight-stage version) would make it a record-anatomy diagram, not a responsibility-gate — that content likely belongs on `/platform` instead, not here.

## 1. Page objective

Explain why contractor-reported completion is not the same as accountable closure, and make Widian's responsibility-gate model the reason to trust the record.

## 2. Primary audience

Compliance leaders and property/asset directors scrutinising rigour; secondary audience: surveyors and contractors who need to understand what's expected of them at each gate.

## 3. Visitor question

What prevents an issue from being marked complete prematurely?

## 4. Primary headline

> **Completion is a claim. Verification is proof.**

*(Marked "Suggested headline" in `SPEC.md` §7.3 — not yet formally approved like the Home headline. Needs Brand Strategist + Senior Copywriter sign-off.)*

## 5. Short standfirst

> A contractor can evidence completed work. Independent review and, for priority findings, the client's own acceptance are separate, accountable decisions.

*(Rewritten from `SPEC.md` §7.3's suggested line — the original reads "They cannot independently confirm their own remediation or provide the client's final acceptance" as if universally true. Per `CLAIMS_REGISTER.md`, client verification only applies to P1/P2 findings today, so the standfirst is qualified accordingly. Restore the unqualified version only once/if D-015 extends client verification to all findings and that is re-verified.)*

## 6. Narrative sequence

### 6.1 Hero — the responsibility gate

Headline and standfirst as above. Visual: a controlled sequence (decision instrument, not a timeline) — see `SPEC.md` §7.3 layout grammar.

### 6.2 The six-gate model (interactive)

Selecting each gate reveals: accountable role, input state, required evidence, permitted decision, possible rejection/rework, next state, audit context — per `SPEC.md` §7.3.

| Gate | Accountable role | Evidenced today? | Copy |
|---|---|---|---|
| Issue identified | Surveyor | Yes — Verified | A structured finding is raised against a specific building element, with a priority (P1–P5). |
| Action assigned | Compliance team / property manager | Partially — the work-order model exists; assignment-specific UI not confirmed in this pass | A remedial action is created and routed to a contractor, with defined scope. |
| Work evidenced | Contractor | Yes — Verified (including guest contractor completion without a full account) | The contractor submits photographic evidence against the required scope. |
| Independently reviewed | A reviewer other than the submitter | Yes — Qualified: enforced for inspection QA (self-review forbidden); work-order reinspection actor for P3–P5 is not confirmed by this evidence pass | Someone other than the person who did the work confirms it — not the same account, by design. |
| Client verified | Client administrator, **priority findings only** | Qualified — P1/P2 only, confirmed live | For P1/P2 findings, the client's own nominated approver makes the final acceptance decision. Lower-priority findings close on independent review alone. |
| Closed | System, on the prior gate's approval | Yes — Verified (`verified_closed` state, immutable transition log) | The record closes with a full, immutable trail of who did what and when. |

**Rejection/rework:** a client rejection returns a P1/P2 work order to "in progress" rather than closing it — `client_rejected` state, confirmed in code.

*(Note: "Action assigned" is the one gate in this table not independently confirmed in the 2026-08-24 evidence pass — flag to Product Truth Reviewer before publishing this row as "Verified".)*

### 6.3 Why the split matters

**Headline:** A contractor's word is evidence, not verification.

**Body:** Contractors are close to the work and best placed to document it. But confirming that documented work actually resolves the finding is a different judgement — made by someone with no stake in having done the work themselves.

### 6.4 What "client verified" actually means

**Headline:** Not every finding needs the client's sign-off. The highest-priority ones do.

**Body:** For P1 and P2 findings — the ones with the greatest consequence — Widian requires the client's own nominated approver to accept the evidence before the record closes. Lower-priority findings close once independently reviewed. *(This paragraph exists specifically to prevent the page implying universal client verification — required per `CLAIMS_REGISTER.md`.)*

### 6.5 Audit context

**Headline:** Every gate leaves a trace.

**Body:** Each transition — assignment, evidence submission, review outcome, verification or rejection — is recorded against the record, with who acted and when. *[Claim: "Time-stamped attribution and audit history" — Verified.]*

## 7. Proof points (traceable to `CLAIMS_REGISTER.md`)

| Proof point | Claim area | Status |
|---|---|---|
| Self-review forbidden for inspection QA | Independent inspection | Qualified |
| Client verification blocks self-verification by inspector/staff | Client verification and closure | Qualified — P1/P2 only |
| Guest contractor completion via secure token | Guest contractor completion | Verified |
| Immutable transition log | Time-stamped attribution and audit history | Verified |
| P1–P5 priority drives which findings require client verification | QR scanning, photo evidence and P1–P5 priorities | Verified |

**Not used on this page:** the 10-stage/8-stage/full status-distinction language from `CONTEXT.md` §5 (blocked by D-015), any claim of a distinct "independent inspector" role (blocked — see Independent inspection row), and any claim that client verification applies beyond P1/P2.

## 8. Objections answered

- *"Isn't 'independent review' just the same team marking their own homework?"* → 6.2/6.3 — enforced self-review block, different account required.
- *"Does the client actually get a say, or is that just marketing language?"* → 6.4 — scoped honestly to P1/P2, not oversold.
- *"What stops a contractor just claiming the job's done?"* → 6.3 — evidence vs verification distinction is the whole page's argument.

## 9. Primary / secondary CTA

Primary: **Book a Demo** → `/book-a-demo` (D-025).
Secondary: **See the record model** → `/platform` (page differentiation lives in the lead-in argument and this secondary link, not the primary button text).

## 10. SEO title and description

**Title:** `How Widian Verifies Closure | Responsibility Gates`
**Description:** `Contractor completion isn't closure. See how Widian's independent review and client verification gates work before a record can close.`

*(Draft only — pending D-013 keyword research.)*

## 11. Social title and description

**Social title:** `Completion is a claim. Verification is proof.`
**Social description:** `See the accountable gates a finding passes through before Widian marks it closed.`

## 12. Image/animation captions

- Gate sequence: *"Selecting a stage reveals who is accountable, what evidence is required, and what happens if it's rejected."*
- Rejection/rework loop: *"A client rejection sends the work order back into progress — not into a dead end."*

## 13. Accessible alternative text

- Gate diagram: `Interactive diagram of six accountability gates from issue identified to closed, each showing accountable role and evidence requirement.`
- Per-gate icons: individual descriptive alt text per role (e.g. `Contractor icon`, `Client approver icon`).
- Keyboard requirement (per `SPEC.md` §16): every gate must be reachable and revealable via keyboard alone, with visible focus — this is a dominant interaction, not decorative motion.

## 14. Claims requiring further evidence before publish

- "Action assigned" gate role/UI — not confirmed in the 2026-08-24 evidence pass; needs explicit Product Truth confirmation.
- P3–P5 reinspection actor (who performs `completed_reinspect` review) — not confirmed; do not imply it is independently reviewed unless confirmed.
- The stage-count contradiction in §0 must be resolved (canonical model chosen) before a designer/engineer builds the actual interactive component — this is a decision, not a copy question.
- If D-015's 10-stage build ships before launch and is re-verified, this whole page may be rewritten to use the fuller stage model instead of the six-gate simplification used here.
