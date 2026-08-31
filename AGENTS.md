# AGENTS.md — Widian Marketing Website

These cross-harness instructions apply to the entire marketing-website repository. **Claude Code in VS Code is the primary harness**; read `CLAUDE.md` first when operating through Claude Code. Codex may support selected work. GitHub/Copilot custom agents are not part of the operating model.

## Mission

Build a distinctive, mobile-first public website for Widian around:

> **One building record. Every responsible party. Verified from inspection to closure.**

## One Widian

`widian.tech` and the Widian application are separate repositories/deployments but one brand and product story. The website explains, proves and converts; the application performs operational work.

Shared doctrine is defined in `docs/WIDIAN_JOINED_UP_BRAND_PRODUCT_DOCTRINE.md`. Cross-repository impact is governed by `docs/CROSS_REPOSITORY_GOVERNANCE.md`.

Circular Compliance extends rather than replaces the Building Record strategy:

`Know → Inspect → Act → Verify → Prove → Monitor → repeat`.

Individual findings/Compliance Cases can close; the Building Record persists. Circular Compliance is not a legal compliance status or certification.

## Mandatory source order

Before changing code or public copy, read the smallest relevant set from:

1. `CLAUDE.md` when using Claude Code
2. `docs/README.md`
3. `docs/WIDIAN_MARKETING_WEBSITE_CONTEXT.md`
4. `docs/WIDIAN_MARKETING_WEBSITE_SPEC.md`
5. `docs/WIDIAN_JOINED_UP_BRAND_PRODUCT_DOCTRINE.md`
6. `docs/CIRCULAR_COMPLIANCE_WEBSITE_SPEC.md` when lifecycle/ecosystem positioning is relevant
7. `docs/ARCHITECTURE.md`
8. `docs/CLAIMS_REGISTER.md`
9. `docs/PROGRESS_TRACKER.md`

Claude Code specialist subagents live under `.claude/agents/`. `docs/AGENT_ROLES_AND_HANDOFFS.md` defines review perspectives and handoffs.

## Core invariants

1. The marketing site is a separate repository and deployment.
2. Public domain: `widian.tech`.
3. Production application: `app.widian.tech`.
4. Staging application: `staging.widian.tech`.
5. Do not expose application credentials, service-role keys or staging data.
6. Do not introduce a direct production-database dependency for normal marketing pages.
7. Do not invent product functionality, users, customers, statistics, testimonials, certifications or awards.
8. Do not imply Widian certifies statutory compliance.
9. Contractor completion, independent checking, client verification and closure remain distinct.
10. Hashing must not be described as making all information legally tamper-proof.
11. Future functionality must be visibly labelled.
12. Preserve WCAG 2.2 AA and reduced-motion requirements.
13. Material shared positioning, terminology, lifecycle, brand-token, domain/auth or capability-claim changes require a cross-repository impact check.

## Brand and copy invariants

Use the approved Widian shield/wordmark, Archivo, IBM Plex Sans and IBM Plex Mono unless a documented decision supersedes them. Navy is `#141D2B`; Ember is `#E8431A` and must remain scarce. Experience principle: **quiet authority**. The Widian Thread represents continuity of identity, evidence, responsibility and verification; it is not decoration.

Use British English. Be direct, specific, unhurried, evidenced and plain. Avoid generic SaaS filler, fearmongering and faux-regulatory language. Preserve the narrative hierarchy: Building Record first, verified closure as differentiation, Circular Compliance as the continuing model. Material public claims require Claims Register/Product Truth review.

## Page differentiation

Shared components must not make all pages look alike. Each page needs its own visitor question, narrative sequence, layout grammar, meaningful interaction and conversion argument. Do not reduce every page to a dark hero, feature grid and CTA.

## Agent Council

In Claude Code, use `.claude/agents/website-orchestrator.md` for broad or ambiguous work and selectively delegate to Brand & Creative, Senior Copywriter, Product Truth & Claims, SEO & Content, Conversion & Journey, Privacy & Analytics, Website Engineer and Website QA & Release subagents.

Do not require every specialist for trivial edits. Product/security claims, positioning, material art direction, analytics/privacy, domain/auth and cross-repository changes require independent review.

## Implementation approach

Work in small reviewable slices; inspect current changes before editing; preserve unrelated work; prefer server rendering; add client JavaScript only for purposeful interaction; maintain accessibility and reduced motion; avoid unnecessary dependencies; and document consequential decisions.

## Required gates

Use the repository's actual commands. Relevant work should cover formatting if configured, lint, TypeScript, tests, production build, appropriate browser checks, responsive inspection, keyboard/reduced-motion inspection and claims review where applicable. Never report a gate as passing unless it actually ran.

## Progress and stop conditions

Update `docs/PROGRESS_TRACKER.md` after implementation slices and update Decisions, Claims Register and Content Asset Inventory when relevant. Stop for owner input when environment/branch is unclear, claims cannot be substantiated, authentication/DNS would change, credentials/contracts are required, a visual implies unavailable functionality, destructive operations are needed, user data could be exposed, or shared doctrine would diverge.

## Definition of done

Work is complete only when its acceptance criteria are met, product claims are supportable, mobile/desktop behaviour is intentional, accessibility/reduced-motion implications are addressed, relevant checks pass, documentation is updated and material cross-repository impacts are resolved.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
