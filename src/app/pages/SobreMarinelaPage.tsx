import { Link } from "react-router";
import { usePageSEO, WA_BASE, MsgIcon, ContactCta, WhyTrust, SERVICE_ROUTES } from "../shared";

const META_TITLE = "Abogada Marinela Masri Kasrin | Más de 25 Años de Experiencia";
const META_DESC  = "Conoce a Marinela Masri Kasrin, abogada venezolana con más de 25 años de trayectoria en Derecho Civil, Laboral y Mercantil. Atención presencial en Caracas y asesoría en línea para toda Venezuela.";

export default function SobreMarinelaPage() {
  usePageSEO(META_TITLE, META_DESC, "/sobre-marinela-masri/");

  return (
    <div className="w-full">

      {/* Hero strip */}
      <section className="bg-[#1a2b4a] w-full" style={{ paddingTop: 64 }}>
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px]">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 mb-6">
            <Link to="/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              Inicio
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <span className="font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] text-[12px]">Sobre Mí</span>
          </nav>
          <h1 className="font-['Instrument_Serif',serif] text-white text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] mb-4">
            Abogada Marinela Masri Kasrin
          </h1>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/70 text-[15px] md:text-[18px] leading-[1.6] max-w-[600px]">
            Más de 25 años defendiendo los derechos de personas y empresas en Venezuela, con dedicación, ética y profesionalismo.
          </p>
        </div>
      </section>

      {/* Perfil profesional */}
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto">
          <h2 className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[24px] md:text-[32px] mb-6">
            Perfil Profesional
          </h2>
          <div className="flex flex-col gap-4 font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[15px] md:text-[17px] leading-[1.75]">
            <p>
              Marinela Masri Kasrin es abogada egresada de la Universidad Santa María (2002) con más de 25 años de experiencia en el ejercicio del derecho en Venezuela. Especializada en Derecho Civil, Laboral y Mercantil, ha dedicado su carrera a brindar asesoría legal integral tanto a personas naturales como jurídicas.
            </p>
            <p>
              Desde 2014 ejerce de forma independiente en Caracas, ofreciendo atención personalizada, ética profesional y un compromiso inquebrantable con la justicia y los intereses de sus clientes. Previamente se desempeñó como abogada en el Fondo Nacional de Ciencia, Tecnología e Innovación (FONACIT) entre 2006 y 2014.
            </p>
            <p>
              Su formación continua incluye diplomados, congresos internacionales y talleres especializados que garantizan una defensa técnica actualizada y de excelencia, manteniendo siempre al día el conocimiento del ordenamiento jurídico venezolano.
            </p>
            <p>
              Entre sus clientes se encuentran personas naturales que enfrentan situaciones de familia, sucesiones o conflictos laborales, así como empresarios y comerciantes que requieren asesoría para la constitución o gestión legal de sus empresas. Cada consulta recibe atención directa de Marinela Masri, con seguimiento personalizado hasta la resolución del asunto.
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas rápidas */}
      <section className="bg-[#1a2b4a] w-full">
        <div className="px-6 md:px-16 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[860px] mx-auto">
            {[
              { value: "25+",       label: "Años de Experiencia" },
              { value: "2002",      label: "Año de Egreso USM" },
              { value: "2014",      label: "Ejercicio Independiente" },
              { value: "Nacional",  label: "Cobertura Online" },
            ].map(s => (
              <div key={s.label} className="rounded-[10px] border border-[#c9a84c]/40 flex flex-col items-center text-center px-4 py-5">
                <p className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[22px] md:text-[28px] leading-none mb-1">{s.value}</p>
                <p className="font-['Schibsted_Grotesk',sans-serif] text-white/60 text-[11px] md:text-[12px] uppercase tracking-wide leading-[1.4]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque profesional */}
      <section className="bg-[#f5f5f5] w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto">
          <h2 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[24px] md:text-[32px] mb-6">
            Enfoque y Compromiso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "⚖️",
                title: "Ética Profesional",
                desc: "Cada caso se aborda con absoluta transparencia y rigor ético. Los intereses del cliente siempre son la prioridad.",
              },
              {
                icon: "🤝",
                title: "Atención Personalizada",
                desc: "Ningún caso es igual. Marinela Masri brinda seguimiento directo y comunicación constante a cada cliente.",
              },
              {
                icon: "🌐",
                title: "Atención Online y Presencial",
                desc: "Consultas presenciales en Caracas y asesoría online para clientes en todo el territorio venezolano.",
              },
              {
                icon: "📚",
                title: "Actualización Continua",
                desc: "Formación permanente para garantizar que su defensa siempre esté respaldada por el derecho vigente.",
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-[12px] border border-[#e5e7eb] p-5 flex gap-4">
                <div className="bg-[#1a2b4a] flex items-center justify-center rounded-[16px] size-[44px] shrink-0 mt-0.5">
                  <span className="text-[20px] leading-none">{item.icon}</span>
                </div>
                <div>
                  <p className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[17px] md:text-[20px] leading-[1.2] mb-1">{item.title}</p>
                  <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[13px] md:text-[14px] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de práctica */}
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto">
          <h2 className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[24px] md:text-[32px] mb-3">
            Áreas de Práctica
          </h2>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[14px] md:text-[16px] leading-[1.6] mb-7">
            Marinela Masri ofrece asesoría legal en seis áreas del derecho venezolano, cubriendo las necesidades jurídicas más frecuentes de personas y empresas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {SERVICE_ROUTES.map(s => (
              <a
                key={s.slug}
                href={s.slug}
                className="flex flex-col gap-2 items-center text-center bg-[#f5f5f5] hover:bg-[#1a2b4a] border border-[#e5e7eb] hover:border-[#c9a84c] rounded-[12px] px-4 py-5 transition-all group"
              >
                <div className="bg-[#1a2b4a] group-hover:bg-[#c9a84c] flex items-center justify-center rounded-[20px] size-[44px] shrink-0 transition-colors">
                  <span className="text-[22px] leading-none">{s.icon}</span>
                </div>
                <p className="font-['Instrument_Serif',serif] text-[#1a2b4a] group-hover:text-white text-[14px] md:text-[16px] leading-[1.3] transition-colors">
                  {s.label}
                </p>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="/servicios/"
              className="inline-block font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[14px] md:text-[15px] underline hover:text-[#1a2b4a] transition-colors"
            >
              Ver todos los servicios jurídicos →
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-[#f5f5f5] w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[26px] md:text-[36px] leading-tight">
            ¿Necesita Asesoría Legal?
          </h2>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[14px] md:text-[16px] leading-[1.6] max-w-[520px]">
            Contáctese directamente con Marinela Masri para consultar su caso. Atención presencial en Caracas y en línea para toda Venezuela.
          </p>
          <a
            href={`${WA_BASE}Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20la%20Abogada%20Marinela`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[15px] md:text-[17px] shadow-[0_4px_6px_rgba(0,0,0,0.13)] hover:brightness-105 transition-all"
          >
            <MsgIcon />
            Consulta por WhatsApp
          </a>
        </div>
      </section>

      <WhyTrust />
      <ContactCta />
    </div>
  );
}
