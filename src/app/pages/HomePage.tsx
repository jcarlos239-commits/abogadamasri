import { motion } from "motion/react";
import { Link } from "react-router";
import imgHero       from "@/imports/Root/c1070124e5afc89bd68e1e4d92caeb5306ab5160.webp";
import imgHeroMobile from "@/imports/Root/hero-mobile.webp";
import imgRect     from "@/imports/Root/db574d06762a18763fd34165d99983ad364d4047.png";
import imgRect1    from "@/imports/Root/f23974d1c6001db55b9b2363a3521dae87c918e7.png";
import { useRouteSEO, NAV_H, WA_BASE, MsgIcon, WaButton, ContactCta, WhyTrust } from "../shared";
import { trackPhoneClick } from "../RouteAnalytics";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden" style={{ paddingTop: NAV_H }}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ transformOrigin: "50% 50%" }}
      >
        {/* Layer 0 — photographic background */}
        <picture
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            display: "block",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <source media="(max-width: 768px)" srcSet={imgHeroMobile} type="image/webp" />
          <img
            alt=""
            role="presentation"
            fetchpriority="high"
            width="2242"
            height="1250"
            src={imgHero}
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </picture>
        {/* Layer 1 — dark overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(26,43,74,0.55)", zIndex: 1 }} />
      </motion.div>

      {/* Layer 2 — hero content */}
      <div className="relative flex flex-col items-center justify-center gap-8 px-6 md:px-16 py-14 md:py-20 min-h-[440px] md:min-h-[500px]" style={{ zIndex: 2 }}>
        <motion.div
          className="flex flex-col gap-4 items-center text-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <h1 className="font-['Instrument_Serif',serif] leading-[1.1] text-[#c9a84c] text-[26px] sm:text-[36px] md:text-[52px] lg:text-[72px]">
            Abogados en Caracas, Venezuela
          </h1>
          <p className="font-['Instrument_Serif',serif] leading-[1.1] text-white text-[28px] sm:text-[38px] md:text-[54px] lg:text-[72px]">
            Abogada Marinela Masri
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[13px] sm:text-[15px] md:text-[18px] lg:text-[24px]">
            Asesoría legal con dedicación, ética y resultados comprobados
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] opacity-80 leading-[1.6] text-[13px] sm:text-[14px] md:text-[16px] text-white max-w-[640px]">
            Asesoría legal en Derecho Civil, Mercantil, Laboral, Familia, Bienes Inmuebles y Contratos. Consultas presenciales en Caracas y atención en línea para toda Venezuela.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full max-w-[560px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          <WaButton
            waText="Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-3.5 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[14px] md:text-[16px] shadow-[0_4px_6px_rgba(0,0,0,0.13)]"
          >
            <MsgIcon />
            Escríbeme por WhatsApp
          </WaButton>
          <a
            href="tel:+584141700773"
            onClick={() => trackPhoneClick()}
            className="flex-1 flex items-center justify-center border border-white text-white px-5 py-3.5 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-semibold text-[13px] md:text-[15px]"
          >
            Llámame: +58 414-170-0773
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services grid ────────────────────────────────────────────────────────────

const serviceCards = [
  { slug: "/derecho-civil/",             icon: "⚖️", label: "Derecho Civil",          desc: "Contratos, sucesiones, trámites registrales, litigios civiles y poderes notariales." },
  { slug: "/derecho-mercantil/",         icon: "🏢", label: "Derecho Mercantil",      desc: "Constitución, actualización y disolución de empresas. Actas de asamblea y más." },
  { slug: "/derecho-laboral/",           icon: "👔", label: "Derecho Laboral",        desc: "Asesoría laboral para empresas y empleadores: contratos, cumplimiento de la LOTTT y prevención de conflictos." },
  { slug: "/derecho-familia-divorcios/", icon: "💍", label: "Divorcios y Familia",    desc: "Divorcios, custodia, manutención y régimen LOPNNA para familias en Venezuela." },
  { slug: "/bienes-inmuebles/",          icon: "🏠", label: "Bienes Inmuebles",       desc: "Compraventa, arrendamientos, condominio y asesoría inmobiliaria integral." },
  { slug: "/contratos-documentos/",      icon: "📄", label: "Contratos y Documentos",desc: "Redacción, revisión y autenticación de contratos y documentos legales." },
];

function Services() {
  return (
    <section id="servicios" className="bg-white w-full">
      <div className="flex flex-col gap-8 md:gap-12 py-12 md:py-16 px-6 md:px-16">
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[28px] sm:text-[36px] md:text-[48px] leading-tight">
            Servicios Legales en Caracas
          </h2>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[14px] md:text-[18px] leading-[1.5] max-w-[600px]">
            Soluciones jurídicas integrales para personas y empresas en Venezuela
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
              <h3 className="font-['Instrument_Serif',serif] leading-[1.2] text-[#1a2b4a] text-[16px] md:text-[22px]">{s.label}</h3>
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
          <h2 className="font-['Instrument_Serif',serif] leading-[1.1] text-[#1a2b4a] text-[26px] sm:text-[36px] md:text-[52px] lg:text-[72px]">
            Abogada Marinela Masri
          </h2>
          <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[14px] sm:text-[17px] md:text-[20px] lg:text-[24px]">
            Más de 25 años defendiendo sus derechos
          </p>
        </div>

        <div className="flex gap-8 sm:gap-16 md:gap-24 items-center justify-center py-2">
          <Link to="/sobre-marinela-masri/" className="flex flex-col gap-3 items-center group">
            <div className="relative size-[88px] sm:size-[110px] md:size-[120px]">
              <img alt="" loading="lazy" className="absolute inset-0 size-full object-contain" src={imgRect} />
            </div>
            <p className="font-['Schibsted_Grotesk',sans-serif] font-bold text-[#1a2b4a] text-[16px] sm:text-[20px] md:text-[24px] underline leading-[1.2] text-center group-hover:text-[#c9a84c] transition-colors">
              Quiénes Somos
            </p>
          </Link>
          <Link to="/servicios/" className="flex flex-col gap-3 items-center group">
            <div className="relative size-[88px] sm:size-[110px] md:size-[120px]">
              <img alt="" loading="lazy" className="absolute inset-0 size-full object-contain" src={imgRect1} />
            </div>
            <p className="font-['Schibsted_Grotesk',sans-serif] font-bold text-[#1a2b4a] text-[16px] sm:text-[20px] md:text-[24px] underline leading-[1.2] text-center group-hover:text-[#c9a84c] transition-colors">
              Qué Hacemos
            </p>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {[
            { value: "25+ Años",     label: "de Amplia Experiencia Jurídica" },
            { value: "6",            label: "Áreas de ESPECIALIZACIÓN" },
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
  useRouteSEO();
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
