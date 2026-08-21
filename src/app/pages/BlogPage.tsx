import { Link } from "react-router";
import { usePageSEO, ContactCta } from "../shared";
import { allArticles, type Article } from "../../blog/_articles";

const META_TITLE = "Blog Jurídico en Venezuela | Marinela Masri";
const META_DESC  = "Blog jurídico con información, orientación y actualidad legal relevante para Venezuela. Derecho civil, mercantil, laboral, familia y más.";
const SLUG       = "/blog/";

function formatDate(iso: string): string {
  const d = new Date(iso);
  const months = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre",
  ];
  return `${d.getUTCDate()} de ${months[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
}

// ── ArticleCard ───────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  const { frontmatter: fm } = article;
  return (
    <article className="bg-white rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-[#e8e8e8] hover:shadow-[0_4px_18px_rgba(0,0,0,0.10)] transition-shadow">
      <div className="flex flex-col gap-3 p-6 flex-1">
        {fm.category && (
          <span className="inline-block font-['Schibsted_Grotesk',sans-serif] text-[11px] font-semibold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/10 rounded-full px-3 py-1 w-fit">
            {fm.category}
          </span>
        )}
        <h3 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[18px] md:text-[20px] leading-[1.3]">
          {fm.title}
        </h3>
        <p className="font-['Schibsted_Grotesk',sans-serif] text-[#6b7280] text-[14px] leading-[1.65] flex-1">
          {fm.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f0] mt-auto">
          <time
            dateTime={fm.date}
            className="font-['Schibsted_Grotesk',sans-serif] text-[12px] text-[#9ca3af]"
          >
            {formatDate(fm.date)}
          </time>
          <Link
            to={`/blog/${fm.slug}/`}
            className="font-['Schibsted_Grotesk',sans-serif] text-[13px] font-semibold text-[#1a2b4a] hover:text-[#c9a84c] transition-colors"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  );
}

// ── BlogPage ──────────────────────────────────────────────────────────────────

export default function BlogPage() {
  usePageSEO(META_TITLE, META_DESC, SLUG);

  const featured = allArticles[0] ?? null;
  const rest      = allArticles.slice(1);

  return (
    <div className="w-full">

      {/* Hero strip */}
      <section className="bg-[#1a2b4a] w-full" style={{ paddingTop: 64 }}>
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[1000px]">
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 mb-6">
            <Link to="/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              Inicio
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <span className="font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] text-[12px]">Blog</span>
          </nav>

          <h1 className="font-['Instrument_Serif',serif] text-white text-[36px] sm:text-[44px] md:text-[54px] leading-[1.1] mb-4">
            Blog Jurídico
          </h1>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/70 text-[15px] md:text-[18px] leading-[1.6] max-w-[620px]">
            Información, orientación y actualidad legal relevante para Venezuela. Aquí encontrará artículos sobre derecho civil, mercantil, laboral, familia y más.
          </p>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="bg-white w-full">
          <div className="px-6 md:px-16 py-10 md:py-14 max-w-[1000px] mx-auto">
            <p className="font-['Schibsted_Grotesk',sans-serif] text-[11px] font-semibold uppercase tracking-widest text-[#c9a84c] mb-4">
              Artículo destacado
            </p>

            <article className="bg-[#1a2b4a] rounded-[16px] overflow-hidden flex flex-col md:flex-row">
              <div className="flex flex-col gap-4 p-8 md:p-10 flex-1">
                {featured.frontmatter.category && (
                  <span className="inline-block font-['Schibsted_Grotesk',sans-serif] text-[11px] font-semibold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/15 rounded-full px-3 py-1 w-fit">
                    {featured.frontmatter.category}
                  </span>
                )}
                <h2 className="font-['Instrument_Serif',serif] text-white text-[22px] md:text-[28px] leading-[1.2]">
                  {featured.frontmatter.title}
                </h2>
                <p className="font-['Schibsted_Grotesk',sans-serif] text-white/70 text-[14px] md:text-[16px] leading-[1.7]">
                  {featured.frontmatter.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <time
                    dateTime={featured.frontmatter.date}
                    className="font-['Schibsted_Grotesk',sans-serif] text-[12px] text-white/40"
                  >
                    {formatDate(featured.frontmatter.date)}
                  </time>
                  <Link
                    to={`/blog/${featured.frontmatter.slug}/`}
                    className="inline-flex items-center gap-2 font-['Schibsted_Grotesk',sans-serif] text-[13px] font-semibold bg-[#c9a84c] text-[#1a2b4a] hover:bg-[#e0b95a] transition-colors rounded-[8px] px-5 py-2.5"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="bg-[#f5f5f5] w-full">
          <div className="px-6 md:px-16 py-10 md:py-14 max-w-[1000px] mx-auto">
            <h2 className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[24px] md:text-[32px] mb-8">
              Más artículos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(a => (
                <ArticleCard key={a.frontmatter.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No articles yet */}
      {allArticles.length === 0 && (
        <section className="bg-white w-full">
          <div className="px-6 md:px-16 py-16 max-w-[1000px] mx-auto text-center">
            <p className="font-['Schibsted_Grotesk',sans-serif] text-[#9ca3af] text-[16px]">
              Próximamente nuevos artículos.
            </p>
          </div>
        </section>
      )}

      {/* Notice */}
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 max-w-[1000px] mx-auto">
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[13px] text-[#9ca3af] leading-[1.7] border-l-2 border-[#e8e8e8] pl-4">
            Los artículos de este blog tienen carácter informativo y no constituyen asesoría legal. Para recibir orientación sobre su caso específico,{" "}
            <Link to="/#contacto" className="text-[#c9a84c] hover:underline">contáctenos directamente</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <ContactCta waText="Hola%2C%20me%20interes%C3%B3%20su%20blog%20y%20quisiera%20consultar%20un%20asunto%20legal" />
    </div>
  );
}
