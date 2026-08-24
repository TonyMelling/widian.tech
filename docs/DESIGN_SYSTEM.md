# Design System — Phase 3

**Status:** Draft for review — not approved. Requires Web Designer + Creative Director sign-off per `AGENTS.md`'s specialist review table ("Visual system or page art direction"). Values marked **Proposed** below are new decisions made while consolidating the wireframes into a system; values marked **Approved foundation** are unchanged from `WIDIAN_MARKETING_WEBSITE_CONTEXT.md` §7 and `WIDIAN_MARKETING_WEBSITE_SPEC.md` §9.

**Depends on:** `WIDIAN_MARKETING_WEBSITE_CONTEXT.md` §7, `WIDIAN_MARKETING_WEBSITE_SPEC.md` §8–9, the wireframe canvas (https://claude.ai/code/artifact/ebb6b638-408e-410f-8e14-712691eae3c7).

**Gate (`SPEC.md` §18 Phase 3):** the system must be recognisably Widian without relying on the logo.

---

## 1. Colour tokens

**Approved foundation:**

| Token | Value | Role |
|---|---:|---|
| Primary Navy | `#141D2B` | Brand structure, headings, primary controls |
| Ember | `#E8431A` | Scarce emphasis and priority only |
| Surface White | `#FFFFFF` | Primary surface |
| System Grey | `#F0F2F5` | Background/canvas |
| Secondary text | `#5B6675` | Supporting text, metadata |
| Hairline | `#DCE0E7` | Rules, boundaries |
| Verified green | `#1F7A4C` | Verified operational state only |
| Amber | `#A8630B` | In-progress/attention state |
| Priority soft | `#FCEAE4` | Priority backing |

**Proposed — on-navy derivations** (used across the wireframes for dark sections; not in the original token table, needs sign-off):

| Token | Value | Role |
|---|---:|---|
| On-navy primary text | `#FFFFFF` | Headings on Navy backgrounds |
| On-navy secondary text | `#B7BFCC` | Body copy on Navy — confirmed 2026-08-24 at 9.14:1, passes WCAG AA |
| On-navy muted text | `#8A93A3` | Least-emphasis text/placeholder captions on Navy — confirmed 2026-08-24 at 4.98–5.47:1 depending on exact navy shade, passes WCAG AA |
| On-navy hairline | `#2A3648` | Rules/boundaries on Navy |
| Navy-800 | `#1B2534` | Deeper fill for placeholder/recessed surfaces on Navy |

**Rule, restated:** Ember must remain scarce — used only for the primary CTA, priority indicators, and the launch-ticker label chip. It must never become a section background or a general accent colour. This was tested across all thirteen wireframed pages and held.

## 2. Typography

**Approved foundation:** Archivo (headings/display), IBM Plex Sans (body/nav/forms/buttons), IBM Plex Mono (references/timestamps/statuses/metadata).

**Proposed type scale** (derived from what was actually used across the wireframes — needs sign-off as the formal scale):

| Role | Desktop | Mobile | Weight | Family |
|---|---|---|---|---|
| Eyebrow label | 12px, uppercase, 0.12em tracking | 11px | 500 | Plex Mono |
| H1 / hero | 44–52px / 1.15 | 26–30px / 1.2 | 700 | Archivo |
| H2 / section | 30–34px / 1.2 | 23–26px / 1.25 | 700 | Archivo |
| H3 | 24px | 22px | 700 | Archivo |
| Standfirst | 18–19px / 1.55 | 15–16px / 1.55 | 400 | Plex Sans |
| Body | 15–17px / 1.5–1.6 | 14–15px / 1.55 | 400 | Plex Sans |
| Meta / status / mono | 11–14px | 10–13px | 400–500 | Plex Mono |

## 3. Grid and spacing

**Approved foundation:** mobile-first 4-column grid, tablet 8-column, desktop 12-column (`SPEC.md` §9).

**Proposed:** content max-width 1120px inside a 1440px page, 64px side padding desktop / 20px mobile. Spacing scale on an 8px base: `8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96`px, matching section padding rhythm used throughout the wireframes (96px desktop section padding, 56px mobile).

## 4. Radius scale

**Approved foundation, restated precisely:** minimal radius (2px) for architectural/documentary surfaces (buttons, cards, panels, placeholders); moderate radius only for genuine grouped controls/panels; **pills only for compact statuses and filters** (`SPEC.md` §9).

**Correction made 2026-08-24:** the Security & Trust wireframe sketch originally used 2px-radius rectangular chips for its status column — inconsistent with the pill rule above. Fixed to `border-radius: 999px` (see updated canvas).

## 5. Logo lock-ups

Interim assets only (`public/brand/widian-logo.png` full lock-up, `widian-mark-transparent.png` mark-only) — see `CONTENT_ASSET_INVENTORY.md`. No reversed lock-up exists yet, which is why every dark-background usage in the wireframes (footer, mobile menu) uses `filter: brightness(0) invert(1)` on the full-colour PNG as a stopgap. **This is a real limitation, not a design choice** — replace with a true reversed SVG lock-up as soon as it exists; the CSS filter approach is acceptable for wireframes only, not production.

Minimum clear space and minimum size rules are not yet defined — no approved brand guideline document was found for this beyond "do not recreate the wordmark as live text" (`AGENTS.md`). Flag to whoever owns the master SVG exports.

## 6. Buttons and links

| Element | Spec |
|---|---|
| Primary button | Ember `#E8431A` bg, white text, 2px radius, 600 weight Plex Sans, 14px 28px padding (desktop), full-width 15px 20px (mobile) |
| Primary button hover | Darken to `#C93A17` (`ember-hover`) — confirmed 2026-08-24: white text on this background is 5.12:1, passes WCAG AA |
| Secondary/text link (on white/grey) | Navy text, 600 weight, 1px bottom border in Navy, hover shifts text+border to **`ember-hover` (`#C93A17`), not `ember` (`#E8431A`)** — corrected 2026-08-24: ember-on-white was 4.00:1, failing AA's 4.5:1; ember-hover passes at 5.12:1. Same rule applies everywhere ember is used as a *text* colour on a light background (nav links, resource links) — ember itself is unchanged for backgrounds/icons/priority markers, where it already passed |
| Link on Navy background | White text, 1px bottom border in on-navy hairline `#2A3648`, hover — **undefined, needs a decision**: an Ember hover here risks looking like a second, competing CTA; a lighter white/grey shift is likely safer but wasn't tested in the wireframes |
| Nav link (default) | Navy text, 500 weight, hover to **`ember-hover`** (see correction above) |

## 7. Status system

**Approved foundation, unchanged** (`SPEC.md` §9) — never rely on colour alone:

| State | Treatment |
|---|---|
| Recorded | Neutral marker + label |
| Submitted | Neutral/blue-grey transitional |
| Action required | Amber + icon + label |
| Priority | Ember + priority code + label |
| Remediated | Explicit "work evidenced" label |
| Independently checked | Separate verification symbol + role |
| Client verified | Verified green + identity context |
| Closed | Final state + closure provenance |

**Shape rule:** all status chips are pills (`border-radius: 999px`), per §4 above — corrected in the wireframes this pass.

## 8. Imagery rules

**Approved foundation, restated** (`SPEC.md` §9): prioritise authentic product demonstrations, anonymised building records, real field imagery where permission exists, licensed architectural photography. Avoid stock teams-around-laptops, generic hard-hat portraits, generated imagery presented as real, illegible miniature screenshots, device frames compensating for weak composition.

**Proposed — placeholder convention**, established across all thirteen wireframes and worth formalising: any asset-blocked image uses a dashed `#8A93A3` border, `#F7F8FA` fill, and an IBM Plex Mono caption stating exactly what's missing and where its approval status lives (e.g. "asset pending: CONTENT_ASSET_INVENTORY.md"). Keep using this convention in future wireframes so blocked assets are never mistaken for real content, even at a glance.

## 9. Motion tokens

**Proposed — none of this is in the source spec as exact numbers; needs Motion Designer sign-off:**

| Token | Value | Use |
|---|---|---|
| Micro-interaction | 150–200ms, ease-out | Hover/focus state changes |
| Section reveal | 400–600ms, ease-out | Scroll-triggered section entrances |
| Sequence/thread choreography | up to 1200ms, linear or ease-in-out | Lifecycle/gate node sequences (Home §6.4, How It Works gate track) |
| Ticker scroll | 14–22s, linear, seamless loop | Launch banner only |

**Reduced motion (approved principle, `AGENTS.md` invariant 12, restated as implementation rule):** every token above resolves to instant/static under `prefers-reduced-motion: reduce` — no exceptions. The ticker banner already implements this; every future motion use must too.

## 10. Interaction states

**Proposed — not yet tested, needs Accessibility Specialist + Web Designer sign-off:**

- **Focus:** `outline: 2px solid var(--navy); outline-offset: 2px` on light backgrounds. On Navy backgrounds, invert to a white/light outline — Ember is deliberately avoided for focus rings, both to preserve its scarcity and because an Ember ring on an Ember button would be invisible.
- **Hover:** buttons darken (§6); links shift to Ember (except on-Navy links, still undefined).
- **Disabled:** 0.5 opacity, no pointer events, `aria-disabled="true"`.
- **Selected/active** (e.g. Platform's layer list, How It Works' gate track): Navy fill + white text for the active item, as used in both wireframes — establishes the pattern for any future selectable-list component.

## 11. Open items before this system is approved

- **Ember eyebrow labels on light backgrounds — fixed 2026-08-24.** Every `text-ember uppercase` eyebrow label sitting on a white/grey background now uses `ember-hover` (`#C93A17`, 5.12:1) instead of `ember` (`#E8431A`, 4.00:1, failed AA). Covers: Home standfirst-adjacent labels, Platform, Building Record (3 of 4 — see below), How It Works, Security & Trust (2 of 4 — see below), Privacy, Resources, the launch-announcement modal, `ResponsibilityStages`, `RoleSwitcher`, `RoleSolutionPage`'s non-`handover` variant, `StubPage`.
- **Ember eyebrow labels on Navy — still open, needs a different fix than the light-background one.** `ember-hover` is *darker* than `ember`, so it does not help against Navy — the pairing is actually 4.23:1 (ember-on-navy) vs 3.31:1 (ember-hover-on-navy); both fail AA, and switching would make it worse, not better. Left as plain `ember` (4.23:1, still failing) pending a real decision. Affected: Home hero, Building Record's "route does not end at submission" section, New Market hero, Security & Trust's hero and "Integrity checking" section (`app/security-trust/page.tsx` lines 62, 138, 158), `RecordNavigator`, `SyntheticRecordDemo`, all three `RecordSpine` claim-detail `<dt>` labels, `RoleSolutionPage`'s `handover` variant. Candidate fixes: a lighter/brighter ember tint reserved for on-Navy text (a new token, needs its own contrast check and visual sign-off), switching these specific instances to `on-navy-secondary` or white (loses the ember accent), or enlarging/bolding to clear the 3:1 "large text" threshold.
- **Also noticed, not yet reviewed:** ember is used the same way (small text, not just backgrounds/icons) for priority markers and numbered list markers in `RoleSolutionPage.tsx` (the "P1"/"P2" priority column and the "01"/"02" numbered markers) — outside the eyebrow-label pattern actually reviewed above, so left untouched rather than assumed to need the same fix.
- On-Navy secondary text contrast (`#B7BFCC` on `#141D2B`) — **resolved 2026-08-24**: computed at 9.14:1, passes WCAG AA comfortably. No longer an open item.
- Reversed logo lock-up doesn't exist — current dark-background usage is a CSS-filter stopgap, not production-ready.
- Link-on-Navy hover state undefined.
- All motion timing values are proposed defaults, not yet reviewed by a Motion Designer.
- Minimum logo clear-space/size rules not found — needs input from whoever owns the master brand assets.
