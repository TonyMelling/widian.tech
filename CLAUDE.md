# CLAUDE.md - Widian Marketing Website

Claude Code is the primary coding-agent harness for this repository. This file routes work; it does not replace the authoritative project documents.

## Read before acting

Read these files in order before changing public copy, visual direction or implementation:

1. `AGENTS.md`
2. `docs/README.md`
3. `docs/WIDIAN_MARKETING_WEBSITE_CONTEXT.md`
4. `docs/CIRCULAR_COMPLIANCE_CONTEXT.md`
5. `docs/WIDIAN_MARKETING_WEBSITE_SPEC.md`
6. `docs/CIRCULAR_COMPLIANCE_WEBSITE_SPEC.md`
7. `docs/PARALLAX_MOTION_AND_INTERACTION_SPEC.md`
8. `docs/ARCHITECTURE.md`
9. `docs/CLAIMS_REGISTER.md`
10. `docs/PROGRESS_TRACKER.md`

Use `docs/AGENT_ROLES_AND_HANDOFFS.md` and the role prompts in `.claude/agents/` for specialist reviews.

## Current objective

Turn the approved Circular Compliance strategy into a distinctive, mobile-first Widian website. The homepage should use editorial pacing, sticky scenes, depth and scroll-linked transitions inspired by premium system-storytelling sites such as Arc'teryx System 0, without copying their code, assets, copy or composition.

The experience must remain recognisably Widian:

- quiet technical authority;
- one persistent Building Record;
- one restrained Ember thread representing continuity and chain of custody;
- real product proof rather than fabricated dashboards;
- British English;
- WCAG 2.2 AA;
- fast, indexable and usable without motion.

## Authoritative positioning

**Category:** Circular Compliance

**Campaign promise:** Close the loop on compliance.

**Core proposition:** One building record. Every responsible party. Verified from inspection to closure.

**Formal definition:**

> In fire safety and asset management, Circular Compliance replaces the traditional linear routine of static PDF inspections and disconnected repairs with a continuous, closed-loop lifecycle where identified defects automatically drive their own trackable remediation, contractor sign-off, and re-inspection within a single digital chain of custody-ensuring an unbroken Golden Thread and permanent audit readiness.

The formal definition records the intended operating model. Public wording must still pass the Claims Register and Product Truth review. Do not present roadmap capability as deployed fact.

## Non-negotiable product distinctions

- A finding is not remediation.
- Contractor completion is not independent verification.
- Independent verification is not client acceptance.
- Client acceptance is not statutory certification.
- Closure requires the configured evidence and decision gates.
- A failed verification returns to action without erasing prior history.
- The next survey opens the existing record; it does not destroy or silently replace it.

## Creative guardrails

Do not use:

- generic feature-card pages;
- purple SaaS gradients, glassmorphism or decorative glow;
- glowing AI brains or control-room imagery;
- generated interfaces presented as product evidence;
- excessive Ember or continuous high-energy animation;
- the phrase `Join the revolution` as default production copy;
- `Survey once` where it could imply no future physical reassessment;
- copy or assets taken from the Arc'teryx reference.

The supplied concept imagery is discovery material only. Recreate approved ideas with accurate Widian assets, data, UI and claims.

## Work protocol

1. Inspect the current branch and working tree.
2. Name the implementation slice and files to be changed.
3. Use the smallest specialist set required by `docs/AGENT_ROLES_AND_HANDOFFS.md`.
4. Implement one reviewable vertical slice at a time.
5. Test desktop, mobile, keyboard and reduced-motion behaviour.
6. Update `docs/PROGRESS_TRACKER.md`, `docs/DECISIONS.md`, `docs/CLAIMS_REGISTER.md` and `docs/CONTENT_ASSET_INVENTORY.md` where relevant.
7. Report only checks actually run.

Stop when product truth, approved assets, legal meaning, environmental target or ownership is unclear.
