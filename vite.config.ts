import { defineConfig, build, type Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import sharpLib from 'sharp'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import matter from 'gray-matter'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'

// ── Blog articles Vite plugin ─────────────────────────────────────────────────
//
// What this plugin does:
//   1. transform() — converts any .md file to a JS module exporting
//      { frontmatter, html } so import.meta.glob can consume them at runtime.
//   2. config()    — reads src/blog/articles/*.md at build-start, generates
//      blog/[slug]/index.html with baked-in SEO per article, and adds each
//      as a Rollup input (= its own static HTML entry in the build output).
//   3. closeBundle() — writes dist/sitemap.xml that combines the static
//      page URLs from public/sitemap.xml with article URLs auto-discovered
//      from the same .md files, so the deployed sitemap is always current.
//
// To publish a new article: add a .md file to src/blog/articles/ and push.
// The Vercel build picks it up automatically — no React edits needed.

const SITE = 'https://www.abogadamasri.com'

// ── DOMPurify configuration ───────────────────────────────────────────────────
// Conservative policy: allow standard Markdown output elements only.
// Disallows script, iframe, event handlers, and other potentially dangerous content.
const DOMPURIFY_CONFIG = {
  ALLOWED_TAGS: [
    'h1','h2','h3','h4','h5','h6',
    'p','br','hr',
    'strong','b','em','i','u','s','del','ins','mark','small','sup','sub',
    'ul','ol','li',
    'blockquote','pre','code',
    'table','thead','tbody','tfoot','tr','th','td','caption','colgroup','col',
    'a','img',
    'figure','figcaption',
    'div','span',
  ],
  ALLOWED_ATTR: [
    'href','title','target','rel',
    'src','alt','width','height','loading',
    'class','id',
    'colspan','rowspan','scope',
    'start','type',
  ],
  ALLOW_DATA_ATTR: false,
  FORCE_BODY: false,
}

function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, DOMPURIFY_CONFIG) as string
}

// ── XML helpers ───────────────────────────────────────────────────────────────

function escXml(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
}

// ── HTML attribute escaping ───────────────────────────────────────────────────

function escAttr(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function safeJson(obj: unknown): string {
  return JSON.stringify(obj, null, 2)
    .replace(/<\/script>/gi, '<\\/script>')
}

// ── Date validation ───────────────────────────────────────────────────────────

/** Returns true when the string is a valid YYYY-MM-DD date that parses without NaN. */
function isValidDate(s: unknown): s is string {
  if (typeof s !== 'string') return false
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false
  const d = new Date(s)
  return !isNaN(d.getTime())
}

/** Returns true when the string is a valid absolute URL. */
function isValidUrl(s: unknown): s is string {
  if (typeof s !== 'string') return false
  try {
    const u = new URL(s)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

/** Returns true when the slug only contains lowercase letters, numbers, and hyphens. */
function isValidSlug(s: unknown): s is string {
  if (typeof s !== 'string') return false
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s)
}

// ── Returns actual pixel dimensions for a site-hosted image ──────────────────
// Falls back to 1200×630 for remote or missing files.
async function resolveOgDims(ogImageUrl: string): Promise<{ width: number; height: number }> {
  const fallback = { width: 1200, height: 630 }
  try {
    if (!ogImageUrl.startsWith(SITE)) return fallback
    const rel = ogImageUrl.slice(SITE.length).replace(/^\//, '')
    const localPath = path.resolve(__dirname, 'public', rel)
    if (!fs.existsSync(localPath)) return fallback
    const { width, height } = await sharpLib(localPath).metadata()
    return (width && height) ? { width, height } : fallback
  } catch {
    return fallback
  }
}

// ── Article loader with full validation ───────────────────────────────────────

// Static route URLs that slugs must not conflict with.
const STATIC_ROUTE_URLS = new Set([
  '/', '/sobre-marinela-masri/', '/servicios/',
  '/derecho-civil/', '/derecho-mercantil/', '/derecho-laboral/',
  '/derecho-familia-divorcios/', '/bienes-inmuebles/', '/contratos-documentos/',
  '/derecho-civil/herencias-sucesiones/', '/derecho-familia-divorcios/divorcio/',
  '/derecho-familia-divorcios/custodia-lopnna/', '/contratos-documentos/poder-notarial/',
  '/bienes-inmuebles/condominios/', '/derecho-civil/legalizacion-apostilla/',
  '/derecho-mercantil/registro-mercantil/', '/blog/',
])

const VALID_ROBOTS_VALUES = new Set([
  'index, follow', 'noindex, follow', 'index, nofollow', 'noindex, nofollow',
  'noindex', 'nofollow', 'none', 'noarchive', 'nosnippet',
])

type ArticleRecord = Record<string, unknown>

function getArticles(): ArticleRecord[] {
  const dir = path.resolve(__dirname, 'src/blog/articles')
  if (!fs.existsSync(dir)) return []

  const rawArticles = fs
    .readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf-8')
      const data = matter(raw).data as ArticleRecord
      return { filename: f, data }
    })

  // Determine intended-published articles using ONLY published !== false.
  // Do NOT pre-filter on slug/title — that would silently swallow articles
  // with published: true but missing required fields.
  const intended = rawArticles.filter(({ data }) => data.published !== false)

  // ── Validate all published article frontmatter before generating anything ─

  const seenSlugs = new Map<string, string>() // slug → filename

  for (const { filename, data } of intended) {
    const slug = data.slug
    const title = data.title
    const description = data.description
    const date = data.date
    const dateModified = data.dateModified
    const canonical = data.canonical
    const robots = data.robots
    const relatedArticles = data.relatedArticles
    const featuredImage = data.featuredImage

    // title: non-empty string
    if (typeof title !== 'string' || title.trim() === '') {
      throw new Error(`[blog] "${filename}": "title" must be a non-empty string.`)
    }

    // description: non-empty string
    if (typeof description !== 'string' || description.trim() === '') {
      throw new Error(`[blog] "${filename}": "description" must be a non-empty string.`)
    }

    // date: required, must be valid YYYY-MM-DD
    if (!isValidDate(date)) {
      throw new Error(
        `[blog] "${filename}": "date" is missing or invalid. ` +
        `Got: ${JSON.stringify(date)}. Expected YYYY-MM-DD.`
      )
    }

    // dateModified: optional, must be valid YYYY-MM-DD when present
    if (dateModified !== undefined && !isValidDate(dateModified)) {
      throw new Error(
        `[blog] "${filename}": "dateModified" is invalid. ` +
        `Got: ${JSON.stringify(dateModified)}. Expected YYYY-MM-DD.`
      )
    }

    // slug: required, URL-safe
    if (typeof slug !== 'string' || slug.trim() === '') {
      throw new Error(`[blog] "${filename}": "slug" is required.`)
    }
    if (!isValidSlug(slug)) {
      throw new Error(
        `[blog] "${filename}": slug "${slug}" is invalid. ` +
        `Slugs must be lowercase with hyphens/letters/numbers only (no spaces, no uppercase).`
      )
    }

    // slug: must not conflict with static routes
    const slugUrl = `/blog/${slug}/`
    if (STATIC_ROUTE_URLS.has(`/${slug}/`) || STATIC_ROUTE_URLS.has(`/${slug}`)) {
      throw new Error(
        `[blog] "${filename}": slug "${slug}" conflicts with a static route.`
      )
    }
    // Also prevent /blog/{slug}/ from accidentally matching another static route
    if (STATIC_ROUTE_URLS.has(slugUrl)) {
      throw new Error(
        `[blog] "${filename}": slug URL "${slugUrl}" conflicts with a static route.`
      )
    }

    // slug: must be unique
    if (seenSlugs.has(slug)) {
      throw new Error(
        `[blog] Duplicate slug "${slug}" found in both "${seenSlugs.get(slug)}" and "${filename}". ` +
        `Each published article must have a unique slug.`
      )
    }
    seenSlugs.set(slug, filename)

    // author: non-empty string
    const author = data.author
    if (typeof author !== 'string' || author.trim() === '') {
      throw new Error(`[blog] "${filename}": "author" must be a non-empty string.`)
    }

    // category: required, must be one of the six official practice areas
    const OFFICIAL_BLOG_CATEGORIES = new Set([
      'Derecho Civil', 'Derecho Mercantil', 'Derecho Laboral',
      'Divorcios y Familia', 'Bienes e Inmuebles', 'Contratos y Documentos',
    ])
    const category = data.category
    if (category === undefined || category === null || String(category).trim() === '') {
      throw new Error(
        `[blog] "${filename}" (slug: "${data.slug}"): "category" is required for published articles. ` +
        `Use one of: ${[...OFFICIAL_BLOG_CATEGORIES].join(', ')}.`
      )
    }
    if (!OFFICIAL_BLOG_CATEGORIES.has(String(category))) {
      throw new Error(
        `[blog] "${filename}" (slug: "${data.slug}"): invalid category "${category}". ` +
        `Must be one of: ${[...OFFICIAL_BLOG_CATEGORIES].join(', ')}.`
      )
    }

    // dateModified >= date when both present
    if (dateModified !== undefined && isValidDate(dateModified)) {
      if (dateModified < String(date)) {
        throw new Error(
          `[blog] "${filename}": "dateModified" (${dateModified}) must be >= "date" (${date}).`
        )
      }
    }

    // canonical: same-domain or path-relative only
    if (canonical !== undefined) {
      const canonicalStr = String(canonical)
      if (canonicalStr.startsWith('/')) {
        // path-relative — allowed
      } else if (!isValidUrl(canonicalStr)) {
        throw new Error(
          `[blog] "${filename}": "canonical" must be a valid absolute URL or path starting with /. Got: ${JSON.stringify(canonical)}.`
        )
      } else if (!canonicalStr.startsWith(`${SITE}/`) && canonicalStr !== SITE) {
        throw new Error(
          `[blog] "${filename}": cross-domain canonical detected — likely unintentional. ` +
          `"canonical" must start with "${SITE}/" or be a path starting with /. Got: ${JSON.stringify(canonical)}.`
        )
      }
    }

    // robots: valid value when present
    if (robots !== undefined && !VALID_ROBOTS_VALUES.has(String(robots))) {
      throw new Error(
        `[blog] "${filename}": "robots" value "${robots}" is not a recognized robots meta value.`
      )
    }

    // featuredImage: if local path, verify it exists in public/
    if (featuredImage && typeof featuredImage === 'string' && featuredImage.startsWith('/')) {
      const imgPath = path.resolve(__dirname, 'public', featuredImage.slice(1))
      if (!fs.existsSync(imgPath)) {
        throw new Error(
          `[blog] "${filename}": featuredImage "${featuredImage}" not found in public/.`
        )
      }
    }

    // relatedArticles: validate later (needs all slugs collected first)
  }

  // Validate relatedArticles references after collecting all slugs
  const allSlugs = new Set(seenSlugs.keys())
  for (const { filename, data } of intended) {
    const relatedArticles = data.relatedArticles
    if (Array.isArray(relatedArticles)) {
      for (const ref of relatedArticles) {
        if (!allSlugs.has(ref)) {
          throw new Error(
            `[blog] "${filename}": relatedArticles references unknown slug "${ref}". ` +
            `Make sure the referenced article exists and is published.`
          )
        }
      }
    }
  }

  // ── Task 12: Validate internal links in Markdown ──────────────────────────

  const articleSlugs = new Set(seenSlugs.keys())
  const validInternalUrls = new Set<string>(STATIC_ROUTE_URLS)
  for (const slug of articleSlugs) {
    validInternalUrls.add(`/blog/${slug}/`)
    validInternalUrls.add(`/blog/${slug}`)
  }

  const dir2 = path.resolve(__dirname, 'src/blog/articles')
  for (const { filename } of intended) {
    const raw = fs.readFileSync(path.join(dir2, filename), 'utf-8')
    const { content } = matter(raw)

    // Collect all internal hrefs: from Markdown links AND rendered HTML <a href>
    const hrefs: string[] = []

    // 1) Markdown link syntax: [text](url)
    const mdLinkPattern = /\[([^\]]*)\]\(([^)]+)\)/g
    let match: RegExpExecArray | null
    while ((match = mdLinkPattern.exec(content)) !== null) {
      hrefs.push(match[2].trim())
    }

    // 2) Raw HTML <a href="..."> elements embedded in Markdown
    //    (marked renders these into the final HTML; catch them at source too)
    const rawHtml = marked.parse(content) as string
    const htmlLinkPattern = /<a\s[^>]*href="([^"]+)"/gi
    while ((match = htmlLinkPattern.exec(rawHtml)) !== null) {
      hrefs.push(match[1].trim())
    }

    for (const href of hrefs) {
      // Skip external URLs, mailto, tel, anchors, empty hrefs
      if (
        !href ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('//') ||
        href.startsWith('#')
      ) {
        continue
      }
      // Internal link starting with /: must be in our valid set
      if (href.startsWith('/')) {
        const normalized = href.endsWith('/') ? href : href + '/'
        if (!validInternalUrls.has(href) && !validInternalUrls.has(normalized)) {
          throw new Error(
            `[blog] "${filename}": broken internal link "${href}". ` +
            `Valid internal URLs are static routes plus /blog/{slug}/ for published articles.`
          )
        }
      }
    }
  }

  return intended.map(({ data }) => data)
}

// ── FAQ schema parser ─────────────────────────────────────────────────────────
// Only called when frontmatter has faqSchema: true.
// Looks for H3 headings followed by answer paragraphs.

function parseFaqFromMarkdown(content: string): Array<{ question: string; answer: string }> | null {
  const lines = content.split('\n')
  const faqs: Array<{ question: string; answer: string }> = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('### ')) {
      const question = line.replace(/^### /, '').trim()
      // Collect answer: next non-empty lines until the next heading
      const answerLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('#')) {
        const l = lines[i].trim()
        if (l) answerLines.push(l)
        i++
      }
      const answer = answerLines.join(' ')
      if (question && answer) {
        faqs.push({ question, answer })
      }
    } else {
      i++
    }
  }
  return faqs.length > 0 ? faqs : null
}

// ── Article HTML generator ────────────────────────────────────────────────────

function articleHtml(
  fm: ArticleRecord,
  ogDims: { width: number; height: number },
  faqItems: Array<{ question: string; answer: string }> | null
): string {
  // SEO title/description with fallback chains (Task 14)
  const title       = String(fm.title || '')
  const desc        = String(fm.description || '')
  const seoTitle    = fm.seoTitle ? String(fm.seoTitle) : title
  const seoDesc     = fm.seoDescription ? String(fm.seoDescription) : desc
  const ogTitle     = fm.ogTitle ? String(fm.ogTitle) : seoTitle
  const ogDesc      = fm.ogDescription ? String(fm.ogDescription) : seoDesc
  const slug        = String(fm.slug)
  const author      = String(fm.author || 'Marinela Masri')
  const robots      = fm.robots ? String(fm.robots) : 'index, follow'
  const keywords    = fm.keywords ? String(fm.keywords) : null
  const category    = fm.category ? String(fm.category) : null

  // Dates
  const datePublished  = new Date(String(fm.date)).toISOString()
  const dateModified   = fm.dateModified
    ? new Date(String(fm.dateModified)).toISOString()
    : datePublished

  // OG image (Task 14 fallback: ogImage → featuredImage → /og-image.jpg)
  const rawFeatured  = fm.ogImage ? String(fm.ogImage) : (fm.featuredImage ? String(fm.featuredImage) : null)
  const ogImage      = rawFeatured
    ? (rawFeatured.startsWith('http') ? rawFeatured : `${SITE}${rawFeatured.startsWith('/') ? '' : '/'}${rawFeatured}`)
    : `${SITE}/og-image.jpg`
  const ogImageMime  = ogImage.endsWith('.webp') ? 'image/webp'
    : ogImage.endsWith('.png') ? 'image/png'
    : ogImage.endsWith('.gif') ? 'image/gif'
    : 'image/jpeg'

  const canonical    = fm.canonical ? String(fm.canonical) : `${SITE}/blog/${slug}/`
  const metaTitle    = `${seoTitle} | Marinela Masri`

  // ── Task 15: Improved Article JSON-LD ──────────────────────────────────────
  const ldArticleBase: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: seoDesc,
    url: canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    datePublished,
    dateModified,
    image: {
      '@type': 'ImageObject',
      url: ogImage,
      width: ogDims.width,
      height: ogDims.height,
    },
    author: {
      '@type': 'Person',
      '@id': `${SITE}/#marinela-masri`,
      name: author,
    },
    publisher: {
      '@type': 'LegalService',
      '@id': `${SITE}/#legal-practice`,
      name: 'Abogada Marinela Masri',
      url: SITE,
    },
    inLanguage: 'es',
  }
  if (category) ldArticleBase.articleSection = category
  if (keywords) ldArticleBase.keywords = keywords

  const ldArticle = safeJson(ldArticleBase)

  const ldBreadcrumb = safeJson({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog',   item: `${SITE}/blog/` },
      { '@type': 'ListItem', position: 3, name: title,    item: canonical },
    ],
  })

  // ── Task 16: Optional FAQ structured data ──────────────────────────────────
  const faqLd = (faqItems && faqItems.length > 0)
    ? `
    <!-- JSON-LD: FAQPage -->
    <script type="application/ld+json">
${safeJson({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
})}
    </script>`
    : ''

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#1a2b4a" />

    <!-- Primary SEO -->
    <title>${escAttr(metaTitle)}</title>
    <meta name="description" content="${escAttr(seoDesc)}" />
    <meta name="author" content="${escAttr(author)}" />
    <meta name="robots" content="${escAttr(robots)}" />
    <meta name="language" content="es" />

    <!-- Canonical -->
    <link rel="canonical" href="${escAttr(canonical)}" />

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escAttr(canonical)}" />
    <meta property="og:site_name" content="Abogada Marinela Masri" />
    <meta property="og:title" content="${escAttr(ogTitle)}" />
    <meta property="og:description" content="${escAttr(ogDesc)}" />
    <meta property="og:image" content="${escAttr(ogImage)}" />
    <meta property="og:image:secure_url" content="${escAttr(ogImage)}" />
    <meta property="og:image:type" content="${ogImageMime}" />
    <meta property="og:image:width" content="${ogDims.width}" />
    <meta property="og:image:height" content="${ogDims.height}" />
    <meta property="og:locale" content="es_VE" />
    <meta property="article:published_time" content="${datePublished}" />
    <meta property="article:modified_time" content="${dateModified}" />
    <meta property="article:author" content="${escAttr(author)}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escAttr(ogTitle)}" />
    <meta name="twitter:description" content="${escAttr(ogDesc)}" />
    <meta name="twitter:image" content="${escAttr(ogImage)}" />

    <!-- Preconnect -->
    <link rel="preconnect" href="https://www.googletagmanager.com" />

    <!-- Google Analytics GA4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GM03DD1T2R"></script>
    <script>
      window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GM03DD1T2R');
    </script>

    <!-- JSON-LD: Article -->
    <script type="application/ld+json">
${ldArticle}
    </script>

    <!-- JSON-LD: BreadcrumbList -->
    <script type="application/ld+json">
${ldBreadcrumb}
    </script>${faqLd}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
}

// Source-of-truth lastmod dates for static pages. Update a page's date only
// when its content or SEO metadata meaningfully changes.
const STATIC_PAGES: Array<{
  url:        string
  lastmod:    string
  priority:   string
  changefreq: string
}> = [
  { url: '/',                                           lastmod: '2026-08-14', priority: '1.0', changefreq: 'monthly' },
  { url: '/sobre-marinela-masri/',                      lastmod: '2026-08-14', priority: '0.9', changefreq: 'monthly' },
  { url: '/servicios/',                                 lastmod: '2026-08-14', priority: '0.9', changefreq: 'monthly' },
  { url: '/derecho-civil/',                             lastmod: '2026-08-14', priority: '0.9', changefreq: 'monthly' },
  { url: '/derecho-mercantil/',                         lastmod: '2026-08-14', priority: '0.9', changefreq: 'monthly' },
  { url: '/derecho-laboral/',                           lastmod: '2026-08-14', priority: '0.9', changefreq: 'monthly' },
  { url: '/derecho-familia-divorcios/',                 lastmod: '2026-08-14', priority: '0.9', changefreq: 'monthly' },
  { url: '/bienes-inmuebles/',                          lastmod: '2026-08-14', priority: '0.9', changefreq: 'monthly' },
  { url: '/contratos-documentos/',                      lastmod: '2026-08-14', priority: '0.9', changefreq: 'monthly' },
  { url: '/derecho-civil/herencias-sucesiones/',        lastmod: '2026-08-14', priority: '0.8', changefreq: 'monthly' },
  { url: '/derecho-familia-divorcios/divorcio/',        lastmod: '2026-08-14', priority: '0.8', changefreq: 'monthly' },
  { url: '/derecho-familia-divorcios/custodia-lopnna/', lastmod: '2026-08-14', priority: '0.8', changefreq: 'monthly' },
  { url: '/contratos-documentos/poder-notarial/',       lastmod: '2026-08-14', priority: '0.8', changefreq: 'monthly' },
  { url: '/bienes-inmuebles/condominios/',              lastmod: '2026-08-18', priority: '0.8', changefreq: 'monthly' },
  { url: '/derecho-civil/legalizacion-apostilla/',      lastmod: '2026-08-18', priority: '0.8', changefreq: 'monthly' },
  { url: '/derecho-mercantil/registro-mercantil/',      lastmod: '2026-08-18', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog/',                                      lastmod: '2026-08-18', priority: '0.8', changefreq: 'weekly'  },
]

// Static routes to prerender: each maps a URL to its dist HTML file.
const PRERENDER_ROUTES: { url: string; file: string }[] = [
  { url: '/',                                           file: 'index.html' },
  { url: '/sobre-marinela-masri/',                      file: 'sobre-marinela-masri/index.html' },
  { url: '/servicios/',                                 file: 'servicios/index.html' },
  { url: '/derecho-civil/',                             file: 'derecho-civil/index.html' },
  { url: '/derecho-mercantil/',                         file: 'derecho-mercantil/index.html' },
  { url: '/derecho-laboral/',                           file: 'derecho-laboral/index.html' },
  { url: '/derecho-familia-divorcios/',                 file: 'derecho-familia-divorcios/index.html' },
  { url: '/bienes-inmuebles/',                          file: 'bienes-inmuebles/index.html' },
  { url: '/contratos-documentos/',                      file: 'contratos-documentos/index.html' },
  { url: '/derecho-civil/herencias-sucesiones/',        file: 'derecho-civil/herencias-sucesiones/index.html' },
  { url: '/derecho-familia-divorcios/divorcio/',        file: 'derecho-familia-divorcios/divorcio/index.html' },
  { url: '/derecho-familia-divorcios/custodia-lopnna/', file: 'derecho-familia-divorcios/custodia-lopnna/index.html' },
  { url: '/contratos-documentos/poder-notarial/',       file: 'contratos-documentos/poder-notarial/index.html' },
  { url: '/bienes-inmuebles/condominios/',              file: 'bienes-inmuebles/condominios/index.html' },
  { url: '/derecho-civil/legalizacion-apostilla/',      file: 'derecho-civil/legalizacion-apostilla/index.html' },
  { url: '/derecho-mercantil/registro-mercantil/',      file: 'derecho-mercantil/registro-mercantil/index.html' },
  { url: '/blog/',                                      file: 'blog/index.html' },
]

async function prerenderPages(distOut: string): Promise<void> {
  const ssrTempDir = path.resolve(distOut, 'ssr-temp')

  // Build an isolated SSR bundle (configFile: false avoids re-triggering this config)
  await build({
    configFile: false,
    root: __dirname,
    logLevel: 'warn',
    resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
    plugins: [
    figmaAssetResolver(),react(), mdTransformPlugin()],
    build: {
      ssr: path.resolve(__dirname, 'src/entry-server.tsx'),
      outDir: ssrTempDir,
      emptyOutDir: true,
      rollupOptions: { output: { format: 'esm', entryFileNames: '[name].js' } },
    },
  })

  // Load the SSR render function from the just-built bundle
  const ssrEntry = path.join(ssrTempDir, 'entry-server.js')
  const { render } = (await import(ssrEntry)) as { render: (url: string) => string }

  // Build the full route list: static pages + any published articles
  const routes = [...PRERENDER_ROUTES]
  for (const fm of getArticles()) {
    const slug = String(fm.slug)
    routes.push({ url: `/blog/${slug}/`, file: `blog/${slug}/index.html` })
  }

  // Render each route and inject the HTML into <div id="root">
  for (const { url, file } of routes) {
    const htmlPath = path.join(distOut, file)
    if (!fs.existsSync(htmlPath)) continue
    try {
      const template = fs.readFileSync(htmlPath, 'utf-8')
      const appHtml = render(url)
      const output = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      fs.writeFileSync(htmlPath, output, 'utf-8')
    } catch (err) {
      throw new Error(`[prerender] Failed to render route "${url}": ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  // Remove the temporary SSR bundle
  fs.rmSync(ssrTempDir, { recursive: true, force: true })
}

// Standalone .md → JS transform plugin used by both the main build and the
// SSR sub-build. Without it in the SSR build, import.meta.glob('*.md') causes
// Vite's build-import-analysis to receive raw Markdown instead of valid JS.
function mdTransformPlugin(): Plugin {
  return {
    name: 'md-transform',
    transform(code, id) {
      if (!id.endsWith('.md')) return null
      const { data: frontmatter, content } = matter(code)
      const rawHtml = marked.parse(content) as string
      const html = sanitizeHtml(rawHtml)
      return {
        code: `export default ${JSON.stringify({ frontmatter, html })}`,
        map: null,
      }
    },
  }
}

function blogPlugin(): Plugin {
  let outDir = 'dist'

  return {
    name: 'blog-articles',

    // Step 1: transform .md imports to JS modules (runs for both dev + build)
    transform(code, id) {
      if (!id.endsWith('.md')) return null
      const { data: frontmatter, content } = matter(code)
      const rawHtml = marked.parse(content) as string
      const html = sanitizeHtml(rawHtml)
      return {
        code: `export default ${JSON.stringify({ frontmatter, html })}`,
        map: null,
      }
    },

    // Step 2: generate per-article HTML files and add as Rollup inputs
    async config(cfg) {
      outDir = cfg.build?.outDir ?? 'dist'
      const articles = getArticles()
      if (articles.length === 0) return {}

      const inputs: Record<string, string> = {}
      for (const fm of articles) {
        const slug = String(fm.slug)
        const dir  = path.resolve(__dirname, `blog/${slug}`)
        const html = path.join(dir, 'index.html')
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

        const rawFeatured = fm.ogImage ? String(fm.ogImage) : (fm.featuredImage ? String(fm.featuredImage) : null)
        const ogImageUrl = rawFeatured
          ? (rawFeatured.startsWith('http') ? rawFeatured : `${SITE}${rawFeatured.startsWith('/') ? '' : '/'}${rawFeatured}`)
          : `${SITE}/og-image.jpg`
        const ogDims = await resolveOgDims(ogImageUrl)

        // Parse FAQ items if faqSchema: true
        let faqItems: Array<{ question: string; answer: string }> | null = null
        if (fm.faqSchema === true) {
          const dir2 = path.resolve(__dirname, 'src/blog/articles')
          const files = fs.readdirSync(dir2).filter(f => f.endsWith('.md'))
          for (const f of files) {
            const raw = fs.readFileSync(path.join(dir2, f), 'utf-8')
            const { data, content } = matter(raw)
            if (data.slug === slug) {
              faqItems = parseFaqFromMarkdown(content)
              break
            }
          }
        }

        fs.writeFileSync(html, articleHtml(fm, ogDims, faqItems), 'utf-8')
        inputs[`blog-${slug}`] = html
      }

      return { build: { rollupOptions: { input: inputs } } }
    },

    // Step 3: write dist/sitemap.xml and prerender all static pages
    async closeBundle() {
      const out = path.resolve(__dirname, outDir)
      if (!fs.existsSync(out)) return

      // ── Task 5: Hardened sitemap generation ──────────────────────────────

      const seenUrls = new Set<string>()

      const staticEntries = STATIC_PAGES
        .filter(({ url }) => {
          const full = `${SITE}${url}`
          if (seenUrls.has(full)) {
            process.stderr.write(`[sitemap] Duplicate static URL skipped: ${full}\n`)
            return false
          }
          seenUrls.add(full)
          return true
        })
        .map(({ url, lastmod, priority, changefreq }) => {
          if (!isValidDate(lastmod)) {
            throw new Error(`[sitemap] Static page "${url}" has invalid lastmod date: "${lastmod}"`)
          }
          return `
  <url>
    <loc>${escXml(`${SITE}${url}`)}</loc>
    <lastmod>${escXml(lastmod)}</lastmod>
    <changefreq>${escXml(changefreq)}</changefreq>
    <priority>${escXml(priority)}</priority>
  </url>`
        }).join('')

      const articles = getArticles()
      const articleEntries = articles
        .filter(fm => {
          const full = `${SITE}/blog/${String(fm.slug)}/`
          if (seenUrls.has(full)) {
            process.stderr.write(`[sitemap] Duplicate article URL skipped: ${full}\n`)
            return false
          }
          seenUrls.add(full)
          return true
        })
        .map(fm => {
          const slug = String(fm.slug)
          const dateStr = String(fm.date)
          const dateModStr = fm.dateModified ? String(fm.dateModified) : null

          if (!isValidDate(dateStr)) {
            throw new Error(`[sitemap] Article slug "${slug}" has invalid date: "${dateStr}"`)
          }

          // Use dateModified when available, otherwise publication date (Task 11)
          const lastmod = (dateModStr && isValidDate(dateModStr)) ? dateModStr : dateStr

          const loc = `${SITE}/blog/${slug}/`
          if (!isValidUrl(loc)) {
            throw new Error(`[sitemap] Article slug "${slug}" produces invalid URL: "${loc}"`)
          }

          return `
  <url>
    <loc>${escXml(loc)}</loc>
    <lastmod>${escXml(lastmod)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
        }).join('')

      const sitemap =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
        staticEntries +
        articleEntries +
        `\n</urlset>\n`

      fs.writeFileSync(path.join(out, 'sitemap.xml'), sitemap, 'utf-8')

      // Prerender: inject rendered HTML into every dist page
      await prerenderPages(out)

      // ── Performance regression checks (soft warnings) ─────────────────────
      // These never throw — one regression should not hide others.

      // 1. Google Fonts check: must be absent from all HTML files
      const htmlFiles = fs.readdirSync(out, { recursive: true }) as string[]
      for (const rel of htmlFiles) {
        if (!rel.endsWith('.html')) continue
        const abs = path.join(out, rel)
        const content = fs.readFileSync(abs, 'utf-8')
        if (content.includes('fonts.googleapis.com')) {
          console.warn(`[regression] Google Fonts reference found in: ${rel}`)
        }
      }

      // 2. Large image check: warn on assets > 500 KB
      const assetsDir = path.join(out, 'assets')
      if (fs.existsSync(assetsDir)) {
        for (const file of fs.readdirSync(assetsDir)) {
          if (!/\.(png|jpe?g|webp|gif|avif|svg)$/i.test(file)) continue
          const size = fs.statSync(path.join(assetsDir, file)).size
          if (size > 500 * 1024) {
            console.warn(`[regression] Large image asset: ${file} (${(size / 1024).toFixed(0)} KB)`)
          }
        }
      }

      // 3. Hero responsive image check: dist/index.html must reference hero-mobile.webp
      const indexHtml = path.join(out, 'index.html')
      if (fs.existsSync(indexHtml)) {
        const indexContent = fs.readFileSync(indexHtml, 'utf-8')
        if (!indexContent.includes('hero-mobile.webp')) {
          console.warn('[regression] hero-mobile.webp not referenced in homepage (dist/index.html)')
        }

        // 4. LCP lazy-load check: hero must NOT have loading="lazy"
        if (indexContent.includes('hero-mobile.webp') && indexContent.includes('loading="lazy"')) {
          // Only warn if the lazy attribute appears near hero-mobile.webp
          const heroPos  = indexContent.indexOf('hero-mobile.webp')
          const lazyPos  = indexContent.indexOf('loading="lazy"')
          if (Math.abs(heroPos - lazyPos) < 300) {
            console.warn('[regression] Hero image (hero-mobile.webp) appears to have loading="lazy" — remove it, the hero is an LCP element')
          }
        }
      }
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    blogPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    rollupOptions: {
      input: {
        index:                       path.resolve(__dirname, 'index.html'),
        'sobre-marinela-masri':      path.resolve(__dirname, 'sobre-marinela-masri/index.html'),
        'servicios':                 path.resolve(__dirname, 'servicios/index.html'),
        'derecho-civil':             path.resolve(__dirname, 'derecho-civil/index.html'),
        'derecho-mercantil':         path.resolve(__dirname, 'derecho-mercantil/index.html'),
        'derecho-laboral':           path.resolve(__dirname, 'derecho-laboral/index.html'),
        'derecho-familia-divorcios': path.resolve(__dirname, 'derecho-familia-divorcios/index.html'),
        'bienes-inmuebles':          path.resolve(__dirname, 'bienes-inmuebles/index.html'),
        'contratos-documentos':      path.resolve(__dirname, 'contratos-documentos/index.html'),
        'herencias-sucesiones':      path.resolve(__dirname, 'derecho-civil/herencias-sucesiones/index.html'),
        'divorcio':                  path.resolve(__dirname, 'derecho-familia-divorcios/divorcio/index.html'),
        'custodia-lopnna':           path.resolve(__dirname, 'derecho-familia-divorcios/custodia-lopnna/index.html'),
        'poder-notarial':            path.resolve(__dirname, 'contratos-documentos/poder-notarial/index.html'),
        'condominios':               path.resolve(__dirname, 'bienes-inmuebles/condominios/index.html'),
        'legalizacion-apostilla':    path.resolve(__dirname, 'derecho-civil/legalizacion-apostilla/index.html'),
        'registro-mercantil':        path.resolve(__dirname, 'derecho-mercantil/registro-mercantil/index.html'),
        'blog':                      path.resolve(__dirname, 'blog/index.html'),
      },
    },
  },
})
