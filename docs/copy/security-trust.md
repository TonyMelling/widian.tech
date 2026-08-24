# Security & Trust — Copy Draft

**Status:** Draft for review — not approved. **This page cannot launch as a complete page today.** Most of its required sections are gated `Withhold` in `CLAIMS_REGISTER.md`. This draft shows what CAN be said now and marks everything else as an open dependency, rather than filling gaps with plausible-sounding placeholder copy.

**Depends on:** `CLAIMS_REGISTER.md`, `WIDIAN_MARKETING_WEBSITE_SPEC.md` §7.6.

---

## 1. Page objective

Publish only evidence-backed statements about identity, permissions, evidence handling and hosting — and be honest about what isn't ready to publish yet, rather than using vague reassurance language.

## 2. Primary audience

Security/procurement reviewers, IT stakeholders in the buying committee, and cautious compliance leaders doing due diligence before a walkthrough.

## 3. Visitor question

Can Widian be trusted with important building records?

## 4. Primary headline

> **Trust is not a badge. It is a provable record.**

*("Suggested headline" per `SPEC.md` §7.6 — not yet formally approved.)*

## 5. Short standfirst

> We'd rather tell you exactly what's true today than imply more than we can prove.

*(Deliberately not the usual reassurance opener — this page's whole credibility rests on restraint. Needs Brand Strategist sign-off given how unusual this tone is relative to other pages.)*

## 6. Section-by-section status (per `SPEC.md` §7.6's required sections)

**Layout grammar:** evidence register / assurance dossier — documentary, not promotional (`SPEC.md` §7.6).

| Section | Can publish now? | Content |
|---|---|---|
| Identity and attribution | Yes | Every action in the record is attributed to the account that performed it, with a timestamp. *[Claim: Time-stamped attribution and audit history — Verified.]* |
| Tenant and permission boundaries | Yes | Access is scoped by organisation and role; row-level enforcement means one organisation cannot see another's records. *[Claim: Multi-organisation roles and permissions — Verified.]* |
| Evidence handling | Qualified | Evidence is stored against the record it belongs to and integrity-checked via hashing. *[Claim: Evidence hashing — Qualified — must state this is integrity checking, not external notarisation or universal legal tamper-proofing.]* |
| Integrity controls | Qualified | Same hashing claim as above, plus: issued reports cannot be edited or deleted once issued, only marked superseded or withdrawn. *[Claim: Immutable issued records — Verified, scoped to issued reports only.]* |
| Issued-record controls | Yes (scoped) | As above — frozen bytes, hash, and template version on issue. Do not claim this extends beyond the `issued_reports` table. |
| Hosting and storage | **Withhold — do not publish yet** | Vercel/Supabase infrastructure is real, but there is no approved, current hosting/resilience statement to publish. `SECURITY.md` in the application repository is an unfilled template. |
| Privacy | **Blocked** | Cannot be written until the privacy owner is assigned and D-010/D-012 are resolved (see `DECISIONS.md`). Link to `/privacy` once that page itself is unblocked. |
| Security-development practice | **Withhold — do not publish yet** | No approved, documented security-development practice exists to publish. |
| Current independent assurance | **Withhold — do not publish** | No certifications or independent assessments are currently held. Confirmed via `context/product-strategy.md` and `context/specs/16-…blueprint.md` — these are roadmap items, not current state. |
| Limitations and planned assurance | Yes, and important | State plainly what is not yet true: no current independent security certification; formal security-practice documentation is in progress. Dated, honest limitations build more trust here than silence. |

## 7. Proof points (traceable to `CLAIMS_REGISTER.md`)

| Proof point | Claim area | Status |
|---|---|---|
| Attribution and audit trail | Time-stamped attribution and audit history | Verified |
| Tenant/role-scoped access | Multi-organisation roles and permissions | Verified |
| Evidence hashing | Evidence hashing | Qualified |
| Immutable issued records | Immutable issued records | Verified — issued reports only |
| Hosting, security practice, certifications | (three separate rows) | Withhold |

## 8. Objections answered

- *"Why doesn't this page mention any certifications?"* → 6, "Current independent assurance" — answered directly and honestly rather than avoided.
- *"Is this hosted securely?"* → cannot yet be answered publicly with approved facts; the page should say so rather than use vague language like "enterprise-grade" or "bank-level."

## 9. Primary / secondary CTA

Primary: **Book a Demo** → `/book-a-demo` (D-025).
Secondary: **Request trust information** (per `CONTENT_AND_COPY_PLAN.md` brief) — a contact path for procurement reviewers wanting detail beyond what's publishable, e.g. a direct email or the walkthrough form's "primary challenge" field.

## 10. SEO title and description

**Title:** `Security & Trust | Widian`
**Description:** `See exactly what Widian can currently prove about identity, permissions, evidence handling and integrity controls — including what's not yet ready to claim.`

## 11. Social title and description

**Social title:** `Trust is not a badge. It is a provable record.`
**Social description:** `What we can prove today, and what we're honest about not claiming yet.`

## 12. Image/animation captions

- Evidence register visual: *"Each statement below shows its source and date — not a badge, a record."*

## 13. Accessible alternative text

- Evidence register table/list: standard table semantics; each row needs a clear accessible name tying the claim to its status (Verified/Qualified/Withheld-and-explained).

## 14. Claims requiring further evidence before publish

- Hosting/storage, security-development practice and current independent assurance sections cannot be written until Security/Legal produces approved facts — this page should not launch with these sections silently missing; either write the honest "not yet published" version in §6, or hold this page back from release one entirely if that reads too thin. Recommend flagging this choice to the Creative Director and QA Lead.
- Privacy section is blocked on the same privacy-owner gap as `/privacy` and `/cookies` (D-010, D-012).
