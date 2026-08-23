# QA and Acceptance Plan

## Proposition and content

- A first-time visitor can explain “one building record” and verified closure after five seconds.
- Each page has a distinct visitor question, narrative pattern and visual behaviour.
- Lifecycle stages and responsible parties are unambiguous.
- Every material claim is verified in `CLAIMS_REGISTER.md`.
- Copy does not imply statutory certification or replacement of professional judgement.

## Responsive and visual

- Review at 320, 375, 768, 1024 and 1440 px plus intermediate fluid widths.
- No horizontal overflow, clipped focus indicators or unreadable interface miniatures.
- Header, CTA and navigation remain usable with zoom and large text.
- Motion tells the lifecycle story, has a static equivalent and respects reduced motion.
- Pages are related but not template clones.

## Accessibility

- Semantic landmarks, heading order and meaningful link names.
- Full keyboard operation with visible focus and logical order.
- Accessible menu, disclosures, role selector, lifecycle controls and form errors.
- WCAG 2.2 AA contrast and non-colour status cues.
- Screen-reader announcements for form success/errors and dynamic lifecycle changes.
- Suitable touch targets and spacing on narrow screens.

## Lead capture

- Client and server validation agree and errors preserve safe input.
- Success appears only after a durable record exists.
- Duplicate retry, provider outage and queue recovery are tested.
- Marketing permission is separate and optional.
- No form values enter analytics, URLs or client logs.
- Acknowledgement, internal alert, bounce and suppression handling are tested.

## Engineering

- Existing lint, type-check, test and production build commands pass.
- Metadata, canonical URLs, sitemap, robots and structured data are reviewed.
- Fonts and media are optimised and dimensions prevent layout shift.
- JavaScript is limited to purposeful interaction; core content works without animation.
- Error, empty, loading and success states are designed and tested.
- Secrets remain server-side; no unresolved material dependency/security issues.

## Performance

- Lighthouse target of 90+ across performance, accessibility, best practices and SEO on representative mobile runs.
- Core Web Vitals are measured on staging and monitored after launch.
- Hero motion does not delay LCP or cause CLS.
- Third-party scripts load only when necessary and with approved privacy treatment.

## Perspective review

The final review is conducted as prospective customer, fire-safety professional, mobile user, accessibility reviewer and senior frontend engineer. Material findings block release and enter `PROGRESS_TRACKER.md` with an owner and acceptance evidence.

