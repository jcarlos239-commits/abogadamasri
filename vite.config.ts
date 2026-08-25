import { defineConfig, build, type Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import sharpLib from 'sharp'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import matter from 'gray-matter'
import { marked } from 'marked'

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
const FONTS_LINK = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Schibsted+Grotesk:wght@400;500;600;700&family=Inter:wght@400&display=swap" />'

// Returns actual pixel dimensions for a site-hosted image by reading the file
// with sharp at build time. Falls back to 1200×630 for remote or missing files.
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

function getArticles(): Array<Record<string, unknown>> {
  const dir = path.resolve(__dirname, 'src/blog/articles')
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf-8')
      const data = matter(raw).data as Record<string, unknown>
      if (data.slug && data.title && data.published !== false && !data.date) {
        throw new Error(
          `[blog] Article "${f}" is published but missing a required "date" frontmatter field. ` +
          `Add a date (YYYY-MM-DD) or set published: false.`
        )
      }
      return data
    })
    .filter(d => d.slug && d.title && d.published !== false)
}

function articleHtml(fm: Record<string, unknown>, ogDims: { width: number; height: number }): string {
  const title     = String(fm.title || '')
  const desc      = String(fm.description || '')
  const slug      = String(fm.slug)
  const author    = String(fm.author || 'Marinela Masri')
  const rawDate   = new Date(String(fm.date)).toISOString()
  const rawFeatured = fm.featuredImage ? String(fm.featuredImage) : null
  const ogImage   = rawFeatured
    ? (rawFeatured.startsWith('http') ? rawFeatured : `${SITE}${rawFeatured.startsWith('/') ? '' : '/'}${rawFeatured}`)
    : `${SITE}/og-image.jpg`
  const ogImageMime = ogImage.endsWith('.webp') ? 'image/webp'
    : ogImage.endsWith('.png') ? 'image/png'
    : ogImage.endsWith('.gif') ? 'image/gif'
    : 'image/jpeg'
  const canonical = `${SITE}/blog/${slug}/`
  const metaTitle = `${title} | Marinela Masri`

  const ldArticle = safeJson({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: desc,
    url: canonical,
    datePublished: rawDate,
    image: ogImage,
    author: { '@type': 'Person', '@id': `${SITE}/#marinela-masri`, name: author },
    publisher: { '@type': 'LegalService', '@id': `${SITE}/#legal-practice`, name: 'Abogada Marinela Masri', url: SITE },
  })

  const ldBreadcrumb = safeJson({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog',   item: `${SITE}/blog/` },
      { '@type': 'ListItem', position: 3, name: title,    item: canonical },
    ],
  })

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#1a2b4a" />

    <!-- Primary SEO -->
    <title>${escAttr(metaTitle)}</title>
    <meta name="description" content="${escAttr(desc)}" />
    <meta name="author" content="${escAttr(author)}" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="es" />

    <!-- Canonical -->
    <link rel="canonical" href="${escAttr(canonical)}" />

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escAttr(canonical)}" />
    <meta property="og:site_name" content="Abogada Marinela Masri" />
    <meta property="og:title" content="${escAttr(metaTitle)}" />
    <meta property="og:description" content="${escAttr(desc)}" />
    <meta property="og:image" content="${escAttr(ogImage)}" />
    <meta property="og:image:secure_url" content="${escAttr(ogImage)}" />
    <meta property="og:image:type" content="${ogImageMime}" />
    <meta property="og:image:width" content="${ogDims.width}" />
    <meta property="og:image:height" content="${ogDims.height}" />
    <meta property="og:locale" content="es_VE" />
    <meta property="article:published_time" content="${rawDate}" />
    <meta property="article:author" content="${escAttr(author)}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escAttr(metaTitle)}" />
    <meta name="twitter:description" content="${escAttr(desc)}" />
    <meta name="twitter:image" content="${escAttr(ogImage)}" />

    <!-- Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://www.googletagmanager.com" />
    ${FONTS_LINK}

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
    </script>
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
    } catch (e) {
      process.stderr.write(`[prerender] ${url}: ${(e as Error).message}\n`)
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
      const html = marked.parse(content) as string
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
      const html = marked.parse(content) as string
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
        const rawFeatured = fm.featuredImage ? String(fm.featuredImage) : null
        const ogImageUrl = rawFeatured
          ? (rawFeatured.startsWith('http') ? rawFeatured : `${SITE}${rawFeatured.startsWith('/') ? '' : '/'}${rawFeatured}`)
          : `${SITE}/og-image.jpg`
        const ogDims = await resolveOgDims(ogImageUrl)
        fs.writeFileSync(html, articleHtml(fm, ogDims), 'utf-8')
        inputs[`blog-${slug}`] = html
      }

      return { build: { rollupOptions: { input: inputs } } }
    },

    // Step 3: write dist/sitemap.xml and prerender all static pages
    async closeBundle() {
      const out = path.resolve(__dirname, outDir)
      if (!fs.existsSync(out)) return

      const staticEntries = STATIC_PAGES.map(({ url, lastmod, priority, changefreq }) => {
        return `
  <url>
    <loc>${SITE}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
      }).join('')

      const articles = getArticles()
      const articleEntries = articles.map(fm => {
        const slug = String(fm.slug)
        const date = new Date(String(fm.date)).toISOString().split('T')[0]
        return `
  <url>
    <loc>${SITE}/blog/${slug}/</loc>
    <lastmod>${date}</lastmod>
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
