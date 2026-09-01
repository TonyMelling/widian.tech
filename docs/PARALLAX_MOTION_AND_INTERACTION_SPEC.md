# Parallax, Motion and Interaction Specification

**Status:** Implementation specification
**Principle:** Motion must explain continuity, responsibility and verified state
**Accessibility target:** WCAG 2.2 AA

## 1. Experience goal

Use scroll-directed storytelling to let one Widian Thread travel through the Circular Compliance lifecycle. Depth and parallax should help the visitor understand that separate people and events contribute to one persistent Building Record.

This is not a request for decorative parallax on every section.

## 2. Reference boundary

Arc'teryx System 0 is a behavioural reference for:

- chapter-based editorial pacing;
- progressive system explanation;
- restrained navigation between stages;
- pinned visual fields;
- spatial depth;
- a conclusive loop reveal.

Do not copy its source, assets, copy, stage structure, illustration, timings or page composition.

## 3. Motion grammar

| Device | Meaning | Rule |
|---|---|---|
| Ember thread draw | Continuity of identity/evidence | Draw only when the relationship becomes established |
| Node pulse | New accountable event | One restrained pulse; no perpetual glow |
| Open gap | Missing evidence or decision | Must have a text/status equivalent |
| Thread reversal | Rejection or return to remediation | Preserve the earlier node; do not visually erase history |
| Green confirmation | Verified state | Use only after the required gate and pair with icon/text |
| Layer shift | Building, asset, event or evidence depth | Small differential movement; content remains readable |
| Record accumulation | History becoming stronger | Add entries; never replace prior entries silently |

## 4. Technical approach

Progressive enhancement order:

1. Semantic server-rendered chapters and figures.
2. CSS layout, sticky positioning and transitions.
3. CSS scroll-driven animations where supported and maintainable.
4. Intersection Observer for stage activation and non-critical fallbacks.
5. Web Animations API for bounded choreography.
6. A motion dependency only after a measured prototype and recorded decision.

Do not make scroll position authoritative application state. Do not intercept or smooth-scroll the browser by default.

## 5. Scene architecture

Recommended component boundary:

```text
components/circular-compliance/
  circular-story.tsx
  story-chapter.tsx
  thread-canvas.tsx
  lifecycle-progress.tsx
  fragmented-record.tsx
  building-identity.tsx
  remediation-route.tsx
  verification-gate.tsx
  return-to-record.tsx
  product-proof.tsx
```

- Narrative copy remains server-rendered.
- Only the stage observer and motion canvas require client execution.
- Story chapters expose stable IDs for anchors and testing.
- The progress navigation uses real links where appropriate.
- Decorative SVG is hidden from assistive technology; meaningful status remains in HTML.

## 6. Parallax limits

- Maximum three independently moving depth planes in a scene.
- Background movement should be slower and smaller than foreground movement.
- Do not move body copy at a rate different from the scroll container.
- Avoid scale changes that cause text or image blur.
- Avoid fixed backgrounds on mobile where browser support and repaint cost are poor.
- Do not use scroll-jacking, mandatory snap or artificial inertia.
- Limit sticky sequences; users must always perceive progress and an exit.

## 7. Reduced-motion mode

When `prefers-reduced-motion: reduce` is active:

- remove scroll-linked transforms, line drawing, zoom and depth movement;
- show the completed thread state for the relevant chapter;
- replace animated transitions with discrete static figures;
- retain every heading, explanation, status and CTA;
- do not autoplay video;
- do not require an animation to reveal content;
- preserve anchor navigation and reading order.

Provide an in-page motion control only if meaningful motion remains after the system preference has been honoured. Do not override the system preference automatically.

## 8. Input and navigation

- Scrolling must remain native for wheel, touch, keyboard and assistive technology.
- `PageDown`, `Space`, arrow keys and browser find must work normally.
- Focused content must never move behind a sticky overlay.
- Sticky chapter navigation must not obscure anchor targets.
- Any interactive lifecycle control must be keyboard operable and expose its current state.
- Touch targets must meet WCAG 2.2 sizing expectations.

## 9. Performance budgets

- No autoplay hero video as the LCP element.
- Prefer responsive AVIF/WebP imagery and SVG/CSS line work.
- Reserve media dimensions to prevent layout shift.
- Pause or stop observers and animation work when scenes are off-screen.
- Avoid continuous `scroll` handlers; if unavoidable, schedule visual updates through `requestAnimationFrame`.
- Do not trigger React state updates for every scroll pixel.
- Test on a representative mid-range mobile device, not desktop emulation alone.
- Record the bundle cost before adding any animation dependency.

Project targets remain those in `QA_AND_ACCEPTANCE_PLAN.md`, including 90+ Lighthouse targets and healthy Core Web Vitals on staging.

## 10. Media rules

- The supplied concept videos are storyboards, not production hero media.
- Autoplay media must be muted, inline and non-essential.
- Provide controls for meaningful video.
- Captions or transcripts are required where audio or timed text carries meaning.
- Do not embed social-app capture chrome.
- Generated architectural images must be recreated or approved and must not be represented as customer evidence.

## 11. Test matrix

Required review:

- 320, 375, 768, 1024 and 1440 px;
- iOS Safari and Android Chrome on real or representative devices;
- current Chrome, Edge, Firefox and Safari desktop;
- keyboard-only;
- screen reader at least once per major interactive pattern;
- `prefers-reduced-motion` on and off;
- JavaScript disabled;
- 200% and 400% zoom where applicable;
- slow network and CPU throttling;
- browser back/forward and deep links to story chapters.

## 12. Stop conditions

Stop and request review if:

- the animation implies a feature not verified by Product Truth;
- the Widian Thread becomes decorative rather than semantic;
- a pinned scene hides or delays content;
- motion prevents the reduced-motion version from being equivalent;
- the prototype misses performance targets;
- a third-party library is required without an architectural decision;
- the composition resembles the reference site more than Widian.
