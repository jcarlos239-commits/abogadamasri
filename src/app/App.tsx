import { motion } from "motion/react";
import { useState, useEffect, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import imgHero from "@/imports/Root/c1070124e5afc89bd68e1e4d92caeb5306ab5160.png";
import imgRectangle from "@/imports/Root/db574d06762a18763fd34165d99983ad364d4047.png";
import imgRectangle1 from "@/imports/Root/f23974d1c6001db55b9b2363a3521dae87c918e7.png";
import svgPaths from "@/imports/Root/svg-72i1clds9c";

// ─── Icon components ──────────────────────────────────────────────────────────

function ScaleIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 32 32">
        <path d={svgPaths.p11c279e0} stroke="#C9A84C" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 32 32">
        <path d={svgPaths.p12c4d700} stroke="#C9A84C" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function MailIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p3d4f9680} stroke="#1A2B4A" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p28682900} stroke="#1A2B4A" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function MapPinIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p3d476500} stroke="#1A2B4A" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function MsgIcon({ stroke = "white" }: { stroke?: string }) {
  return (
    <div className="relative shrink-0 size-5">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
        <g clipPath="url(#mc)">
          <path d={svgPaths.p2ea05980} stroke={stroke} strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs><clipPath id="mc"><rect width="20" height="20" fill="white" /></clipPath></defs>
      </svg>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

const NAV_H = 64; // px — matches the nav's rendered height on both sizes

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ];

  function go(href: string) {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <>
      <nav
        style={{ height: NAV_H }}
        className={`fixed top-0 inset-x-0 z-50 bg-white flex items-center transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-[#e5e7eb]"
        }`}
      >
        <div className="w-full flex items-center justify-between px-6 md:px-16">
          {/* Logo */}
          <button onClick={() => go("#inicio")} className="flex items-center gap-3">
            <LogoIcon />
            <span className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[20px] md:text-[24px] leading-none">
              Marinela Masri
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[16px] hover:text-[#c9a84c] transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://wa.me/584141700773?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25d366] text-white px-5 py-[10px] rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[15px] shadow-[0_4px_6px_rgba(0,0,0,0.13)] hover:brightness-105 transition-all"
            >
              <MsgIcon />
              Consulta
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-[#1a2b4a] active:opacity-60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{ top: NAV_H }}
        className={`fixed inset-x-0 z-40 bg-white border-b border-[#e5e7eb] shadow-lg md:hidden
          transition-[max-height,opacity] duration-300 overflow-hidden
          ${open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col px-6 pt-3 pb-5 gap-1">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[16px] text-left py-3 border-b border-[#f3f4f6] last:border-0 active:text-[#c9a84c]"
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/584141700773?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
            target="_blank" rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-3 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[15px]"
          >
            <MsgIcon />
            Consulta por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden" style={{ paddingTop: NAV_H }}>
      {/* Ken-Burns background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scaleX: 1.03, scaleY: 1.03 }}
        animate={{ scaleX: [1.03, 1], scaleY: [1.03, 1] }}
        transition={{
          scaleX: { duration: 6, times: [0, 1], ease: "easeInOut", repeat: Infinity },
          scaleY: { duration: 6, times: [0, 1], ease: "easeInOut", repeat: Infinity },
        }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute inset-0 bg-[rgba(26,43,74,0.82)]" />
      </motion.div>

      <div className="relative flex flex-col items-center justify-center gap-8 px-6 md:px-16 py-14 md:py-20 min-h-[440px] md:min-h-[500px]">
        {/* Headings */}
        <motion.div
          className="flex flex-col gap-4 items-center text-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: [0, 0, 1, 1], y: [30, 30, 0, 0] }}
          transition={{
            opacity: { duration: 6, times: [0, 0.05, 0.2, 1], ease: ["linear", [0.16, 1, 0.3, 1], "linear"], repeat: Infinity },
            y: { duration: 6, times: [0, 0.05, 0.2, 1], ease: ["linear", [0.16, 1, 0.3, 1], "linear"], repeat: Infinity },
          }}
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
          <p className="font-['Schibsted_Grotesk',sans-serif] font-normal leading-[1.6] opacity-80 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white max-w-[640px]">
            Especialista en Derecho Civil, Laboral y Mercantil. Representación legal con dedicación, ética y resultados.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full max-w-[560px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0, 1, 1], y: [20, 20, 0, 0] }}
          transition={{
            opacity: { duration: 6, times: [0, 0.1333, 0.2667, 1], ease: ["linear", [0.16, 1, 0.3, 1], "linear"], repeat: Infinity },
            y: { duration: 6, times: [0, 0.1333, 0.2667, 1], ease: ["linear", [0.16, 1, 0.3, 1], "linear"], repeat: Infinity },
          }}
        >
          <a
            href="https://wa.me/584141700773?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
            target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-3.5 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[14px] md:text-[16px] shadow-[0_4px_6px_rgba(0,0,0,0.13)] active:brightness-95"
          >
            <MsgIcon />
            Escríbeme por WhatsApp
          </a>
          <a
            href="tel:+584141700773"
            className="flex-1 flex items-center justify-center border border-white text-white px-5 py-3.5 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-semibold text-[13px] md:text-[15px] active:bg-white/10"
          >
            Llámame: +58 414-170-0773
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "⚖️", label: "Derecho Civil",
    description: "Asesoría y representación integral en materia civil, tanto online como presencial, desde el inicio hasta la conclusión de cada caso.",
    items: [
      "Asesoría legal en materia civil en general vía online y presencial",
      "Asesoría legal desde el inicio hasta el final. Trámites ante Registros y Notarías",
      "Gestión de Sucesiones. Trámites ante el SENIAT",
      "Demandas y litigios de toda índole: Divorcios, Partición de bienes, Presunciones de ausencia y de muerte, Desalojos de locales comerciales, Entrega material de bienes inmuebles, Títulos Supletorios, Prescripciones adquisitivas, Acuerdos extrajudiciales, entre otros",
      "Poderes amplios, de administración y disposición. Poderes especiales y generales dentro de Venezuela y en cualquier país del mundo, con gestión de apostilla y registros",
    ],
  },
  {
    icon: "🏢", label: "Derecho Mercantil",
    description: "Orientación jurídica integral para empresas y comerciantes, tanto online como presencial, en todas las etapas de la vida empresarial.",
    items: [
      "Asesoría legal en materia mercantil general vía online o presencial",
      "Creación de empresas (Compañías Anónimas)",
      "Actualización de empresas. Actas de asamblea, actualización en general. Trámites online y presencial",
      "Disolución de empresas",
      "Venta de acciones de empresas",
      "Actualización de Juntas Administrativas",
      "Inventarios, balances antes y después, Estados financieros de la mano de contadores públicos colegiados",
      "Todo en general para tramitar empresas",
    ],
  },
  {
    icon: "👔", label: "Derecho Laboral",
    description: "Defensa de trabajadores y empleadores en materia laboral, tanto online como presencial, desde la asesoría hasta la representación en juicio.",
    items: [
      "Asesoría legal en materia laboral general vía online o presencial",
      "Asesoría legal en materia mercantil general vía online o presencial",
      "Calificación de despido",
      "Demanda de prestaciones sociales",
      "Acuerdos extrajudiciales entre patrono y trabajador",
    ],
  },
  {
    icon: "💍", label: "Divorcios y Familia",
    description: "Acompañamiento legal integral en materia de familia y protección de niños, niñas y adolescentes bajo el régimen especial de la LOPNNA.",
    items: [
      "Área de Familia relacionada a Niños, Niñas y Adolescentes",
      "Régimen especial de Ley Orgánica para la Protección del Niño, Niña y Adolescente (LOPNNA)",
      "Divorcios contenciosos",
      "Divorcios por desafecto (Sentencia 1070 TSJ)",
      "Separación de cuerpos",
      "Partición de bienes",
      "Acción merodeclarativa",
      "Privación de patria potestad",
      "Régimen de convivencia familiar",
      "Régimen de obligación de manutención",
      "Entre otros relacionados con el régimen especial (LOPNNA)",
    ],
  },
  {
    icon: "🏠", label: "Bienes Inmuebles",
    description: "Asesoría legal integral en materia inmobiliaria y de condominio, acompañada de un equipo multidisciplinario experto en la materia.",
    items: [
      "Asesoría en general a juntas de condominio y asociaciones civiles acompañada de un equipo multidisciplinario experto en la materia",
      "Cobranza judicial y extrajudicial de condominio",
      "Compraventa de inmuebles, arrendamientos, desalojos, documentos de propiedad y resolución de conflictos inmobiliarios en Venezuela",
      "Asesoría para propietarios y administradores de condominio",
      "Asesoría en temas relacionados a la Ley de Propiedad Horizontal y su correcta aplicación",
      "Demandas de cobro de bolívares relacionadas a morosidad por deudas de condominio",
      "Redacción de documento de condominio apegado a la Ley Horizontal",
      "Redacción de reglamento de condominio",
      "Asesoría para condominios en relación al personal de mantenimiento",
      "Asesoría de cualquier tipo en materia de condominio",
    ],
  },
  {
    icon: "📄", label: "Contratos y Documentos",
    description: "Redacción, revisión y autenticación de todo tipo de contratos y documentos legales, adaptados a cada necesidad particular.",
    items: [
      "Contrato de arrendamiento comercial",
      "Contrato de arrendamiento para vivienda",
      "Contratos de cualquier tipo",
      "Contrato de trabajo",
      "Documentos de condominio",
      "Reglamento de condominio",
      "Documento de compra venta de viviendas",
      "Documento de compra venta de vehículos",
      "Documentos de solicitudes a entes administrativos del Estado",
      "Entre otros documentos",
    ],
  },
];

type Service = (typeof services)[number];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <motion.div
        className="relative bg-white w-full sm:max-w-[520px] sm:mx-4 rounded-t-[20px] sm:rounded-[16px] shadow-2xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Drag handle on mobile */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#d1d5db]" />
        </div>

        <div className="p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-[#6b7280] hover:text-[#1a2b4a] transition-colors"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-5 pr-8">
            <div className="bg-[#1a2b4a] flex items-center justify-center rounded-[24px] size-[52px] shrink-0">
              <span className="text-[26px] leading-none">{service.icon}</span>
            </div>
            <p className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[22px] md:text-[26px] leading-[1.2]">
              {service.label}
            </p>
          </div>

          {/* Description */}
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[14px] leading-[1.65] mb-5">
            {service.description}
          </p>

          {/* Items */}
          <div className="border-t border-[#e5e7eb] pt-4 mb-6">
            <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#1a2b4a] text-[11px] uppercase tracking-widest mb-3">
              Incluye
            </p>
            <ul className="flex flex-col gap-2.5">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#c9a84c] font-bold text-[14px] mt-[1px] shrink-0">✓</span>
                  <span className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[14px] leading-[1.5]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/584141700773?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20${encodeURIComponent(service.label)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-3.5 rounded-[10px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[15px] w-full active:brightness-95"
          >
            <MsgIcon />
            Consultar por WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-white shadow-[0_6px_9px_rgba(0,0,0,0.04)] flex flex-col gap-3 items-center justify-center p-4 md:p-8 relative rounded-[12px] border border-[#e5e7eb] hover:border-[#c9a84c] hover:shadow-md active:scale-[0.98] transition-all cursor-pointer text-center group min-h-[170px] md:min-h-[220px]"
      >
        <div className="bg-[#1a2b4a] flex items-center justify-center rounded-[24px] size-[52px] shrink-0 group-hover:bg-[#c9a84c] transition-colors duration-200">
          <span className="text-[26px] leading-none">{service.icon}</span>
        </div>
        <p className="font-['Instrument_Serif',serif] leading-[1.2] text-[#1a2b4a] text-[16px] md:text-[22px]">
          {service.label}
        </p>
        {/* Always visible tap hint on mobile */}
        <span className="text-[11px] font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] font-medium md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          Ver más →
        </span>
      </button>

      {open && <ServiceModal service={service} onClose={() => setOpen(false)} />}
    </>
  );
}

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
          {services.map((s) => (
            <ServiceCard key={s.label} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function AboutModal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <motion.div
        className="relative bg-white w-full sm:max-w-[540px] sm:mx-4 rounded-t-[20px] sm:rounded-[16px] p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="sm:hidden flex justify-center mb-3">
          <div className="w-10 h-1 rounded-full bg-[#d1d5db]" />
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 p-1 text-[#6b7280]" aria-label="Cerrar">
          <X size={22} />
        </button>
        <p className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[24px] md:text-[28px] leading-[1.2] mb-4 pr-8">{title}</p>
        <div className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[14px] md:text-[15px] leading-[1.65]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function About() {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);

  return (
    <section id="sobre-mi" className="bg-[#f5f5f5] w-full">
      <div className="flex flex-col gap-6 py-10 md:py-16 px-6 md:px-16">
        {/* Title */}
        <div className="flex flex-col gap-2 text-center w-full">
          <p className="font-['Instrument_Serif',serif] leading-[1.1] text-[#1a2b4a] text-[26px] sm:text-[36px] md:text-[52px] lg:text-[72px]">
            Abogada Marinela Masri Kasrin
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[14px] sm:text-[17px] md:text-[20px] lg:text-[24px]">
            Más de 25 años defendiendo sus derechos
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-8 sm:gap-16 md:gap-24 items-center justify-center py-2">
          {[
            { label: "Quiénes Somos", img: imgRectangle, action: () => setQ1(true) },
            { label: "Qué Hacemos", img: imgRectangle1, action: () => setQ2(true) },
          ].map((b) => (
            <button key={b.label} onClick={b.action} className="flex flex-col gap-3 items-center group">
              <div className="relative size-[88px] sm:size-[110px] md:size-[120px]">
                <img alt={b.label} className="absolute inset-0 size-full object-contain" src={b.img} />
              </div>
              <p className="font-['Schibsted_Grotesk',sans-serif] font-bold text-[#1a2b4a] text-[16px] sm:text-[20px] md:text-[24px] underline leading-[1.2] text-center group-hover:text-[#c9a84c] transition-colors">
                {b.label}
              </p>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-3">
          {[
            { value: "25+", label: "Años Experiencia" },
            { value: "Civil & Laboral", label: "Especialidades" },
            { value: "Caracas, VZLA", label: "Ubicación" },
          ].map((s) => (
            <div key={s.label} className="bg-[#1a2b4a] rounded-[8px] border border-[#c9a84c] flex-1">
              <div className="flex flex-col gap-1 items-center text-center px-4 py-4">
                <p className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[20px] md:text-[26px] leading-normal">
                  {s.value}
                </p>
                <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-white text-[10px] md:text-[12px] uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AboutModal open={q1} onClose={() => setQ1(false)} title="Quiénes Somos">
        <p className="mb-4">Marinela Masri Kasrin es abogada egresada de la Universidad Santa María (2002) con más de 25 años de experiencia en el ejercicio del derecho en Venezuela. Especializada en Derecho Civil, Laboral y Mercantil, ha dedicado su carrera a brindar asesoría legal integral tanto a personas naturales como jurídicas.</p>
        <p className="mb-4">Desde 2014 ejerce de forma independiente, ofreciendo atención personalizada, ética profesional y un compromiso inquebrantable con la justicia y los intereses de sus clientes. Previamente se desempeñó como abogada en el Fondo Nacional de Ciencia, Tecnología e Innovación (FONACIT) entre 2006 y 2014.</p>
        <p>Su formación continua incluye diplomados, congresos internacionales y talleres especializados que garantizan una defensa técnica actualizada y de excelencia.</p>
      </AboutModal>

      <AboutModal open={q2} onClose={() => setQ2(false)} title="Qué Hacemos">
        <p className="mb-4">Ofrecemos asesoría legal integral en diversas áreas del derecho venezolano, brindando soluciones jurídicas efectivas tanto a personas naturales como a empresas.</p>
        <p className="mb-3 font-semibold text-[#1a2b4a]">Nuestros servicios incluyen:</p>
        <ul className="list-disc pl-5 space-y-2.5 mb-4">
          <li><strong>Derecho Civil</strong> — Contratos, obligaciones, sucesiones, trámites ante Registros y Notarías, demandas y litigios civiles</li>
          <li><strong>Derecho Mercantil</strong> — Constitución, actualización y disolución de empresas, actas de asamblea, venta de acciones</li>
          <li><strong>Derecho Laboral</strong> — Calificación de despido, prestaciones sociales, acuerdos extrajudiciales laborales</li>
          <li><strong>Divorcios y Familia</strong> — Divorcios, custodia, pensión alimentaria, régimen de convivencia familiar</li>
          <li><strong>Bienes Inmuebles</strong> — Compraventa, arrendamientos, desalojos, juntas de condominio, cobranza judicial y extrajudicial</li>
          <li><strong>Contratos y Documentos</strong> — Redacción, revisión y negociación de contratos, poderes notariales</li>
        </ul>
        <p className="text-[#1a2b4a] font-medium">Atención presencial en Caracas y asesoría online para toda Venezuela.</p>
      </AboutModal>
    </section>
  );
}

// ─── Why Trust ────────────────────────────────────────────────────────────────

const trustItems = [
  { icon: "✅", title: "Experiencia Comprobada", desc: "Más de 25 años de práctica legal activa con casos resueltos exitosamente." },
  { icon: "🤝", title: "Atención Personalizada", desc: "Cada cliente recibe seguimiento directo y comunicación constante." },
  { icon: "📋", title: "Resultados Reales", desc: "Historial sólido de resoluciones favorables para nuestros clientes." },
  { icon: "⚡", title: "Respuesta Rápida", desc: "Respondemos en menos de 24 horas a todas sus consultas." },
];

function WhyTrust() {
  return (
    <section className="bg-[#1a2b4a] w-full">
      <div className="flex flex-col gap-10 md:gap-16 py-12 md:py-16 px-6 md:px-16">
        <div className="flex flex-col gap-3 items-center text-center">
          <p className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] leading-tight">
            ¿Por Qué Confiar en Marinela Masri?
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white text-[14px] md:text-[18px] leading-[1.5] max-w-[600px]">
            Compromiso inquebrantable con la justicia y sus intereses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 items-center text-center">
              <div className="bg-[#c9a84c] flex items-center justify-center rounded-[24px] size-[48px] shrink-0">
                <span className="text-[20px] leading-none">{item.icon}</span>
              </div>
              <p className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[18px] md:text-[22px] leading-tight">
                {item.title}
              </p>
              <p className="font-['Schibsted_Grotesk',sans-serif] text-white text-[13px] md:text-[15px] leading-[1.5] opacity-80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

const educationItems = [
  { year: "2025", title: "Diplomado Derecho Laboral", institution: "ULAC" },
  { year: "2024", title: "Taller: Arrendamientos en Venezuela", institution: "Actualización Legal" },
  { year: "2008", title: "XI Congreso Centroamericano del Derecho del Trabajo", institution: "Panamá" },
  { year: "2007", title: "Congreso Internacional de Derecho Laboral", institution: "Nueva Esparta" },
  { year: "2005", title: "Primera Conferencia sobre Mediación", institution: "TSJ, Caracas" },
];

function Education() {
  return (
    <section className="bg-white w-full">
      <div className="flex flex-col gap-6 py-12 md:py-16 px-6 md:px-16">
        <div className="flex flex-col gap-3 items-center text-center">
          <p className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[28px] sm:text-[36px] md:text-[48px] leading-tight">
            Formación Continua
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[14px] md:text-[18px] leading-[1.5] max-w-[600px]">
            Capacitación constante para ofrecer la mejor defensa técnica
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {educationItems.map((item) => (
            <div key={item.year + item.title} className="bg-[#f5f5f5] rounded-[12px]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-4 md:p-6">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="font-['Schibsted_Grotesk',sans-serif] font-bold text-[#c9a84c] text-[12px] md:text-[14px] uppercase tracking-wide">
                    {item.year}
                  </p>
                  <p className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[17px] md:text-[22px] leading-snug">
                    {item.title}
                  </p>
                </div>
                <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[12px] md:text-[15px] sm:ml-4 sm:shrink-0 sm:text-right">
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────

function ContactCta() {
  return (
    <section id="contacto" className="bg-[#c9a84c] w-full">
      <div className="flex flex-col items-center gap-8 md:gap-12 py-12 md:py-16 px-6 md:px-16">
        <div className="flex flex-col gap-3 items-center text-center text-[#1a2b4a]">
          <p className="font-['Instrument_Serif',serif] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-tight">
            ¿Necesita Asesoría Legal?
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] font-medium opacity-80 text-[14px] md:text-[18px] md:text-[22px]">
            Contácteme hoy mismo para una consulta
          </p>
        </div>

        <a
          href="https://wa.me/584141700773?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[15px] md:text-[18px] shadow-[0_4px_6px_rgba(0,0,0,0.13)] active:brightness-95"
        >
          <MsgIcon />
          Consulta por WhatsApp
        </a>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 md:gap-16 items-center">
          <a href="mailto:marinelamasri79@gmail.com" className="flex items-center gap-2.5 active:opacity-70">
            <MailIcon />
            <span className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#1a2b4a] text-[13px] md:text-[16px] break-all">
              marinelamasri79@gmail.com
            </span>
          </a>
          <a href="tel:+584122809538" className="flex items-center gap-2.5 active:opacity-70">
            <PhoneIcon />
            <span className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#1a2b4a] text-[13px] md:text-[16px]">
              0412-280-9538
            </span>
          </a>
          <div className="flex items-center gap-2.5">
            <MapPinIcon />
            <span className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#1a2b4a] text-[13px] md:text-[16px]">
              Plaza Venezuela, Caracas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0f1e36] w-full">
      <div className="flex flex-col gap-6 py-12 md:py-16 px-6 md:px-16 pb-8">
        <div className="flex items-center gap-3">
          <ScaleIcon />
          <p className="font-['Instrument_Serif',serif] text-white text-[22px] md:text-[28px] leading-none">
            Marinela Masri
          </p>
        </div>
        <p className="font-['Schibsted_Grotesk',sans-serif] text-white/60 text-[13px] md:text-[15px] leading-[1.5] max-w-[400px]">
          Defensa legal con ética y profesionalismo en Caracas, Venezuela. Más de 25 años de trayectoria impecable.
        </p>

        <div className="border-t border-white/10 pt-6 flex flex-col gap-2 items-center text-center">
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] md:text-[14px]">
            Abogada Marinela Masri Kasrin © 2026 · Caracas, Venezuela
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/30 text-[10px] md:text-[12px] leading-[1.5] max-w-[600px]">
            Este sitio web es únicamente informativo y no constituye asesoría legal formal.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyTrust />
      <Education />
      <ContactCta />
      <Footer />
    </div>
  );
}
