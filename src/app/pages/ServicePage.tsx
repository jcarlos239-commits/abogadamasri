import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { usePageSEO, WA_BASE, SERVICE_ROUTES, MsgIcon, ContactCta, WhyTrust } from "../shared";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceData {
  slug:        string;
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

// ─── Service data ─────────────────────────────────────────────────────────────

const allServices: ServiceData[] = [
  {
    slug:      "/derecho-civil",
    icon:      "⚖️",
    title:     "Derecho Civil",
    metaTitle: "Abogada de Derecho Civil en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Asesoría legal civil en Caracas y toda Venezuela. Sucesiones, contratos, poderes notariales, desalojos y litigios civiles. Más de 25 años de experiencia.",
    heroDesc:  "Asesoría y representación integral en materia civil: contratos, sucesiones, trámites registrales y litigios civiles en Venezuela.",
    intro:     "El Derecho Civil regula las relaciones entre personas en su vida cotidiana: la propiedad, los contratos, las herencias, la familia y los conflictos entre particulares. Contar con una abogada civil de confianza le protege ante errores costosos y garantiza que sus derechos estén respaldados desde el primer momento.",
    items: [
      "Asesoría legal en materia civil, vía online y presencial",
      "Trámites ante Registros y Notarías",
      "Gestión de Sucesiones y trámites ante el SENIAT",
      "Demandas y litigios: divorcios, partición de bienes, presunciones de ausencia y de muerte",
      "Desalojos de locales comerciales y entrega material de bienes inmuebles",
      "Títulos Supletorios y Prescripciones adquisitivas",
      "Acuerdos extrajudiciales",
      "Poderes amplios, de administración y disposición — nacionales e internacionales con apostilla",
    ],
    whenToSeek: [
      "Cuando necesita tramitar una herencia o sucesión",
      "Cuando tiene un conflicto sobre un contrato o bien inmueble",
      "Cuando necesita gestionar o revocar un poder notarial",
      "Cuando enfrenta un proceso judicial civil",
      "Cuando requiere trámites ante Registros, Notarías o el SENIAT",
    ],
    faq: [
      { q: "¿Qué es una sucesión y cuándo necesito un abogado?", a: "La sucesión es el proceso legal por el cual los bienes de una persona fallecida se transfieren a sus herederos. Implica declaraciones ante el SENIAT y trámites en el Registro. Un abogado garantiza que el proceso sea correcto, evita errores que pueden retrasar la herencia y protege los derechos de cada heredero." },
      { q: "¿Qué es un Título Supletorio?", a: "Es un documento judicial que acredita la propiedad o posesión de una mejora o bienhechría sobre un terreno. Se tramita ante los tribunales civiles y requiere la asistencia de un abogado para presentar correctamente las pruebas y el expediente." },
      { q: "¿Qué es la prescripción adquisitiva?", a: "Es el mecanismo legal por el cual una persona puede adquirir la propiedad de un bien al haberlo poseído de forma pública, pacífica y continua durante el tiempo establecido por la ley venezolana. El proceso requiere demanda judicial y representación legal." },
      { q: "¿Se puede resolver un conflicto civil sin ir a juicio?", a: "Sí. Muchos conflictos civiles se resuelven mediante acuerdos extrajudiciales, lo cual ahorra tiempo y costos considerables. Marinela Masri puede asesorarle en la negociación de estos acuerdos garantizando que sus intereses queden debidamente protegidos." },
      { q: "¿Puedo tramitar poderes para personas fuera de Venezuela?", a: "Sí. Es posible gestionar poderes para personas en el extranjero con apostilla y los registros correspondientes, tanto dentro de Venezuela como en cualquier país del mundo, con la debida gestión notarial e internacional." },
    ],
    related: ["/bienes-inmuebles", "/contratos-documentos", "/derecho-familia-divorcios"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20Civil",
  },
  {
    slug:      "/derecho-mercantil",
    icon:      "🏢",
    title:     "Derecho Mercantil",
    metaTitle: "Abogada Mercantil en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Asesoría jurídica para empresas en Caracas. Constitución de empresas, actas de asamblea, actualización de C.A., disolución y contratos comerciales en Venezuela.",
    heroDesc:  "Orientación jurídica completa para empresas y comerciantes: constitución, actualización y gestión legal de su empresa en Venezuela.",
    intro:     "El Derecho Mercantil regula la actividad de las empresas, los comerciantes y las relaciones comerciales. Una empresa correctamente constituida y actualizada opera con seguridad jurídica. Marinela Masri acompaña a empresarios y emprendedores en cada etapa de la vida de su empresa.",
    items: [
      "Asesoría legal en materia mercantil, online y presencial",
      "Creación de Compañías Anónimas (C.A.)",
      "Actualización de empresas: actas de asamblea, cambios de junta directiva",
      "Disolución y liquidación de empresas",
      "Venta y transferencia de acciones",
      "Actualización de Juntas Administrativas",
      "Inventarios, balances y estados financieros (con contadores públicos colegiados)",
      "Gestión integral de trámites ante el Registro Mercantil",
    ],
    whenToSeek: [
      "Cuando va a constituir una empresa o sociedad",
      "Cuando necesita actualizar los datos o junta directiva de su empresa",
      "Cuando desea vender o transferir acciones",
      "Cuando enfrenta disputas societarias o con terceros",
      "Cuando necesita disolver o liquidar una empresa",
    ],
    faq: [
      { q: "¿Qué tipo de empresa puedo constituir en Venezuela?", a: "La forma más común para negocios medianos y grandes es la Compañía Anónima (C.A.). Su constitución requiere redactar el acta constitutiva, inscribirla en el Registro Mercantil correspondiente y publicar un aviso en prensa." },
      { q: "¿Qué es un acta de asamblea y cuándo se requiere?", a: "Es el documento que registra las decisiones tomadas por los accionistas de una empresa en una reunión formal. Se requiere para cambios de junta directiva, modificaciones del objeto social, aumento de capital, y otros actos que afecten la estructura de la empresa." },
      { q: "¿Con qué frecuencia debe actualizarse una empresa?", a: "Las empresas deben celebrar asambleas ordinarias al menos una vez al año y actualizar sus datos en el Registro Mercantil cada vez que ocurran cambios en su composición, junta directiva u objeto social. Mantenerse al día evita sanciones y problemas operativos." },
      { q: "¿Cómo se transfieren acciones en una C.A.?", a: "La transferencia de acciones requiere modificar el libro de accionistas, redactar el acta correspondiente e inscribirla en el Registro Mercantil. Un abogado garantiza que el proceso sea válido y no genere disputas futuras entre los socios." },
      { q: "¿Cuándo debo consultar a un abogado para mi empresa?", a: "Siempre que realice cambios estructurales, firme contratos importantes, enfrente disputas comerciales, o necesite actualizar documentos legales. Una revisión periódica de la situación jurídica de su empresa previene problemas mayores." },
    ],
    related: ["/contratos-documentos", "/derecho-laboral", "/derecho-civil"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20Mercantil",
  },
  {
    slug:      "/derecho-laboral",
    icon:      "👔",
    title:     "Derecho Laboral",
    metaTitle: "Abogada Laboral en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Asesoría laboral en Caracas. Prestaciones sociales, calificación de despido, acuerdos extrajudiciales laborales. Defensa de trabajadores y empleadores en Venezuela.",
    heroDesc:  "Defensa y asesoría en materia laboral para trabajadores y empleadores: prestaciones, calificaciones de despido y acuerdos laborales.",
    intro:     "El Derecho Laboral regula la relación entre trabajadores y empleadores. Tanto si usted es un trabajador que desea conocer sus derechos como si es un empleador que necesita orientación legal, contar con una abogada laboral es fundamental para resolver situaciones de manera justa y dentro del marco legal venezolano.",
    items: [
      "Asesoría legal en materia laboral, online y presencial",
      "Calificación de despido ante los tribunales laborales",
      "Demanda de prestaciones sociales",
      "Representación en procesos laborales",
      "Acuerdos extrajudiciales entre patrono y trabajador",
      "Orientación sobre derechos laborales bajo la LOTTT",
    ],
    whenToSeek: [
      "Cuando fue despedido y quiere conocer sus derechos",
      "Cuando su empleador no le ha cancelado las prestaciones sociales",
      "Cuando como empleador enfrenta una demanda o reclamación laboral",
      "Cuando desea llegar a un acuerdo extrajudicial con trabajadores o empleador",
      "Cuando necesita orientación sobre obligaciones laborales de su empresa",
    ],
    faq: [
      { q: "¿Qué es la calificación de despido?", a: "Es el procedimiento judicial mediante el cual un trabajador impugna su despido ante los tribunales laborales. El empleador debe demostrar que existía una causa justificada para la terminación de la relación laboral. Si no puede hacerlo, el tribunal puede ordenar el reenganche o el pago de indemnizaciones adicionales." },
      { q: "¿Cuándo prescriben las prestaciones sociales?", a: "De acuerdo con la LOTTT, la acción para reclamar prestaciones sociales y otros conceptos laborales tiene un plazo de prescripción que comienza a correr desde la terminación de la relación laboral. Es importante actuar a tiempo para no perder el derecho a reclamar." },
      { q: "¿Qué diferencia hay entre un despido justificado e injustificado?", a: "El despido justificado ocurre cuando el empleador puede demostrar una causa legal específica (conducta del trabajador). El despido injustificado ocurre sin causa legal válida y genera la obligación de pagar indemnizaciones adicionales al trabajador según la LOTTT." },
      { q: "¿Puedo llegar a un acuerdo con mi empleador sin ir a juicio?", a: "Sí. Los acuerdos extrajudiciales laborales son posibles y, en muchos casos, la mejor opción para ambas partes, ahorrando tiempo y costos. Marinela Masri puede asesorarle y redactar el acuerdo para que tenga validez legal y proteja sus intereses." },
      { q: "¿Qué es la LOTTT?", a: "La Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT) es la normativa laboral vigente en Venezuela. Establece derechos, obligaciones, prestaciones, jornadas y procedimientos para la relación laboral en el país." },
    ],
    related: ["/contratos-documentos", "/derecho-mercantil", "/derecho-civil"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20Laboral",
  },
  {
    slug:      "/derecho-familia-divorcios",
    icon:      "💍",
    title:     "Divorcios y Familia",
    metaTitle: "Abogada de Familia y Divorcios en Caracas | Marinela Masri",
    metaDesc:  "Abogada de familia y divorcios en Caracas. Divorcios, custodia, manutención, patria potestad y régimen LOPNNA. Asesoría familiar con profesionalismo y empatía.",
    heroDesc:  "Acompañamiento legal integral en divorcios, custodia, manutención y todos los asuntos de familia bajo el régimen venezolano.",
    intro:     "Los asuntos de familia son de los más delicados que puede enfrentar una persona. Marinela Masri ofrece asesoría legal en materia familiar con profesionalismo, empatía y discreción, buscando siempre la solución que mejor proteja los derechos de sus clientes y, especialmente, el bienestar de los niños, niñas y adolescentes involucrados.",
    items: [
      "Divorcios contenciosos",
      "Divorcios por desafecto (Sentencia 1070 TSJ)",
      "Separación de cuerpos",
      "Partición de bienes",
      "Acción merodeclarativa",
      "Privación de patria potestad",
      "Régimen de convivencia familiar",
      "Régimen de obligación de manutención",
      "Asuntos bajo el régimen especial LOPNNA",
    ],
    whenToSeek: [
      "Cuando está considerando separarse o divorciarse",
      "Cuando hay disputas sobre la custodia o manutención de sus hijos",
      "Cuando necesita establecer o modificar un régimen de convivencia",
      "Cuando enfrenta un proceso ante los tribunales de protección (LOPNNA)",
      "Cuando necesita resolver la partición de bienes conyugales",
    ],
    faq: [
      { q: "¿Cuáles son los tipos de divorcio en Venezuela?", a: "Los principales son el divorcio contencioso (por causales establecidas en el Código Civil) y el divorcio por desafecto (reconocido por la Sentencia 1070 del TSJ), que permite disolver el matrimonio por pérdida del afecto marital, sin necesidad de demostrar causas específicas." },
      { q: "¿Qué es el divorcio por desafecto?", a: "Es una modalidad reconocida por el Tribunal Supremo de Justicia (Sentencia 1070) que permite a cualquiera de los cónyuges solicitar el divorcio alegando la pérdida del afecto conyugal. No requiere demostrar culpa del otro cónyuge, lo que simplifica el proceso en muchos casos." },
      { q: "¿Qué es la patria potestad y cuándo puede privarse?", a: "La patria potestad es el conjunto de derechos y obligaciones de los padres sobre sus hijos menores. Puede ser privada judicialmente cuando el progenitor incurre en conductas que perjudican al niño, según las causales establecidas en el Código Civil y la LOPNNA." },
      { q: "¿Cómo se determina la obligación de manutención?", a: "La obligación de manutención (pensión alimentaria) se determina judicialmente considerando las necesidades del menor y la capacidad económica del obligado. Se tramita bajo el régimen especial de la LOPNNA y puede modificarse si cambian las circunstancias." },
      { q: "¿Qué es la LOPNNA?", a: "La Ley Orgánica para la Protección del Niño, Niña y Adolescente (LOPNNA) es la normativa que rige todos los asuntos legales relacionados con menores de edad en Venezuela, incluyendo custodia, manutención, régimen de convivencia y protección de derechos." },
    ],
    related: ["/derecho-civil", "/contratos-documentos", "/bienes-inmuebles"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20de%20Familia",
  },
  {
    slug:      "/bienes-inmuebles",
    icon:      "🏠",
    title:     "Bienes Inmuebles",
    metaTitle: "Abogada Bienes Inmuebles en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Asesoría legal inmobiliaria en Caracas. Compraventa, arrendamientos, condominio, desalojos. Experta en Ley de Propiedad Horizontal. Más de 25 años en Venezuela.",
    heroDesc:  "Asesoría legal en compraventa, arrendamientos, condominio y todos los asuntos relacionados con propiedades inmuebles en Venezuela.",
    intro:     "Las transacciones y conflictos inmobiliarios requieren asesoría legal especializada. Marinela Masri ofrece asesoría integral a propietarios, compradores, arrendatarios y juntas de condominio, garantizando que sus derechos sobre los inmuebles estén completamente protegidos.",
    items: [
      "Asesoría a juntas de condominio y asociaciones civiles",
      "Cobranza judicial y extrajudicial de deudas de condominio",
      "Compraventa de inmuebles y revisión de documentos de propiedad",
      "Arrendamientos, desalojos y resolución de conflictos inmobiliarios",
      "Asesoría sobre la Ley de Propiedad Horizontal",
      "Demandas de cobro por morosidad en condominio",
      "Redacción de documentos de condominio apegados a la Ley",
      "Redacción de reglamentos de condominio",
      "Asesoría en materia de personal de mantenimiento de condominios",
    ],
    whenToSeek: [
      "Cuando va a comprar, vender o arrendar un inmueble",
      "Cuando hay deudas de condominio o conflictos con la junta",
      "Cuando necesita redactar o revisar un contrato de arrendamiento",
      "Cuando enfrenta un proceso de desalojo como propietario o arrendatario",
      "Cuando necesita revisar los documentos de propiedad de un inmueble",
    ],
    faq: [
      { q: "¿Qué verificaciones legales debo hacer antes de comprar un inmueble?", a: "Debe verificar que el vendedor sea el legítimo propietario, que el inmueble no tenga hipotecas, embargos o cargas, y que los documentos de propiedad estén correctamente registrados. Un abogado puede revisar todos estos aspectos y evitar que adquiera un inmueble con problemas legales." },
      { q: "¿Qué es la Ley de Propiedad Horizontal?", a: "Es la ley que regula la propiedad compartida en edificios o conjuntos residenciales en Venezuela. Establece los derechos y obligaciones de los propietarios respecto a las áreas comunes, el pago de cuotas de condominio y las normas de convivencia." },
      { q: "¿Qué puedo hacer si un propietario no paga las cuotas de condominio?", a: "Existen mecanismos de cobranza extrajudicial (notificaciones, acuerdos de pago) y judicial (demanda de cobro de bolívares) para recuperar las deudas de condominio. Marinela Masri asesora a juntas de condominio en ambos tipos de procedimientos." },
      { q: "¿Qué es un documento de condominio?", a: "Es el documento fundamental que regula la vida en comunidad en un edificio o conjunto residencial. Establece las áreas privadas y comunes, las cuotas de participación de cada propietario y las normas básicas de convivencia." },
      { q: "¿Cuándo es obligatorio registrar un contrato de arrendamiento?", a: "En Venezuela, los contratos de arrendamiento de vivienda deben notariarse para tener plena validez entre las partes. Para mayor seguridad jurídica y oponibilidad frente a terceros, el registro es recomendable. Un abogado puede orientarle sobre el instrumento adecuado según su caso." },
    ],
    related: ["/derecho-civil", "/contratos-documentos", "/derecho-mercantil"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20Bienes%20Inmuebles",
  },
  {
    slug:      "/contratos-documentos",
    icon:      "📄",
    title:     "Contratos y Documentos",
    metaTitle: "Abogada Contratos y Documentos en Caracas | Marinela Masri",
    metaDesc:  "Redacción y revisión de contratos en Caracas. Contratos de arrendamiento, trabajo, compraventa. Poderes notariales y documentos legales en Venezuela.",
    heroDesc:  "Redacción, revisión y autenticación de contratos, poderes notariales y documentos legales de todo tipo.",
    intro:     "Un contrato mal redactado o un documento con errores puede generar conflictos costosos. Marinela Masri le ayuda a redactar, revisar y autenticar todos sus documentos legales con precisión, protegiéndole antes de que firme cualquier compromiso.",
    items: [
      "Contrato de arrendamiento comercial",
      "Contrato de arrendamiento para vivienda",
      "Contratos de cualquier tipo entre particulares o empresas",
      "Contrato de trabajo",
      "Documentos de condominio",
      "Reglamento de condominio",
      "Documento de compraventa de viviendas",
      "Documento de compraventa de vehículos",
      "Documentos de solicitudes a entes administrativos del Estado",
      "Poderes notariales (generales, especiales, de administración y disposición)",
    ],
    whenToSeek: [
      "Cuando necesita revisar un contrato antes de firmarlo",
      "Cuando va a arrendar, comprar o vender un bien",
      "Cuando necesita otorgar o revocar un poder notarial",
      "Cuando necesita documentos para trámites administrativos o ante el Estado",
      "Cuando quiere redactar un acuerdo o convenio entre particulares",
    ],
    faq: [
      { q: "¿Por qué es importante revisar un contrato con un abogado antes de firmarlo?", a: "Un abogado identifica cláusulas abusivas, ambigüedades o términos que podrían resultar perjudiciales. Esta revisión previa evita conflictos futuros, protege sus intereses y le da claridad sobre los compromisos que está asumiendo." },
      { q: "¿Qué diferencia hay entre un contrato autenticado y uno registrado?", a: "La autenticación ante Notaría verifica la identidad de los firmantes y la fecha del acto. El registro ante el Registro Público otorga fecha cierta y oponibilidad frente a terceros. La importancia de cada uno depende del tipo de bien o acto jurídico involucrado." },
      { q: "¿Qué debe incluir un contrato de arrendamiento?", a: "Como mínimo debe incluir: identificación de las partes, descripción del inmueble, canon de arrendamiento, duración, condiciones de renovación y cláusulas sobre incumplimiento. Un contrato bien redactado protege tanto al arrendador como al arrendatario." },
      { q: "¿Para qué sirve un poder notarial y cuáles son sus tipos?", a: "Un poder notarial permite que otra persona actúe legalmente en su nombre. Puede ser general (para múltiples actos), especial (para un acto específico) o de administración y disposición (para gestionar bienes). Marinela Masri puede asesorarle sobre cuál es el más adecuado para su situación." },
      { q: "¿Puedo otorgar poderes para personas que están fuera de Venezuela?", a: "Sí. Es posible gestionar poderes para personas en el extranjero mediante el proceso de apostilla y los registros correspondientes, tanto dentro de Venezuela como en otros países, con la debida coordinación notarial e internacional." },
    ],
    related: ["/derecho-civil", "/derecho-mercantil", "/bienes-inmuebles"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20Contratos%20y%20Documentos",
  },
];

const serviceMap = Object.fromEntries(allServices.map(s => [s.slug, s]));

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FaqSection({ faq }: { faq: ServiceData["faq"] }) {
  return (
    <section className="bg-white w-full">
      <div className="py-12 md:py-16 px-6 md:px-16 max-w-[860px] mx-auto">
        <h2 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[26px] md:text-[36px] mb-8">
          Preguntas Frecuentes
        </h2>
        <Accordion.Root type="single" collapsible className="flex flex-col gap-0">
          {faq.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`faq-${i}`}
              className="border-b border-[#e5e7eb] last:border-b-0"
            >
              <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-left gap-4 group">
                <span className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#1a2b4a] text-[14px] md:text-[16px] leading-[1.4]">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-[#c9a84c] transition-transform duration-200 group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-none data-[state=closed]:animate-none">
                <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[14px] md:text-[15px] leading-[1.7] pb-5">
                  {item.a}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

// ─── ServicePageLayout ────────────────────────────────────────────────────────

function ServicePageLayout({ data }: { data: ServiceData }) {
  usePageSEO(data.metaTitle, data.metaDesc, data.slug);

  const related = data.related
    .map(s => serviceMap[s])
    .filter(Boolean);

  return (
    <div className="w-full">

      {/* Hero strip */}
      <section className="bg-[#1a2b4a] w-full" style={{ paddingTop: 64 }}>
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px]">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center gap-2 mb-6">
            <Link to="/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              Inicio
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <Link to="/servicios/" className="font-['Schibsted_Grotesk',sans-serif] text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
              Servicios
            </Link>
            <span className="text-white/30 text-[12px]">/</span>
            <span className="font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] text-[12px]">{data.title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#c9a84c] flex items-center justify-center rounded-[20px] size-[56px] shrink-0">
              <span className="text-[28px] leading-none">{data.icon}</span>
            </div>
            <h1 className="font-['Instrument_Serif',serif] text-white text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1]">
              {data.title}
            </h1>
          </div>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/70 text-[15px] md:text-[18px] leading-[1.6] max-w-[600px]">
            {data.heroDesc}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto">
          <p className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[15px] md:text-[17px] leading-[1.75]">
            {data.intro}
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

      {/* When to seek advice */}
      <section className="bg-white w-full">
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto">
          <h2 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[24px] md:text-[32px] mb-6">
            ¿Cuándo consultar a un abogado?
          </h2>
          <div className="flex flex-col gap-3">
            {data.whenToSeek.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-[#1a2b4a] rounded-full size-6 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#c9a84c] text-[11px] font-bold">{i + 1}</span>
                </div>
                <p className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[14px] md:text-[15px] leading-[1.6]">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faq={data.faq} />

      {/* Related services */}
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

export function DerechoCivilPage()            { return <ServicePageLayout data={serviceMap["/derecho-civil"]} />; }
export function DerechoMercantilPage()        { return <ServicePageLayout data={serviceMap["/derecho-mercantil"]} />; }
export function DerechoLaboralPage()          { return <ServicePageLayout data={serviceMap["/derecho-laboral"]} />; }
export function DerechoFamiliaPage()          { return <ServicePageLayout data={serviceMap["/derecho-familia-divorcios"]} />; }
export function BienesInmueblesPage()         { return <ServicePageLayout data={serviceMap["/bienes-inmuebles"]} />; }
export function ContratosDocumentosPage()     { return <ServicePageLayout data={serviceMap["/contratos-documentos"]} />; }
