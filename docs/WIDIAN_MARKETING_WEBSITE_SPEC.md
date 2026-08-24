# Widian Marketing Website — Design, Copy and Build Specification

**Status:** Implementation specification for a new website repository  
**Depends on:** `WIDIAN_MARKETING_WEBSITE_CONTEXT.md`  
**Target:** `https://widian.tech`

## 1. Delivery objective

Design and build a production-quality, mobile-first, multi-page marketing website that:

1. establishes Widian’s Building Record category;
2. explains why accountable closure is different from contractor completion;
3. demonstrates how every responsible party works through one record;
4. reframes Widian as future marketplace infrastructure;
5. earns trust through specificity rather than fear or exaggerated claims;
6. converts appropriate visitors into booked walkthroughs.

Lead capture must create a durable, owned record before displaying success. Enquiry acknowledgement and internal routing must be recoverable, and promotional marketing permission must remain separate and optional. See `LEAD_CAPTURE_AND_COMMUNICATIONS.md`.

## 2. Release-one sitemap

### Fully developed pages

| Route | Page | Primary job |
|---|---|---|
| `/` | Home | Establish the category and secure interest |
| `/platform` | Platform | Make the Building Record tangible |
| `/building-record` | Building Record | Navigate the record: portfolio → building → element → finding (added 2026-08-24, `DECISIONS.md` D-022) |
| `/how-it-works` | How It Works | Explain responsibility gates and verified closure (Verified Closure lives here as a section, `DECISIONS.md` D-024) |
| `/solutions` | Solutions | Route audiences into relevant value stories |
| `/solutions/building-owners` | Building Owners | Portfolio truth, assurance and accountability |
| `/solutions/compliance-teams` | Compliance Teams | Attention, action ownership and evidence |
| `/solutions/surveyors` | Surveyors | Mobile and offline field capture |
| `/solutions/contractors` | Contractors | Clear scope, evidence and handover |
| `/new-market` | The New Market | Explain network and marketplace-infrastructure strategy |
| `/security-trust` | Security & Trust | Publish substantiated controls and limitations |
| `/book-a-demo` | Book a Demo | Convert high-intent visitors (renamed from Book a Walkthrough, `DECISIONS.md` D-025) |
| `/privacy` | Privacy | Explain personal-data handling |
| `/cookies` | Cookies | Explain consent and analytics |
| `/resources` (+ `/resources/[slug]`) | Resources | Articles and guides (un-deferred 2026-08-24 once real articles were in progress — see `DECISIONS.md`) |

### Defer until sufficient evidence exists

- Case studies
- Customer stories
- Partner directory
- Integration directory
- Certification centre
- Pricing
- Marketplace listings

## 3. Global navigation

Desktop:

- Widian logo
- Platform
- Building Record
- How It Works
- Solutions
- The New Market
- Security & Trust
- Sign in
- Book a Demo

Mobile:

- approved compact Widian logo;
- accessible menu trigger;
- Platform;
- Building Record;
- How It Works;
- Solutions;
- The New Market;
- Security & Trust;
- Sign in;
- persistent or contextually repeated Book a Demo CTA.

Footer:

- Full Widian lock-up and “Clarity Through Compliance”
- Platform
- How It Works
- Solutions
- Security & Trust
- Book a Demo
- Sign in
- Staging login
- Privacy
- Cookies
- Company information when confirmed

## 4. Global message hierarchy

### Primary

> **One building record. Every responsible party. Verified from inspection to closure.**

### Explanation

> Widian connects inspections, findings, remedial work, evidence and verification in one accountable operational record for every building.

### Mechanism

> Issue identified → action assigned → work evidenced → independently checked → client verified → closed.

### Outcome

> See the current truth. Know who owns the next action. Retain the evidence behind every decision.

### Reinforcement

> Know what is true. Know what needs action. Prove what happened.

## 5. Copywriting workstream

An experienced senior B2B/SaaS copywriter should own or closely review final website copy.

Preferred experience:

- complex B2B platforms;
- property, building safety, risk or regulated operations;
- multi-stakeholder buying committees;
- category design;
- technically constrained claims;
- conversion copy without fearmongering.

### Required copy outputs

For every page:

1. page objective;
2. primary audience;
3. visitor question;
4. primary headline;
5. short standfirst;
6. narrative sequence;
7. proof points;
8. objections answered;
9. primary CTA;
10. secondary CTA;
11. SEO title and description;
12. social title and description;
13. image/animation captions;
14. accessible alternative text;
15. claims requiring evidence.

### Copy principles

- Use British English.
- Lead with outcomes and responsibility.
- Prefer concrete verbs.
- Explain specialist concepts in plain language.
- Use short paragraphs and varied sentence length.
- Distinguish workflow states precisely.
- Do not repeat the homepage proposition as the headline of every page.
- Do not pad pages with generic feature copy.
- Do not use fear, alarm or personal-liability messaging as the primary conversion mechanism.
- Do not imply software replaces competent people.
- Do not imply Widian reports alone prove compliance.

### Prohibited generic phrases

Avoid:

- streamline your workflow;
- all-in-one solution;
- seamless;
- revolutionise compliance, unless immediately substantiated;
- next-generation platform;
- unlock powerful insights;
- single pane of glass;
- world-class;
- cutting-edge, as self-description;
- compliance made easy;
- trusted by industry leaders without evidence.

### Recommended copy structure

Use:

- a strong claim;
- the present problem;
- Widian’s mechanism;
- operational proof;
- role-specific consequence;
- objection or limitation;
- conversion action.

## 6. Page differentiation rule

Each page must have a distinct:

- narrative question;
- layout grammar;
- dominant interaction;
- motion behaviour;
- information density;
- visual metaphor;
- closing conversion argument.

Do not create a set of pages that all consist of:

`dark hero → three cards → feature grid → CTA`

Shared navigation, typography, tokens and controls should create consistency. Page composition should create distinctiveness.

## 7. Page specifications

### 7.1 Home — Category declaration

**Visitor question:** What is Widian, and why should I care?

**Hero headline:**

> **One building record. Every responsible party. Verified from inspection to closure.**

**Standfirst:**

> Widian connects inspections, findings, remedial work, evidence and verification in one accountable operational record for every building.

**Dominant visual:** A building identity surrounded by responsible parties and lifecycle gates. The record progresses as evidence and decisions are added.

**Distinctive behaviour:** The visitor should see the record become more complete—not simply see elements move.

**Narrative sections:**

1. Category-defining hero
2. Fragmented activity versus building truth
3. “Reports record moments; Widian records responsibility”
4. Short lifecycle preview
5. Every responsible party
6. Authentic product evidence
7. Difference from reports and repositories
8. Trust preview
9. Demo CTA

**Conversion:** Book a Demo

### 7.2 Platform — Anatomy of the Building Record

**Visitor question:** What is actually inside a Widian Building Record?

**Suggested headline:**

> **The building becomes the organising structure.**

**Layout grammar:** Architectural cutaway or layered record anatomy. Use a vertical record spine rather than marketing cards.

**Dominant interaction:** Select a building layer:

- Building identity
- Element register
- Inspections
- Findings
- Remediation
- Evidence
- Independent checking
- Client verification
- History and issued records

**Copy requirement:** Explain what each layer records, why it persists and how it contributes to present truth.

**Required proof:** Authentic, anonymised product views or faithful demonstrations. Clearly mark proposed experiences.

### 7.2a Building Record — Portfolio-to-finding navigation

**Added 2026-08-24** (`DECISIONS.md` D-022) as a separate page from Platform, not in the original release-one sitemap.

**Visitor question:** How do you get from a whole portfolio down to one finding, without losing the building it belongs to?

**Layout grammar:** drill-down navigation (portfolio → building → element → inspection → finding), distinct from Platform's static layer anatomy.

**Required proof:** synthetic/illustrative demonstration data, clearly labelled as such (`DECISIONS.md` D-021) — not a live product view.

Full brief and an open data-model correction (the drill-down levels must follow the verified schema chain, not the "Location"/"Case" terms first proposed) are at `docs/copy/building-record.md`. This page is a skeleton only; do not treat this entry as approved copy.

### 7.3 How It Works — Responsibility Gates

**Visitor question:** What prevents an issue from being marked complete prematurely?

**Suggested headline:**

> **Completion is a claim. Verification is proof.**

**Layout grammar:** Controlled sequence, closer to a decision instrument than a timeline.

**Resolved 2026-08-24 (`DECISIONS.md` D-023, D-024):** the interactive gate uses the ten-stage canonical lifecycle (`Recorded → Submitted → Reviewed → Finding raised → Assigned → In progress → Remediated → Independently checked → Client verified → Closed`), not "seven-stage" as below — this text predates that resolution. This remains a "Proposed future state" claim until the underlying build ships (see `CLAIMS_REGISTER.md`). This page must also include a Verified Closure section (D-024: not a separate page) covering the finding → approved scope → work → required evidence → independent verification → client acceptance → verified closure journey, why completed work is not automatically closure, and how reopening preserves historical truth.

**Dominant interaction:** Ten-stage responsibility gate. Selecting a stage reveals:

- accountable role;
- input state;
- required evidence;
- permitted decision;
- possible rejection/rework;
- next state;
- audit context.

**Key copy distinction:**

> A contractor can evidence completed work. They cannot independently confirm their own remediation or provide the client’s final acceptance.

Only publish this where product rules support it.

### 7.4 Solutions — Connected perspectives

**Visitor question:** What does the shared record change for my role?

**Layout grammar:** One record viewed through different responsibilities. Avoid independent feature-card collections.

**Dominant interaction:** Change perspective while the underlying building record stays fixed.

#### Building Owners

Story:

- portfolio truth;
- open risk and action visibility;
- accountable delegation;
- evidence of management activity;
- verified closure history.

#### Compliance Teams

Story:

- prioritisation;
- overdue and unverified actions;
- QA and evidence review;
- clear ownership;
- traceable decisions.

#### Surveyors

Story:

- identify the correct element;
- structured field checks;
- photographs and findings;
- minimal typing;
- offline-first saving;
- synchronisation visibility.

#### Contractors

Story:

- exact location and scope;
- required evidence;
- straightforward guest workflow;
- cost and completion information;
- clear separation between submission and acceptance.

### 7.5 The New Market — Category and network story

**Visitor question:** How can Widian become more than another software tool?

**Suggested headline:**

> **From software tool to market infrastructure.**

**Layout grammar:** System map, network or operating-model transition. Do not use an orbit merely for decoration.

**Story:**

1. Existing products end at organisational boundaries.
2. The building remains the persistent subject.
3. Widian gives every party a controlled way to contribute.
4. Every verified event increases the usefulness of the record.
5. Repeated participation can create network effects.
6. Future commercial services may form around trusted workflow infrastructure.

**Critical qualification:** Describe the marketplace as strategic direction unless real marketplace functionality and participants exist.

### 7.6 Security & Trust — Proof, not theatre

**Visitor question:** Can Widian be trusted with important building records?

**Suggested headline:**

> **Trust is not a badge. It is a provable record.**

**Layout grammar:** Evidence register or assurance dossier. More documentary, less promotional.

**Sections:**

- Identity and attribution
- Tenant and permission boundaries
- Evidence handling
- Integrity controls
- Issued-record controls
- Hosting and storage
- Privacy
- Security-development practice
- Current independent assurance
- Limitations and planned assurance

Only publish evidence-backed statements.

Include dated, maintained assurance information rather than timeless unsupported claims.

### 7.7 Book a Demo — High-intent conversion

**Visitor question:** Is Widian relevant to my buildings and operating model?

**Layout grammar:** Calm, focused and low-distraction.

**Form fields:**

- Name
- Work email
- Organisation
- Role
- Approximate number of buildings
- Primary challenge
- Optional message
- Consent acknowledgement

**Success state:** Confirm receipt, expected response time and next step.

**Error state:** Preserve safe input and clearly explain how to retry.

Do not ask for excessive personal or commercially sensitive information.

## 8. Motion specification

Motion must explain:

- fragmentation;
- convergence;
- responsibility;
- state transition;
- evidence accumulation;
- verification;
- closure.

### Global motion motif

One continuous Ember thread may traverse pages as a recurring narrative device.

It should:

- join related records;
- pause at responsibility gates;
- leave open nodes for outstanding work;
- change to verified green only after the final accepted state;
- adapt to vertical storytelling on mobile;
- remain meaningful when animation is disabled.

### Page-specific motion

| Page | Motion concept |
|---|---|
| Home | Fragmented signals assemble into one current Building Record |
| Platform | Record layers separate, reveal their purpose and reconnect |
| How It Works | State advances only after evidence and authority conditions are shown |
| Solutions | Viewpoint changes while the underlying record remains fixed |
| New Market | Disconnected organisations become a controlled contribution network |
| Security & Trust | Evidence statements reveal their source, date and scope |

### Motion constraints

- Respect `prefers-reduced-motion`.
- Do not autoplay distracting loops near long-form reading.
- Do not make essential information dependent on animation.
- Avoid scroll-jacking.
- Maintain keyboard access to interactive narratives.
- Avoid large animation dependencies unless native CSS/Web Animations cannot meet the requirement.
- Prefer transform and opacity for performance.
- Do not animate merely to signal technical sophistication.

## 9. Visual system

### Layout

- Mobile-first 4-column grid
- Tablet 8-column grid
- Desktop 12-column grid
- Strong editorial alignment
- Intentional whitespace
- Registers, ruled groups and timelines
- Limited use of containers that look like generic SaaS cards

### Shape

- Minimal radius for architectural and documentary surfaces
- Moderate radius only for controls or genuine grouped panels
- Pills only for compact statuses and filters
- Fine hairlines and precise boundaries

### Status semantics

Never rely on colour alone.

| State | Treatment |
|---|---|
| Recorded | Neutral marker and label |
| Submitted | Neutral/blue-grey transitional treatment |
| Action required | Amber plus icon and label |
| Priority | Ember plus priority code and label |
| Remediated | Explicit “work evidenced” label |
| Independently checked | Separate verification symbol and role |
| Client verified | Verified green plus identity context |
| Closed | Final state with closure provenance |

### Imagery

Prioritise:

- authentic product demonstrations;
- anonymised building records;
- real field workflow imagery where permission exists;
- architectural photography commissioned or properly licensed;
- detailed evidence and record interfaces;
- purposeful abstract assets based on the Building Record.

Avoid:

- stock teams around laptops;
- generic hard-hat portraits;
- generated imagery presented as a real customer site;
- illegible miniature screenshots;
- device frames used to compensate for weak composition.

## 10. Product demonstrations

Required demonstrations:

1. Portfolio attention
2. Building Record
3. Element lifetime history
4. Mobile inspection
5. Finding and priority
6. Contractor scope and evidence
7. QA or independent checking
8. Client verification
9. Issued record or report verification

Rules:

- Use anonymised or synthetic demonstration data.
- Do not expose staging customer information.
- Keep interface text legible.
- Show one task at a time.
- Add captions explaining why the view matters.
- Clearly label proposed/future interfaces.

## 11. Functional requirements

- Responsive navigation
- Accessible mobile menu
- Book-a-demo form
- Client and server-side validation
- Loading, success and error states
- Role-based content exploration
- Interactive lifecycle
- Building Record visualisation
- Accessible accordions/disclosures
- Reduced-motion alternative
- Metadata per route
- Open Graph and X previews
- XML sitemap
- Robots configuration
- Structured data
- Analytics event plan
- Consent and cookie controls where legally required
- CMS-ready content model
- Performance-conscious media
- Broken-link and form monitoring

## 12. Content model

Separate content from presentation where practical.

Suggested types:

- `Page`
- `Hero`
- `NarrativeSection`
- `LifecycleStage`
- `RoleSolution`
- `ProductDemonstration`
- `Claim`
- `EvidenceSource`
- `AssuranceItem`
- `CallToAction`
- `FAQ`

Every claim should support:

- claim text;
- status: approved / qualified / future / prohibited;
- source;
- owner;
- verification date;
- review date;
- public qualification.

## 13. Technical architecture

Recommended:

- Separate Git repository
- Next.js App Router
- TypeScript strict mode
- Tailwind CSS or the current approved styling approach
- Vercel
- Server-rendered content by default
- Client components only for purposeful interaction
- No direct production-application database dependency for normal page rendering

Do not:

- import the entire product application;
- share sensitive environment variables;
- expose staging data;
- introduce a large animation framework without justification;
- make marketing deployment dependent on application uptime;
- place credentials or privileged Supabase access in the marketing app.

## 14. SEO requirements

Create an evidence-led keyword and intent strategy around:

- building record software;
- passive-fire compliance software;
- fire-door inspection and remediation tracking;
- verified remedial closure;
- building-safety evidence;
- compliance action tracking;
- fire-stopping inspection records;
- managing-agent compliance software.

Do not create thin pages merely to target keywords.

Each route requires:

- unique title;
- unique meta description;
- canonical URL;
- Open Graph data;
- logical heading structure;
- descriptive internal links;
- indexable body copy;
- structured data where appropriate.

## 15. Analytics plan

Suggested events:

- `walkthrough_cta_selected`
- `walkthrough_form_started`
- `walkthrough_form_submitted`
- `walkthrough_form_failed`
- `lifecycle_stage_viewed`
- `role_solution_selected`
- `product_demo_opened`
- `security_claim_expanded`
- `sign_in_selected`
- `staging_login_selected`

Do not collect unnecessary personal information or place form contents in analytics payloads.

## 16. Accessibility requirements

Meet WCAG 2.2 AA expectations.

Required:

- semantic HTML;
- logical heading order;
- keyboard-operable navigation and interactive narratives;
- visible focus;
- minimum target sizes;
- colour-independent status communication;
- accessible names for icons;
- meaningful alternative text;
- captions or transcripts for complex animation/video;
- reduced-motion support;
- focus management for menus, dialogs and disclosures;
- understandable forms and errors;
- appropriate contrast in every state.

## 17. Performance requirements

Target:

- Lighthouse 90+ for Performance, Accessibility, Best Practices and SEO;
- LCP within good Core Web Vitals range;
- minimal layout shift;
- responsive images;
- optimised and self-hosted brand assets where permitted;
- font subset and preload strategy;
- no unnecessary client JavaScript;
- motion based primarily on compositor-friendly properties;
- lazy-load below-fold media;
- reserve media dimensions.

## 18. Implementation phases

### Phase 0 — Discovery and evidence

- Inspect the new repository and application source.
- Resolve logo exports.
- Confirm domain/authentication migration plan.
- Build the public-claim register.
- Select product demonstrations.
- Confirm conversion destination.
- Record unrelated/uncommitted work.

**Gate:** No public copy claim lacks a status and evidence owner.

### Phase 1 — Copy strategy

- Commission senior copywriter.
- Produce page briefs.
- Write full first draft.
- Review for product accuracy.
- Review for legal/security claims.
- Test headline comprehension.

**Gate:** Each page has a distinct story, audience question and conversion argument.

### Phase 2 — Experience architecture

- Mobile wireframes
- Desktop adaptations
- Navigation prototype
- Motion storyboard
- Product-demonstration plan
- Accessibility annotations

**Gate:** Pages do not share the same repeated layout pattern.

### Phase 3 — Design system

- Final colour tokens
- Typography
- Grid and spacing
- Logo lock-ups
- Buttons and links
- Status system
- Illustration/imagery rules
- Motion tokens
- Interaction states

**Gate:** The system is recognisably Widian without relying on the logo.

### Phase 4 — Homepage vertical slice

- Production header
- Hero
- Core market story
- Lifecycle preview
- Walkthrough conversion
- Mobile experience

**Gate:** Target users understand the proposition within five seconds.

### Phase 5 — Core pages

- Platform
- How It Works
- Solutions
- New Market
- Security & Trust

**Gate:** Every page has unique art direction and sufficient copy depth.

### Phase 6 — Conversion and governance

- Walkthrough form
- Privacy
- Cookies
- Analytics
- Consent
- Error/success states

**Gate:** Complete lead journey works without exposing sensitive information.

### Phase 7 — Quality and launch

- Mobile/tablet/desktop visual QA
- Keyboard testing
- Screen-reader review
- Reduced-motion testing
- Performance testing
- SEO validation
- Claims audit
- Link and form testing
- Cross-browser testing
- Production-domain migration

**Gate:** No material accessibility, claims, conversion or performance issue remains.

## 19. Acceptance criteria

### Brand and comprehension

- Main proposition understood within five seconds.
- “One building record” is visually and verbally tangible.
- Widian shield and wordmark are correct.
- The site is recognisably Widian without generic SaaS styling.
- Supporting copy is sufficiently developed to persuade, not merely label sections.

### Page differentiation

- Each page has a unique primary question.
- Each page has distinct composition and interaction.
- No repeated hero/card-grid/CTA template across all pages.
- Shared components do not create visual monotony.

### Product truth

- Every current-functionality claim is supportable.
- Future functionality is labelled.
- Contractor completion, checking, verification and closure are distinct.
- No claim implies statutory certification.
- No unsupported security or marketplace claim exists.

### Mobile

- Works at 320px without horizontal overflow.
- First viewport communicates the proposition.
- Touch targets are appropriate.
- No unreadable miniature interfaces.
- Motion remains meaningful or is replaced appropriately.

### Accessibility and performance

- WCAG 2.2 AA material requirements satisfied.
- Keyboard journeys work.
- Reduced-motion mode works.
- Lighthouse target is 90+ in all four categories.
- Images and fonts do not cause material layout shift.

### Conversion

- Primary CTA is consistently “Book a Demo” (see `DECISIONS.md` D-025, supersedes D-016's wording).
- Form validation and feedback are clear.
- Success state explains next steps.
- Analytics measure the journey without collecting form contents.

## 20. Required inputs from the Widian team

- Approved SVG logo lock-ups
- Final company/legal details
- Walkthrough destination and response commitment
- Approved privacy and cookie text
- Audience priority for launch
- Launch status: available product, pilot or early-access programme
- Approved anonymised product records
- Approved screenshots or access to create them
- Verified security and hosting statements
- Verified current product claim list
- Any pilot partner, testimonial or case-study permissions
- Named claim approvers

## 21. Final review lenses

Before launch, review as:

1. Prospective managing-agent buyer
2. Responsible person or property director
3. Fire-safety professional
4. Surveyor using a phone
5. Contractor receiving a work order
6. Accessibility reviewer
7. Security/procurement reviewer
8. Senior conversion copywriter
9. Senior frontend engineer
10. Sceptical industry journalist

The website is complete only when it remains persuasive, understandable and supportable from all ten perspectives.
