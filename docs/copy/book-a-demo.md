# Book a Demo — Copy Draft

**Status:** Draft for review — not approved. This draft adjusts `SPEC.md` §7.7's response-time framing to match D-009 (immediate calendar booking, not human-qualification-first) — see note in §6 below.

**Depends on:** `CLAIMS_REGISTER.md`, `WIDIAN_MARKETING_WEBSITE_SPEC.md` §7.7, `LEAD_CAPTURE_AND_COMMUNICATIONS.md`, `DECISIONS.md` D-007–D-009.

---

## 1. Page objective

Convert high-intent visitors into a booked demo with minimal friction, while still capturing enough qualification detail that the demo owner arrives prepared.

## 2. Primary audience

Visitors who have already decided Widian is relevant and are ready to see it against their own buildings.

## 3. Visitor question

Is Widian relevant to my buildings and operating model?

## 4. Primary headline

> **Book a Widian demo.**

*(Plain and direct, matching the "calm, focused, low-distraction" layout grammar required by `SPEC.md` §7.7 — this is not a page for a clever headline.)*

## 5. Short standfirst

> Pick a time that works for you. Tell us a little about your buildings first, so the demo is worth your time.

## 6. Form and flow

**Layout grammar:** calm, focused, low-distraction (`SPEC.md` §7.7).

**Fields** (per `SPEC.md` §7.7 and `LEAD_CAPTURE_AND_COMMUNICATIONS.md` "minimum lead record," aligned):

- Name
- Work email
- Organisation
- Role
- Approximate number of buildings (controlled bands, not free text)
- Primary challenge (controlled values, per `LEAD_CAPTURE_AND_COMMUNICATIONS.md`)
- Optional message — with inline microcopy: *"Please don't include specific building, resident or incident details here."*
- Consent acknowledgement — privacy notice link beside the submit action; marketing-permission checkbox kept separate, unticked, optional (never a condition of booking)
- Calendar slot selection

**Note on flow — reconciling `SPEC.md` with D-009:** `SPEC.md` §7.7's "Success state" language ("Confirm receipt, expected response time and next step") assumes a human-qualification-first model. Per D-009, the actual flow is immediate calendar booking — the visitor picks a slot as part of this same form submission, not after a follow-up. Copy below reflects D-009.

**Submission behaviour:** per `ARCHITECTURE.md` §7 and `LEAD_CAPTURE_AND_COMMUNICATIONS.md`, the durable lead record must be written before the visitor sees a success state — this holds regardless of whether booking is immediate or qualification-first.

## 6a. Success state

**Headline:** You're booked.

**Body:** *"Thanks, [Name]. Your demo is confirmed for [date/time]. We've sent a confirmation to [email] — check your calendar invite for the link. If anything's changed by then, you can reschedule from that email."*

No unsupported compliance, security or availability claims (per `LEAD_CAPTURE_AND_COMMUNICATIONS.md` §Enquirer acknowledgement).

## 6b. Error state

**Body:** *"Something went wrong on our end — your details are safe, but the booking didn't go through. Please try again, or email [contact] directly and we'll sort it out."*

Preserve safe input on retry; do not force the visitor to re-enter everything (`SPEC.md` §7.7).

## 7. Proof points

This page doesn't need product proof points — it's a conversion page, not a persuasion page. It should not repeat security/compliance claims already covered on `/security-trust`; keep focus on the booking action itself.

## 8. Objections answered

- *"What am I actually committing to?"* → standfirst — a look, not a sales call disguised as a demo.
- *"Will my information be used for anything else?"* → separate, unticked marketing consent, explicit in the form.

## 9. Primary / secondary CTA

Primary: **Book a Widian demo** (the page itself is the destination — the CTA here is the submit button, e.g. **Confirm booking**).
No secondary CTA — this page should not distract from the booking action (per its own layout grammar).

## 10. SEO title and description

**Title:** `Book a Widian Demo`
**Description:** `Pick a time and see Widian against your own buildings — a focused demo, not a sales pitch.`

## 11. Social title and description

**Social title:** `Book a Widian demo.`
**Social description:** `See Widian against your own buildings. Pick a time that works for you.`

## 12. Image/animation captions

None recommended — `SPEC.md` §7.7 calls for a low-distraction layout; avoid decorative motion here entirely.

## 13. Accessible alternative text

- Calendar widget: must be a genuinely accessible scheduling component (keyboard-operable date/time selection, announced availability) — flag to Frontend Engineer as a specific component-selection decision, not default to an inaccessible embedded iframe.
- Form errors: inline, associated with their field via `aria-describedby`, announced on submission per `SPEC.md` §16.

## 14. Claims requiring further evidence before publish

- Calendar/scheduling provider is not yet selected (still open under D-007/D-008's broader lead-infrastructure decisions) — copy assumes a slot-confirmation flow but the actual provider (e.g. Cal.com, Calendly) affects exact wording (e.g. reschedule mechanics) and needs to be finalised before this copy is locked.
- Named lead owner (who the demo goes to/who follows up if something goes wrong) is still unresolved per `PROGRESS_TRACKER.md` blocker #3 — needed for the error-state contact address.
