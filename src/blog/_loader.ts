// ── Runtime blog article loader ────────────────────────────────────────────────
//
// Uses Vite's import.meta.glob to discover every .md file in ./articles/.
// Each .md file is transformed at build time by blogPlugin() in vite.config.ts
// into a JS module exporting { frontmatter, html }.
//
// Import this file only from browser/app modules (BlogPage, BlogArticlePage, etc.).
// Do NOT import it from vite.config.ts — import.meta.glob is not available there.
//
// To add a new article: create a .md file in src/blog/articles/ and push.
// No changes to this file or any React component are needed.

import type { Article } from './_articles'

type RawModule = { default: Article }

const modules = import.meta.glob('./articles/*.md', { eager: true }) as Record<string, RawModule>

export const allArticles: Article[] = Object.values(modules)
  .map(m => m.default)
  .filter(a => a?.frontmatter?.slug && a?.frontmatter?.title && a?.frontmatter?.published !== false)
  .sort((a, b) => {
    const da = new Date(a.frontmatter.date).getTime()
    const db = new Date(b.frontmatter.date).getTime()
    return db - da  // newest first
  })
