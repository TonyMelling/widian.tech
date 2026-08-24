import { describe, expect, it } from "vitest";
import matter from "gray-matter";
import { marked } from "marked";
import { getAllResourceSlugs, getPublishedResources } from "./resources";

// Exercises the same parsing pipeline lib/resources.ts uses, without
// touching the filesystem — content/resources/ stays empty for real
// articles rather than test fixtures.
describe("resource article parsing", () => {
  it("parses frontmatter and renders markdown body to HTML", () => {
    const raw = `---
title: "Example article"
description: "An example."
publishedAt: "2026-08-24"
---

## Heading

Some **bold** text.
`;
    const { data, content } = matter(raw);
    const html = marked.parse(content, { async: false }) as string;

    expect(data.title).toBe("Example article");
    expect(data.publishedAt).toBe("2026-08-24");
    expect(html).toContain("<h2>Heading</h2>");
    expect(html).toContain("<strong>bold</strong>");
  });

  it("treats draft: true as excludable from published listings", () => {
    const raw = `---
title: "Draft"
description: "Not ready."
publishedAt: "2026-08-24"
draft: true
---
Body.
`;
    const { data } = matter(raw);
    expect(data.draft).toBe(true);
  });
});

// Regression guard: content/resources/README.md (authoring instructions
// for whoever writes articles) matches the same *.md glob real articles
// do and has no frontmatter — it must never be treated as an article,
// or an undefined publishedAt reaches Date() and crashes sitemap.xml.
describe("content/resources/README.md exclusion", () => {
  it("is never returned as an article slug", () => {
    expect(getAllResourceSlugs().map((s) => s.toLowerCase())).not.toContain("readme");
  });

  it("is never returned by getPublishedResources", () => {
    expect(getPublishedResources().some((a) => a.slug.toLowerCase() === "readme")).toBe(
      false,
    );
  });
});
