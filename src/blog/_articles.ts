// ── Blog article loader ────────────────────────────────────────────────────────
//
// Uses Vite's import.meta.glob to discover every .md file in ./articles/.
// Each .md file is transformed at build time by the blogPlugin() in vite.config.ts
// into a JS module that exports { frontmatter, html }.
//
// To add a new article: create a .md file in src/blog/articles/ and push to GitHub.
// No changes to this file or any React component are needed.

export type ArticleFrontmatter = {
  title: string
  description: string
  date: string
  author: string
  slug: string
  category?: string
  featuredImage?: string
  published?: boolean
}

export type Article = {
  frontmatter: ArticleFrontmatter
  html: string
}

type RawModule = { default: Article }

const modules = import.meta.glob('./articles/*.md', { eager: true }) as Record<string, RawModule>

export const allArticles: Article[] = Object.values(modules)
  .map(m => m.default)
  .filter(a => a?.frontmatter?.slug && a?.frontmatter?.title)
  .sort((a, b) => {
    const da = new Date(a.frontmatter.date).getTime()
    const db = new Date(b.frontmatter.date).getTime()
    return db - da  // newest first
  })
