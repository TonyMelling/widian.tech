# Widian Marketing Website — Project Context

**Status:** Approved strategic context for a new, separate marketing website repository  
**Prepared:** 24 August 2026  
**Intended audience:** Creative director, brand strategist, UX/UI designer, conversion copywriter, frontend engineer and coding agents  
**Target domain:** `https://widian.tech`

## 1. Purpose

Create a distinctive, mobile-first marketing website that establishes **Circular Compliance** as Widian's category proposition and Widian as the **verified Building Record platform for passive fire**.

The website must persuade senior property, fire-safety and compliance decision-makers while remaining credible to surveyors, contractors, independent inspectors and operational teams.

It must not feel like a reskinned SaaS template, an inspection-product brochure or a generic compliance dashboard.

## 2. Primary proposition

> **One building record. Every responsible party. Verified from inspection to closure.**

This is the central organising idea for the brand story, information architecture, copy, visual system, motion and conversion experience.

It means:

- one persistent operational record is organised around the building;
- elements, inspections, findings, remedial work and evidence remain connected;
- every responsible organisation contributes through controlled access;
- contractor completion does not automatically mean closure;
- independent checking and authorised client verification are distinct decisions;
- users can establish the current operational truth and see what remains outstanding.

## 3. Supporting promise

> **Know what is true.  
> Know what needs action.  
> Prove what happened.**

Use this as supporting reinforcement after the main proposition has been understood. It must not compete with the homepage headline.

Corporate tagline:

> **Clarity Through Compliance**

Use primarily with the logo, footer and corporate material.

## 4. Category and positioning

### Approved category

**Circular Compliance**, delivered through Widian's Building Record platform.

Circular Compliance does not replace the Building Record proposition. The Building Record is the persistent product subject; verified closure is its controlled outcome; Circular Compliance is the operating model that connects activity and evidence over time. See `CIRCULAR_COMPLIANCE_CONTEXT.md`.

### Initial wedge

**Passive-fire Building Records**

Initial subject areas include:

- fire doors;
- fire stopping;
- compartmentation-related findings and evidence;
- inspections;
- remediation;
- independent checking;
- client verification;
- evidence and issued records.

### Strategic position

Widian is the shared operational infrastructure through which relevant organisations coordinate inspection, action, evidence and accountable closure.

Widian is not:

- merely inspection software;
- a report generator;
- a document repository;
- a digital filing cabinet;
- generic facilities management;
- generic project management;
- a system that replaces competent professional judgement;
- a service that certifies statutory compliance.

### Emerging market story

The long-term opportunity is marketplace infrastructure, but this must be explained carefully.

Widian does not initially need to be presented as a supplier directory or transactional marketplace. Its network effect comes from multiple responsible parties strengthening the same persistent Building Record.

Preferred language:

> **Not another place to store compliance. The place compliance moves forward.**

> **The network grows around the record. The record never loses its building.**

Avoid claiming an established marketplace, supplier network or market scale before evidence exists.

## 5. Product lifecycle

Target lifecycle:

`Building → Element → Inspection → Finding → Remedial Work → Independent Inspection → Client Verification → Verified Closure`

Customer-facing action loop:

`Issue identified → action assigned → work evidenced → independently checked → client verified → closed`

Circular Compliance presentation:

`Establish → Identify → Remediate → Verify → Return`

`Carry forward` is a rule throughout the lifecycle. It does not replace the remediation or verification stages.

Required status distinctions:

- Recorded
- Submitted
- Reviewed
- Finding raised
- Assigned
- In progress
- Remediated
- Independently checked
- Client verified
- Closed

Do not collapse these into “Complete”.

**Resolved 2026-08-24 (`DECISIONS.md` D-023):** the ten "Required status distinctions" above are the canonical lifecycle model for marketing copy, resolving the stage-count contradiction previously flagged across this document, `WIDIAN_MARKETING_WEBSITE_SPEC.md` and `docs/copy/how-it-works.md` (D-015). This remains a "Proposed future state" claim per `CLAIMS_REGISTER.md` until the product build ships and is re-verified against deployed staging — copy must carry a visible future/in-progress label until then.

**Resolved 1 September 2026 (`DECISIONS.md` D-046):** this ten-stage model is now mapped beneath the five-stage Circular Compliance narrative (`Establish → Identify → Remediate → Verify → Return`, D-041) — see `CIRCULAR_COMPLIANCE_CONTEXT.md` for the full mapping. The "Customer-facing action loop" line above, in this same section, is the current simplified public bridge to that same structure (matching `WIDIAN_MARKETING_WEBSITE_SPEC.md` §4's "Mechanism" line), not a separate model. This cross-reference is structural only and does not change this section's claim status.

## 6. Audience hierarchy

### Primary economic and accountable buyers

1. Managing agents responsible for multi-building portfolios
2. Responsible persons and building owners
3. Heads of compliance and fire-safety managers
4. Property and asset-management directors
5. Housing providers and social landlords

Initial commercial sweet spot from Widian’s product strategy:

> Independent and mid-sized managing agents responsible for approximately 5–50 blocks.

### Operational and distribution users

- Facilities and property managers
- Surveyors and inspectors
- Remedial contractors
- Independent inspectors
- Compliance and assurance teams
- Authorised client verifiers

### Primary audience questions

| Audience | Question the website must answer |
|---|---|
| Owner / responsible person | Can I establish the current truth across my buildings? |
| Compliance leader | What remains open, overdue, unsupported or unverified? |
| Property manager | Who owns the next action and what is blocking closure? |
| Surveyor | Can I capture structured evidence efficiently on site, including offline? |
| Contractor | Will I receive a clear scope and know what evidence is required? |
| Independent inspector | Can I see the original finding and remediation evidence before deciding? |
| Client verifier | Can I make and evidence the final acceptance decision? |

## 7. Brand foundations

### Brand impression

- Authoritative
- Calm
- Precise
- Transparent
- Accountable
- Technically advanced
- Premium but restrained
- Innovative without gimmicks

### Product experience principle

> **Quiet authority**

Voice characteristics:

- direct;
- specific;
- unhurried;
- evidenced;
- plain.

### Verified colour foundations

| Token | Value | Role |
|---|---:|---|
| Primary Navy | `#141D2B` | Brand structure, headings and primary controls |
| Ember | `#E8431A` | Scarce emphasis and priority |
| Surface White | `#FFFFFF` | Primary surface |
| System Grey | `#F0F2F5` | Background and canvas |
| Secondary text | `#5B6675` | Supporting text and metadata |
| Hairline | `#DCE0E7` | Rules and boundaries |
| Verified green | `#1F7A4C` | Verified operational state |
| Amber | `#A8630B` | In-progress or attention state |
| Priority soft | `#FCEAE4` | Priority backing |

Ember must remain scarce. If it is used everywhere, the entire page becomes a warning state.

### Typography

- **Archivo:** headings, display statements and key figures
- **IBM Plex Sans:** body copy, navigation, forms and buttons
- **IBM Plex Mono:** references, timestamps, statuses and record metadata

### Logo requirement

Use the approved Widian shield and wordmark lock-up. Do not recreate the wordmark with live text and do not invent a substitute shield.

Production assets should be copied into the new website repository. Do not hotlink them from staging.

Preferred future asset set:

- `widian-full.svg`
- `widian-full-reversed.svg`
- `widian-compact.svg`
- `widian-compact-reversed.svg`
- `widian-mark.svg`

PNG assets from the application may be used temporarily until approved SVG exports exist.

## 8. Domain architecture

| Domain | Purpose |
|---|---|
| `widian.tech` | Public marketing website |
| `app.widian.tech` | Production Widian application |
| `staging.widian.tech` | Authorised staging and demonstration access |

Marketing navigation:

- **Sign in** → `https://app.widian.tech/sign-in`
- **Staging login** → `https://staging.widian.tech`

Staging access should appear discreetly in the footer, not as a primary navigation item.

Important dependency: the existing Clerk satellite-domain configuration must be migrated so that `app.widian.tech` becomes the application’s primary authentication domain before `widian.tech` is assigned to marketing.

## 9. Repository and application evidence

The existing Widian application repository is private:

`https://github.com/TonyMelling/widian`

Verified application stack:

- Next.js 16.3 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Clerk
- Supabase PostgreSQL and private Storage
- Dexie/IndexedDB
- Upstash
- OneSignal
- Vitest
- Playwright
- Vercel

The marketing website should use a separate repository and deployment. It may reuse approved brand assets and selected anonymised product imagery but must not share application runtime dependencies unnecessarily.

### Branch warning

At the time of discovery:

- `staging` was 102 commits ahead of `main`;
- `staging` was seven commits behind `main`;
- the branches had diverged.

Use deployed staging and the authoritative current-state document to substantiate marketing claims. Do not assume `main` alone represents current functionality.

## 10. Supportable product story

Subject to final pre-publication verification, Widian can credibly discuss:

- structured inspection and finding capture;
- mobile field workflows;
- offline inspection saving and synchronisation;
- fire-door, fire-stopping and FRA-style paths;
- photographic evidence and annotations;
- P1–P5 finding priorities;
- remediation work orders;
- guest contractor completion;
- evidence-integrity controls;
- user and role attribution;
- permission-aware access;
- QA workflow;
- scheduling and surveyor agenda;
- issued doorset records;
- building/compliance evidence-pack generation;
- QR camera scanning.

## 11. Claims requiring qualification

- “Verified closure” is a Widian workflow outcome, not legal certification.
- Contractor completion is not closure.
- Independent inspection must only be claimed where the deployed workflow genuinely supports and enforces it.
- Client verification claims must be checked against deployed authorisation and migration state.
- Report verification is not the same as verifying the complete operational record.
- Hashing supports integrity checking; it does not make every record legally tamper-proof.
- Widian records professional decisions; it does not replace them.
- Offline capability must describe the actions that genuinely work offline.

## 12. Prohibited unsupported claims

Do not claim:

- Widian certifies statutory compliance;
- every Widian record is immutable;
- the system is universally tamper-proof;
- ISO 27001 certification before it is achieved and current;
- CREST testing before a real scoped engagement is complete;
- Cyber Essentials before certification;
- guaranteed regulatory compliance;
- fabricated customer numbers, savings or performance statistics;
- customers, partners, awards or testimonials without permission and evidence;
- an established marketplace or contractor network that does not yet exist.

## 13. Approved creative platform

### Concept

> **One Record, Unbroken**

This creative platform now expresses the Circular Compliance category. The Ember thread represents the digital chain of custody through the five-move lifecycle.

The visual story uses:

- a persistent building identity;
- one continuous Ember thread;
- accountable event nodes;
- visible gaps for unfinished responsibility;
- green reserved for genuinely verified states;
- architectural layers;
- registers, evidence trails and state transitions;
- record metadata that feels precise and operational.

The thread is not decoration. It represents continuity of identity, evidence and responsibility.

## 14. Current mock-up learning

What worked:

- headline hierarchy;
- central proposition;
- Navy/Ember restraint;
- “One Record, Unbroken” concept;
- distinction between completion and verification;
- interactive lifecycle;
- market-infrastructure direction.

What did not yet reach the target:

- pages initially looked too similar;
- the original one-page structure compressed the story;
- supporting copy was too sparse;
- visual devices still resembled polished SaaS patterns;
- authentic Widian product evidence was limited;
- motion needed stronger narrative choreography;
- the temporary recreated shield was unacceptable;
- the prototype had not undergone browser, accessibility or user testing.

The existing mock-up is inspiration and a learning artefact, not a visual specification to reproduce literally.

## 15. Quality ambition

“Award-winning” must not be treated as a collection of fashionable visual effects.

The website should earn distinction through:

- an ownable category story;
- exceptional editorial craft;
- page-specific art direction;
- meaningful motion;
- excellent mobile composition;
- disciplined claims;
- authentic product proof;
- accessibility;
- performance;
- meticulous typography and interaction detail.

Recognition cannot be guaranteed. The measurable objective is an unmistakably Widian experience that senior buyers understand, trust and remember.

## 16. Source precedence

When information conflicts, use this order:

1. Deployed and manually verified product behaviour
2. Current authoritative Widian repository documentation
3. Tested implementation on the relevant branch
4. Approved website context and specification
5. Historical strategy and mock-up material
6. Assumptions

Never elevate a proposed feature into current public functionality.
