# Widian Marketing Website — Architecture

## 1. System boundary

The marketing website is a public content and lead-generation application. It is not part of the authenticated Widian product.

It must continue operating independently when the production application, staging application or operational database is unavailable.

## 2. Domain topology

```text
widian.tech
└── Public marketing website

app.widian.tech
└── Production Widian application
    └── Primary Clerk sign-in domain

staging.widian.tech
└── Authorised staging application
    └── Clerk satellite or environment-specific authentication
```

### Required migration order

1. Configure `app.widian.tech` for the production application.
2. Update Clerk primary-domain and permitted redirect configuration.
3. Update the staging satellite sign-in target.
4. Verify production and staging authentication.
5. Point `widian.tech` at the marketing deployment.

Never reverse this order; replacing the apex site first could break staging authentication.

### Fasthosts DNS nag (ignore it)

Fasthosts' DNS dashboard flags the `widian.tech` and `staging.widian.tech` apex/subdomain A records (`76.76.21.21`, Vercel's anycast IP) as "manually changed" and offers to "restore automatic updates" to `88.208.252.9`. **Do not accept that offer.** `88.208.252.9` is Fasthosts' own default parking/hosting IP; reverting to it would repoint those records away from the live, Vercel-hosted production/staging application and break it. The "manual change" is the correct, intentional configuration — verified 2026-08-24 by resolving both hostnames and fetching `https://widian.tech`, which confirmed the live application (not the marketing site) is still being served, matching the not-yet-started status of step 5 above. This warning is expected to keep reappearing in the Fasthosts UI and can be dismissed each time.

## 3. Recommended stack

- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS or documented token-based CSS
- Vercel deployment
- Server components by default
- Client components for purposeful interaction
- Vitest or equivalent unit/component tests
- Playwright for browser journeys

Use versions supported by the new repository at creation time. Do not copy application dependencies blindly.

## 4. Route architecture

```text
app/
├── layout.tsx
├── page.tsx
├── circular-compliance/page.tsx
├── platform/page.tsx
├── building-record/page.tsx
├── how-it-works/page.tsx
├── new-market/page.tsx
├── solutions/
│   ├── page.tsx
│   ├── building-owners/page.tsx
│   ├── compliance-teams/page.tsx
│   ├── surveyors/page.tsx
│   └── contractors/page.tsx
├── security-trust/page.tsx
├── book-a-demo/page.tsx
├── privacy/page.tsx
├── cookies/page.tsx
├── sitemap.ts
├── robots.ts
└── api/
    └── walkthrough/route.ts   # internal name kept — see DECISIONS.md D-025
```

Final routing may vary, but every change must preserve clear public URLs and unique metadata.

## 5. Component boundaries

```text
components/
├── brand/
│   ├── logo.tsx
│   └── record-thread.tsx
├── navigation/
│   ├── site-header.tsx
│   ├── mobile-menu.tsx
│   └── site-footer.tsx
├── narrative/
│   ├── building-record-hero.tsx
│   ├── fragmentation-story.tsx
│   ├── responsibility-gates.tsx
│   └── market-network.tsx
├── circular-compliance/
│   ├── circular-story.tsx
│   ├── story-chapter.tsx
│   ├── thread-canvas.tsx
│   ├── lifecycle-progress.tsx
│   ├── remediation-route.tsx
│   ├── verification-gate.tsx
│   └── return-to-record.tsx
├── product/
│   ├── product-demonstration.tsx
│   └── record-view.tsx
├── forms/
│   └── walkthrough-form.tsx
└── ui/
    ├── button.tsx
    ├── disclosure.tsx
    └── status.tsx
```

Shared components provide consistency. They must accept enough layout variation to avoid identical pages.

## 6. Content architecture

Recommended early approach:

- type-safe local content modules or MDX;
- clear separation between approved copy and layout;
- claim IDs attached to important statements;
- content easy for a copywriter to edit;
- no CMS until editing frequency and ownership justify it.

Introduce a CMS only through an architectural decision documenting:

- editorial roles;
- preview requirements;
- structured-content needs;
- security;
- cost;
- migration implications.

## 7. Data flow

### Normal page request

```text
Visitor → CDN/edge → server-rendered marketing route → static/local content
```

No application database is required.

### Walkthrough form

```text
Visitor
  → client validation
  → marketing server endpoint
  → server validation
  → rate/abuse control
  → approved CRM/email destination
  → success or recoverable error
```

Do not place third-party secret keys in browser code.

## 8. Security boundaries

- No Supabase service-role key.
- No Widian production database access.
- No staging credentials.
- No Clerk secret unless public-site authentication is separately approved.
- No direct exposure of internal APIs.
- Validate and constrain all form input.
- Apply rate limiting and spam protection proportionately.
- Use security headers.
- Keep dependencies minimal and current.
- Do not log full form contents unnecessarily.

## 9. Analytics and privacy

Analytics must be consent-aware where legally required.

Never place:

- form messages;
- names;
- email addresses;
- organisation details;
- hidden record identifiers

inside analytics event properties.

Document every cookie or local-storage use.

Privacy controls, records, retention, rights handling and supplier assessment are defined in `PRIVACY_AND_UK_GDPR_PLAN.md`. No analytics or lead supplier may be introduced without updating the data map and cookie inventory.

## 9A. Search architecture

- Primary content and navigation are server-rendered and indexable without animation.
- Every production route declares unique metadata and a canonical `https://widian.tech` URL.
- Sitemap generation and route definitions share one source of truth.
- Preview and staging deployments are excluded from indexing; confidential staging also requires access control.
- Structured data contains only visible, approved facts.
- Redirects are explicitly mapped during the apex/application-domain migration.

See `SEO_STRATEGY_AND_TECHNICAL_PLAN.md`.

## 10. Brand assets

Store production logo files locally under `public/brand/`.

Do not:

- hotlink from `staging.widian.tech`;
- redraw the approved logo;
- convert raster assets into inaccurate vectors;
- use generated marks as official branding.

Optimise image formats and reserve dimensions.

## 11. Motion architecture

Default to:

- CSS transitions and keyframes;
- Intersection Observer;
- Web Animations API;
- SVG path animation where appropriate.
- native scrolling with semantic server-rendered chapters;
- CSS scroll-driven animation where supported and maintainable;
- Intersection Observer as a progressive enhancement and fallback.

Do not introduce scroll-jacking, mandatory scroll snap or a smooth-scroll interception layer by default. The complete experience must remain readable without JavaScript and equivalent with reduced motion. See `PARALLAX_MOTION_AND_INTERACTION_SPEC.md`.

Add a motion library only when:

- the required choreography cannot be maintained cleanly otherwise;
- bundle impact is measured;
- reduced-motion behaviour is defined;
- the decision is recorded.

Motion state must not become authoritative application state.

## 12. Rendering strategy

- Static or server-rendered content by default.
- Pre-render stable pages.
- Lazy-load below-fold demonstrations.
- Avoid hydration for static copy.
- Keep interactive diagrams isolated.
- Use route-level metadata.
- Generate sitemap and robots rules from route configuration.

## 13. Forms and external services

The walkthrough destination remains a project decision.

The form is owned by the marketing site and posts to a same-origin server endpoint. Leads are stored in an approved CRM or isolated marketing datastore, not in the operational Widian product database by default. A durable outbox or queue handles acknowledgements and internal routing so an email-provider outage cannot lose an accepted lead.

See `LEAD_CAPTURE_AND_COMMUNICATIONS.md` for the data model, consent separation, reliability, security and provider decision.

Possible options:

1. transactional email;
2. CRM form API;
3. scheduling service after qualification;
4. database-backed lead record.

Selection criteria:

- reliability;
- privacy;
- spam protection;
- operational ownership;
- acknowledgement and response workflow;
- export and retention;
- vendor cost.

## 14. Environment variables

Suggested naming:

```text
NEXT_PUBLIC_SITE_URL
WALKTHROUGH_DESTINATION
WALKTHROUGH_API_KEY
RATE_LIMIT_*
ANALYTICS_*
CONSENT_*
```

Maintain:

- `.env.example` with names and safe descriptions;
- environment-scoped values in deployment settings;
- no real secrets in Git.

## 15. Testing architecture

Unit/component:

- lifecycle state presentation;
- status semantics;
- form validation;
- claim/content transformations;
- navigation configuration.

Browser:

- mobile navigation;
- primary CTA journey;
- lifecycle keyboard operation;
- role perspective switching;
- walkthrough submission success/failure;
- reduced-motion mode;
- route metadata and canonical links;
- production/staging external links.

## 16. Deployment model

- Development: local
- Preview: pull request deployments
- Production: marketing main branch

The marketing repository must not automatically deploy to the Widian application project.

Domain assignment requires an explicit release runbook and verified rollback.

## 17. Observability

At minimum:

- deployment/build alerts;
- form submission failure monitoring;
- 404 and broken-route monitoring;
- Core Web Vitals;
- privacy-conscious conversion analytics;
- uptime monitoring after launch.

## 18. Architectural non-goals

- Reimplementing Widian product functionality
- Querying live building records for general marketing visitors
- Public user accounts
- Public contractor marketplace in release one
- Generic CMS complexity before an editorial need exists
- Personalised pages based on sensitive product data
- Shared deployment or environment variables with the product application
