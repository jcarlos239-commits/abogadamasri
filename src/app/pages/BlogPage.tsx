import { Link } from "react-router";
import { usePageSEO, ContactCta } from "../shared";

const META_TITLE = "Blog Jurídico en Venezuela | Marinela Masri";
const META_DESC  = "Blog jurídico con información, orientación y actualidad legal relevante para Venezuela. Derecho civil, mercantil, laboral, familia y más.";
const SLUG       = "/blog/";

type Article = {
  slug:     string;
  category: string;
  title:    string;
  excerpt:  string;
  date:     string;
};

// ── Placeholder articles ──────────────────────────────────────────────────────
// These are structural placeholders. Replace with real articles before publishing.
const articles: Article[] = [
  {
    slug:     "que-es-la-apostilla-de-la-haya",
    category: "Derecho Civil",
    title:    "¿Qué es la Apostilla de La Haya y cuándo se necesita?",
    excerpt:  "Cuando un documento venezolano debe tener validez legal en otro país, generalmente se requiere apostilla o legalización. Explicamos cuándo aplica cada procedimiento.",
    date:     "2025-08-01",
  },
  {
    slug:     "como-tramitar-una-herencia-en-venezuela",
    category: "Sucesiones",
    title:    "Cómo tramitar una herencia en Venezuela: pasos generales",
    excerpt:  "El proceso sucesoral en Venezuela involucra varios organismos, incluyendo el SENIAT. Aquí explicamos los pasos generales que suelen seguirse.",
    date:     "2025-07-15",
  },
  {
    slug:     "junta-de-condominio-derechos-y-obligaciones",
    category: "Bienes Inmuebles",
    title:    "Juntas de condominio: derechos y obligaciones de los propietarios",
    excerpt:  "La Ley de Propiedad Horizontal establece las reglas de convivencia y administración en los condominios. Conoce los derechos y obligaciones básicos.",
    date:     "2025-06-30",
  },
  {
    slug:     "constituir-empresa-en-venezuela",
    category: "Derecho Mercantil",
    title:    "Aspectos legales a considerar al constituir una empresa en Venezuela",
    excerpt:  "Constituir una empresa en Venezuela implica elegir el tipo societario adecuado, redactar el acta constitutiva y cumplir con los requisitos del Registro Mercantil.",
    date:     "2025-06-10",
  },
];

const featured = articles[0];
const rest      = articles.slice(1);

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  return `${d} de ${months[m - 1]} de ${y}`;
}

// ── ArticleCard ───────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="bg-white rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-[#e8e8e8] hover:shadow-[0_4px_18px_rgba(0,0,0,0.10)] transition-shadow">
      <div className="flex flex-col gap-3 p-6 flex-1">
        <span className="inline-block font-['Schibsted_Grotesk',sans-serif] text-[11px] font-semibold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/10 rounded-full px-3 py-1 w-fit">
          {article.category}
        </span>
        <h3 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[18px] md:text-[20px] leading-[1.3]">
          {article.title}
        </h3>
        <p className="font-['Schibsted_Grotesk',sans-serif] text-[#6b7280] text-[14px] leading-[1.65] flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f0] mt-auto">
          <time
            dateTime={article.date}
            className="font-['Schibsted_Grotesk',sans-serif] text-[12px] text-[#9ca3af]"
          >
            {formatDate(article.date)}
          </time>
          <Link
            to={`/blog/${article.slug}/`}
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
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[1000px] mx-auto">
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[11px] font-semibold uppercase tracking-widest text-[#c9a84c] mb-4">
            Artículo destacado
          </p>

          <article className="bg-[#1a2b4a] rounded-[16px] overflow-hidden flex flex-col md:flex-row">
            {/* Content */}
            <div className="flex flex-col gap-4 p-8 md:p-10 flex-1">
              <span className="inline-block font-['Schibsted_Grotesk',sans-serif] text-[11px] font-semibold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/15 rounded-full px-3 py-1 w-fit">
                {featured.category}
              </span>
              <h2 className="font-['Instrument_Serif',serif] text-white text-[22px] md:text-[28px] leading-[1.2]">
                {featured.title}
              </h2>
              <p className="font-['Schibsted_Grotesk',sans-serif] text-white/70 text-[14px] md:text-[16px] leading-[1.7]">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between mt-2">
                <time
                  dateTime={featured.date}
                  className="font-['Schibsted_Grotesk',sans-serif] text-[12px] text-white/40"
                >
                  {formatDate(featured.date)}
                </time>
                <Link
                  to={`/blog/${featured.slug}/`}
                  className="inline-flex items-center gap-2 font-['Schibsted_Grotesk',sans-serif] text-[13px] font-semibold bg-[#c9a84c] text-[#1a2b4a] hover:bg-[#e0b95a] transition-colors rounded-[8px] px-5 py-2.5"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="bg-[#f5f5f5] w-full">
          <div className="px-6 md:px-16 py-10 md:py-14 max-w-[1000px] mx-auto">
            <h2 className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[24px] md:text-[32px] mb-8">
              Más artículos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
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
