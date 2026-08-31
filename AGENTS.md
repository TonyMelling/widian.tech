# AGENTS.md — Widian Marketing Website

These instructions apply to the entire marketing-website repository.

## Mission

Build a distinctive, mobile-first public website for Widian that establishes the category:

> **One building record. Every responsible party. Verified from inspection to closure.**

The website must be credible to senior fire-safety, property and compliance professionals while feeling like a technically advanced product.

## One Widian

`widian.tech` and the Widian application are separate repositories/deployments but one brand and product story. The website explains, proves and converts; the application performs operational work.

Shared doctrine is defined in `docs/WIDIAN_JOINED_UP_BRAND_PRODUCT_DOCTRINE.md`. Cross-repository impact is governed by `docs/CROSS_REPOSITORY_GOVERNANCE.md`.

Circular Compliance extends, rather than replaces, the Building Record strategy:

`Know → Inspect → Act → Verify → Prove → Monitor → repeat`.

Individual findings/Compliance Cases can close; the Building Record persists. Circular Compliance is not a legal compliance status or certification.

## Mandatory source order

Before changing code or public copy, read:

1. `docs/README.md`
2. `docs/WIDIAN_MARKETING_WEBSITE_CONTEXT.md`
3. `docs/WIDIAN_MARKETING_WEBSITE_SPEC.md`
4. `docs/WIDIAN_JOINED_UP_BRAND_PRODUCT_DOCTRINE.md`
5. `docs/CIRCULAR_COMPLIANCE_WEBSITE_SPEC.md` when lifecycle/ecosystem positioning is relevant
6. `docs/ARCHITECTURE.md`
7. `docs/CLAIMS_REGISTER.md`
8. `docs/PROGRESS_TRACKER.md`

Read additional role-specific documents as directed by `docs/AGENT_ROLES_AND_HANDOFFS.md` and the custom agent profiles under `.github/agents/`.

## Core invariants

1. The marketing site is a separate repository and deployment.
2. The public domain is `widian.tech`.
3. The production application belongs at `app.widian.tech`.
4. The staging application remains at `staging.widian.tech`.
5. Do not expose application credentials, service-role keys or staging data.
6. Do not introduce a direct production-database dependency for normal marketing pages.
7. Do not invent product functionality, users, customers, statistics, testimonials, certifications or awards.
8. Do not imply that Widian certifies statutory compliance.
9. Contractor completion, independent checking, client verification and closure remain distinct.
10. Hashing must not be described as making all information legally tamper-proof.
11. Future functionality must be visibly labelled.
12. Preserve WCAG 2.2 AA and reduced-motion requirements.
13. Material shared positioning, terminology, lifecycle, brand-token, domain/auth or capability-claim changes require a cross-repository impact check.

## Brand invariants

- Use the approved Widian shield and wordmark.
- Do not recreate the wordmark as live text.
- Use Archivo, IBM Plex Sans and IBM Plex Mono unless a documented decision supersedes them.
- Use Navy `#141D2B` and Ember `#E8431A`.
- Ember is scarce emphasis, not a general decoration colour.
- The experience principle is **quiet authority**.
- The Widian Thread represents continuity of identity, evidence, responsibility and verification; it is not decoration.
- Do not use generic SaaS styling, purple glows, meaningless gradients, glassmorphism, generic AI-brain/control-room imagery or excessive rounded cards.

## Copy invariants

- British English.
- Direct, specific, unhurried, evidenced and plain.
- Headlines may be bold; supporting copy must substantiate them.
- Avoid fearmongering and faux-regulatory language.
- Avoid “all-in-one”, “seamless”, “world-class”, “streamline your workflow” and similar filler.
- Every material public claim must be recorded/reviewed through `docs/CLAIMS_REGISTER.md`.
- Copy changes affecting product or security claims require Product Truth and Claims Review.
- Preserve the narrative hierarchy: Building Record first, verified closure as differentiation, Circular Compliance as the continuing model.

## Page differentiation rule

Shared components must not make all pages look alike. Each page requires a distinct visitor question, narrative sequence, layout grammar, meaningful dominant interaction, page-specific motion and conversion argument.

Do not implement every page as a dark hero followed by a feature grid and CTA.

## Agent Council

Use the Website Orchestrator for broad or ambiguous work. Relevant specialist perspectives include Brand & Creative, Senior Copywriter, Product Truth & Claims, SEO & Content, Conversion & Journey, Privacy & Analytics, Website Engineer and Website QA & Release.

Do not require every specialist for trivial edits. Product/security claims, positioning, material art direction, analytics/privacy, domain/auth and cross-repository changes require independent review.

## Implementation approach

1. Work in small, reviewable slices.
2. State intended files and behaviour before each major slice.
3. Inspect current working-tree changes before editing.
4. Preserve unrelated work.
5. Use reusable components without flattening page art direction.
6. Prefer server-rendered content.
7. Add client JavaScript only for purposeful interaction.
8. Prefer CSS/Web Animations API over a large animation dependency.
9. Reserve dimensions for images/media.
10. Do not add dependencies without documenting the reason in `docs/DECISIONS.md`.

## Required gates

Use the repository’s actual commands. A normal implementation gate must include formatting if configured; lint; TypeScript; unit/component tests; production build; relevant browser tests; mobile/tablet/desktop inspection; keyboard inspection; reduced-motion inspection; and claims review for changed public copy.

Do not report a gate as passing if it was not run.

## Progress updates

After every implementation slice update `docs/PROGRESS_TRACKER.md`; record architectural/creative decisions in `docs/DECISIONS.md`; update `docs/CLAIMS_REGISTER.md` when claims change; update `docs/CONTENT_ASSET_INVENTORY.md` when assets change; and record checks actually run/results.

## Stop conditions

Stop and request a decision when the branch/environment is unclear; approved logo asset is missing; a claim cannot be substantiated; application authentication/DNS would change; a third-party service requires credentials/contract; a visual implies unavailable functionality; a destructive operation is required; user data could be exposed; copy conflicts with product truth; or shared cross-repository doctrine would diverge.

## Definition of done

A page is complete only when copy is developed; product claims are approved; mobile/desktop composition is intentional; animation has reduced-motion equivalent; keyboard/screen-reader behaviour is acceptable; metadata is unique; imagery is licensed/approved; analytics are appropriate; relevant automated/manual checks pass; documentation is updated; and any material cross-repository impact has been recorded/resolved.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
