import { Link } from "react-router";
import { usePageSEO, WA_BASE, MsgIcon, ContactCta, WhyTrust } from "../shared";
import { serviceMap } from "./ServicePage";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubServiceData {
  slug:        string;
  parentSlug:  string;
  parentLabel: string;
  icon:        string;
  title:       string;
  h1?:         string;
  metaTitle:   string;
  metaDesc:    string;
  heroDesc:    string;
  intro:       string;
  items:       string[];
  whenToSeek:  string[];
  related:     string[];
  waText:      string;
}

// ─── Sub-service data ─────────────────────────────────────────────────────────

const allSubServices: SubServiceData[] = [
  // ── Herencias y Sucesiones ──────────────────────────────────────────────────
  {
    slug:        "/derecho-civil/herencias-sucesiones/",
    parentSlug:  "/derecho-civil/",
    parentLabel: "Derecho Civil",
    icon:        "🏛️",
    title:       "Herencias y Sucesiones",
    h1:          "Abogado de Herencias y Sucesiones en Caracas",
    metaTitle:   "Abogado de Herencias y Sucesiones en Caracas | Marinela Masri Kasrin",
    metaDesc:    "Abogado de herencias y sucesiones en Caracas, Venezuela. Asesoría legal en declaraciones sucesorales, herencias, testamentos y particiones.",
    heroDesc:    "Asesoría legal en materia sucesoral en Venezuela: gestión de herencias, trámites ante el SENIAT y orientación a herederos en Caracas.",
    intro:       "El fallecimiento de un familiar plantea, además del proceso de duelo, una serie de gestiones legales que deben realizarse correctamente para que los bienes del causante pasen a sus herederos. En Venezuela, este proceso —conocido como sucesión— implica trámites ante el SENIAT, inscripciones ante el Registro Público y, en muchos casos, la coordinación entre los herederos para llegar a acuerdos sobre la distribución del patrimonio.\n\nContar con orientación legal desde el inicio del proceso sucesoral ayuda a evitar errores costosos, demoras innecesarias y conflictos entre herederos. Marinela Masri acompaña a sus clientes en la gestión de los trámites sucesorales, tanto presencialmente en Caracas como en línea para clientes en todo el país.",
    items: [
      "Asesoría legal en materia sucesoral",
      "Gestión de sucesiones y trámites ante el SENIAT",
      "Orientación sobre la declaración sucesoral",
      "Trámites ante el Registro Público para la transferencia de bienes a los herederos",
      "Demandas de partición de bienes hereditarios",
      "Asuntos relacionados con presunciones de ausencia y de muerte",
      "Asesoría en acuerdos extrajudiciales entre herederos",
    ],
    whenToSeek: [
      "Cuando un familiar ha fallecido y hay bienes que transferir a los herederos",
      "Cuando necesita orientación sobre la declaración sucesoral ante el SENIAT",
      "Cuando hay desacuerdo entre herederos sobre la distribución de los bienes",
      "Cuando los documentos de propiedad del causante presentan irregularidades o están incompletos",
      "Cuando necesita formalizar la transferencia de un inmueble a nombre de los herederos",
    ],
    related: ["/derecho-civil/", "/bienes-inmuebles/", "/contratos-documentos/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20herencias%20y%20sucesiones",
  },

  // ── Divorcio ────────────────────────────────────────────────────────────────
  {
    slug:        "/derecho-familia-divorcios/divorcio/",
    parentSlug:  "/derecho-familia-divorcios/",
    parentLabel: "Divorcios y Familia",
    icon:        "💔",
    title:       "Divorcio en Venezuela",
    h1:          "Abogado de Divorcio en Venezuela",
    metaTitle:   "Abogado de Divorcio en Venezuela | Marinela Masri Kasrin",
    metaDesc:    "Abogado de divorcio en Venezuela. Marinela Masri Kasrin ofrece asesoría y representación legal en procesos de divorcio y asuntos relacionados con la separación.",
    heroDesc:    "Orientación y representación legal en procesos de divorcio en Venezuela: divorcios contenciosos, por desafecto y separación de cuerpos.",
    intro:       "El divorcio es uno de los procesos legales que mayor impacto tiene en la vida de una persona. Además de disolver el vínculo matrimonial, puede involucrar la distribución de bienes conyugales, la definición de regímenes de convivencia con los hijos y otros asuntos que requieren atención cuidadosa.\n\nEn Venezuela, los procesos de divorcio se rigen principalmente por el Código Civil y la jurisprudencia del Tribunal Supremo de Justicia. Contar con asesoría legal desde el inicio del proceso permite tomar decisiones informadas y proteger adecuadamente los derechos e intereses de quien busca asistencia.",
    items: [
      "Divorcios contenciosos por causales del Código Civil",
      "Divorcios por desafecto (Sentencia 1070 TSJ)",
      "Separación de cuerpos",
      "Asesoría en partición de bienes conyugales",
    ],
    whenToSeek: [
      "Cuando está considerando iniciar un proceso de divorcio",
      "Cuando desea entender las opciones legales disponibles antes de tomar una decisión",
      "Cuando necesita disolver el matrimonio sin demostrar causales específicas (divorcio por desafecto)",
      "Cuando hay bienes conyugales que deben ser distribuidos",
      "Cuando su cónyuge se encuentra en el extranjero y necesita orientación sobre el proceso",
    ],
    related: ["/derecho-familia-divorcios/", "/derecho-familia-divorcios/custodia-lopnna/", "/bienes-inmuebles/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20un%20proceso%20de%20divorcio",
  },

  // ── Custodia y LOPNNA ───────────────────────────────────────────────────────
  {
    slug:        "/derecho-familia-divorcios/custodia-lopnna/",
    parentSlug:  "/derecho-familia-divorcios/",
    parentLabel: "Divorcios y Familia",
    icon:        "👶",
    title:       "Custodia y LOPNNA",
    h1:          "Abogado de Custodia y LOPNNA en Caracas",
    metaTitle:   "Abogado de Custodia y LOPNNA en Caracas | Marinela Masri Kasrin",
    metaDesc:    "Abogado de custodia y LOPNNA en Caracas, Venezuela. Asesoría legal sobre guarda y custodia, patria potestad y régimen de convivencia familiar.",
    heroDesc:    "Orientación legal en custodia, régimen de convivencia, manutención y asuntos bajo la LOPNNA en Venezuela.",
    intro:       "Los asuntos relacionados con niños, niñas y adolescentes tienen un régimen legal especial en Venezuela: la LOPNNA (Ley Orgánica para la Protección del Niño, Niña y Adolescente) establece los derechos de los menores y los procedimientos que deben seguirse ante los tribunales de protección.\n\nEstos procesos pueden surgir independientemente de un divorcio: padres separados o en proceso de separación que necesitan definir la custodia, la convivencia o la manutención de sus hijos, así como situaciones que involucran la patria potestad o el reconocimiento de paternidad. Marinela Masri ofrece asesoría en estas materias con profesionalismo y atención al bienestar de los menores involucrados.",
    items: [
      "Régimen de convivencia familiar (custodia)",
      "Régimen de obligación de manutención",
      "Privación de patria potestad",
      "Reconocimiento y negación de paternidad",
      "Asuntos bajo el régimen especial LOPNNA",
    ],
    whenToSeek: [
      "Cuando hay una disputa sobre la custodia o el régimen de convivencia de sus hijos",
      "Cuando necesita establecer o modificar la obligación de manutención",
      "Cuando desea formalizar o impugnar el reconocimiento de paternidad",
      "Cuando enfrenta un proceso ante los tribunales de protección bajo la LOPNNA",
      "Cuando un progenitor ha incurrido en conductas que podrían justificar la privación de la patria potestad",
    ],
    related: ["/derecho-familia-divorcios/", "/derecho-familia-divorcios/divorcio/", "/derecho-civil/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20custodia%20y%20LOPNNA",
  },

  // ── Poder Notarial ──────────────────────────────────────────────────────────
  {
    slug:        "/contratos-documentos/poder-notarial/",
    parentSlug:  "/contratos-documentos/",
    parentLabel: "Contratos y Documentos",
    icon:        "📜",
    title:       "Poderes Notariales",
    h1:          "Abogado de Poder Notarial en Venezuela",
    metaTitle:   "Abogado de Poder Notarial en Venezuela | Marinela Masri Kasrin",
    metaDesc:    "Abogado de poder notarial en Venezuela. Asesoría para la elaboración y formalización de poderes, documentos notariales y representación legal.",
    heroDesc:    "Preparación y asesoría en poderes notariales en Venezuela: poderes generales, especiales, de administración y disposición, nacionales e internacionales.",
    intro:       "Un poder notarial es el instrumento mediante el cual una persona (el poderdante) autoriza a otra (el apoderado) a actuar legalmente en su nombre para los actos que el poder especifique. Es uno de los documentos legales más utilizados en Venezuela, tanto por personas que necesitan que alguien gestione sus asuntos mientras están ausentes, como por quienes requieren un representante para un trámite específico.\n\nEl tipo de poder y su alcance deben ser definidos con precisión desde el inicio: un poder demasiado amplio puede generar riesgos; uno demasiado limitado puede no ser suficiente para los trámites que se necesitan. Marinela Masri puede orientarle sobre el tipo de poder adecuado para su situación y asistirle en la preparación del documento.",
    items: [
      "Poderes notariales generales",
      "Poderes especiales para actos determinados",
      "Poderes de administración y disposición",
      "Poderes para personas que se encuentran en el extranjero",
      "Gestión de apostilla para poderes de uso internacional",
      "Revocatoria de poderes notariales",
    ],
    whenToSeek: [
      "Cuando necesita que otra persona actúe legalmente en su nombre en Venezuela",
      "Cuando está fuera del país y necesita gestionar bienes, trámites o procesos en Venezuela",
      "Cuando necesita un representante para un acto específico ante una institución o entidad",
      "Cuando tiene un poder vigente que desea revocar",
      "Cuando necesita un poder con apostilla para que tenga validez en otro país",
    ],
    related: ["/contratos-documentos/", "/derecho-civil/", "/bienes-inmuebles/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20un%20poder%20notarial",
  },

  // ── Condominios ─────────────────────────────────────────────────────────────
  {
    slug:        "/bienes-inmuebles/condominios/",
    parentSlug:  "/bienes-inmuebles/",
    parentLabel: "Bienes Inmuebles",
    icon:        "🏢",
    title:       "Condominios",
    h1:          "Abogado para Condominios en Venezuela",
    metaTitle:   "Abogado para Condominios en Venezuela | Marinela Masri",
    metaDesc:    "Abogado para condominios en Venezuela. Asesoría a juntas de condominio y propietarios en cobro de cuotas, conflictos, asambleas y gestión legal.",
    heroDesc:    "Asesoría legal a juntas de condominio y propietarios en Venezuela: cobro de cuotas, conflictos entre propietarios, asambleas y derechos bajo la Ley de Propiedad Horizontal.",
    intro:       "Los condominios en Venezuela se rigen por la Ley de Propiedad Horizontal, que establece los derechos y obligaciones de propietarios, juntas administradoras y administradores. Cuando surgen conflictos por impago de cuotas, desacuerdos entre propietarios o problemas en la gestión del edificio, contar con asesoría legal permite resolver estas situaciones de forma ordenada y dentro del marco legal venezolano.\n\nMarinela Masri ofrece orientación jurídica en materia de condominio tanto para juntas administradoras que necesitan gestionar el cobro de cuotas o resolver conflictos internos, como para propietarios que tienen dudas sobre sus derechos y obligaciones dentro del condominio.",
    items: [
      "Cobro de cuotas de condominio, extrajudicial y judicial",
      "Asesoría ante propietarios que no pagan",
      "Obligaciones de los propietarios bajo la Ley de Propiedad Horizontal",
      "Conflictos entre propietarios y administradores",
      "Asesoría jurídica a juntas de condominio",
      "Convocatoria y validez de asambleas de propietarios",
      "Administración legal de condominios",
      "Derechos y obligaciones de los copropietarios",
      "Reclamos relacionados con condominios",
      "Asesoría a asociaciones de propietarios",
    ],
    whenToSeek: [
      "Cuando propietarios se niegan a pagar las cuotas de condominio",
      "Cuando hay disputas entre propietarios y la junta administradora",
      "Cuando necesita orientación sobre la convocatoria de asambleas",
      "Cuando tiene dudas sobre los derechos y obligaciones como propietario",
      "Cuando la junta requiere apoyo legal para gestionar el edificio",
    ],
    related: ["/bienes-inmuebles/", "/derecho-civil/", "/contratos-documentos/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20condominios",
  },

  // ── Legalización y Apostilla ────────────────────────────────────────────────
  {
    slug:        "/derecho-civil/legalizacion-apostilla/",
    parentSlug:  "/derecho-civil/",
    parentLabel: "Derecho Civil",
    icon:        "🌐",
    title:       "Legalización y Apostilla",
    h1:          "Legalización y Apostilla de Documentos en Venezuela",
    metaTitle:   "Legalización y Apostilla en Venezuela | Marinela Masri",
    metaDesc:    "Legalización y apostilla de documentos en Venezuela. Asesoría y gestión de documentos civiles, académicos, notariales y emitidos por SAREN.",
    heroDesc:    "Orientación y gestión de legalización y apostilla de documentos en Venezuela: documentos civiles, académicos, notariales y emitidos por SAREN para uso internacional.",
    intro:       "La apostilla y la legalización son los procedimientos que permiten que documentos venezolanos tengan validez legal en otros países. Venezuela es signataria del Convenio de La Haya sobre la Apostilla, lo que simplifica el proceso para los países miembros del convenio. Para los países no signatarios, el trámite de legalización implica pasos adicionales ante el Ministerio de Relaciones Exteriores y los organismos competentes.\n\nDependiendo del tipo de documento —civil, académico, notarial o emitido por organismos como el SAREN— el proceso puede requerir pasos previos de autenticación o verificación. Marinela Masri puede orientarle sobre el procedimiento correcto para cada tipo de documento y asistirle en la gestión.",
    items: [
      "Legalización y apostilla de documentos en Venezuela",
      "Diferencia entre legalización y apostilla: cuándo aplica cada una",
      "Apostilla electrónica en Venezuela",
      "Documentos que pueden ser legalizados o apostillados",
      "Apostilla de antecedentes penales",
      "Documentos civiles, académicos y notariales",
      "Documentos emitidos por SAREN",
      "Orientación sobre requisitos y pasos del trámite",
      "Errores frecuentes que pueden retrasar el trámite",
      "Asesoría y gestión documental",
    ],
    whenToSeek: [
      "Cuando necesita usar documentos venezolanos en el extranjero",
      "Cuando no sabe si necesita apostilla o legalización para su documento",
      "Cuando un trámite migratorio, académico o laboral requiere documentos apostillados",
      "Cuando tiene dudas sobre los pasos previos necesarios para cada tipo de documento",
    ],
    related: ["/derecho-civil/", "/contratos-documentos/", "/contratos-documentos/poder-notarial/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20legalizaci%C3%B3n%20y%20apostilla",
  },

  // ── Registro Mercantil ───────────────────────────────────────────────────────
  {
    slug:        "/derecho-mercantil/registro-mercantil/",
    parentSlug:  "/derecho-mercantil/",
    parentLabel: "Derecho Mercantil",
    icon:        "📋",
    title:       "Registro Mercantil",
    h1:          "Registro Mercantil para Empresas en Venezuela",
    metaTitle:   "Registro Mercantil para Empresas | Marinela Masri",
    metaDesc:    "Registro Mercantil para empresas en Venezuela. Asesoría legal en constitución de sociedades, actas de asamblea, actualización y trámites ante SAREN.",
    heroDesc:    "Asesoría legal para la constitución, actualización y registro de empresas ante el Registro Mercantil en Venezuela: sociedades mercantiles, actas y documentos societarios.",
    intro:       "El Registro Mercantil es el organismo que da fe pública de los actos y contratos de las empresas en Venezuela. Desde la constitución de una nueva sociedad hasta la actualización de su junta directiva, modificaciones estatutarias o disolución, cada trámite requiere documentación legal correcta y el cumplimiento de procedimientos específicos.\n\nMarinela Masri acompaña a empresas, comerciantes y emprendedores en sus trámites ante el Registro Mercantil, garantizando que los documentos societarios estén correctamente redactados, que los actos queden debidamente registrados y que su empresa opere con plena seguridad jurídica.",
    items: [
      "Constitución y registro de empresas ante el Registro Mercantil",
      "Registro Mercantil para empresas y sociedades",
      "Asesoría sobre tipos de sociedades mercantiles",
      "Redacción y protocolización de actas de asamblea",
      "Actualización y modificación del Registro Mercantil",
      "Registro de libros y documentos societarios",
      "Asesoría para empresas y sociedades mercantiles",
      "Trámites relacionados con SAREN",
      "Revisión y redacción de documentos mercantiles",
      "Asesoría legal integral para empresas",
    ],
    whenToSeek: [
      "Cuando va a constituir una nueva empresa en Venezuela",
      "Cuando necesita actualizar los datos o junta directiva de su empresa",
      "Cuando va a modificar los estatutos o el objeto social de su empresa",
      "Cuando necesita gestionar trámites ante el Registro Mercantil o SAREN",
      "Cuando necesita registrar libros o documentos societarios",
    ],
    related: ["/derecho-mercantil/", "/contratos-documentos/", "/derecho-civil/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20el%20Registro%20Mercantil",
  },
];

export const subServiceMap = Object.fromEntries(allSubServices.map(s => [s.slug, s]));

// Combined map for related-section lookups
const COMBINED_MAP: Record<string, { slug: string; icon: string; title: string }> = {
  ...Object.fromEntries(
    Object.values(serviceMap).map(s => [s.slug, { slug: s.slug, icon: s.icon, title: s.title }])
  ),
  ...Object.fromEntries(
    allSubServices.map(s => [s.slug, { slug: s.slug, icon: s.icon, title: s.title }])
  ),
};


// ─── SubServicePageLayout ─────────────────────────────────────────────────────

function SubServicePageLayout({ data }: { data: SubServiceData }) {
  usePageSEO(data.metaTitle, data.metaDesc, data.slug);

  const related = data.related
    .map(s => COMBINED_MAP[s])
    .filter(Boolean);

  return (
    <div className="w-full">

      {/* Hero strip */}
      <section className="bg-[#1a2b4a] w-full" style={{ paddingTop: 64 }}>
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px]">

          {/* 4-level Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center flex-wrap gap-1.5 mb-6">
            <Link to="/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              Inicio
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <Link to="/servicios/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              Servicios
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <Link to={data.parentSlug} className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              {data.parentLabel}
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <span className="font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] text-[12px]">{data.title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#c9a84c] flex items-center justify-center rounded-[20px] size-[56px] shrink-0">
              <span className="text-[28px] leading-none">{data.icon}</span>
            </div>
            <h1 className="font-['Instrument_Serif',serif] text-white text-[28px] sm:text-[38px] md:text-[48px] leading-[1.1]">
              {data.h1 ?? data.title}
            </h1>
          </div>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/70 text-[15px] md:text-[18px] leading-[1.6] max-w-[600px] mb-5">
            {data.heroDesc}
          </p>
          <Link
            to={data.parentSlug}
            className="inline-flex items-center gap-1.5 font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] text-[13px] hover:text-white transition-colors"
          >
            ← Volver a {data.parentLabel}
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto flex flex-col gap-4">
          {data.intro.split("\n\n").map((para, i) => (
            <p key={i} className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[15px] md:text-[17px] leading-[1.75]">
              {para}
            </p>
          ))}
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[14px] md:text-[15px] mt-1">
            <Link to="/sobre-marinela-masri/" className="text-[#c9a84c] hover:text-[#1a2b4a] transition-colors font-medium">
              Conozca más sobre la trayectoria profesional de Marinela Masri →
            </Link>
          </p>
        </div>
      </section>

      {/* Services included */}
      <section className="bg-[#f5f5f5] w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto">
          <h2 className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[24px] md:text-[32px] mb-6">
            Servicios que incluye esta área
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.items.map(item => (
              <li key={item} className="flex items-start gap-3 bg-white rounded-[10px] px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
                <span className="text-[#c9a84c] font-bold text-[15px] mt-[2px] shrink-0">✓</span>
                <span className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[14px] leading-[1.5]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#1a2b4a] w-full">
          <div className="px-6 md:px-16 py-10 md:py-14">
            <h2 className="font-['Instrument_Serif',serif] text-[#c9a84c] text-[24px] md:text-[32px] mb-6 text-center">
              Áreas relacionadas
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[700px] mx-auto">
              {related.map(r => (
                <Link
                  key={r.slug}
                  to={r.slug}
                  className="flex items-center gap-3 bg-white/10 hover:bg-[#c9a84c]/20 border border-white/20 hover:border-[#c9a84c] rounded-[12px] px-5 py-4 transition-all flex-1"
                >
                  <span className="text-[22px]">{r.icon}</span>
                  <span className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-white text-[14px] leading-[1.3]">{r.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WhyTrust */}
      <WhyTrust />

      {/* CTA */}
      <ContactCta waText={data.waText} />
    </div>
  );
}

// ─── Individual page exports ──────────────────────────────────────────────────

export function HerenciasSucesionesPage() {
  return <SubServicePageLayout data={subServiceMap["/derecho-civil/herencias-sucesiones/"]} />;
}
export function DivorcioPage() {
  return <SubServicePageLayout data={subServiceMap["/derecho-familia-divorcios/divorcio/"]} />;
}
export function CustodiaLopnnaPage() {
  return <SubServicePageLayout data={subServiceMap["/derecho-familia-divorcios/custodia-lopnna/"]} />;
}
export function PoderNotarialPage() {
  return <SubServicePageLayout data={subServiceMap["/contratos-documentos/poder-notarial/"]} />;
}
export function CondominiosPage() {
  return <SubServicePageLayout data={subServiceMap["/bienes-inmuebles/condominios/"]} />;
}
export function LegalizacionApostillaPage() {
  return <SubServicePageLayout data={subServiceMap["/derecho-civil/legalizacion-apostilla/"]} />;
}
export function RegistroMercantilPage() {
  return <SubServicePageLayout data={subServiceMap["/derecho-mercantil/registro-mercantil/"]} />;
}
