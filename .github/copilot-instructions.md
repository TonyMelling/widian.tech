# Widian.tech Repository Instructions

Read `AGENTS.md` before changing the Widian marketing website.

For joined-up product/brand work also read:

- `docs/WIDIAN_MARKETING_WEBSITE_CONTEXT.md`
- `docs/WIDIAN_JOINED_UP_BRAND_PRODUCT_DOCTRINE.md`
- `docs/CIRCULAR_COMPLIANCE_WEBSITE_SPEC.md`
- `docs/CROSS_REPOSITORY_GOVERNANCE.md`
- `docs/CLAIMS_REGISTER.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/DECISIONS.md`
- `docs/PROGRESS_TRACKER.md`

## One Widian

The website and application are separate repositories/deployments but one brand/product story. The website explains and converts; the application performs the operational work.

Never invent functionality to improve marketing. Current capability claims must be downstream of verified application truth.

## Shared concepts

- Building Record = persistent organising object.
- Verified closure remains distinct from contractor completion.
- Circular Compliance = `Know → Inspect → Act → Verify → Prove → Monitor → repeat`.
- The Widian Thread represents continuity of identity, evidence, responsibility and verification; it is not decoration.
- Circular Compliance is not a legal compliance status or certification.

## Before coding/copy

Classify the change and select the relevant website specialists. Claims, positioning, visual system, privacy/analytics, SEO and production architecture changes require independent review perspectives.

Material changes to shared positioning, terminology, lifecycle, brand tokens, domain/auth or product claims require a cross-repository impact check under `docs/CROSS_REPOSITORY_GOVERNANCE.md`.

## Quality

Preserve British English, WCAG 2.2 AA, mobile-first composition, reduced motion, performance, SEO, UK GDPR and the existing claims discipline. Do not let every page collapse into the same SaaS layout.
