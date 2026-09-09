import { useParams, Link } from "react-router";
import { usePageSEO, ContactCta } from "../shared";
import { allArticles } from "../../blog/_articles";

function formatDate(iso: string): string {
  const d = new Date(iso);
  const months = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre",
  ];
  return `${d.getUTCDate()} de ${months[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
}

const SITE_URL = "https://www.abogadamasri.com";

// ── Related Articles ──────────────────────────────────────────────────────────

function RelatedArticles({ currentSlug, category, relatedSlugs }: {
  currentSlug: string;
  category?: string;
  relatedSlugs?: string[];
}) {
  let related = [];

  if (relatedSlugs && relatedSlugs.length > 0) {
    // Use explicit list from frontmatter — only include published articles, max 3
    related = allArticles
      .filter(a => relatedSlugs.includes(a.frontmatter.slug))
      .slice(0, 3);
  } else {
    // Auto-recommend: same category first, then most recent; exclude current
    const sameCategory = allArticles.filter(
      a => a.frontmatter.slug !== currentSlug && a.frontmatter.category === category
    );
    const others = allArticles.filter(
      a => a.frontmatter.slug !== currentSlug && a.frontmatter.category !== category
    );
    related = [...sameCategory, ...others].slice(0, 3);
  }

  if (related.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-[#f0f0f0]">
      <h2 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[22px] md:text-[28px] mb-6">
        Artículos Relacionados
      </h2>
      <div className="flex flex-col gap-5">
        {related.map(a => (
          <Link
            key={a.frontmatter.slug}
            to={`/blog/${a.frontmatter.slug}/`}
            className="group flex flex-col gap-1.5 border border-[#f0f0f0] rounded-[10px] p-4 hover:border-[#c9a84c] transition-colors"
          >
            {a.frontmatter.category && (
              <span className="font-['Schibsted_Grotesk',sans-serif] text-[10px] font-semibold uppercase tracking-widest text-[#c9a84c]">
                {a.frontmatter.category}
              </span>
            )}
            <span className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[17px] leading-snug group-hover:text-[#c9a84c] transition-colors">
              {a.frontmatter.title}
            </span>
            <span className="font-['Schibsted_Grotesk',sans-serif] text-[#9ca3af] text-[12px]">
              {formatDate(a.frontmatter.date)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = allArticles.find(a => a.frontmatter.slug === slug);

  // Graceful 404 for unknown slugs
  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-6 text-center">
        <p className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[48px] md:text-[72px] leading-none">404</p>
        <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[16px] md:text-[18px]">
          Artículo no encontrado
        </p>
        <Link
          to="/blog/"
          className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[15px] underline hover:text-[#1a2b4a] transition-colors"
        >
          Ver todos los artículos
        </Link>
      </div>
    );
  }

  const { frontmatter: fm, html } = article;

  // Build SEO values using fallback chains from Task 14
  const seoTitle       = fm.seoTitle ?? fm.title;
  const seoDescription = fm.seoDescription ?? fm.description;
  const metaTitle      = `${seoTitle} | Marinela Masri`;
  const canonicalPath  = `/blog/${fm.slug}/`;
  const canonical      = fm.canonical ?? `${SITE_URL}${canonicalPath}`;
  const ogTitle        = fm.ogTitle ?? seoTitle;
  const ogDescription  = fm.ogDescription ?? seoDescription;
  const rawFeatured    = fm.ogImage ?? fm.featuredImage;
  const ogImageUrl     = rawFeatured
    ? (rawFeatured.startsWith("http") ? rawFeatured : `${SITE_URL}${rawFeatured.startsWith("/") ? "" : "/"}${rawFeatured}`)
    : `${SITE_URL}/og-image.jpg`;

  // JS-side meta update (the static HTML already has these baked in at build time)
  usePageSEO({
    title: metaTitle,
    description: ogDescription,
    path: fm.canonical ? new URL(canonical).pathname : canonicalPath,
    ogType: "article",
    ogImage: ogImageUrl,
    robots: fm.robots,
    author: fm.author,
    publishedTime: new Date(fm.date).toISOString(),
    modifiedTime: fm.dateModified
      ? new Date(fm.dateModified).toISOString()
      : new Date(fm.date).toISOString(),
    articleAuthor: fm.author,
  });

  return (
    <div className="w-full">

      {/* Hero strip */}
      <section className="bg-[#1a2b4a] w-full" style={{ paddingTop: 64 }}>
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px]">

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center flex-wrap gap-1.5 mb-6">
            <Link to="/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              Inicio
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <Link to="/blog/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              Blog
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <span className="font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] text-[12px] line-clamp-1">{fm.title}</span>
          </nav>

          {/* Category badge */}
          {fm.category && (
            <span className="inline-block font-['Schibsted_Grotesk',sans-serif] text-[11px] font-semibold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/15 rounded-full px-3 py-1 mb-4">
              {fm.category}
            </span>
          )}

          {/* H1 */}
          <h1 className="font-['Instrument_Serif',serif] text-white text-[28px] sm:text-[36px] md:text-[46px] leading-[1.1] mb-5">
            {fm.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 flex-wrap">
            <time
              dateTime={fm.date}
              className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[13px]"
            >
              {formatDate(fm.date)}
            </time>
            {fm.author && (
              <>
                <span className="text-white/20 text-[12px]">·</span>
                <span className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[13px]">
                  {fm.author}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured image */}
      {fm.featuredImage && (
        <div className="w-full bg-[#f5f5f5]">
          <div className="max-w-[860px] mx-auto px-6 md:px-16 pt-8">
            <img
              src={fm.featuredImage.startsWith('http') || fm.featuredImage.startsWith('/') ? fm.featuredImage : `/${fm.featuredImage}`}
              alt={fm.seoTitle ?? fm.title}
              className="w-full rounded-[12px] object-cover max-h-[420px]"
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto">
          <article
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Related articles — Task 13 */}
          <RelatedArticles
            currentSlug={fm.slug}
            category={fm.category}
            relatedSlugs={fm.relatedArticles}
          />

          {/* Disclaimer */}
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[13px] text-[#9ca3af] leading-[1.7] border-l-2 border-[#e8e8e8] pl-4 mt-10">
            Este artículo tiene carácter informativo y no constituye asesoría legal.
            Para recibir orientación sobre su caso específico,{" "}
            <Link to="/#contacto" className="text-[#c9a84c] hover:underline">contáctenos directamente</Link>.
          </p>

          {/* Back link */}
          <div className="mt-8 pt-6 border-t border-[#f0f0f0]">
            <Link
              to="/blog/"
              className="font-['Schibsted_Grotesk',sans-serif] text-[13px] font-semibold text-[#1a2b4a] hover:text-[#c9a84c] transition-colors"
            >
              ← Volver al Blog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCta waText="Hola%2C%20le%C3%AD%20su%20blog%20y%20quisiera%20consultar%20un%20asunto%20legal" />
    </div>
  );
}
