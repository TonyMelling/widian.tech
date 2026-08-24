import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const RESOURCES_DIR = path.join(process.cwd(), "content", "resources");

export type ResourceFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  draft?: boolean;
};

export type ResourceArticle = ResourceFrontmatter & {
  slug: string;
  html: string;
};

export type ResourceSummary = ResourceFrontmatter & { slug: string };

function readArticleFiles(): string[] {
  return readdirSync(RESOURCES_DIR).filter(
    (file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md",
  );
}

function parseArticle(filename: string): ResourceArticle {
  const slug = filename.replace(/\.md$/, "");
  const raw = readFileSync(path.join(RESOURCES_DIR, filename), "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as ResourceFrontmatter;
  return {
    ...frontmatter,
    slug,
    html: marked.parse(content, { async: false }) as string,
  };
}

/** Published (non-draft) articles, newest first. Used by the index page,
 * the sitemap and robots — draft articles never appear in any of these,
 * only at their own noindex URL, per content/resources/README.md. */
export function getPublishedResources(): ResourceSummary[] {
  return readArticleFiles()
    .map(parseArticle)
    .filter((article) => !article.draft)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .map((article): ResourceSummary => ({
      slug: article.slug,
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      updatedAt: article.updatedAt,
      author: article.author,
      draft: article.draft,
    }));
}

/** A single article by slug, draft or published — the [slug] route itself
 * decides how to treat a draft (still builds it, marks it noindex). */
export function getResourceBySlug(slug: string): ResourceArticle | null {
  const filename = `${slug}.md`;
  if (!readArticleFiles().includes(filename)) return null;
  return parseArticle(filename);
}

export function getAllResourceSlugs(): string[] {
  return readArticleFiles().map((file) => file.replace(/\.md$/, ""));
}
