# Widian Cross-Repository Governance

## Repositories

- Application: `TonyMelling/widian`
- Public website: `TonyMelling/widian.tech`

They remain separate Git repositories/deployments with different operational risks, but express one Widian product and brand.

## Recommended Local Workspace

Use a VS Code multi-root workspace containing both local repository folders. This provides one working environment without creating a monorepo.

Visibility is not authority. Claude Code must determine one of three modes before substantive work:

- **APP** — edit `widian` only.
- **WEBSITE** — edit `widian.tech` only.
- **CROSS-WIDIAN** — coordinated change; edit both only when explicitly in scope, and preserve separate branches/commits/PRs.

Each repository's own `CLAUDE.md`, `.claude/agents/`, context/specs and verification gates remain authoritative for its implementation.

## Shared Contract

Keep aligned: Widian category/positioning; Building Record; verified closure; Circular Compliance; Widian Thread; approved brand assets/tokens; product terminology; public product/security/assurance claims; and `widian.tech`, `app.widian.tech`, `staging.widian.tech` responsibilities.

## Product → Website Change

When application work materially changes a public capability/limitation:

1. verify the application change has landed;
2. emit `WEBSITE SYNC REQUIRED` with affected claim/journey/visual;
3. assess affected website pages/copy/claims;
4. update Claims Register before/with public copy;
5. update screenshots/evidence where necessary;
6. do not publish dependent present-tense claims until deployment reality supports them.

## Website → Product Change

When marketing proposes a new promise, terminology or experience concept:

1. Product Truth checks application support;
2. unsupported functionality remains clearly future/vision language;
3. if product change is required, establish CROSS-WIDIAN scope and create/approve the product spec in the application repository;
4. never code around a product gap in marketing or make the website the source of implementation truth.

## CROSS-WIDIAN Delivery

Plan the shared outcome once, then split into explicit APP and WEBSITE slices. Application-dependent claims should normally follow verified application delivery. Each repo runs its own QA/release gate. Completion requires reconciliation of terminology, claims, screenshots and any shared design meaning.

## Brand Change

Changes to logo, typography, primary colour tokens, status semantics or Widian Thread meaning require assessment in both repositories and downstream report/evidence surfaces.

## Domain/Auth Change

Any change involving public/app/staging domains, Clerk/auth redirects, cookies or cross-domain hand-off is HIGH risk and requires architecture + security review in affected repositories.

## Source of Truth

The website never becomes source of truth for application functionality. Deployed/current application evidence is authoritative for capability claims. The application does not become source of truth for marketing editorial content, SEO or conversion architecture. Shared doctrine is intentionally mirrored; implementation detail remains local.

## Codex

Claude Code is the primary harness. Codex may be used as an independent architecture/security/debugging/review specialist. Its output is advisory until reconciled by the relevant repository's Claude workflow and verification.

## Release Check

For material cross-repository changes ask: Did application behaviour change? Do public claims/screenshots need changing? Did terminology/design tokens change? Did domain/auth relationships change? Is either repository now stale? If yes, record and complete the companion work before declaring the joined-up initiative complete.
