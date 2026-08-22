import { motion } from "motion/react";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import svgPaths from "@/imports/Root/svg-72i1clds9c";

// ─── Constants ────────────────────────────────────────────────────────────────

export const NAV_H = 64;
export const MAPS_URL =
  "https://www.google.com/maps/place/Abogada+Marinela+Masri+Kasrin/@10.4944047,-66.8873985,3322m/data=!3m1!1e3!4m10!1m2!2m1!1sabogados+en+caracas!3m6!1s0x5549f078d44630b:0xf4eaf479cc7c2534!8m2!3d10.4944047!4d-66.877711!15sChNhYm9nYWRvcyBlbiBjYXJhY2FzWhUiE2Fib2dhZG9zIGVuIGNhcmFjYXOSAQZsYXd5ZXLgAQA!16s%2Fg%2F11zdjd0v72?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D";
export const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.268!2d-66.877711!3d10.4944047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5549f078d44630b%3A0xf4eaf479cc7c2534!2sAbogada%20Marinela%20Masri%20Kasrin!5e0!3m2!1ses!2sve!4v1723500000000!5m2!1ses!2sve";
export const WA_BASE = "https://wa.me/584141700773?text=";

export const SERVICE_ROUTES = [
  { slug: "/derecho-civil/",            label: "Derecho Civil",           icon: "⚖️" },
  { slug: "/derecho-mercantil/",        label: "Derecho Mercantil",       icon: "🏢" },
  { slug: "/derecho-laboral/",          label: "Derecho Laboral",         icon: "👔" },
  { slug: "/derecho-familia-divorcios/",label: "Divorcios y Familia",     icon: "💍" },
  { slug: "/bienes-inmuebles/",         label: "Bienes Inmuebles",        icon: "🏠" },
  { slug: "/contratos-documentos/",     label: "Contratos y Documentos",  icon: "📄" },
] as const;

// ─── Per-page SEO ─────────────────────────────────────────────────────────────

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
  el.setAttribute("content", content);
}
function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) { el = document.createElement("link"); el.rel = "canonical"; document.head.appendChild(el); }
  el.href = href;
}

const HOME_TITLE = "Abogados en Caracas | Marinela Masri | Asesoría Legal";
const HOME_DESC  = "Abogados en Caracas, Venezuela. Marinela Masri ofrece asesoría legal en Derecho Civil, Mercantil, Laboral, Familia, Bienes Inmuebles y Contratos.";
const SITE_URL   = "https://www.abogadamasri.com";

export function usePageSEO(title: string, description: string, path: string) {
  useEffect(() => {
    const canonical = SITE_URL + path;
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setCanonical(canonical);
    return () => {
      document.title = HOME_TITLE;
      setMeta("description", HOME_DESC);
      setMeta("og:title", HOME_TITLE, "property");
      setMeta("og:description", HOME_DESC, "property");
      setMeta("og:url", SITE_URL + "/", "property");
      setCanonical(SITE_URL + "/");
    };
  }, [title, description, path]);
}

// ─── Icons ────────────────────────────────────────────────────────────────────

export function ScaleIcon() {
  return (
    <div className="relative shrink-0 size-8" aria-hidden="true">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 32 32">
        <path d={svgPaths.p11c279e0} stroke="#C9A84C" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
export function LogoIcon() {
  return (
    <div className="relative shrink-0 size-8" aria-hidden="true">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 32 32">
        <path d={svgPaths.p12c4d700} stroke="#C9A84C" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
export function MailIcon() {
  return (
    <div className="relative shrink-0 size-6" aria-hidden="true">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p3d4f9680} stroke="#1A2B4A" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
export function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-6" aria-hidden="true">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p28682900} stroke="#1A2B4A" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
export function MsgIcon({ stroke = "white" }: { stroke?: string }) {
  return (
    <div className="relative shrink-0 size-5" aria-hidden="true">
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

export function Navbar() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [dropOpen, setDropOpen]             = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const dropRef                             = useRef<HTMLDivElement>(null);
  const location                            = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // close desktop dropdown when clicking outside
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  // close everything on route change + scroll to top
  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
    setMobileServices(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function goSection(id: string) {
    setMobileOpen(false);
    if (location.pathname === "/") {
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
    } else {
      window.location.href = `/#${id}`;
    }
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
          <Link to="/" className="flex items-center gap-3">
            <LogoIcon />
            <span className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[20px] md:text-[24px] leading-none">
              Marinela Masri
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[15px] hover:text-[#c9a84c] transition-colors">
              Inicio
            </Link>

            {/* Services dropdown */}
            <div className="relative flex items-center gap-0.5" ref={dropRef}>
              <Link to="/servicios/" className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[15px] hover:text-[#c9a84c] transition-colors">
                Servicios
              </Link>
              <button
                onClick={() => setDropOpen(v => !v)}
                aria-expanded={dropOpen}
                aria-label="Mostrar áreas de práctica"
                className="p-1 text-[#1a2b4a] hover:text-[#c9a84c] transition-colors"
              >
                <ChevronDown size={13} className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
              </button>
              {dropOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-[12px] shadow-xl border border-[#e5e7eb] py-2 min-w-[220px] z-50">
                  <Link
                    to="/servicios/"
                    onClick={() => setDropOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f5f5f5] transition-colors border-b border-[#f3f4f6]"
                  >
                    <span className="text-[17px]">📋</span>
                    <span className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#1a2b4a] text-[14px]">Todos los servicios</span>
                  </Link>
                  {SERVICE_ROUTES.map(s => (
                    <Link
                      key={s.slug}
                      to={s.slug}
                      onClick={() => setDropOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f5f5f5] transition-colors"
                    >
                      <span className="text-[17px]">{s.icon}</span>
                      <span className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[14px]">{s.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/sobre-marinela-masri/" className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[15px] hover:text-[#c9a84c] transition-colors">
              Sobre Mí
            </Link>
            <Link to="/blog/" className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[15px] hover:text-[#c9a84c] transition-colors">
              Blog
            </Link>
            <WaButton
              waText="Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
              className="flex items-center gap-2 bg-[#25d366] text-white px-5 py-[10px] rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[14px] shadow-[0_4px_6px_rgba(0,0,0,0.13)] hover:brightness-105 transition-all"
            >
              <MsgIcon />
              Consulta
            </WaButton>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-[#1a2b4a] active:opacity-60"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{ top: NAV_H }}
        className={`fixed inset-x-0 z-40 bg-white border-b border-[#e5e7eb] shadow-lg md:hidden
          transition-[max-height,opacity] duration-300 overflow-hidden
          ${mobileOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col px-6 pt-3 pb-5 gap-0">
          <Link to="/" className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[16px] py-3 border-b border-[#f3f4f6] active:text-[#c9a84c]">
            Inicio
          </Link>

          {/* Mobile services expand */}
          <div className="border-b border-[#f3f4f6]">
            <div className="flex items-center justify-between py-3">
              <Link to="/servicios/" className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[16px] active:text-[#c9a84c]">
                Servicios
              </Link>
              <button onClick={() => setMobileServices(v => !v)} aria-label="Mostrar áreas de práctica" className="p-1 text-[#1a2b4a] active:text-[#c9a84c]">
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServices ? "rotate-180" : ""}`} />
              </button>
            </div>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${mobileServices ? "max-h-[340px]" : "max-h-0"}`}>
              <div className="flex flex-col pl-4 pb-2">
                {SERVICE_ROUTES.map(s => (
                  <Link key={s.slug} to={s.slug} className="flex items-center gap-2.5 py-2.5 text-[#1a2b4a] active:text-[#c9a84c]">
                    <span className="text-[15px]">{s.icon}</span>
                    <span className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[14px]">{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/sobre-marinela-masri/" className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[16px] py-3 border-b border-[#f3f4f6] active:text-[#c9a84c]">
            Sobre Mí
          </Link>
          <Link to="/blog/" className="font-['Schibsted_Grotesk',sans-serif] font-medium text-[#1a2b4a] text-[16px] py-3 border-b border-[#f3f4f6] active:text-[#c9a84c]">
            Blog
          </Link>
          <WaButton
            waText="Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
            className="mt-3 flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-3 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[15px]"
          >
            <MsgIcon />
            Consulta por WhatsApp
          </WaButton>
        </div>
      </div>
    </>
  );
}

// ─── ContactCta ───────────────────────────────────────────────────────────────

export function ContactCta({ waText = "Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta" }: { waText?: string }) {
  return (
    <section id="contacto" className="bg-[#c9a84c] w-full">
      <div className="flex flex-col items-center gap-8 md:gap-12 py-12 md:py-16 px-6 md:px-16">
        <div className="flex flex-col gap-3 items-center text-center text-[#1a2b4a]">
          <p className="font-['Instrument_Serif',serif] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-tight">
            ¿Necesita Asesoría Legal?
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] font-medium opacity-80 text-[14px] md:text-[22px]">
            Contácteme hoy mismo para una consulta
          </p>
        </div>

        <WaButton
          waText={waText}
          className="flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-[8px] font-['Schibsted_Grotesk',sans-serif] font-bold text-[15px] md:text-[18px] shadow-[0_4px_6px_rgba(0,0,0,0.13)] active:brightness-95"
        >
          <MsgIcon />
          Consulta por WhatsApp
        </WaButton>

        {/* Map card */}
        <div className="w-full max-w-[680px] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
          <div className="relative w-full" style={{ height: 280 }}>
            <iframe
              title="Ubicación Abogada Marinela Masri"
              src={MAPS_EMBED}
              width="100%" height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAPS_URL} target="_blank" rel="noopener noreferrer"
              className="absolute top-3 left-3 flex items-center gap-1.5 bg-white text-[#1a73e8] font-['Schibsted_Grotesk',sans-serif] font-semibold text-[13px] px-3 py-1.5 rounded-[6px] shadow-md hover:bg-[#f0f4ff] transition-colors"
            >
              Abrir en Maps
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
          <a
            href={MAPS_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-start gap-3 bg-[#1a2b4a] px-5 py-4 hover:bg-[#223560] transition-colors"
          >
            <div className="mt-0.5 shrink-0" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#c9a84c">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <p className="font-['Schibsted_Grotesk',sans-serif] font-bold text-[#c9a84c] text-[11px] uppercase tracking-widest mb-0.5">Ubicación</p>
              <p className="font-['Schibsted_Grotesk',sans-serif] text-white text-[13px] md:text-[14px] leading-[1.5]">
                Centro Comercial City Market, Blvr. de Sabana Grande,<br />
                Caracas 1050, Distrito Capital, Venezuela
              </p>
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-12 items-center">
          <a href="mailto:marinelamasri79@gmail.com" className="flex items-center gap-2.5 active:opacity-70">
            <MailIcon />
            <span className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#1a2b4a] text-[13px] md:text-[16px] break-all">
              marinelamasri79@gmail.com
            </span>
          </a>
          <a href="tel:+584141700773" className="flex items-center gap-2.5 active:opacity-70">
            <PhoneIcon />
            <span className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#1a2b4a] text-[13px] md:text-[16px]">
              0414-170-0773
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── WhyTrust ─────────────────────────────────────────────────────────────────

const trustItems = [
  { icon: "✅", title: "Experiencia Comprobada", desc: "Más de 25 años de práctica legal activa con casos resueltos exitosamente." },
  { icon: "🤝", title: "Atención Personalizada", desc: "Cada cliente recibe seguimiento directo y comunicación constante." },
  { icon: "📋", title: "Resultados Reales", desc: "Historial sólido de resoluciones favorables para nuestros clientes." },
  { icon: "⚡", title: "Respuesta Rápida", desc: "Respondemos en menos de 24 horas a todas sus consultas." },
];

export function WhyTrust() {
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
          {trustItems.map(item => (
            <div key={item.title} className="flex flex-col gap-4 items-center text-center">
              <div className="bg-[#c9a84c] flex items-center justify-center rounded-[24px] size-[48px] shrink-0">
                <span className="text-[20px] leading-none">{item.icon}</span>
              </div>
              <p className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[18px] md:text-[22px] leading-tight">{item.title}</p>
              <p className="font-['Schibsted_Grotesk',sans-serif] text-white text-[13px] md:text-[15px] leading-[1.5] opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="bg-[#0f1e36] w-full">
      <div className="flex flex-col gap-6 py-12 md:py-16 px-6 md:px-16 pb-8">
        <div className="flex items-center gap-3">
          <ScaleIcon />
          <p className="font-['Instrument_Serif',serif] text-white text-[22px] md:text-[28px] leading-none">Marinela Masri</p>
        </div>
        <p className="font-['Schibsted_Grotesk',sans-serif] text-white/60 text-[13px] md:text-[15px] leading-[1.5] max-w-[420px]">
          Defensa legal con ética y profesionalismo en Caracas, Venezuela. Más de 25 años de trayectoria impecable.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/servicios/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
            Todos los Servicios
          </Link>
          {SERVICE_ROUTES.map(s => (
            <Link key={s.slug} to={s.slug} className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              {s.label}
            </Link>
          ))}
          <Link to="/sobre-marinela-masri/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
            Sobre Marinela Masri
          </Link>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col gap-2 items-center text-center">
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] md:text-[14px]">
            Abogada Marinela Masri © 2026 · Caracas, Venezuela
          </p>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[10px] md:text-[12px] leading-[1.5] max-w-[600px]">
            Este sitio web es únicamente informativo y no constituye asesoría legal formal.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── WaButton ─────────────────────────────────────────────────────────────────

export function WaButton({
  waText,
  className,
  ariaLabel,
  children,
}: {
  waText: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const url = `${WA_BASE}${waText}`;

  function handleContinue() {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} aria-label={ariaLabel}>
        {children}
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[200] bg-black/50" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-[201] w-[calc(100%-2rem)] max-w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-white p-7 shadow-2xl focus:outline-none"
            aria-describedby="wa-modal-desc"
          >
            <Dialog.Title className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[20px] leading-snug mb-3">
              Aviso antes de continuar
            </Dialog.Title>
            <p
              id="wa-modal-desc"
              className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[14px] leading-[1.6] mb-6"
            >
              Agende su cita para una consulta (sujeta a honorarios profesionales).
            </p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleContinue}
                className="w-full bg-[#1a2b4a] text-white font-['Schibsted_Grotesk',sans-serif] font-semibold text-[14px] py-3 px-6 rounded-[8px] hover:bg-[#223560] transition-colors"
              >
                Continuar a WhatsApp
              </button>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="w-full text-[#6b7280] font-['Schibsted_Grotesk',sans-serif] text-[13px] py-2 hover:text-[#1a2b4a] transition-colors"
                >
                  Cancelar
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

// ─── FloatingWaButton ─────────────────────────────────────────────────────────

export function FloatingWaButton() {
  return (
    <WaButton
      waText="Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
      ariaLabel="Contactar por WhatsApp"
      className={[
        "fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60]",
        "flex items-center justify-center",
        "size-12 md:size-14",
        "bg-[#25d366] rounded-full",
        "shadow-[0_4px_16px_rgba(37,211,102,0.45)]",
        "hover:brightness-110 active:brightness-95 transition-all duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366]",
      ].join(" ")}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="white"
        className="size-6 md:size-7 shrink-0"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.297-.768.967-.941 1.165-.173.198-.345.223-.643.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    </WaButton>
  );
}

// ─── AboutModal (homepage only) ───────────────────────────────────────────────

export function AboutModal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
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
