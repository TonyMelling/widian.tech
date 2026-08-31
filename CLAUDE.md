# CLAUDE.md — Widian.tech

## Primary harness

This repository is operated primarily through **Claude Code in VS Code**. Claude Code is the default implementation and orchestration harness. Codex may be used as a secondary reviewer or specialist when explicitly useful. GitHub Copilot agents and GitHub custom agents are not part of the operating model.

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

- `website-orchestrator` — complex cross-discipline website work.
- `brand-creative-director` — brand, visual language and page art direction.
- `senior-copywriter` — website copy and messaging.
- `product-truth-claims` — product claims and application-truth review.
- `seo-content-strategist` — search architecture and content strategy.
- `conversion-journey-strategist` — conversion paths and buyer journeys.
- `privacy-analytics-reviewer` — UK GDPR, analytics and form-data review.
- `website-engineer` — implementation specialist.
- `website-qa-release` — final quality/release review.

For a substantial feature or redesign, the normal flow is:

`orchestrator → relevant specialists → website-engineer → website-qa-release`

Do not invoke every specialist automatically. Use the minimum set needed.

## Cross-repository rule

The Widian application is the authority for implemented product behaviour. The marketing website must never turn strategy, mock-ups or planned functionality into present-tense claims.

When website work depends on application behaviour that cannot be verified from this repository, mark it as requiring application-product verification rather than guessing.

When a website change exposes a credible product requirement, record it as a cross-repository implication rather than silently redefining the application.

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

Before a substantial change:

1. inspect relevant code and docs;
2. identify the user/business outcome;
3. identify affected product claims and cross-repository implications;
4. make the smallest coherent change;
5. run the repository's real validation commands;
6. review the result against accessibility, responsive behaviour, claims and product truth;
7. update `docs/PROGRESS_TRACKER.md`, `docs/DECISIONS.md`, `docs/CLAIMS_REGISTER.md` and asset documentation when relevant.

Do not claim a test or gate passed unless it was actually run.

## Codex support

Codex is secondary. Claude Code may recommend a Codex review for unusually difficult architecture, security, debugging or independent-review work, but do not assume Codex is available and do not block normal work on it. Any Codex output is advisory until reconciled with this repository's authoritative documentation and tested implementation.
