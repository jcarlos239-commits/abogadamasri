// ── Shared Article SEO Resolver ───────────────────────────────────────────────
//
// Single source of truth for all article SEO value fallback chains.
// Used by BlogArticlePage.tsx (runtime) to ensure consistent meta values.
// The same fallback logic is mirrored in vite.config.ts articleHtml()
// for build-time static HTML generation.

import type { ArticleFrontmatter } from './_articles'

const DEFAULT_SITE_URL = 'https://www.abogadamasri.com'

/**
 * Validates that a frontmatter `canonical` value is safe:
 * - Must start with the site URL (same-domain absolute) OR start with `/` (path-relative).
 * - Throws if it points to a different domain — that is almost always unintentional.
 */
function validateCanonical(canonical: string, siteUrl: string, slug: string): void {
  if (canonical.startsWith('/')) return // path-relative — fine
  if (canonical.startsWith(siteUrl + '/') || canonical === siteUrl) return // same-domain — fine
  // Any other absolute URL is cross-domain
  throw new Error(
    `Article "${slug}" has a cross-domain canonical that is likely unintentional: "${canonical}". ` +
    `"canonical" must start with "${siteUrl}/" or be a path starting with /.`
  )
}

export interface ResolvedArticleSEO {
  /** Full <title> tag value: "${seoTitle} | Marinela Masri" */
  metaTitle: string
  /** meta description content */
  metaDescription: string
  /** Canonical URL — always absolute */
  canonical: string
  /** og:title content */
  ogTitle: string
  /** og:description content */
  ogDescription: string
  /** og:image — always absolute URL */
  ogImage: string
  /** robots meta value */
  robots: string
  /** article:modified_time — ISO 8601 */
  dateModified: string
  /** article:published_time — ISO 8601 */
  publishedTime: string
  /** Path portion of the canonical URL (for usePageSEO path param) */
  canonicalPath: string
}

/**
 * Resolves all article SEO values with the authoritative fallback chains.
 * Accepts `ArticleFrontmatter` and an optional site URL override.
 */
export function resolveArticleSEO(
  fm: ArticleFrontmatter,
  siteUrl: string = DEFAULT_SITE_URL,
): ResolvedArticleSEO {
  const seoTitle       = fm.seoTitle ?? fm.title
  const seoDescription = fm.seoDescription ?? fm.description

  // OG image: ogImage → featuredImage → /og-image.jpg
  const rawFeatured = fm.ogImage ?? fm.featuredImage
  const ogImage = rawFeatured
    ? (rawFeatured.startsWith('http')
      ? rawFeatured
      : `${siteUrl}${rawFeatured.startsWith('/') ? '' : '/'}${rawFeatured}`)
    : `${siteUrl}/og-image.jpg`

  const canonicalPath = `/blog/${fm.slug}/`
  const rawCanonical  = fm.canonical ?? `${siteUrl}${canonicalPath}`

  // Guard against accidental cross-domain canonicals
  if (fm.canonical) {
    validateCanonical(fm.canonical, siteUrl, fm.slug)
  }

  // Normalise path-relative canonicals to absolute
  const canonical = rawCanonical.startsWith('/')
    ? `${siteUrl}${rawCanonical}`
    : rawCanonical

  return {
    metaTitle:       `${seoTitle} | Marinela Masri`,
    metaDescription: seoDescription,
    canonical,
    canonicalPath:   fm.canonical ? new URL(canonical, siteUrl).pathname : canonicalPath,
    ogTitle:         fm.ogTitle ?? seoTitle,
    ogDescription:   fm.ogDescription ?? seoDescription,
    ogImage,
    robots:          fm.robots ?? 'index, follow',
    dateModified:    new Date(fm.dateModified ?? fm.date).toISOString(),
    publishedTime:   new Date(fm.date).toISOString(),
  }
}
