import { Link } from "react-router";
import { usePageSEO, WA_BASE, MsgIcon, ContactCta, WhyTrust } from "../shared";

const META_TITLE = "Servicios Jurídicos en Caracas | Abogada Marinela Masri";
const META_DESC  = "Asesoría jurídica integral en Caracas. Derecho Civil, Mercantil, Laboral, Familia, Bienes Inmuebles y Contratos. Más de 25 años de experiencia al servicio de personas y empresas en Venezuela.";

const services = [
  {
    slug:   "/derecho-civil/",
    icon:   "⚖️",
    title:  "Derecho Civil",
    desc:   "Contratos, sucesiones, trámites registrales, litigios civiles, poderes notariales y prescripciones adquisitivas.",
    items:  ["Sucesiones y trámites SENIAT", "Desalojos y litigios civiles", "Poderes notariales con apostilla", "Títulos Supletorios"],
  },
  {
    slug:   "/derecho-mercantil/",
    icon:   "🏢",
    title:  "Derecho Mercantil",
    desc:   "Constitución, actualización y disolución de empresas. Actas de asamblea, cambios de junta directiva y gestión ante el Registro Mercantil.",
    items:  ["Creación de Compañías Anónimas", "Actas de asamblea y directiva", "Transferencia de acciones", "Disolución y liquidación"],
  },
  {
    slug:   "/derecho-laboral/",
    icon:   "👔",
    title:  "Derecho Laboral",
    desc:   "Defensa de trabajadores y empleadores. Prestaciones sociales, calificaciones de despido y acuerdos extrajudiciales bajo la LOTTT.",
    items:  ["Calificación de despido", "Demanda de prestaciones sociales", "Acuerdos extrajudiciales", "Orientación bajo la LOTTT"],
  },
  {
    slug:   "/derecho-familia-divorcios/",
    icon:   "💍",
    title:  "Divorcios y Familia",
    desc:   "Divorcios, custodia, manutención y régimen de convivencia familiar bajo el Código Civil y la LOPNNA.",
    items:  ["Divorcios contenciosos y por desafecto", "Custodia y patria potestad", "Obligación de manutención", "Régimen LOPNNA"],
  },
  {
    slug:   "/bienes-inmuebles/",
    icon:   "🏠",
    title:  "Bienes Inmuebles",
    desc:   "Compraventa, arrendamientos, condominio, desalojos y asesoría bajo la Ley de Propiedad Horizontal.",
    items:  ["Compraventa de inmuebles", "Contratos de arrendamiento", "Juntas de condominio", "Cobranza de cuotas de condominio"],
  },
  {
    slug:   "/contratos-documentos/",
    icon:   "📄",
    title:  "Contratos y Documentos",
    desc:   "Redacción, revisión y autenticación de contratos, poderes notariales y documentos legales de todo tipo.",
    items:  ["Contratos de arrendamiento y compraventa", "Contratos de trabajo", "Poderes notariales generales y especiales", "Documentos para trámites administrativos"],
  },
];

export default function ServiciosPage() {
  usePageSEO(META_TITLE, META_DESC, "/servicios/");

  return (
    <div className="w-full">

      {/* Hero strip */}
      <section className="bg-[#1a2b4a] w-full" style={{ paddingTop: 64 }}>
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[1000px]">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 mb-6">
            <Link to="/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              Inicio
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <span className="font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] text-[12px]">Servicios</span>
          </nav>
          <h1 className="font-['Instrument_Serif',serif] text-white text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] mb-4">
            Servicios Jurídicos
          </h1>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/70 text-[15px] md:text-[18px] leading-[1.6] max-w-[640px]">
            Asesoría legal integral para personas y empresas en Venezuela. Más de 25 años de experiencia respaldando los derechos de nuestros clientes.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto">
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[15px] md:text-[17px] leading-[1.75] mb-4">
            Marinela Masri Kasrin ofrece asesoría jurídica completa en las principales áreas del derecho venezolano, tanto para personas naturales como para empresas y comerciantes. Cada cliente recibe atención directa y personalizada, con consultas presenciales en Caracas y atención en línea disponible para toda Venezuela.
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[15px] md:text-[17px] leading-[1.75]">
            Explore cada área de práctica para conocer en detalle los servicios que puede obtener, cuándo debe consultar a un abogado y respuestas a las preguntas más frecuentes.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-[#f5f5f5] w-full">
        <div className="px-6 md:px-16 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] mx-auto">
            {services.map(s => (
              <a
                key={s.slug}
                href={s.slug}
                className="bg-white rounded-[14px] border border-[#e5e7eb] hover:border-[#c9a84c] shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-md p-6 flex flex-col gap-4 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#1a2b4a] group-hover:bg-[#c9a84c] flex items-center justify-center rounded-[20px] size-[52px] shrink-0 transition-colors duration-200">
                    <span className="text-[26px] leading-none">{s.icon}</span>
                  </div>
                  <h2 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[22px] md:text-[26px] leading-[1.2]">
                    {s.title}
                  </h2>
                </div>
                <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[13px] md:text-[14px] leading-[1.6]">
                  {s.desc}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#c9a84c] font-bold text-[13px] mt-[2px] shrink-0">✓</span>
                      <span className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[13px] leading-[1.5]">{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[13px] group-hover:text-[#1a2b4a] transition-colors">
                  Ver más sobre {s.title} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[12px] uppercase tracking-widest mb-2">
              ¿Quién es Marinela Masri?
            </p>
            <h2 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[24px] md:text-[32px] leading-tight mb-3">
              Más de 25 años al servicio de la justicia
            </h2>
            <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[14px] md:text-[15px] leading-[1.6] mb-5">
              Egresada de la Universidad Santa María (2002), con experiencia en el sector público (FONACIT) y en ejercicio independiente desde 2014. Atención personalizada, ética y compromiso en cada caso.
            </p>
            <a
              href="/sobre-marinela-masri/"
              className="inline-block font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[14px] underline hover:text-[#1a2b4a] transition-colors"
            >
              Conocer más sobre la Abogada →
            </a>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a
              href={`${WA_BASE}Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20sus%20servicios`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25d366] text-white px-7 py-3.5 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[15px] shadow-[0_4px_6px_rgba(0,0,0,0.13)] hover:brightness-105 transition-all"
            >
              <MsgIcon />
              Consulta por WhatsApp
            </a>
            <a
              href="tel:+584122809538"
              className="flex items-center justify-center border border-[#1a2b4a] text-[#1a2b4a] px-7 py-3.5 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-semibold text-[14px] hover:bg-[#1a2b4a] hover:text-white transition-all"
            >
              Llamar: +58 412-280-9538
            </a>
          </div>
        </div>
      </section>

      <WhyTrust />
      <ContactCta />
    </div>
  );
}
