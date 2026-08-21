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
  const metaTitle = `${fm.title} | Marinela Masri`;
  const canonicalPath = `/blog/${fm.slug}/`;

  // JS-side meta update (the static HTML already has these baked in at build time)
  usePageSEO(metaTitle, fm.description, canonicalPath);

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
              src={fm.featuredImage}
              alt={fm.title}
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
