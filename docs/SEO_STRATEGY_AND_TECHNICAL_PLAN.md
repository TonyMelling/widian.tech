# SEO Strategy and Technical Plan

## Objective

Build search visibility around Widian's genuine category expertise and visitor needs, not keyword-stuffed variations of thin product pages. SEO is part of information architecture, copy, performance and measurement from the first commit.

## Search intent architecture

Validate demand and language before final copy. Proposed clusters are hypotheses:

| Intent | Visitor need | Best destination | Evidence/content needed |
|---|---|---|---|
| Brand | Find Widian, sign in or assess the company | Home, About, Sign in | Clear entity and navigation signals |
| Category/problem | Understand a shared fire-safety building record or golden thread | Home, Platform | Strong definitions and diagrams |
| Process | Understand remediation, verification and closure | How It Works | Precise lifecycle and role evidence |
| Role/solution | Assess relevance for owner, compliance, surveyor or contractor | Dedicated solution pages | Distinct role outcomes and objections |
| Trust/procurement | Review security, privacy, hosting and assurance | Security & Trust | Approved, current evidence |
| Educational | Learn about operational record integrity and accountable closure | Future resources | Expert-reviewed, original content |

Conduct keyword and SERP research before locking URLs, headings and metadata. Do not create a page for every phrase; one useful page may satisfy several related queries.

## Architecture rules

- Use short, stable, descriptive URLs and one canonical URL per page.
- Keep important pages within a shallow, logical navigation hierarchy.
- Link between Platform, How It Works, Solutions and Trust using descriptive anchor text.
- Give every indexable page a distinct purpose and substantial original copy.
- No-index staging, previews, form success pages, internal search and duplicate campaign variants.
- Prevent staging from being publicly discoverable; do not rely on `robots.txt` alone for confidential access.
- Preserve redirects and canonical signals during the apex/application-domain migration.
- Generate XML sitemap entries from the same route/content source and include only canonical, indexable URLs.
- Publish a useful HTML navigation structure independent of JavaScript animation.

## Page template requirements

Each page needs:

- a unique, descriptive title;
- a compelling, accurate meta description;
- one clear page-level heading and semantic subheadings;
- canonical URL;
- Open Graph and appropriate social metadata;
- breadcrumb UI/markup where it genuinely reflects hierarchy;
- descriptive image filenames, dimensions and alt text where images are informative;
- indexable server-rendered primary copy;
- relevant internal links and next step;
- page owner, review date and claim IDs.

Do not promise rankings or use metadata claims that the visible page cannot support.

## Structured data

Use JSON-LD only when it matches visible, verified content. First-release candidates:

- `Organization` for Widian, after legal name, logo URL and official profiles are confirmed;
- `WebSite` for the canonical site;
- `BreadcrumbList` on hierarchical pages;
- `Article` only for genuine editorial resources when introduced.

Do not invent reviews, ratings, FAQs, products, offers or organisation facts for rich-result eligibility. Validate markup and monitor Search Console; structured data can aid understanding but does not guarantee a rich result.

## Technical SEO

- Server-render primary content and navigation; animation enhances rather than reveals essential text.
- Return correct status codes and create useful 404/500 experiences.
- Use permanent redirects for retired URLs and avoid redirect chains.
- Keep production crawlable while previews/staging remain excluded.
- Generate `robots.txt` and `sitemap.xml`; reference the sitemap from robots.
- Use consistent trailing-slash, hostname and protocol rules.
- Prevent parameter/index bloat from campaign and form URLs.
- Use responsive images, modern formats, explicit dimensions and lazy loading below the fold.
- Optimise font delivery and keep Core Web Vitals within the project's quality gate.
- Ensure mobile contains the same primary content, metadata and structured data as desktop.
- Provide accessible HTML equivalents for canvas/SVG/WebGL narrative elements.

## Content quality and authority

- Prioritise first-hand product knowledge, original diagrams and named expert review.
- Define the difference between recorded, remediated, independently checked, client verified and closed.
- Explain limitations openly; do not turn safety guidance into sales fear.
- Add publication/review dates and authorship to educational content.
- Cite authoritative sources where discussing law, regulation or standards and maintain a review cadence.
- Avoid mass-generated location, role or keyword variants with near-identical content.
- Treat search snippets as a user promise: the page must answer that promise quickly.

## Measurement

Configure:

- Google Search Console and Bing Webmaster Tools ownership;
- XML sitemap submission and index coverage review;
- privacy-approved analytics for organic landing pages and walkthrough conversions;
- rank/visibility tracking for a small approved topic set, not vanity-volume reporting;
- Core Web Vitals and crawl/error monitoring;
- annotations for launches, migrations and major content changes.

Report qualified organic walkthroughs, assisted journeys, index health and query-to-page relevance. Do not send lead personal data to analytics.

## Migration checklist

- Inventory current indexed URLs and backlinks before changing the apex domain content.
- Decide the destination for the current application and map redirects deliberately.
- Verify `app.widian.tech` authentication and canonical behaviour first.
- Ensure marketing pages do not accidentally canonicalise to staging or preview hosts.
- Validate production robots, sitemap, canonicals, structured data and status codes.
- Submit sitemap and inspect priority pages after launch.
- Monitor 404s, redirect errors, indexing and performance during the following weeks.

## Acceptance criteria

- Each indexable route owns a distinct intent and original content.
- All indexable pages have approved title, description, canonical and social metadata.
- Sitemap contains only canonical production URLs; previews and staging are excluded.
- Essential copy and links are present in rendered HTML without interaction.
- Structured data validates and contains only visible, approved facts.
- Internal linking provides a clear route from educational/solution content to walkthrough conversion.
- Mobile content parity, accessibility and Core Web Vitals pass the quality plan.
- Search Console, error monitoring and privacy-approved conversion measurement are operational.

