# Cookies — Copy Draft (skeleton, blocked)

**Status:** Structurally blocked. No privacy owner is assigned (D-010, D-012, parked at user's direction 2026-08-24). This file lists the required content and known technology inventory so far; final wording needs privacy-owner/legal review before publish.

**Depends on:** `PRIVACY_AND_UK_GDPR_PLAN.md` §Cookies and analytics, `DECISIONS.md` D-011.

---

## 1. Page objective

Explain what cookies/local storage the site uses, and provide accept/reject/preference controls where legally required.

## 2. Visitor question

What is this site tracking, and can I control it?

## 3. Known technology inventory so far

| Technology | Category | Status |
|---|---|---|
| Google Analytics 4 (Consent Mode) | Non-essential — analytics | Decided (D-011); requires consent before loading, with equally prominent accept/reject choices per `PRIVACY_AND_UK_GDPR_PLAN.md` §Cookies and analytics |
| Any session/auth cookie | N/A | The marketing site has no visitor accounts or authentication (`ARCHITECTURE.md` §18 non-goals) — none expected |
| Calendar/scheduling embed (Book a Demo) | Potentially non-essential, provider-dependent | Provider not yet selected (see `docs/copy/book-a-demo.md` §14) — must be scanned once chosen, per `PRIVACY_AND_UK_GDPR_PLAN.md` "re-scan staging and production after supplier or code changes" |

This inventory must be re-scanned against the actual deployed site before publish — a documentation-derived list is a starting point, not a substitute for the required technical cookie scan (`PRIVACY_AND_UK_GDPR_PLAN.md` §Cookies and analytics, item 1).

## 4. What CAN be said now

Structure only:

- A cookie/consent banner is required before GA4 loads, offering equally prominent accept and reject choices.
- A preferences control must let visitors change their choice later, not just at first visit.
- No embedded video, chat or social widgets should load before a consent decision, if any are added later.

Specific retention periods, legal basis wording and the exact banner copy are **blocked** until the privacy owner is assigned and the technical cookie scan is run against a real deployment.

## 5. SEO title and description

**Title:** `Cookie Notice | Widian` *(placeholder pattern only)*
**Description:** *(cannot be written until the notice exists)*

## 6. Claims requiring further evidence before publish

- Entire page pending privacy-owner assignment and a real technical cookie scan against deployed staging/production, per `PRIVACY_AND_UK_GDPR_PLAN.md` pre-launch gate: "Cookie scan matches the published notice."
