# Widian Marketing Website — Progress Tracker

**Last updated:** 24 August 2026  
**Overall status:** Discovery and specification  
**Current milestone:** New repository setup and copy development

## Status legend

- ⬜ Not started
- 🟡 In progress
- 🟢 Complete
- 🔴 Blocked
- ⚪ Deferred

## 1. Strategy and foundations

| Item | Status | Evidence / next action |
|---|---|---|
| Primary proposition approved | 🟢 | “One building record. Every responsible party. Verified from inspection to closure.” |
| Supporting promise approved | 🟢 | “Know what is true…” |
| Category direction approved | 🟢 | Building Record platform for passive fire |
| Creative platform selected | 🟢 | “One Record, Unbroken” |
| Initial audience hierarchy | 🟢 | Recorded in context file |
| First-release sitemap | 🟢 | Recorded in specification |
| Domain separation decision | 🟢 | Marketing at apex; app and staging subdomains |
| Marketplace story qualification | 🟡 | Needs copywriter and product review |

## 2. Repositories and infrastructure

| Item | Status | Evidence / next action |
|---|---|---|
| Separate marketing repository | ⬜ | Create repository |
| Framework initialised | ⬜ | Use approved Next.js stack |
| Branch protection | ⬜ | Define main and PR rules |
| Vercel marketing project | ⬜ | Create separately from application |
| Preview deployments | ⬜ | Connect pull requests |
| `app.widian.tech` application domain | ⬜ | Must precede apex migration |
| Clerk domain migration | ⬜ | Prepare and verify runbook |
| `widian.tech` marketing DNS | ⬜ | Assign after auth verification |
| Rollback plan | ⬜ | Document before DNS change |

## 3. Brand assets

| Item | Status | Evidence / next action |
|---|---|---|
| Current PNG logo identified | 🟢 | Staged in `public/brand/` (`widian-logo.png` full lock-up, `widian-mark-transparent.png` mark only) — Navy on transparent, no reversed variant |
| Approved full SVG lock-up | 🔴 | Obtain/export; PNG interim in use |
| Reversed SVG lock-up | 🔴 | Obtain/export; no reversed asset available yet, PNG or SVG |
| Compact SVG lock-ups | 🔴 | Obtain/export |
| Mark-only SVG | 🔴 | Obtain/export; PNG interim in use |
| Font licensing/hosting confirmed | 🟡 | Archivo and IBM Plex family |
| Social-card templates | ⬜ | Graphic Designer |
| Photography/imagery strategy | ⬜ | Creative Director |

## 4. Copy and content

| Item | Status | Evidence / next action |
|---|---|---|
| Headline hierarchy | 🟢 | Positive prototype feedback |
| Senior copywriter appointed | ⬜ | Required |
| Homepage full copy | 🟡 | First draft complete at `docs/copy/home.md` (2026-08-24); pending Brand Strategist/Copywriter sign-off, Product Truth confirmation and asset approval for §6.6 |
| Platform copy | 🟡 | First draft complete at `docs/copy/platform.md` (2026-08-24); all nine record layers blocked on approved anonymised product screenshots per `SPEC.md` §7.2's "required proof" standard |
| How It Works copy | 🟡 | First draft complete at `docs/copy/how-it-works.md` (2026-08-24); highest product-truth risk of any page — stage-count contradiction (D-015) must be resolved before the interactive gate is built; two gate rows need Product Truth confirmation |
| Solution-page copy | 🟡 | First drafts complete: `docs/copy/solutions.md` + four role pages (2026-08-24); contractor "cost and completion information" story item omitted pending confirmation |
| New Market copy | 🟡 | First draft complete at `docs/copy/new-market.md` (2026-08-24); highest overclaim risk on the site — needs Brand Strategist + Product Truth joint review before publish; page is undocumented in `CONTENT_AND_COPY_PLAN.md`'s brief table (gap flagged) |
| Security & Trust copy | 🔴 | Draft at `docs/copy/security-trust.md` (2026-08-24) shows only what's currently publishable — hosting, security-practice and assurance sections are Withhold and cannot be filled until Security/Legal produce approved facts; page may need to launch thin or be held back |
| Walkthrough form copy | 🟡 | First draft complete at `docs/copy/book-a-walkthrough.md` (2026-08-24), reconciled to D-009 immediate-booking flow; calendar provider and named lead owner still unresolved |
| Lead storage and communications design | 🟡 | Store: isolated marketing database (D-007). Email: Resend (D-008). Booking: immediate calendar selection (D-009). Named lead owner and retention/privacy basis (D-010, D-012) remain open pending privacy owner assignment |
| Privacy/cookie copy | 🔴 | Skeleton drafts only at `docs/copy/privacy.md` and `docs/copy/cookies.md` (2026-08-24) — structurally blocked on privacy owner assignment (D-010, D-012), parked at user's direction; no legal content written |
| Metadata matrix | ⬜ | Copywriter + SEO |
| Search-intent and keyword research | ⬜ | Owner: user, to be completed separately outside this session (D-013); release-one sitemap stands as working URL set meanwhile |
| Internal-link and structured-data plan | 🟡 | Baseline documented; facts and templates need approval |

## 5. Product evidence

| Item | Status | Evidence / next action |
|---|---|---|
| Application stack inspected | 🟢 | GitHub review complete |
| Staging identified as stronger product-evidence branch | 🟢 | Branch divergence documented |
| Public claims register created | 🟡 | Populated against application-repo code evidence (2026-08-24); re-verify against deployed staging before publication |
| Anonymised demonstration record | ⬜ | Create and approve |
| Product screenshots | ⬜ | Capture after data approval |
| Future-state interfaces labelled | ⬜ | Required during design |
| Security/hosting evidence | ⬜ | Assign reviewer |

## 6. UX and design

| Item | Status | Evidence / next action |
|---|---|---|
| Initial static mock-up | 🟢 | Completed |
| Initial animated prototype | 🟢 | Completed |
| Multi-page mock-up | 🟢 | Completed as exploratory work |
| Mock-up learning documented | 🟢 | Context and specification |
| Mobile wireframes | 🟡 | All thirteen release-one pages now have some wireframe coverage (2026-08-24): Home, Platform, How It Works at full fidelity (desktop+mobile); Solutions, New Market, Security & Trust, Book a Walkthrough, Privacy, Cookies at a lighter desktop-only sketch/skeleton pass. One canvas, switchable pages: https://claude.ai/code/artifact/ebb6b638-408e-410f-8e14-712691eae3c7. Privacy/Cookies are structural only — no real content, still blocked on privacy owner |
| Desktop adaptations | 🟡 | All thirteen pages — see above |
| Navigation prototype | 🟡 | Desktop header + mobile menu closed/open states wireframed on the Home page of the canvas |
| Page differentiation plan | 🟡 | Visually demonstrated for Home/Platform/How It Works — vertical spine (Platform) vs horizontal gate track (How It Works) vs section rhythm (Home) are each genuinely distinct layouts, not the same template restyled |
| Final design system | 🟡 | Draft written up at `docs/DESIGN_SYSTEM.md` and a visual component sheet added to the wireframe canvas (2026-08-24): https://claude.ai/code/artifact/ebb6b638-408e-410f-8e14-712691eae3c7. Several values proposed pending sign-off — see doc §11 "Open items" (on-navy contrast, link-on-Navy hover, motion timings, logo clear-space) |
| Motion storyboard | 🟡 | Home, Platform, How It Works — captured as canvas annotations per section, not a separate document |
| Product-demo design | 🟡 | Home, Platform, How It Works — demo-plan notes in the canvas; actual screenshots still blocked on asset approval |
| Accessibility design review | 🟡 | Home, Platform, How It Works — contrast/keyboard/target-size flags noted inline in the canvas; not yet a formal Accessibility Specialist review |

## 7. Implementation

| Slice | Status | Acceptance gate |
|---|---|---|
| Project foundation | ⬜ | Build, lint, type-check |
| Tokens, fonts and approved logo | ⬜ | Brand review |
| Header, footer and navigation | ⬜ | Mobile/keyboard review |
| Homepage vertical slice | ⬜ | Five-second comprehension |
| Platform | ⬜ | Record anatomy understood |
| How It Works | ⬜ | Responsibility gates understood |
| Solutions | ⬜ | Role stories remain connected |
| New Market | ⬜ | Direction is bold but supportable |
| Security & Trust | ⬜ | All claims approved |
| Walkthrough form | ⬜ | Success/error journey verified |
| Lead API, storage and outbox | ⬜ | Durable, idempotent and recoverable |
| Acknowledgement and internal routing | ⬜ | Delivery, bounce and failure paths tested |
| Privacy/cookies/analytics | ⬜ | Privacy approval |
| SEO foundations | ⬜ | Canonicals, metadata, sitemap, robots and structured data verified |

## 8. Quality and launch

| Item | Status |
|---|---|
| Unit/component tests | ⬜ |
| Browser tests | ⬜ |
| Mobile visual QA | ⬜ |
| Tablet visual QA | ⬜ |
| Desktop visual QA | ⬜ |
| Keyboard QA | ⬜ |
| Screen-reader review | ⬜ |
| Reduced-motion QA | ⬜ |
| Cross-browser QA | ⬜ |
| Lighthouse targets | ⬜ |
| Claims audit | ⬜ |
| Lifecycle re-verification (D-015: 10-stage chain build vs. deployed product) | ⬜ |
| Form/privacy audit | ⬜ |
| SEO validation | ⬜ |
| Search Console and Bing verification | ⬜ |
| DNS/authentication runbook | ⬜ |
| Production launch | ⬜ |
| Post-launch monitoring | ⬜ |

## Current blockers

1. Approved SVG logo lock-ups are not yet available (interim PNGs staged at `public/brand/`; no reversed variant).
2. Senior copywriter has not yet developed full page narratives.
3. Walkthrough destination and operational owner are undecided; named lead owner still required despite booking flow being decided (D-009).
4. Production application domain must move to `app.widian.tech` before apex migration.
5. Final product claims need deployed-staging re-verification (code-evidence pass completed 2026-08-24; see `CLAIMS_REGISTER.md`). Lifecycle copy (D-015) additionally depends on the 10-stage build shipping before launch.
6. Authentic anonymised product demonstrations are not selected.
7. Analytics/cookie tooling decided (GA4 with Consent Mode, D-011) but privacy owner is unassigned, so consent design and cookie-banner legal sign-off remain blocked.
8. Canonical lead store (D-007: isolated marketing database) and email provider (D-008: Resend) decided; named lead owner and retention schedule remain unresolved.
9. Controller details, lawful bases, processor terms and rights-handling owner require approval — blocked, no privacy owner assigned (D-010, D-012).
10. Keyword/SERP research (D-013) owned by user, to be completed outside this session; current indexed-URL inventory still outstanding.

## Next five actions

1. Create the new marketing repository and copy this documentation pack into `/docs` or the repository root.
2. Export approved Widian SVG logo assets.
3. Commission/assign the Senior Conversion Copywriter.
4. Populate `CLAIMS_REGISTER.md` using deployed staging evidence.
5. Produce mobile-first wireframes and a page-differentiation storyboard before production UI implementation.

## Update log

### 2026-08-24 — Discovery, decisions and Phase 1 copy drafts

**Completed**

- Full repository/documentation discovery and readiness report.
- Resolved four documentation contradictions (README naming, creative-platform status, domain-decision status, About page scope).
- Interim brand PNGs staged at `public/brand/` (`widian-logo.png`, `widian-mark-transparent.png`), sourced from the application repository with explicit one-time authorisation.
- `CLAIMS_REGISTER.md` fully populated (17 rows) against application-repo code evidence, under explicit one-time authorisation to inspect that repository.
- D-015 resolved: marketing lifecycle language treated as a committed pre-launch target, contingent on the build shipping and being re-verified.
- D-007–D-013 resolved or explicitly scoped (lead store, email provider, booking flow, analytics); D-010/D-012 (privacy owner, lawful basis) remain open and parked at user's direction.
- D-016 resolved: primary CTA label standardised as "Book a Widian walkthrough" sitewide.
- First-draft copy complete for all thirteen release-one pages at `docs/copy/`: `home.md`, `how-it-works.md`, `platform.md`, `solutions.md` + four role pages, `new-market.md`, `security-trust.md`, `book-a-walkthrough.md`, `privacy.md` (skeleton, blocked), `cookies.md` (skeleton, blocked).

**Checks**

- No automated checks run — no code exists yet; this slice was documentation and content only.

**Decisions**

- D-003, D-004, D-006, D-007, D-008, D-009, D-011, D-014, D-015, D-016 — see `DECISIONS.md` for full detail.

**Open issues**

- D-010/D-012 (privacy owner, lawful basis, retention) — parked, blocks `/privacy`, `/cookies`, and full analytics/consent implementation.
- Security & Trust page cannot be completed until Security/Legal produce approved hosting, security-practice and assurance facts.
- New Market page needs joint Brand Strategist + Product Truth review before publish — highest overclaim risk on the site.
- How It Works' interactive-gate stage count needs a canonical decision before build (D-015).
- All product screenshots/demonstrations remain blocked on asset approval across Home, Platform and Solutions pages.
- D-013 (SEO/keyword research) owned by user, outside this session.

**Next**

- User review of all `docs/copy/` drafts.
- Assign a privacy owner to unblock D-010/D-012.
- Resolve outstanding product-truth confirmations flagged inline (e.g. "Action assigned" gate role, P3–P5 reinspection actor, contractor cost/completion data).
- Move to Phase 2 (experience architecture / wireframes) once copy is reviewed, per `WIDIAN_MARKETING_WEBSITE_SPEC.md` §18.

## Update template

### YYYY-MM-DD — Short milestone name

**Completed**

- 

**Checks**

- 

**Decisions**

- 

**Open issues**

- 

**Next**

- 
