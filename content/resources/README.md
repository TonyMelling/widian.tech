# Resources articles

Each article is a single Markdown file in this folder. The filename becomes the URL slug — `fire-door-inspection-basics.md` publishes at `/resources/fire-door-inspection-basics`.

## Required frontmatter

```markdown
---
title: "Article title"
description: "One-sentence summary shown on the index page and used as the meta description."
publishedAt: "2026-08-24"
---

Article body in Markdown starts here.
```

## Optional frontmatter

- `updatedAt: "2026-08-30"` — shown alongside the published date if the article was substantively revised.
- `author: "Widian"` — defaults to `"Widian"` if omitted.
- `draft: true` — keeps the article out of the index, sitemap and search engines (it still builds, at its URL, with `noindex`) until you're ready to publish. Remove or set to `false` to go live.

## Before publishing

Per `AGENTS.md`'s copy invariants: British English, no unsupported claims, every product-functionality claim must trace to `docs/CLAIMS_REGISTER.md`. Flag anything to me that describes what Widian's product does — it needs the same Product Truth check every other page's copy gets, not a lighter bar just because it's an article.
