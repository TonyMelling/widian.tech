# Circular Compliance Website Experience Specification

**Status:** Approved implementation brief, subject to claims and asset approval
**Depends on:** `CIRCULAR_COMPLIANCE_CONTEXT.md`, `WIDIAN_MARKETING_WEBSITE_SPEC.md`, `PARALLAX_MOTION_AND_INTERACTION_SPEC.md`
**Primary release target:** Homepage and `/circular-compliance`

## 1. Objective

Create an editorial, scroll-directed Widian experience that makes the failure of linear compliance and the mechanism of Circular Compliance understandable without relying on generic feature grids.

The experience may take inspiration from the narrative pacing, pinned chapters and spatial depth of Arc'teryx System 0. It must not copy Arc'teryx code, assets, wording, stage names, proportions or distinctive compositions.

## 2. Five-second outcome

A first-time visitor should understand:

1. Widian creates one continuing record for a building.
2. A defect drives action rather than ending in a PDF.
3. Contractor completion does not by itself close an issue.
4. Evidence and verification remain connected.

## 3. Revised information architecture

Add `/circular-compliance` as the definitive category page.

Recommended primary navigation:

- Circular Compliance
- Platform
- How It Works
- Solutions
- Security & Trust
- Sign in
- Book a walkthrough

`The New Market` may remain as a strategy page, but it must not compete with Circular Compliance in the primary narrative. Decide whether to retain it in primary navigation during sitemap review.

## 4. Homepage narrative

### Scene 0 - Category declaration

**Purpose:** Name the proposition.

Preferred copy direction:

> **Close the loop on compliance.**
>
> One building record connects every inspection, defect, remedial action and verification.

The existing core proposition must appear within the opening viewport or immediately following it:

> One building record. Every responsible party. Verified from inspection to closure.

**Visual:** A restrained Ember thread enters an architectural field and establishes one building identity.

### Scene 1 - Stop starting again

**Purpose:** Expose the cost of fragmentation.

Show one asset accumulating contradictory labels, references or disconnected reports. Do not place multiple real labels on an actual compliant door.

Copy direction:

> **Every new survey should strengthen the record-not replace it.**

### Scene 2 - Establish

**Purpose:** Explain persistent identity.

Show a building, location and element resolving into a stable reference. The thread attaches to the identity and remains attached throughout subsequent scenes.

Copy direction:

> **Reference once. Keep every survey connected.**

### Scene 3 - Identify

**Purpose:** Show that a finding is structured evidence, not a mark on a PDF.

Show an inspection event adding authorship, basis, measurement, photograph and finding to the record.

### Scene 4 - Remediate

**Purpose:** Demonstrate automatic continuity.

The identified finding initiates its related action. Show owner, priority, scope, due date and evidence requirement only where verified by product truth.

Copy direction:

> **The defect carries its context into the work.**

### Scene 5 - Verify

**Purpose:** Establish Widian's key distinction.

Contractor sign-off appears as a submission, not closure. Show evidence review, independent verification where required, rejection/rework and authorised client verification as separate states.

Copy direction:

> **An action closes on proof, not assertion.**

### Scene 6 - Return

**Purpose:** Complete the loop without suggesting that compliance is permanently finished.

The next survey returns to the same asset identity, history and carried actions. The thread completes the visual loop and then continues beyond it.

Copy direction:

> **The next survey opens the record-not a blank form.**

### Scene 7 - Product proof

**Purpose:** Move from concept to substantiation.

Show real, sanitised Widian evidence:

- building overview;
- element record;
- inspection finding;
- remediation status;
- contractor evidence;
- verification decision;
- issued report or verification view.

Do not use a fictional control room, AI brain or synthetic dashboard as proof.

### Scene 8 - Conversion

Copy direction:

> **Show us where your compliance record breaks.**
>
> We will show you how Widian connects it.

Primary CTA: `Book a walkthrough`

## 5. Circular Compliance page

The dedicated page must provide the depth that the homepage deliberately withholds.

Required sections:

1. Formal definition in accessible, public language.
2. Linear compliance versus Circular Compliance.
3. Five-move lifecycle.
4. Responsible party and evidence at each stage.
5. Rejection and return path.
6. Persistent Building Record.
7. Real product proof.
8. What Circular Compliance does not mean.
9. Capability status and appropriate qualifications.
10. Walkthrough CTA.

## 6. Page layout grammar

- Long editorial chapters rather than repeated cards.
- A mix of near-black narrative stages and lighter evidence/document stages.
- Sticky or pinned visual canvases only when they explain stage continuity.
- Large display statements balanced by precise record metadata.
- The Widian Thread persists through scenes, but may recede when product evidence needs priority.
- Use asymmetry, architectural crops, ruled registers and status annotations.
- Keep Ember scarce; active nodes and critical continuity receive it.

## 7. Responsive strategy

### Mobile

- Mobile is the primary authored composition, not a scaled desktop.
- Use full-height chapters sparingly; account for dynamic viewport units and browser chrome.
- Keep the narrative thread within a stable safe area.
- Avoid pinned sequences so long that users feel trapped.
- Every chapter must remain comprehensible at 320 px and 200% zoom.
- Text must not depend on appearing over a particular area of an image.

### Desktop

- Use a sticky narrative canvas with adjacent copy where it improves comprehension.
- Limit pinned duration and provide clear progress.
- Allow more architectural depth without hiding essential content behind animation.

## 8. Product and claim rules

- Attach claim IDs to material public statements.
- Clearly label conceptual or planned functionality.
- Never suggest Widian certifies a building as safe or compliant.
- Never equate contractor sign-off with closure.
- Do not claim automatic remediation initiation until the deployed route and exceptions are verified.
- Do not publish illustrative figures as customer results.
- Do not describe generated imagery as a real customer building or interface.

## 9. Asset requirements

Required before final production:

- approved Widian SVG lock-ups;
- original architectural base imagery with recorded usage rights;
- sanitised product captures;
- accurate asset references and states;
- SVG or CSS Widian Thread;
- storyboard frames for every scroll scene;
- static reduced-motion frames;
- social artwork derived from approved final assets;
- alt-text and decorative-status decisions.

## 10. Release slices

### Slice A - Narrative foundation

- Route, semantic chapter structure and final approved copy skeleton.
- No complex motion.
- Correct metadata and no-JavaScript readability.

### Slice B - Thread prototype

- Establish, Remediate and Verify scenes only.
- Mobile and desktop prototypes.
- Reduced-motion equivalent.
- Performance measurement before expanding.

### Slice C - Complete homepage story

- All scenes.
- Real product-proof section.
- CTA and analytics events subject to privacy approval.

### Slice D - Circular Compliance page

- Full five-stage explanation.
- Responsibility/evidence model.
- Claim qualifications.

### Slice E - Supporting-page alignment

- Platform and How It Works updated to use the same vocabulary without duplicating the homepage composition.

## 11. Acceptance criteria

- The page is meaningful with JavaScript disabled.
- Reduced-motion users receive the complete story without simulated scrolling.
- Keyboard navigation never becomes trapped in a pinned scene.
- Browser back/forward and anchor links remain reliable.
- No horizontal scroll at 320 px.
- The active stage is not communicated by colour alone.
- Long tasks do not occupy the main thread during scroll.
- Below-fold media is lazy-loaded with dimensions reserved.
- LCP does not depend on a large autoplay video.
- A five-second test communicates Building Record plus verified closure.
- A product-truth reviewer approves every current-capability claim.
- The final result is recognisably Widian and not an Arc'teryx reproduction.
