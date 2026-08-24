# Decision Log

Record decisions when made; do not silently convert assumptions into requirements.

| ID | Decision | Status | Rationale / next evidence |
|---|---|---|---|
| D-001 | Marketing site is a separate repository and deployment at `widian.tech` | Accepted | User direction |
| D-002 | Staging uses `staging.widian.tech` and is linked from the agreed environment/filter control | Accepted, wording to clarify | Confirm exact location and audience of “filter” |
| D-003 | Product application uses `app.widian.tech` | Accepted | Domain split approved in principle; DNS, Clerk authentication migration and rollback runbook remain required follow-up work before DNS cutover |
| D-004 | Creative platform is “One Record, Unbroken” | Accepted | User direction |
| D-005 | First release uses routed pages, not homepage anchors | Accepted | User direction |
| D-006 | Approved shield and wordmark must be used | Accepted | Interim PNGs staged at `public/brand/` (`widian-logo.png`, `widian-mark-transparent.png`), sourced with explicit authorisation from the application repository. SVG exports and a reversed lock-up variant remain outstanding. |
| D-007 | Canonical lead store is an isolated marketing database, separate from the operational Widian product database | Accepted | User direction; requires a basic lead console/operating process before launch since no CRM pipeline exists |
| D-008 | Transactional email provider is Resend, on a dedicated sending subdomain | Accepted | User direction; SPF/DKIM/DMARC configuration for the sending subdomain remains an implementation task |
| D-009 | Walkthrough booking is immediate calendar selection (no human qualification gate before booking) | Accepted | User direction; form should still capture qualification fields (organisation, role, portfolio size) even though booking is immediate, so the walkthrough owner arrives prepared |
| D-010 | Retention and privacy basis for enquiries/marketing | Open — blocked | No privacy owner assigned yet (2026-08-24). This is a hard pre-launch gate per `PRIVACY_AND_UK_GDPR_PLAN.md`; cannot be resolved without a named owner's approval |
| D-011 | Analytics approach is Google Analytics 4 with Consent Mode | Accepted | User direction; requires a full cookie-consent banner with equally prominent accept/reject choices before GA4 loads (`PRIVACY_AND_UK_GDPR_PLAN.md` §Cookies and analytics), and Google's data-processing terms need review — remains blocked on the privacy owner assignment (D-010/D-012) for final sign-off |
| D-012 | Lawful bases and retention schedule by processing purpose | Open — blocked | No privacy owner assigned yet (2026-08-24); same blocker as D-010 |
| D-013 | SEO topic priorities and canonical URL set | Open | User will complete keyword/SERP research separately (outside this session); release-one sitemap in `WIDIAN_MARKETING_WEBSITE_SPEC.md` §2 stands as the working URL set in the meantime |

| D-014 | Claims register populated from application-repo code inspection, one-time explicit authorisation | Accepted | Evidence recorded 2026-08-24 in `CLAIMS_REGISTER.md`; still requires deployed-staging re-verification before publication per source-precedence order |
| D-015 | Marketing lifecycle language (10-stage chain) does not yet match implemented product states, but the 10-stage chain is on the product build plan and is targeted to be implemented before website launch | Accepted, contingent | Marketing copy may be written to the target 10-stage lifecycle. This is a "Proposed future state" claim, not "Verified", until the states actually ship. It must be re-verified against deployed product as a pre-launch gate before the copy is treated as describing current functionality — see `CLAIMS_REGISTER.md` "Inspection-to-closure lifecycle" row and the new pre-launch re-verification item in `PROGRESS_TRACKER.md`. If the build slips past website launch, the lifecycle copy must be labelled as future/in-progress per `AGENTS.md` invariant 11, not presented as current. Additional gap found 2026-08-24: the documentation itself is internally inconsistent about the stage count — `WIDIAN_MARKETING_WEBSITE_SPEC.md` §7.3 calls it a "seven-stage responsibility gate", `WIDIAN_MARKETING_WEBSITE_CONTEXT.md` §5's target lifecycle has eight stages, its "Required status distinctions" list has ten, and `WIDIAN_MARKETING_WEBSITE_SPEC.md` §4's "Mechanism" line has six. Pick one canonical stage model before How It Works' interactive gate is built — see `docs/copy/how-it-works.md`. |

| D-016 | Primary CTA label is "Book a Widian walkthrough" on every page, unvaried | Accepted | Resolves a contradiction found 2026-08-24: `SPEC.md` §19 acceptance criteria requires the primary CTA to be "consistently 'Book a Widian walkthrough'", while `CONTENT_AND_COPY_PLAN.md`'s page-brief table assigns different primary-CTA text per page. The explicit, testable acceptance criterion wins. Page differentiation is carried by each page's lead-in argument and secondary CTA instead, not by varying the primary button label. `docs/copy/how-it-works.md` and `docs/copy/platform.md` corrected to match; `docs/copy/home.md` was already consistent. |

| D-017 | Site-wide "launching soon" ticker banner added above the header, per user direction (2026-08-24) | Accepted | Wording deliberately generic ("Widian is launching soon — book a walkthrough to be among the first") since exact launch status (available product / pilot / early-access programme) is still an open input per `SPEC.md` §20. Revisit wording once that's confirmed. Implemented with a `prefers-reduced-motion` static fallback; Ember used only on the small label chip to stay scarce per the brand invariant. See Home wireframe artifact. |

## Decision entry template

- ID and date
- Owner and approvers
- Context and options considered
- Decision and rationale
- Consequences and follow-up actions
- Evidence or links
- Review trigger/date
