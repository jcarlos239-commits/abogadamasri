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
  metaTitle:   string;
  metaDesc:    string;
  heroDesc:    string;
  intro:       string;
  items:       string[];
  whenToSeek:  string[];
  faq:         { q: string; a: string }[];
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
    metaTitle:   "Herencias y Sucesiones en Caracas | Abogada Marinela Masri",
    metaDesc:    "Asesoría legal en herencias y sucesiones en Caracas. Gestión de trámites sucesorales ante el SENIAT, declaración sucesoral y orientación a herederos en Venezuela. Marinela Masri Kasrin.",
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
    faq: [
      {
        q: "¿Qué es una sucesión y cuándo necesito un abogado?",
        a: "La sucesión es el proceso legal por el cual los bienes de una persona fallecida se transfieren a sus herederos. Implica declaraciones ante el SENIAT y trámites en el Registro. Un abogado garantiza que el proceso sea correcto, evita errores que pueden retrasar la herencia y protege los derechos de cada heredero.",
      },
      {
        q: "¿Qué es la declaración sucesoral y ante quién se realiza?",
        a: "La declaración sucesoral es el documento mediante el cual los herederos informan al SENIAT sobre los bienes, derechos y obligaciones que forman parte de la herencia. Su presentación es un paso fundamental en el proceso sucesoral venezolano. Marinela Masri puede orientarle sobre este trámite y las gestiones que implica.",
      },
      {
        q: "¿Qué documentos se necesitan para tramitar una herencia en Venezuela?",
        a: "Para iniciar una sucesión en Venezuela generalmente se requiere el acta de defunción del causante, los documentos de identidad de los herederos, los títulos de propiedad de los bienes que integran el patrimonio y la declaración sucesoral ante el SENIAT. Dado que los trámites varían según la composición del patrimonio y los herederos, consultar con un abogado desde el inicio evita errores costosos y demoras.",
      },
      {
        q: "¿Qué ocurre cuando hay desacuerdo entre los herederos?",
        a: "Si los herederos no llegan a un acuerdo sobre la distribución del patrimonio, puede iniciarse un proceso de partición judicial. Marinela Masri puede asesorarle tanto en la negociación de acuerdos extrajudiciales entre herederos como en los procesos de partición, buscando la solución que mejor proteja sus intereses.",
      },
      {
        q: "¿Cuánto puede tardar un proceso sucesoral en Venezuela?",
        a: "Los plazos varían significativamente según la complejidad del patrimonio, el número de herederos y si existe acuerdo entre ellos. Un proceso sin conflictos puede resolverse en meses; uno que requiera partición judicial puede extenderse considerablemente más. Marinela Masri puede darle una estimación más concreta según las circunstancias de su caso.",
      },
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
    metaTitle:   "Divorcio en Venezuela | Abogada Marinela Masri Kasrin",
    metaDesc:    "Asesoría legal para procesos de divorcio en Venezuela. Divorcio contencioso, divorcio por desafecto (Sentencia 1070 TSJ) y separación de cuerpos. Abogada Marinela Masri en Caracas.",
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
    faq: [
      {
        q: "¿Cuáles son los tipos de divorcio en Venezuela?",
        a: "Los principales son el divorcio contencioso (por causales establecidas en el Código Civil) y el divorcio por desafecto (reconocido por la Sentencia 1070 del TSJ), que permite disolver el matrimonio por pérdida del afecto marital, sin necesidad de demostrar causas específicas.",
      },
      {
        q: "¿Qué es el divorcio por desafecto?",
        a: "Es una modalidad reconocida por el Tribunal Supremo de Justicia (Sentencia 1070) que permite a cualquiera de los cónyuges solicitar el divorcio alegando la pérdida del afecto conyugal. No requiere demostrar culpa del otro cónyuge, lo que simplifica el proceso en muchos casos.",
      },
      {
        q: "¿Cuánto tiempo tarda un proceso de divorcio en Venezuela?",
        a: "Depende del tipo de divorcio y de si existe acuerdo entre las partes. Un divorcio por desafecto puede tramitarse en semanas si no hay bienes en disputa ni hijos menores en conflicto. Un divorcio contencioso con bienes en disputa puede extenderse varios meses. La voluntad de ambas partes para llegar a acuerdos es el factor que más influye en la duración.",
      },
      {
        q: "¿Puedo iniciar un proceso de divorcio si mi cónyuge está en el extranjero?",
        a: "Sí, es posible. El proceso puede iniciarse ante los tribunales venezolanos competentes con las debidas notificaciones. Si el cónyuge en el extranjero cuenta con un poder notarial vigente, el proceso puede agilizarse considerablemente. Marinela Masri puede asesorarle sobre los pasos específicos según la situación de su caso.",
      },
      {
        q: "¿Qué ocurre con los bienes conyugales al divorciarse?",
        a: "La distribución de los bienes adquiridos durante el matrimonio se realiza mediante la partición de bienes conyugales, que puede acordarse extrajudicialmente entre las partes o resolverse judicialmente si no hay acuerdo. Marinela Masri puede orientarle sobre este proceso y la forma de proteger sus intereses en la distribución.",
      },
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
    metaTitle:   "Custodia y LOPNNA en Caracas | Abogada Marinela Masri",
    metaDesc:    "Asesoría legal en custodia, régimen de convivencia familiar, obligación de manutención y asuntos de LOPNNA en Caracas. Abogada Marinela Masri Kasrin.",
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
    faq: [
      {
        q: "¿Qué es el régimen de convivencia familiar y cómo se establece?",
        a: "El régimen de convivencia familiar regula el tiempo que cada progenitor pasa con sus hijos cuando los padres no conviven. Puede acordarse entre las partes o establecerse judicialmente ante los tribunales de protección. Su objetivo principal es proteger el interés superior del menor y garantizar el vínculo con ambos padres cuando sea posible.",
      },
      {
        q: "¿Qué es la patria potestad y cuándo puede privarse?",
        a: "La patria potestad es el conjunto de derechos y obligaciones de los padres sobre sus hijos menores. Puede ser privada judicialmente cuando el progenitor incurre en conductas que perjudican al niño, según las causales establecidas en el Código Civil y la LOPNNA.",
      },
      {
        q: "¿Cómo se determina la obligación de manutención?",
        a: "La obligación de manutención (pensión alimentaria) se determina judicialmente considerando las necesidades del menor y la capacidad económica del obligado. Se tramita bajo el régimen especial de la LOPNNA y puede modificarse si cambian las circunstancias de las partes.",
      },
      {
        q: "¿Qué es la LOPNNA?",
        a: "La Ley Orgánica para la Protección del Niño, Niña y Adolescente (LOPNNA) es la normativa que rige todos los asuntos legales relacionados con menores de edad en Venezuela, incluyendo custodia, manutención, régimen de convivencia y protección de derechos.",
      },
      {
        q: "¿Puede un proceso de custodia tramitarse independientemente del divorcio?",
        a: "Sí. Los procesos relativos a la custodia, el régimen de convivencia y la manutención de los hijos pueden iniciarse de forma independiente, ya sea que los padres estén casados, en proceso de divorcio o nunca hayan estado casados. Lo determinante es la necesidad de regular la relación legal entre los progenitores y el menor.",
      },
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
    metaTitle:   "Poder Notarial en Venezuela | Abogada Marinela Masri Kasrin",
    metaDesc:    "Asesoría y preparación de poderes notariales en Venezuela. Poderes generales, especiales, de administración y disposición, con apostilla para uso internacional. Marinela Masri Kasrin en Caracas.",
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
    faq: [
      {
        q: "¿Para qué sirve un poder notarial y cuáles son sus tipos?",
        a: "Un poder notarial permite que otra persona actúe legalmente en su nombre. Puede ser general (para múltiples actos), especial (para un acto específico) o de administración y disposición (para gestionar bienes). Marinela Masri puede asesorarle sobre cuál es el más adecuado para su situación.",
      },
      {
        q: "¿Qué diferencia hay entre un poder general y un poder especial?",
        a: "Un poder general faculta al apoderado para realizar una amplia variedad de actos en nombre del poderdante. Un poder especial está limitado a uno o varios actos concretos y precisamente determinados. La elección entre uno y otro depende del propósito específico y del nivel de control que desea mantener el poderdante.",
      },
      {
        q: "¿Qué es la apostilla y cuándo se necesita?",
        a: "La apostilla es una certificación que otorga validez internacional a documentos públicos venezolanos, de acuerdo con el Convenio de La Haya. Se necesita cuando un documento emitido en Venezuela debe surtir efectos legales en otro país. El trámite en Venezuela se realiza ante el Ministerio de Relaciones Exteriores.",
      },
      {
        q: "¿Puedo otorgar un poder notarial si me encuentro fuera de Venezuela?",
        a: "Sí, es posible gestionar poderes para personas en el extranjero mediante el proceso de apostilla y los registros correspondientes, tanto dentro de Venezuela como en otros países, con la debida coordinación notarial e internacional.",
      },
      {
        q: "¿Cómo se revoca un poder notarial?",
        a: "La revocatoria de un poder notarial debe realizarse formalmente, generalmente ante la misma Notaría donde se otorgó el poder original, y notificarse al apoderado. Un poder no revocado formalmente mantiene su vigencia, lo cual puede generar riesgos si se quiere limitar la actuación del apoderado. Marinela Masri puede orientarle sobre el proceso correcto.",
      },
    ],
    related: ["/contratos-documentos/", "/derecho-civil/", "/bienes-inmuebles/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20un%20poder%20notarial",
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
              {data.title}
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
