// ── Blog article loader ────────────────────────────────────────────────────────
//
// Uses Vite's import.meta.glob to discover every .md file in ./articles/.
// Each .md file is transformed at build time by the blogPlugin() in vite.config.ts
// into a JS module that exports { frontmatter, html }.
//
// To add a new article: create a .md file in src/blog/articles/ and push to GitHub.
// No changes to this file or any React component are needed.

/** The six permanent official practice-area categories for the blog. */
export const OFFICIAL_CATEGORIES = [
  'Derecho Civil',
  'Derecho Mercantil',
  'Derecho Laboral',
  'Divorcios y Familia',
  'Bienes e Inmuebles',
  'Contratos y Documentos',
] as const

export type OfficialCategory = typeof OFFICIAL_CATEGORIES[number]

export type ArticleFrontmatter = {
  // Required
  title: string
  description: string
  date: string
  author: string
  slug: string
  // Optional standard fields
  /** Primary practice area — must be one of the six OFFICIAL_CATEGORIES values. */
  category?: OfficialCategory
  featuredImage?: string
  published?: boolean
  // Optional SEO override fields (Task 14)
  /** Override the <title> tag. Falls back to title. */
  seoTitle?: string
  /** Override meta description. Falls back to description. */
  seoDescription?: string
  /** Override canonical URL. Falls back to auto-generated /blog/{slug}/. */
  canonical?: string
  /** Override og:title. Falls back to seoTitle → title. */
  ogTitle?: string
  /** Override og:description. Falls back to seoDescription → description. */
  ogDescription?: string
  /** Override OG image. Falls back to featuredImage → /og-image.jpg. */
  ogImage?: string
  /** Custom robots meta value. Defaults to "index, follow". */
  robots?: string
  /** Comma-separated keywords used in JSON-LD only (NOT rendered as meta keywords). */
  keywords?: string
  /** Article modification date (YYYY-MM-DD). Falls back to date. Task 11. */
  dateModified?: string
  /** Slugs of related articles. Task 13. */
  relatedArticles?: string[]
  /** When true, parse FAQ structured data from the article. Task 16. */
  faqSchema?: boolean
}

export type Article = {
  frontmatter: ArticleFrontmatter
  html: string
}

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
