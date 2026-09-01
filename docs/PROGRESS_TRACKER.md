# Widian Marketing Website — Progress Tracker

**Last updated:** 1 September 2026  
**Overall status:** Implementation in progress across ten of thirteen release-one pages; Circular Compliance category strategy and experience specification now approved  
**Current milestone:** Circular Compliance claims verification, homepage narrative alignment and the remaining page builds (New Market, Security & Trust, Resources content, lead capture)

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
| Category direction approved | 🟢 | Circular Compliance through the Building Record platform |
| Creative platform selected | 🟢 | “One Record, Unbroken” |
| Initial audience hierarchy | 🟢 | Recorded in context file |
| First-release sitemap | 🟢 | Recorded in specification |
| Domain separation decision | 🟢 | Marketing at apex; app and staging subdomains |
| Marketplace story qualification | 🟡 | Needs copywriter and product review |
| Circular Compliance definition | 🟢 | User-approved formal definition recorded |
| Five-stage public lifecycle | 🟢 | Establish, Identify, Remediate, Verify, Return |
| Arc'teryx-inspired experience boundary | 🟢 | Behavioural reference only; no copied code/assets/composition |
| Circular Compliance claims | 🟡 | Product Truth P0 evidence required |

## 2. Repositories and infrastructure

| Item | Status | Evidence / next action |
|---|---|---|
| Separate marketing repository | 🟢 | Dedicated `widian.tech` repository exists |
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
| Circular Compliance concept assets | 🟢 | PDF, two videos and supplied images reviewed as discovery material |
| Production architectural imagery | ⬜ | Recreate with rights, accuracy and product-truth approval |
| Widian Thread production asset | ⬜ | Storyboard, SVG/CSS design and static alternatives required |

## 4. Copy and content

| Item | Status | Evidence / next action |
|---|---|---|
| Headline hierarchy | 🟢 | Positive prototype feedback |
| Senior copywriter appointed | ⬜ | Required |
| Homepage full copy | 🟡 | First draft complete at `docs/copy/home.md` (2026-08-24); pending Brand Strategist/Copywriter sign-off, Product Truth confirmation and asset approval for §6.6 |
| Platform copy | 🟡 | First draft complete at `docs/copy/platform.md` (2026-08-24); all nine record layers blocked on approved anonymised product screenshots per `SPEC.md` §7.2's "required proof" standard |
| How It Works copy | 🟡 | First draft complete at `docs/copy/how-it-works.md`; D-023 resolves the canonical model to ten proposed stages. The implemented page labels this future state visibly; Product Truth confirmation and deployed-product re-verification remain required |
| Solution-page copy | 🟡 | First drafts complete: `docs/copy/solutions.md` + four role pages (2026-08-24); contractor "cost and completion information" story item omitted pending confirmation |
| New Market copy | 🟡 | First draft complete at `docs/copy/new-market.md` (2026-08-24); highest overclaim risk on the site — needs Brand Strategist + Product Truth joint review before publish; page is undocumented in `CONTENT_AND_COPY_PLAN.md`'s brief table (gap flagged) |
| Security & Trust copy | 🔴 | Draft at `docs/copy/security-trust.md` (2026-08-24) shows only what's currently publishable — hosting, security-practice and assurance sections are Withhold and cannot be filled until Security/Legal produce approved facts; page may need to launch thin or be held back |
| Book a Demo form copy | 🟡 | First draft complete at `docs/copy/book-a-demo.md` (renamed 2026-08-24 from `book-a-walkthrough.md`, `DECISIONS.md` D-025), reconciled to D-009 immediate-booking flow; named lead owner (D-038) and calendar provider (Cal.com, D-039) both resolved |
| Building Record page copy | ⬜ | New page added 2026-08-24 (D-022) — skeleton only at `docs/copy/building-record.md`; not yet through the content workflow, and the proposed drill-down levels need a data-model correction before drafting (see that file §4) |
| Lead storage and communications design | 🟡 | Store: isolated marketing database (D-007). Email: Resend (D-008). Booking: immediate calendar selection (D-009) via Cal.com (D-039). Named lead owner: Tony Melling, backups Ricky and Priya (D-038). Retention/privacy basis (D-010, D-012) remains open pending privacy owner assignment |
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
| Parallax/motion specification | 🟢 | `PARALLAX_MOTION_AND_INTERACTION_SPEC.md` |
| Circular Compliance page brief | 🟢 | `CIRCULAR_COMPLIANCE_WEBSITE_SPEC.md` |
| Product-demo design | 🟡 | Home, Platform, How It Works — demo-plan notes in the canvas; actual screenshots still blocked on asset approval |
| Accessibility design review | 🟡 | Home, Platform, How It Works — contrast/keyboard/target-size flags noted inline in the canvas; not yet a formal Accessibility Specialist review |

## 7. Implementation

| Slice | Status | Acceptance gate |
|---|---|---|
| Project foundation | 🟢 | Next.js 16.3 / React 19 / TypeScript strict / Tailwind CSS 4, scaffolded 2026-08-24. Build, lint, typecheck and unit tests all pass — see checks log below |
| Tokens, fonts and approved logo | 🟡 | Design-system tokens implemented as Tailwind `@theme` values in `app/globals.css`; interim PNG logo wired via `components/brand/Logo.tsx`. Formal Brand review still pending |
| Header, footer and navigation | 🟡 | Built and browser-tested at 320/390/768/1440px, keyboard and reduced-motion — see checks log. Formal Accessibility Specialist review still pending |
| Homepage vertical slice | 🟡 | Full page built at `app/page.tsx` from `docs/copy/home.md`. All required gates run and passing. Section 6.6 still shows the asset-blocked placeholder; five-second-comprehension user testing not done (needs real users, not an automated check). §6.2's `FragmentDiagram` animated 2026-08-24 — implements the previously-unbuilt Home motion concept from `SPEC.md` §8 ("fragmented signals assemble into one current Building Record"), plus a visible caption; reduced-motion handled by the existing global CSS rule, no separate branch needed |
| Circular Compliance semantic skeleton | ⬜ | Complete no-JS narrative and metadata |
| Three-scene thread prototype | ⬜ | Establish, Remediate, Verify; mobile/desktop/reduced-motion |
| `/circular-compliance` | ⬜ | Category definition, five moves, evidence and qualifications |
| Platform | 🟡 | Full page built at `app/platform/page.tsx`, including a CSS-only conceptual record-assembly hero and accessible record spine. Automated gates and desktop/mobile browser QA pass; Creative, Motion and Accessibility sign-off remain outstanding |
| Building Record | ⬜ | New page (D-022), currently a routing stub only. Copy/data-model work needed before build — see `docs/copy/building-record.md` |
| How It Works | 🟡 | Ten-stage target interaction implemented with visible future-state qualification; Product Truth and accessibility review outstanding |
| Solutions | 🟡 | Four differentiated role pages implemented; Solutions landing route and specialist approvals remain outstanding |
| New Market | ⬜ | Direction is bold but supportable |
| Security & Trust | ⬜ | All claims approved |
| Resources (`/resources`, `/resources/[slug]`) | 🟡 | Built 2026-08-24 (D-027) — file-based Markdown pipeline (`lib/resources.ts`, `content/resources/*.md`), index + article pages, sitemap/robots wired to only index once real articles exist. Automated gates pass. No real articles published yet — user is writing them now |
| Book a Demo form | ⬜ | Success/error journey verified |
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
3. Named lead owner (Tony Melling, backups Ricky and Priya — D-038) and calendar provider (Cal.com — D-039) are now both resolved; self-hosted vs. Cal.com Cloud and the API/webhook build remain implementation work.
4. Production application domain must move to `app.widian.tech` before apex migration.
5. Final product claims need deployed-staging re-verification (code-evidence pass completed 2026-08-24; see `CLAIMS_REGISTER.md`). Lifecycle copy (D-015) additionally depends on the 10-stage build shipping before launch.
6. Authentic anonymised product demonstrations are not selected.
7. Analytics/cookie tooling decided (GA4 with Consent Mode, D-011) but privacy owner is unassigned, so consent design and cookie-banner legal sign-off remain blocked.
8. Canonical lead store (D-007: isolated marketing database) and email provider (D-008: Resend) decided; named lead owner and retention schedule remain unresolved.
9. Controller details, lawful bases, processor terms and rights-handling owner require approval — blocked, no privacy owner assigned (D-010, D-012).
10. Keyword/SERP research (D-013) owned by user, to be completed outside this session; current indexed-URL inventory still outstanding.
11. Circular Compliance P0 capability claims require current application evidence.
12. Supplied AI visuals are not production assets and contain inaccurate or fabricated detail.
13. Physical building QR signage depends on a separately specified, privacy-safe public record.

## Next five actions

1. Verify Circular Compliance P0 claims against deployed application behaviour.
2. Produce the mobile-first Circular Compliance scene storyboard and static reduced-motion sequence.
3. Complete Security & Trust, New Market and Resources content, and the lead-capture/booking build.
4. Export approved Widian SVG logo assets.
5. Implement the Circular Compliance semantic narrative skeleton, then the three-scene thread prototype.

## Update log

### 1 September 2026 — D-041 resolved: ten-stage/five-stage lifecycle mapping

**Completed**

- Resolved D-041 (`DECISIONS.md` D-046): mapped the existing D-023 ten-stage operational chain beneath the approved five-stage Circular Compliance narrative. Establish recorded as a precondition (not an invented chain stage); Identify = Recorded → Submitted → Reviewed → Finding raised; Remediate = Assigned → In progress → Remediated (contractor submission, not acceptance/closure); Verify begins with Independently checked, then Client verified, then Closed — all three kept distinct; Return recorded as re-entry into a new Recorded event against the same persistent identity, not a stage of the same case.
- Recorded the existing six-gate "Mechanism" line (`WIDIAN_MARKETING_WEBSITE_SPEC.md` §4) as the current simplified public bridge to this structure, not a third canonical model.
- Updated `CIRCULAR_COMPLIANCE_CONTEXT.md` (new mapping subsection), `DECISIONS.md` (D-046), `CLAIMS_REGISTER.md` (cross-reference only, no status change) and `WIDIAN_MARKETING_WEBSITE_CONTEXT.md` §5 (cross-reference only, no status change).
- `docs/copy/how-it-works.md` deliberately not touched — page copy is out of scope for this documentation-only pass.

**Checks**

- No production or website code changed.
- No claim status changed in `CLAIMS_REGISTER.md`.

**Open issues**

- Website implementation of the Circular Compliance homepage/scene story (`CIRCULAR_COMPLIANCE_WEBSITE_SPEC.md` Slices A–E) remains unstarted.
- Eventual reconciliation of `docs/copy/how-it-works.md` against this mapping is a known follow-on, not done here.

**Next**

- Resume page/motion implementation only once explicitly approved.

### 1 September 2026 — Circular Compliance agent foundation

**Completed**

- Added the approved Circular Compliance definition and five-stage lifecycle.
- Added website experience, parallax/motion and product-truth specifications.
- Added Claude Code routing and specialist role prompts.
- Recorded concept assets as discovery references rather than production evidence.
- Added claims and guardrails for automation, AI, public QR records and building-safety language.
- Applied via `git am --3way` failing on typographic-character mismatches between the source patch and this branch's real content (curly quotes, and eight files that had genuinely diverged further than the patch's base — most notably `DECISIONS.md`, where the patch's D-014–D-019 would have collided with this branch's real D-014–D-039; renumbered to D-040–D-045 instead); reconciled by hand against actual file content via `git apply --reject` plus manual resolution of every rejected hunk, preserving all real implementation history (Home/Platform/Building Record/How It Works/Solutions/Resources builds, D-001–D-039) rather than reverting to the patch's stale base.

**Checks**

- Documentation source order and strategy reconciled.
- No production code changed.
- Automated application gates not applicable to documentation-only changes.

**Open issues**

- Product Truth evidence, approved SVG assets, final copy and production imagery remain outstanding.

**Next**

- Product Truth review followed by a mobile-first storyboard and semantic vertical slice.

### 2026-08-24 — Imagery, lifecycle and differentiated role experiences

**Completed**

- Added three optimised, generated WebP assets: architectural Building Record cutaway, surveyor field capture and contractor evidence capture. Every usage is visibly labelled conceptual; none is presented as a customer or product screenshot.
- Replaced Home's public asset-blocker text with the cutaway and a code-native synthetic record demonstration.
- Rebuilt Platform's record spine with inline mobile disclosures, visible claim scopes and conceptual per-layer relationship diagrams.
- Added a CSS-only Platform hero animation in which nine record layers assemble around one persistent Building Record anchor; it is labelled conceptual and becomes a complete static diagram under reduced motion.
- Implemented `/how-it-works` with the canonical ten-stage target lifecycle, a prominent proposed-state qualification, keyboard-operable controls and inline mobile disclosure.
- Implemented distinct Building Owner, Compliance Team, Surveyor and Contractor solution compositions, with claim qualifications kept adjacent to the relevant narrative.
- Replaced the automatic launch ticker with a static notice and standardised remaining public copy references to `Book a Demo` / `/book-a-demo`.
- Removed invalid non-list children from lifecycle and record-spine ordered lists.

**Checks**

- `npm run lint` — pass.
- `npm run typecheck` — pass.
- `npm run test` — pass, 10/10.
- `npm run build` — pass, 19 static pages generated.
- Browser QA — mobile Home, mobile Platform disclosure, mobile ten-stage disclosure, desktop role pages and fresh-console check performed; no horizontal overflow or browser console warnings/errors remained after correction.
- Platform hero browser QA — desktop and mobile compositions inspected with no horizontal overflow or console errors; reduced-motion static state is enforced in CSS and still needs formal assistive-technology review.
- Keyboard behaviour — semantic buttons, `aria-expanded`/`aria-pressed`, associated control IDs and native mobile navigation dialog verified; full assistive-technology review remains outstanding.
- Reduced motion — the continuously moving ticker was removed; existing global reduced-motion contract remains in place. Formal Motion Designer/Accessibility review remains outstanding.

**Decisions**

- D-027, D-028 and D-029 added as proposed decisions pending the required specialist perspectives.

**Open issues**

- Generated imagery and page art direction require Creative Director approval.
- New and revised product-functionality wording requires Product Truth review before indexing or production release.
- Real anonymised product captures remain outstanding; synthetic demonstrations do not replace product evidence.
- The four role pages remain `noindex` until copy, claims, responsive design and final QA are approved.

**Next**

- Creative Director, Product Truth, Accessibility and Claims review.
- Add focused browser tests for mobile disclosures and role-page headings before enabling indexing.

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

### 2026-08-24 — Phase 4: Home vertical slice implementation

**Completed**

- Scaffolded the Next.js 16.3 / React 19 / TypeScript strict / Tailwind CSS 4 project (D-018).
- Built the production header (sticky, launch ticker, desktop nav, accessible mobile menu via native `<dialog>`), footer, and the full Home page (`app/page.tsx`) from `docs/copy/home.md`, the wireframe canvas and `docs/DESIGN_SYSTEM.md`.
- Implemented the six-stage lifecycle thread, role cards, fragment diagram, scroll-reveal (progressive-enhancement safe — visible without JS), and the reduced-motion-safe launch ticker.
- Added routing stub pages for all twelve other release-one routes (`robots: noindex`) so navigation resolves without building ahead of scope; `/sign-in` correctly points external to `app.widian.tech`, not an internal route.
- Added `sitemap.ts` / `robots.ts` (Home only, by design — stubs excluded).
- Added minimal Vitest + Testing Library component tests (D-019), including a regression guard against the blocked 10-stage lifecycle chain reappearing (D-015).

**Checks** (all run, not assumed)

- `npm run typecheck` — pass
- `npm run lint` — pass (one real issue caught and fixed: `setState` called synchronously in a `useEffect` body in `ScrollReveal`)
- `npm run test` — 6/6 pass
- `npm run build` — pass, 18/18 routes prerendered as static
- Browser checks via Playwright: no horizontal overflow at 320/390/768/1440px; no console errors; keyboard Tab order reaches nav links with visible focus; native `<dialog>` mobile menu opens/closes correctly including Escape; `prefers-reduced-motion: reduce` verified
- Two real bugs found and fixed during browser checks: (1) reduced-motion left the launch ticker's duplicate marquee copy visible instead of collapsing to one static line; (2) tablet width (768px) broke the header — desktop nav didn't fit and wrapped onto the ticker, fixed by moving the nav breakpoint to `lg` (1024px) — see D-020

**Decisions**

- D-018 (Tailwind CSS 4), D-019 (Vitest test tooling), D-020 (nav breakpoint)

**Open issues**

- Home §6.6 still shows the asset-blocked placeholder — unchanged, pending screenshot approval.
- Five-second-comprehension testing needs real users, not an automated check.
- Playwright test files not yet added to the repo (manual Playwright-driven checks were run for this slice instead).
- Formal Brand/Accessibility Specialist sign-off on the built page still outstanding, per `AGENTS.md`'s specialist review table.
- Twelve other pages remain routing stubs only.

**Next**

- User review of the built Home page (`npm run dev`).
- Decide whether to continue implementing the remaining pages in the same pattern, or hold for review first.

### 2026-08-24 — Phase 5: Platform vertical slice implementation

**Completed**

- Built the full Platform page (`app/platform/page.tsx`) from `docs/copy/platform.md`: a light, typographic hero (deliberately no split image, to differentiate from Home's dark hero), a dark "record spine" centrepiece with the nine record layers, a stacked Q&A objections section, and a closing CTA.
- Built `components/platform/RecordSpine.tsx` — the page's dominant interaction (`SPEC.md` §7.2's "architectural cutaway / vertical record spine"): a keyboard-accessible, selectable list of nine layers with a live detail panel (Records / Persists because / Contributes to present truth), a claim-status pill (Verified/Qualified, with scope caveats such as "P1/P2 findings only") sourced from `CLAIMS_REGISTER.md` via `docs/copy/platform.md` §8, and a per-layer blocked-asset placeholder using the established dashed-border convention (`DESIGN_SYSTEM.md` §8).
- Added `/platform` to `sitemap.ts` (previously excluded as a stub).
- Added Vitest component tests for `RecordSpine` (layer count, default selection, selection switching, and a guard against the blocked 10-stage lifecycle language leaking into the Inspections layer).

**Checks**

- `npm run typecheck` — pass
- `npm run lint` — pass
- `npm run test` — 10/10 pass (6 pre-existing + 4 new)
- `npm run build` — pass, all routes prerendered as static
- Browser/visual QA (mobile/tablet/desktop widths, keyboard, reduced-motion) — **not performed this slice**: no browser-automation tool (Playwright/chromium-cli) was available in this session. This is a real gap, not an assumed pass — flagging per `AGENTS.md` ("do not report a gate as passing if it was not run").

**Decisions**

- No new `DECISIONS.md` entries; layout choices (light hero, dark record-spine centrepiece, Q&A objections list instead of Home's 3-column grid) follow directly from `AGENTS.md`'s page differentiation rule and are documented inline as code comments.

**Open issues**

- Browser/visual/keyboard/reduced-motion QA still needs a real run once a browser-automation tool is available, or manually by a reviewer with `npm run dev`.
- All nine record-spine layers still show the blocked-asset placeholder pending anonymised product screenshots (same dependency as Home §6.6).
- Formal Brand/Accessibility Specialist sign-off on the built page still outstanding.

**Next**

- User review of the built Platform page.
- Run the deferred browser/visual QA pass.
- Decide whether to continue to How It Works next (blocked on D-015 stage-count resolution) or another page.

### 2026-08-24 — Redesign brief audit and reconciliation

**Completed**

- Ran a full read-only Stage 1/2 audit against a comprehensive redesign brief: re-read every `docs/` file, `AGENTS.md`, all routes/components, re-ran lint/typecheck/test/build (all pass, 10/10 tests, 18/18 routes). Delivered an 11-part audit + proposal (sitemap reconciliation, homepage story, visual direction, interactions, pages needing most rework, components, SEO/conversion, accessibility/performance risks, phased plan, open decisions) without changing code, per instruction.
- User resolved the 8 flagged decisions; implemented the ones requiring immediate code/doc changes:
  - **D-021:** synthetic/illustrative demonstration data approved as a direction (unblocks interactive builds without waiting on real screenshots).
  - **D-022:** added `/building-record` as a separate page from `/platform` — routing stub + `docs/copy/building-record.md` skeleton created. A repository check found the brief's proposed drill-down levels ("Location", "Case") don't match the verified schema; corrected to the real chain (Organisation → Building → Element → Inspection → Finding → Remedial Work) in that file.
  - **D-023:** resolved D-015's stage-count contradiction — the 10-stage chain is now canonical, still labelled "Proposed future state" until the build ships. Updated `WIDIAN_MARKETING_WEBSITE_CONTEXT.md` §5 and `WIDIAN_MARKETING_WEBSITE_SPEC.md` §7.3 accordingly.
  - **D-024:** Verified Closure will be a section within `/how-it-works`, not a separate page — noted in `SPEC.md` §7.3.
  - **D-025:** primary CTA renamed "Book a Widian walkthrough" → "Book a Demo" sitewide; route renamed `/book-a-walkthrough` → `/book-a-demo`. Updated `Button.tsx`, `SiteHeader.tsx`, `MobileNav.tsx`, `SiteFooter.tsx`, `app/page.tsx`, `app/platform/page.tsx`, their tests, `docs/copy/book-a-demo.md` (renamed), and every visitor-facing reference in `SPEC.md`/`CONTENT_AND_COPY_PLAN.md`. Internal-only naming (`/api/walkthrough` route sketch, `walkthrough_*` analytics events, "Walkthrough booked" lead-lifecycle status) deliberately left unchanged — not visitor-facing, not worth the rework.
  - **D-026:** performed the requested Product Truth repository check for Fire Risk Assessment capability (same one-time authorisation basis as the original `CLAIMS_REGISTER.md` pass). Finding: FRA is currently only an expiry-date/status field plus generic checklist paths inside the existing inspection UI — no dedicated FRA workflow exists. Added a new `CLAIMS_REGISTER.md` row scoped accordingly; the "Fire Risk Assessments" page from the brief is blocked from being drafted until Product Truth confirms a fuller scope, to avoid overclaiming.
  - **Nav gap correction:** the previous session's audit incorrectly claimed The New Market and Security & Trust were missing from the header nav — re-checked `nav-links.ts` directly this time and found both were already present. No fix was needed; flagging the correction for the record rather than silently dropping it.
  - Resources, Integrations and About confirmed to stay deferred (unchanged from `CONTENT_AND_COPY_PLAN.md`).

**Checks**

- `npm run lint` — pass
- `npm run typecheck` — pass
- `npm run test` — pass (counts updated for the CTA rename and nav addition — see test files touched above)
- `npm run build` — pass, all routes (including new `/building-record`, renamed `/book-a-demo`) prerendered as static

**Decisions**

- D-021 through D-026 (see `DECISIONS.md`); D-016 marked superseded by D-025.

**Open issues**

- Building Record has no drafted copy yet — see `docs/copy/building-record.md` for what's still needed.
- Fire Risk Assessments page remains blocked pending a fuller Product Truth scope confirmation (D-026).
- How It Works build is now unblocked on stage count (D-023) but still not started — still the next page in the implementation order.
- Browser/visual QA tooling gap (flagged in the Platform slice) remains unresolved.

**Next**

- Build `/how-it-works` (10-stage gate + Verified Closure section), then `/solutions` (role-switcher rework), per the agreed phased plan.

## Update template

### 2026-08-24 — Pre-Vercel codebase tidy

**Completed**

- Extracted duplicated mobile option-rail state and scrolling into `useHorizontalRail` without changing either interaction.
- Added conservative response headers and removed the framework disclosure header.
- Made local and Vercel Preview `robots.txt` disallow crawling; Production retains the route-level indexing policy.
- Updated the stale root README and environment example with the Git-connected Vercel rollout model.

**Checks**

- `git diff --check` — pass (line-ending conversion warnings only).
- `npm run lint` — pass.
- `npm run typecheck` — pass.
- `npm run test` — pass, 23/23 tests.
- `npm run build` — pass, all 19 routes generated.
- Local deployment checks — preview `robots.txt` returns `Disallow: /`; security, permissions, referrer and HSTS headers are present; `X-Powered-By` is absent.

**Decision**

- D-037: deploy protected Vercel previews before attaching the production domain; do not use FTP/static export for the planned runtime-backed site.

### 2026-08-24 — Mobile option-rail affordances and Building Record clarity

**Completed**

- Added edge fades and explicit 44px previous/next controls to the two interactions whose options extend beyond the mobile viewport: Market Direction and Building Record.
- Controls are labelled for assistive technology, appear only while more content exists in their direction and preserve native horizontal scrolling and the existing option buttons.
- Replaced Building Record's abstract “The building never drops out” headline with “Follow every finding back to the building it belongs to.”
- Left fully stacked/grid interactions unchanged so the site does not imply hidden options where none exist.

**Reviews outstanding**

- Brand Strategist and Senior Copywriter review of the revised primary headline; the route remains `noindex`.

### 2026-08-24 — Market Direction pressure-field hero

**Completed**

- Added an original wide editorial hero showing fragmented records, decisions and responsibility signals converging around one persistent building.
- Reworked the opening into a dark, image-led composition with a tension-first headline and Widian's continuous Ember thread as the resolving device.
- Labelled the artwork as conceptual strategic direction, not a live product view or regulatory forecast.
- Corrected the hero container so its text aligns to the same outer gutter and `max-w-280` grid as the roadmap below, while the artwork remains full bleed.

**Checks**

- Artwork inspected for brand palette, headline negative space and prohibited implications; no disaster imagery, legal seals, dates, statistics, customer data or marketplace-scale claims are present.
- Automated and browser gates remain to be recorded after implementation validation.

**Reviews outstanding**

- Brand Strategist, Senior Copywriter, Creative Director, Product Truth and Accessibility review; the route remains `noindex`.

### 2026-08-24 — Phase 1 trust evidence register

**Completed**

- Replaced the `/security-trust` construction stub with a documentary evidence register covering only the verified or qualified claims already controlled in `CLAIMS_REGISTER.md`.
- Kept attribution, organisation/role boundaries, evidence hashing and issued-report controls individually scoped; added a prominent list of claims Widian does not make.
- Expanded the hashing explanation into a three-step calculate/retain/compare model, stated the supported content types and made explicit what a digest mismatch cannot establish.
- Kept the route `noindex` pending the required Security/Claims, Product Truth, Brand, Copy and Accessibility review.

**Checks**

- Added component coverage for hashing, issued-report scope, certification and statutory-compliance boundaries.
- Automated and browser gates to be recorded after the complete implementation slice is run.

**Open issues**

- Phase 1 cannot be completed without Widian's controller/privacy contact, privacy owner, approved lawful bases and retention decisions, named demo owner, calendar provider, and isolated marketing-database connection.
- Hosting/resilience and security-development-practice claims remain withheld; this page does not fill those gaps with generic reassurance.

**Next**

- Obtain the accountable-owner and provider decisions, then implement the durable booking flow and approved Privacy/Cookie notices.

### 2026-08-24 — Privacy notice draft and security-policy template

**Completed**

- Replaced the `/privacy` stub with a structured visitor notice covering controller accountability, purposes, data, proposed lawful bases, processors, EU-region direction, transfers, retention criteria, rights, cookies and complaints.
- Recorded Widian's controller direction, isolated Supabase marketing storage and Vercel EU AWS hosting direction as D-034 and a qualified claim requiring deployment and contract verification.
- Added `docs/SECURITY_POLICY_TEMPLATE.md`, an internal control-and-evidence template that does not imply certification or completed implementation.

**Open issues**

- Legal entity/address/company number, monitored privacy contact, accountable owner, final lawful-basis assessment, retention schedule, exact regions, processor contracts/subprocessors and transfer safeguards remain required before publication.
- The Privacy route remains marked draft and `noindex`; the security policy remains a template pending named owner and executive approval.

### 2026-08-24 — Solutions imagery, Market Direction roadmap and selective parallax

**Completed**

- Added visibly labelled conceptual imagery to every Solutions role-switcher panel using the existing approved cutaway, surveyor and contractor assets.
- Renamed the public “The New Market” navigation label to “Market Direction” while retaining `/new-market` during `noindex` development.
- Replaced the static market-transition list with a keyboard-operable six-step roadmap that distinguishes verified foundations, expected value, strategic hypotheses and future possibilities.
- Clarified on Platform that its nine accordions are record layers, while the separate ten-stage model is a lifecycle; added a direct lifecycle link.
- Added progressive CSS parallax to contained Home and Solutions imagery only, with a static reduced-motion state and no scroll listener.

**Checks**

- `git diff --check` — pass apart from repository line-ending conversion warnings.
- `npm run lint` — pass.
- `npm run typecheck` — pass.
- `npm run test` — pass, 18/18 tests.
- `npm run build` — pass, all 19 routes generated as static content.

**Decisions**

- D-032 and D-033; Brand, Creative, Product Truth, Motion and Accessibility review remain outstanding.

### 2026-08-24 — Session-aware launch announcement

**Completed**

- Replaced Home’s first-load ticker with an accessible native-dialog launch announcement.
- Recorded the appearance in session storage immediately; repeat Home visits in the same tab and all non-Home pages display the static ticker.
- Added explicit close, Escape dismissal and Book a Demo paths; no animated entrance was introduced.

**Checks**

- Component tests cover first Home visit, repeat Home visit and non-Home behaviour.
- Creative Director and Accessibility review remain outstanding.

### 2026-08-24 — Building Record page

**Completed**

- Replaced the `/building-record` stub with a distinct portfolio-to-finding narrative and a keyboard-operable synthetic drill-down through the verified relationship chain: Organisation → Building → Element / asset → Inspection → Finding → Remedial work.
- Extended the synthetic example with the approved ten-step target lifecycle, retaining the same P1 finding and building throughout all ten stages. The component carries the mandatory proposed-state and P1/P2 client-verification qualifications.
- Kept Harbour Court visible as retained context at every level and explicitly separated evidence submission from verified closure.
- Expanded `docs/copy/building-record.md` into the full page copy source, added the demonstration boundary to `CLAIMS_REGISTER.md`, recorded the art-direction decision as D-030, and updated the asset inventory.
- Kept the route `noindex` pending required specialist approvals.

**Checks**

- Formatting — no formatter script is configured.
- `git diff --check` — pass (line-ending conversion warnings only; no whitespace errors).
- `npm run lint` — pass.
- `npm run typecheck` — pass.
- `npm run test` — pass, 12/12 tests.
- `npm run build` — pass; `/building-record` prerendered as static content.
- Browser QA — desktop interaction and synthetic labelling pass; mobile and tablet have no document-level horizontal overflow after a navigator containment fix; keyboard Tab advances between record-level buttons; no console errors found.
- Reduced-motion inspection — global reduced-motion override is present and applies to all animation and transition durations; this slice adds no continuous motion.

**Decisions**

- D-030: a synthetic drill-down, not a second Platform anatomy view.

**Open issues**

- Product Truth, Brand Strategist, Senior Copywriter, Creative Director and Accessibility review remain required; this page cannot be self-approved.
- The route remains excluded from indexing until those reviews are complete.

**Next**

- Collect the named review perspectives, then refine and approve the copy and interaction.

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
