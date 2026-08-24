# Building Record — Copy Draft

**Status:** Skeleton only — not yet through `CONTENT_AND_COPY_PLAN.md`'s content workflow (no copywriter draft, no Product Truth or Brand Strategist review). This page did not exist in the original release-one sitemap (`WIDIAN_MARKETING_WEBSITE_SPEC.md` §2) — it was added 2026-08-24 as a separate page from `/platform`, per that day's redesign decision recorded in `DECISIONS.md`.

**Depends on:** `CLAIMS_REGISTER.md`, `docs/copy/platform.md` (this page must not duplicate Platform's nine-layer anatomy explainer).

---

## 1. Page objective

Let a visitor move through the record the way a real user would — from a whole portfolio down to one specific finding — to make "one building record" concrete as a *navigable structure*, not just a list of layers (that's Platform's job).

## 2. Primary audience

Same as Platform: compliance leaders and property/asset directors, plus procurement/IT reviewers who want to see the data model's shape.

## 3. Visitor question

*Not yet finalised — candidate:* How do you get from a whole portfolio down to one finding, without losing the building it belongs to?

## 4. Drill-down levels — data-model correction needed before this page is written

The redesign brief that proposed this page described the drill-down as:

> Portfolio → Building → Location → Asset → Inspection → Finding → Case → Closure

**This does not match the verified schema.** A repository check on 2026-08-24 (same authorisation basis as `CLAIMS_REGISTER.md`) found no `location` or `case` entities in `scripts/sql/0000_base_schema.sql`. The actual FK-linked chain is:

> Organisation → Building → Element/Asset → Inspection → Finding → Remedial Work (work order)

with closure reached via the independent-checking / client-verification path already described in `docs/copy/platform.md` §6.7–6.9, not a distinct "Case" entity. Any copy for this page must use the real chain above, or be relabelled with Product Truth's confirmation if "Location" and "Case" turn out to describe something not yet surfaced in the schema I inspected.

## 5. Required interaction

A portfolio-to-building-to-element-to-finding drill-down, per the approved 2026-08-24 decision to proceed with **synthetic/illustrative demonstration data**, clearly labelled as such (not real customer data) — this unblocks the interaction without waiting on real screenshot approval. Each level should show what it is, then let the visitor step to the next level down, ending at a finding and its route to closure (cross-reference `/how-it-works` rather than re-explaining the lifecycle here).

## 6. Relationship to Platform

Platform explains *what each layer records and why it persists* (static anatomy). Building Record explains *how a user actually moves through the structure* (navigation/drill-down). Keep these distinct — do not let this page become a second copy of Platform's layer list.

## 7. Outstanding before this page can be built

- Visitor question, headline and full narrative sequence not yet drafted.
- Synthetic demonstration dataset (portfolio/building/element/finding names and states) needs to be designed — illustrative, clearly labelled, not modelled on any real customer.
- SEO title/description not yet drafted.
- No claims-register row exists yet for "drill-down navigation" as a marketing demonstration — add one before publishing, scoped to "illustrative demonstration," not "live product view."
