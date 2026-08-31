# CLAUDE.md — Widian.tech

## Primary harness

This repository is operated primarily through **Claude Code in VS Code**. Claude Code is the default implementation and orchestration harness. Codex may be used as a secondary reviewer or specialist when explicitly useful. GitHub Copilot agents and GitHub custom agents are not part of the operating model.

## Working modes

Determine scope before acting:

- **WEBSITE** — work is confined to `widian.tech`; this is the default here.
- **APP** — work belongs only in the `widian` application; do not implement it from this repository.
- **CROSS-WIDIAN** — coordinated work affects both repositories. Plan the shared outcome, then split APP and WEBSITE implementation into their own branches/commits/PRs and use each repository's own Claude agents and gates.

If both repositories are visible in a VS Code multi-root workspace, visibility is not authority. Do not edit the sibling repository unless the user/task explicitly establishes CROSS-WIDIAN scope.

## Mission

Build and maintain a distinctive, mobile-first public website for Widian that remains joined to the actual Widian product and its verified product truth.

Central proposition:

> **One building record. Every responsible party. Verified from inspection to closure.**

Shared product/brand hierarchy:

1. **Building Record** — persistent organising object.
2. **Verified Closure** — differentiated case outcome.
3. **Circular Compliance** — Know → Inspect → Act → Verify → Prove → Monitor → repeat.
4. **Widian Thread** — semantic experience language connecting identity, evidence, responsibility and verification.

## Required reading before substantive work

Read the smallest relevant set, beginning with:

1. `CLAUDE.md`
2. `AGENTS.md`
3. `docs/WIDIAN_MARKETING_WEBSITE_CONTEXT.md`
4. `docs/WIDIAN_MARKETING_WEBSITE_SPEC.md`
5. `docs/WIDIAN_JOINED_UP_BRAND_PRODUCT_DOCTRINE.md`
6. `docs/CROSS_REPOSITORY_GOVERNANCE.md`
7. `docs/CLAIMS_REGISTER.md`
8. `docs/PROGRESS_TRACKER.md`

Use `docs/AGENT_ROLES_AND_HANDOFFS.md` and `.claude/agents/` for specialist routing.

## Claude Code orchestration

Use subagents selectively when a task benefits from isolated specialist context, independent review or parallel investigation. For simple edits, work directly.

Available project subagents are defined in `.claude/agents/`:

- `website-orchestrator` — complex/cross-discipline website work.
- `brand-creative-director` — brand, visual language and page art direction.
- `senior-copywriter` — website copy and messaging.
- `product-truth-claims` — product claims and application-truth review.
- `seo-content-strategist` — search architecture and content strategy.
- `conversion-journey-strategist` — conversion paths and buyer journeys.
- `privacy-analytics-reviewer` — UK GDPR, analytics and form-data review.
- `website-engineer` — implementation specialist.
- `website-qa-release` — final quality/release review.

For a substantial feature/redesign: `orchestrator → relevant specialists → website-engineer → website-qa-release`. Use the minimum set needed.

## Cross-repository contract

The Widian application is the authority for implemented product behaviour. The marketing website must never turn strategy, mock-ups or planned functionality into present-tense claims.

For WEBSITE work, if application truth cannot be verified, mark `APP VERIFICATION REQUIRED` rather than guessing.

For CROSS-WIDIAN work:

1. define the shared outcome and terminology;
2. separate APP and WEBSITE acceptance criteria;
3. implement/verify application-dependent capability before publishing dependent present-tense claims;
4. run each repository's own QA/release gates;
5. preserve separate Git branches/commits/PRs;
6. reconcile claims, screenshots and terminology before completion.

## Core invariants

- Public marketing: `widian.tech`.
- Production application: `app.widian.tech`.
- Authorised staging/demo: `staging.widian.tech`.
- No direct production-database dependency for ordinary marketing pages.
- Never expose application credentials, service-role keys or staging data.
- Never invent functionality, users, customers, statistics, testimonials, certifications or awards.
- Widian does not certify statutory compliance.
- Contractor completion, independent checking, client verification and closure remain distinct.
- Future functionality must be visibly labelled.
- Preserve WCAG 2.2 AA and reduced-motion support.
- British English throughout public copy and documentation.

## Brand invariants

Use the approved Widian shield/wordmark and documented brand tokens. Experience principle: **quiet authority**. Ember is scarce emphasis. Avoid generic SaaS visual language, meaningless gradients, glassmorphism and decorative technology motifs.

The Widian Thread must communicate genuine continuity in the record; it is not merely an orange decorative line.

## Working method

Before a substantial change: inspect relevant code/docs; identify the user/business outcome; identify claims and cross-repo implications; make the smallest coherent change; run real validation; review accessibility/responsive/claims/product truth; update progress/decisions/claims/assets where relevant. Never claim a test passed unless it ran.

## Codex support

Codex is secondary and advisory. It is useful for unusually difficult architecture, security, debugging or independent review, but Claude Code remains the primary orchestrator and must reconcile any Codex findings with authoritative docs and tested implementation.
