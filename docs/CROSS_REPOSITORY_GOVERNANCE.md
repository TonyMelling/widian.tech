# Widian Cross-Repository Governance

## Repositories

- Application: `TonyMelling/widian`
- Public website: `TonyMelling/widian.tech`

They are separate deployments with different operational risks, but they express one Widian product and brand.

## Shared Contract

The following concepts must remain aligned:

- Widian category and positioning;
- Building Record definition;
- verified-closure semantics;
- Circular Compliance definition;
- Widian Thread experience meaning;
- approved brand assets/tokens;
- product terminology;
- public product/security/assurance claims;
- `widian.tech`, `app.widian.tech` and `staging.widian.tech` domain responsibilities.

## Product → Website Change

When application work materially changes a public capability or limitation:

1. verify the application change has landed;
2. assess website pages/copy/claims affected;
3. update the website Claims Register before or with public copy;
4. update screenshots/product evidence where necessary;
5. do not publish until deployment reality supports the claim.

## Website → Product Change

When marketing proposes a new promise, terminology or experience concept:

1. Product Truth checks whether the application supports it;
2. Product Guardian checks strategic alignment;
3. unsupported functionality remains future/vision language;
4. if the proposal requires product change, create/approve a product spec in the application repository rather than coding around the gap in marketing.

## Brand Change

Changes to logo, typography, primary colour tokens, status semantics or Widian Thread meaning require assessment in both repositories and downstream report/evidence surfaces.

## Domain/Auth Change

Any change involving `widian.tech`, `app.widian.tech`, `staging.widian.tech`, Clerk/auth redirects, cookies or cross-domain hand-off is HIGH risk and requires architecture + security review in the affected repository/repositories.

## Source of Truth

The website must never become the source of truth for application functionality. Deployed/current application evidence remains authoritative for capability claims.

The application should not become the source of truth for marketing editorial content, SEO strategy or conversion architecture.

Shared doctrine should be intentionally mirrored/linked in both repositories. Implementation-specific detail remains local.

## Release Check

For material cross-repository changes, the Release Guardian must answer:

- Did application behaviour change?
- Did public claims need changing?
- Did terminology or design tokens change?
- Did domain/auth relationships change?
- Is the other repository now stale?

If yes, record the required companion change before declaring the joined-up work complete.
