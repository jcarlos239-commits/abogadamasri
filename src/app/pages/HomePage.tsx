import { motion } from "motion/react";
import { Link } from "react-router";
import imgHero     from "@/imports/Root/c1070124e5afc89bd68e1e4d92caeb5306ab5160.png";
import imgRect     from "@/imports/Root/db574d06762a18763fd34165d99983ad364d4047.png";
import imgRect1    from "@/imports/Root/f23974d1c6001db55b9b2363a3521dae87c918e7.png";
import { NAV_H, WA_BASE, MsgIcon, ContactCta, WhyTrust } from "../shared";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden" style={{ paddingTop: NAV_H }}>
      <motion.div
        className="absolute inset-0"
        animate={{ scaleX: [1.03, 1], scaleY: [1.03, 1] }}
        transition={{ scaleX: { duration: 6, ease: "easeInOut", repeat: Infinity }, scaleY: { duration: 6, ease: "easeInOut", repeat: Infinity } }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <img alt="" role="presentation" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute inset-0 bg-[rgba(26,43,74,0.82)]" />
      </motion.div>

      <div className="relative flex flex-col items-center justify-center gap-8 px-6 md:px-16 py-14 md:py-20 min-h-[440px] md:min-h-[500px]">
        <motion.div
          className="flex flex-col gap-4 items-center text-center w-full"
          animate={{ opacity: [0, 0, 1, 1], y: [30, 30, 0, 0] }}
          transition={{ duration: 6, times: [0, 0.05, 0.2, 1], repeat: Infinity }}
        >
          <p className="font-['Instrument_Serif',serif] leading-[1.1] text-[#c9a84c] text-[26px] sm:text-[36px] md:text-[52px] lg:text-[72px]">
            Abogada Marinela Masri Kasrin
          </p>
          <p className="font-['Instrument_Serif',serif] leading-[1.1] text-white text-[28px] sm:text-[38px] md:text-[54px] lg:text-[72px]">
            Asesoría Legal Profesional en Venezuela
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[13px] sm:text-[15px] md:text-[18px] lg:text-[24px]">
            Más de 25 años de experiencia al servicio de sus derechos
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] opacity-80 leading-[1.6] text-[13px] sm:text-[14px] md:text-[16px] text-white max-w-[640px]">
            Especialista en Derecho Civil, Laboral y Mercantil. Representación legal con dedicación, ética y resultados.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full max-w-[560px]"
          animate={{ opacity: [0, 0, 1, 1], y: [20, 20, 0, 0] }}
          transition={{ duration: 6, times: [0, 0.1333, 0.2667, 1], repeat: Infinity }}
        >
          <a
            href={`${WA_BASE}Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta`}
            target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-3.5 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[14px] md:text-[16px] shadow-[0_4px_6px_rgba(0,0,0,0.13)]"
          >
            <MsgIcon />
            Escríbeme por WhatsApp
          </a>
          <a
            href="tel:+584122809538"
            className="flex-1 flex items-center justify-center border border-white text-white px-5 py-3.5 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-semibold text-[13px] md:text-[15px]"
          >
            Llámame: +58 412-280-9538
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services grid ────────────────────────────────────────────────────────────

const serviceCards = [
  { slug: "/derecho-civil",             icon: "⚖️", label: "Derecho Civil",          desc: "Contratos, sucesiones, trámites registrales, litigios civiles y poderes notariales." },
  { slug: "/derecho-mercantil",         icon: "🏢", label: "Derecho Mercantil",      desc: "Constitución, actualización y disolución de empresas. Actas de asamblea y más." },
  { slug: "/derecho-laboral",           icon: "👔", label: "Derecho Laboral",        desc: "Prestaciones sociales, calificaciones de despido y acuerdos extrajudiciales." },
  { slug: "/derecho-familia-divorcios", icon: "💍", label: "Divorcios y Familia",    desc: "Divorcios, custodia, manutención y régimen LOPNNA para familias en Venezuela." },
  { slug: "/bienes-inmuebles",          icon: "🏠", label: "Bienes Inmuebles",       desc: "Compraventa, arrendamientos, condominio y asesoría inmobiliaria integral." },
  { slug: "/contratos-documentos",      icon: "📄", label: "Contratos y Documentos",desc: "Redacción, revisión y autenticación de contratos y documentos legales." },
];

function Services() {
  return (
    <section id="servicios" className="bg-white w-full">
      <div className="flex flex-col gap-8 md:gap-12 py-12 md:py-16 px-6 md:px-16">
        <div className="flex flex-col gap-3 items-center text-center">
          <p className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[28px] sm:text-[36px] md:text-[48px] leading-tight">
            Áreas de Práctica
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[14px] md:text-[18px] leading-[1.5] max-w-[600px]">
            Soluciones jurídicas integrales para personas y empresas
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {serviceCards.map(s => (
            <Link
              key={s.slug}
              to={s.slug}
              className="bg-white shadow-[0_6px_9px_rgba(0,0,0,0.04)] flex flex-col gap-3 items-center justify-center p-4 md:p-8 rounded-[12px] border border-[#e5e7eb] hover:border-[#c9a84c] hover:shadow-md active:scale-[0.98] transition-all text-center group min-h-[170px] md:min-h-[220px]"
            >
              <div className="bg-[#1a2b4a] flex items-center justify-center rounded-[24px] size-[52px] shrink-0 group-hover:bg-[#c9a84c] transition-colors duration-200">
                <span className="text-[26px] leading-none">{s.icon}</span>
              </div>
              <p className="font-['Instrument_Serif',serif] leading-[1.2] text-[#1a2b4a] text-[16px] md:text-[22px]">{s.label}</p>
              <p className="hidden md:block font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[13px] leading-[1.5] line-clamp-2">{s.desc}</p>
              <span className="text-[11px] font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] font-medium md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                Ver más →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="sobre-mi" className="bg-[#f5f5f5] w-full">
      <div className="flex flex-col gap-6 py-10 md:py-16 px-6 md:px-16">
        <div className="flex flex-col gap-2 text-center w-full">
          <p className="font-['Instrument_Serif',serif] leading-[1.1] text-[#1a2b4a] text-[26px] sm:text-[36px] md:text-[52px] lg:text-[72px]">
            Abogada Marinela Masri Kasrin
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[14px] sm:text-[17px] md:text-[20px] lg:text-[24px]">
            Más de 25 años defendiendo sus derechos
          </p>
        </div>

        <div className="flex gap-8 sm:gap-16 md:gap-24 items-center justify-center py-2">
          <Link to="/sobre-marinela-masri/" className="flex flex-col gap-3 items-center group">
            <div className="relative size-[88px] sm:size-[110px] md:size-[120px]">
              <img alt="Quiénes Somos" loading="lazy" className="absolute inset-0 size-full object-contain" src={imgRect} />
            </div>
            <p className="font-['Schibsted_Grotesk',sans-serif] font-bold text-[#1a2b4a] text-[16px] sm:text-[20px] md:text-[24px] underline leading-[1.2] text-center group-hover:text-[#c9a84c] transition-colors">
              Quiénes Somos
            </p>
          </Link>
          <Link to="/servicios/" className="flex flex-col gap-3 items-center group">
            <div className="relative size-[88px] sm:size-[110px] md:size-[120px]">
              <img alt="Qué Hacemos" loading="lazy" className="absolute inset-0 size-full object-contain" src={imgRect1} />
            </div>
            <p className="font-['Schibsted_Grotesk',sans-serif] font-bold text-[#1a2b4a] text-[16px] sm:text-[20px] md:text-[24px] underline leading-[1.2] text-center group-hover:text-[#c9a84c] transition-colors">
              Qué Hacemos
            </p>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {[
            { value: "25+",          label: "Años Experiencia" },
            { value: "Civil & Laboral", label: "Especialidades" },
            { value: "Caracas, VZLA",  label: "Ubicación" },
          ].map(s => (
            <div key={s.label} className="bg-[#1a2b4a] rounded-[8px] border border-[#c9a84c] flex-1">
              <div className="flex flex-col gap-1 items-center text-center px-4 py-4">
                <p className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[20px] md:text-[26px] leading-normal">{s.value}</p>
                <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-white text-[10px] md:text-[12px] uppercase tracking-wide">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyTrust />
      <ContactCta />
    </>
  );
}
