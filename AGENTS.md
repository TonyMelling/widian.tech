# AGENTS.md — Widian Marketing Website

These instructions apply to the entire marketing-website repository.

## Mission

Build a distinctive, mobile-first public website for Widian that establishes the category:

> **One building record. Every responsible party. Verified from inspection to closure.**

The website must be credible to senior fire-safety, property and compliance professionals while feeling like a technically advanced product.

## Mandatory source order

Before changing code or public copy, read:

1. `docs/README.md`
2. `WIDIAN_MARKETING_WEBSITE_CONTEXT.md`
3. `WIDIAN_MARKETING_WEBSITE_SPEC.md`
4. `ARCHITECTURE.md`
5. `CLAIMS_REGISTER.md`
6. `PROGRESS_TRACKER.md`

Read additional role-specific documents as directed by `AGENT_ROLES_AND_HANDOFFS.md`.

## Core invariants

1. The marketing site is a separate repository and deployment.
2. The public domain is `widian.tech`.
3. The production application belongs at `app.widian.tech`.
4. The staging application remains at `staging.widian.tech`.
5. Do not expose application credentials, service-role keys or staging data.
6. Do not introduce a direct production-database dependency for normal marketing pages.
7. Do not invent product functionality, users, customers, statistics, testimonials, certifications or awards.
8. Do not imply that Widian certifies statutory compliance.
9. Contractor completion, independent checking, client verification and closure must remain distinct.
10. Hashing must not be described as making all information legally tamper-proof.
11. Future functionality must be visibly labelled.
12. Preserve WCAG 2.2 AA and reduced-motion requirements.

## Brand invariants

- Use the approved Widian shield and wordmark.
- Do not recreate the wordmark as live text.
- Use Archivo, IBM Plex Sans and IBM Plex Mono unless a documented decision supersedes them.
- Use Navy `#141D2B` and Ember `#E8431A`.
- Ember is scarce emphasis, not a general decoration colour.
- The experience principle is **quiet authority**.
- Do not use generic SaaS styling, purple glows, meaningless gradients, glassmorphism or excessive rounded cards.

## Copy invariants

- British English.
- Direct, specific, unhurried, evidenced and plain.
- Headlines may be bold; supporting copy must substantiate them.
- Avoid fearmongering and faux-regulatory language.
- Avoid “all-in-one”, “seamless”, “world-class”, “streamline your workflow” and similar filler.
- Every public claim must be recorded in `CLAIMS_REGISTER.md`.
- Copy changes affecting product or security claims require Product Truth and Claims Review.

## Page differentiation rule

Shared components must not make all pages look alike.

Each page requires:

- a distinct visitor question;
- a unique narrative sequence;
- a page-specific layout grammar;
- a meaningful dominant interaction;
- page-specific motion;
- a different conversion argument.

Do not implement every page as a dark hero followed by a feature grid and CTA.

## Implementation approach

1. Work in small, reviewable slices.
2. State the intended files and behaviour before each major slice.
3. Inspect current working-tree changes before editing.
4. Preserve unrelated work.
5. Use reusable components without flattening page art direction.
6. Prefer server-rendered content.
7. Add client JavaScript only for purposeful interaction.
8. Prefer CSS and the Web Animations API over a large animation dependency.
9. Reserve dimensions for images and media.
10. Do not add dependencies without documenting the reason in `DECISIONS.md`.

## Required gates

Use the repository’s actual commands. A normal implementation gate must include:

1. formatting, if configured;
2. lint;
3. TypeScript;
4. unit/component tests;
5. production build;
6. relevant browser tests;
7. mobile, tablet and desktop inspection;
8. keyboard inspection;
9. reduced-motion inspection;
10. claims review for changed public copy.

Do not report a gate as passing if it was not run.

## Progress updates

After every implementation slice:

1. update `PROGRESS_TRACKER.md`;
2. record new architectural or creative decisions in `DECISIONS.md`;
3. update `CLAIMS_REGISTER.md` when claims change;
4. update `CONTENT_ASSET_INVENTORY.md` when assets change;
5. record checks actually run and their results.

## Specialist review requirements

The following changes cannot be self-approved by the implementing agent:

| Change | Required reviewer |
|---|---|
| Primary headline or positioning | Brand Strategist + Senior Copywriter |
| Product-functionality claim | Product Truth Reviewer |
| Security or assurance claim | Security/Claims Reviewer |
| Visual system or page art direction | Creative Director |
| Motion affecting comprehension | Motion Designer + Accessibility Reviewer |
| Form or analytics data | Privacy/Analytics Reviewer |
| Production architecture | Senior Frontend/Platform Engineer |
| Final launch | QA Lead plus named project owner |

One human may perform several roles, but the review perspectives must remain explicit.

## Stop conditions

Stop and request a decision when:

- the repository branch or target environment is unclear;
- an approved logo asset is missing;
- a product claim cannot be substantiated;
- a change would affect application authentication or DNS;
- a third-party service requires new credentials or a contract;
- a proposed visual implies unavailable functionality;
- a destructive operation is required;
- user data could be exposed;
- copy approval conflicts with product truth.

## Definition of done

A page is complete only when:

- copy is sufficiently developed;
- product claims are approved;
- mobile and desktop composition are intentional;
- animation has a reduced-motion equivalent;
- keyboard and screen-reader behaviour are acceptable;
- metadata is unique;
- imagery is licensed or approved;
- analytics are appropriate;
- relevant automated and manual checks pass;
- documentation is updated.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
