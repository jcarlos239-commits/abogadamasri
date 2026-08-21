import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
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
      return matter(raw).data as Record<string, unknown>
    })
    .filter(d => d.slug && d.title)
}

function articleHtml(fm: Record<string, unknown>): string {
  const title     = String(fm.title || '')
  const desc      = String(fm.description || '')
  const slug      = String(fm.slug)
  const author    = String(fm.author || 'Marinela Masri')
  const rawDate   = fm.date ? new Date(String(fm.date)).toISOString() : new Date().toISOString()
  const ogImage   = fm.featuredImage ? String(fm.featuredImage) : `${SITE}/og-image.jpg`
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
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'LegalService',
      name: 'Abogada Marinela Masri',
      url: SITE,
    },
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
    <link rel="icon" type="image/jpeg" href="/og-image.jpg" sizes="any" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escAttr(canonical)}" />
    <meta property="og:site_name" content="Abogada Marinela Masri" />
    <meta property="og:title" content="${escAttr(metaTitle)}" />
    <meta property="og:description" content="${escAttr(desc)}" />
    <meta property="og:image" content="${escAttr(ogImage)}" />
    <meta property="og:image:secure_url" content="${escAttr(ogImage)}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
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
    config(cfg) {
      outDir = cfg.build?.outDir ?? 'dist'
      const articles = getArticles()
      if (articles.length === 0) return {}

      const inputs: Record<string, string> = {}
      for (const fm of articles) {
        const slug = String(fm.slug)
        const dir  = path.resolve(__dirname, `blog/${slug}`)
        const html = path.join(dir, 'index.html')
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(html, articleHtml(fm), 'utf-8')
        inputs[`blog-${slug}`] = html
      }

      return { build: { rollupOptions: { input: inputs } } }
    },

    // Step 3: write dist/sitemap.xml = static URLs + article URLs
    closeBundle() {
      const out = path.resolve(__dirname, outDir)
      if (!fs.existsSync(out)) return

      const staticSitemap = path.resolve(__dirname, 'public/sitemap.xml')
      let staticContent = ''
      if (fs.existsSync(staticSitemap)) {
        staticContent = fs.readFileSync(staticSitemap, 'utf-8')
      }

      const articles = getArticles()
      if (articles.length === 0) return

      const today = new Date().toISOString().split('T')[0]
      const articleEntries = articles
        .map(fm => {
          const slug = String(fm.slug)
          const date = fm.date
            ? new Date(String(fm.date)).toISOString().split('T')[0]
            : today
          return `
  <url>
    <loc>${SITE}/blog/${slug}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
        })
        .join('')

      const merged = staticContent.includes('</urlset>')
        ? staticContent.replace('</urlset>', `${articleEntries}\n</urlset>`)
        : staticContent + articleEntries

      fs.writeFileSync(path.join(out, 'sitemap.xml'), merged, 'utf-8')
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
    figmaAssetResolver(),
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
