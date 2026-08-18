import { Link } from "react-router";
import { usePageSEO, WA_BASE, SERVICE_ROUTES, MsgIcon, ContactCta, WhyTrust } from "../shared";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceData {
  slug:       string;
  icon:       string;
  title:      string;
  h1?:        string;
  metaTitle:  string;
  metaDesc:   string;
  heroDesc:   string;
  intro:      string;
  items:      string[];
  whenToSeek: string[];
  related:    string[];
  waText:     string;
  subTopics?: { slug: string; icon: string; label: string; desc: string }[];
}

// ─── Service data ─────────────────────────────────────────────────────────────

const allServices: ServiceData[] = [
  {
    slug:      "/derecho-civil/",
    icon:      "⚖️",
    title:     "Derecho Civil",
    h1:        "Abogado de Derecho Civil en Caracas",
    metaTitle: "Abogado de Derecho Civil en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Abogado civil en Caracas, Venezuela. Marinela Masri Kasrin ofrece asesoría legal en asuntos de derecho civil, obligaciones, sucesiones y herencias.",
    heroDesc:  "Asesoría y representación en materia civil en Caracas: sucesiones, contratos, trámites registrales, poderes notariales y litigios civiles en Venezuela.",
    intro:     "El Derecho Civil regula las relaciones entre personas en su vida cotidiana: la propiedad, los contratos, las herencias, la familia y los conflictos entre particulares. Contar con una abogada civil de confianza le protege ante errores costosos y garantiza que sus derechos estén respaldados desde el primer momento.\n\nEn la práctica civil venezolana, cada trámite —desde una sucesión ante el SENIAT hasta la autenticación de un poder notarial— requiere pasos específicos y documentación precisa. Con consultas presenciales en Caracas y atención en línea para todo el país, Marinela Masri acompaña a sus clientes desde la primera gestión hasta la resolución final del asunto.",
    items: [
      "Asesoría legal en materia civil, vía online y presencial",
      "Trámites ante Registros y Notarías en Caracas y el interior del país",
      "Gestión de Sucesiones y trámites ante el SENIAT",
      "Demandas y litigios: partición de bienes, presunciones de ausencia y de muerte",
      "Desalojos de locales comerciales y entrega material de bienes inmuebles",
      "Títulos Supletorios y Prescripciones adquisitivas",
      "Acuerdos extrajudiciales entre particulares",
      "Poderes amplios, de administración y disposición — nacionales e internacionales con apostilla",
    ],
    whenToSeek: [
      "Cuando necesita tramitar una herencia o sucesión",
      "Cuando tiene un conflicto sobre un contrato o bien inmueble",
      "Cuando necesita gestionar o revocar un poder notarial",
      "Cuando enfrenta un proceso judicial civil",
      "Cuando requiere trámites ante Registros, Notarías o el SENIAT",
      "Cuando necesita autenticar un documento ante Notaría o Registro Público",
      "Cuando un familiar ha fallecido y los bienes deben ser transferidos a los herederos",
    ],
    related:   ["/bienes-inmuebles/", "/contratos-documentos/", "/derecho-familia-divorcios/"],
    waText:    "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20Civil",
    subTopics: [
      {
        slug:  "/derecho-civil/herencias-sucesiones/",
        icon:  "🏛️",
        label: "Herencias y Sucesiones",
        desc:  "Gestión de trámites sucesorales ante el SENIAT, declaración sucesoral y orientación a herederos en Venezuela.",
      },
      {
        slug:  "/contratos-documentos/poder-notarial/",
        icon:  "📜",
        label: "Poderes Notariales",
        desc:  "Poderes generales, especiales, de administración y disposición, con apostilla para uso internacional.",
      },
      {
        slug:  "/derecho-civil/legalizacion-apostilla/",
        icon:  "🌐",
        label: "Legalización y Apostilla",
        desc:  "Orientación para legalizar o apostillar documentos venezolanos para uso en el extranjero.",
      },
    ],
  },
  {
    slug:      "/derecho-mercantil/",
    icon:      "🏢",
    title:     "Derecho Mercantil",
    h1:        "Abogado Mercantil en Caracas",
    metaTitle: "Abogado Mercantil en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Abogado mercantil en Caracas, Venezuela. Asesoría y representación legal para empresas, sociedades mercantiles, contratos y asuntos de derecho comercial.",
    heroDesc:  "Orientación jurídica para empresas y comerciantes en Caracas: constitución, actualización y gestión legal de su empresa ante el Registro Mercantil.",
    intro:     "El Derecho Mercantil regula la actividad de las empresas, los comerciantes y las relaciones comerciales. Una empresa correctamente constituida y actualizada opera con seguridad jurídica. Marinela Masri acompaña a empresarios y emprendedores en cada etapa de la vida de su empresa.\n\nDesde la creación de una Compañía Anónima hasta la actualización de su junta directiva o la disolución de la sociedad, cada paso ante el Registro Mercantil requiere documentación legal correcta y oportuna. Marinela Masri gestiona estos trámites con precisión, evitando demoras y complicaciones que puedan afectar la operación de su empresa.",
    items: [
      "Asesoría legal en materia mercantil, online y presencial",
      "Creación de Compañías Anónimas (C.A.) ante el Registro Mercantil",
      "Actualización de empresas: actas de asamblea, cambios de junta directiva",
      "Disolución y liquidación de empresas",
      "Venta y transferencia de acciones",
      "Actualización de Juntas Administrativas",
      "Inventarios, balances y estados financieros (con contadores públicos colegiados)",
      "Gestión integral de trámites ante el Registro Mercantil de Caracas",
    ],
    whenToSeek: [
      "Cuando va a constituir una empresa o sociedad en Venezuela",
      "Cuando necesita actualizar los datos o junta directiva de su empresa",
      "Cuando desea vender o transferir acciones",
      "Cuando enfrenta disputas societarias o con terceros",
      "Cuando necesita disolver o liquidar una empresa",
      "Cuando necesita revisar contratos comerciales con clientes o proveedores",
    ],
    related: ["/contratos-documentos/", "/derecho-laboral/", "/derecho-civil/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20Mercantil",
    subTopics: [
      {
        slug:  "/derecho-mercantil/registro-mercantil/",
        icon:  "📋",
        label: "Registro Mercantil",
        desc:  "Constitución de empresas, actualización de datos societarios y trámites ante el Registro Mercantil.",
      },
    ],
  },
  {
    slug:      "/derecho-laboral/",
    icon:      "👔",
    title:     "Derecho Laboral",
    h1:        "Abogado Laboral en Caracas",
    metaTitle: "Abogado Laboral en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Abogado laboral en Caracas, Venezuela. Asesoría y representación en despidos, prestaciones sociales, contratos de trabajo, reclamos y conflictos laborales.",
    heroDesc:  "Defensa y asesoría en materia laboral en Venezuela para trabajadores y empleadores: prestaciones sociales, calificaciones de despido y acuerdos laborales.",
    intro:     "El Derecho Laboral regula la relación entre trabajadores y empleadores. Tanto si usted es un trabajador que desea conocer sus derechos como si es un empleador que necesita orientación legal, contar con una abogada laboral es fundamental para resolver situaciones de manera justa y dentro del marco legal venezolano.\n\nLa Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT) establece derechos y obligaciones que tanto patronos como trabajadores deben conocer. Marinela Masri puede asesorarle sobre los derechos aplicables a su situación, redactar acuerdos extrajudiciales con validez legal y representarle ante los tribunales laborales de ser necesario.",
    items: [
      "Asesoría legal en materia laboral, online y presencial",
      "Calificación de despido ante los tribunales laborales",
      "Demanda de prestaciones sociales",
      "Representación en procesos laborales",
      "Acuerdos extrajudiciales entre patrono y trabajador",
      "Revisión de contratos de trabajo y cumplimiento legal bajo la LOTTT",
      "Orientación sobre derechos y obligaciones laborales en Venezuela",
    ],
    whenToSeek: [
      "Cuando fue despedido y quiere conocer sus derechos",
      "Cuando su empleador no le ha cancelado las prestaciones sociales",
      "Cuando como empleador enfrenta una demanda o reclamación laboral",
      "Cuando desea llegar a un acuerdo extrajudicial con trabajadores o empleador",
      "Cuando necesita orientación sobre obligaciones laborales de su empresa",
      "Cuando necesita revisar o redactar contratos de trabajo conforme a la LOTTT",
    ],
    related: ["/contratos-documentos/", "/derecho-mercantil/", "/derecho-civil/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20Laboral",
  },
  {
    slug:      "/derecho-familia-divorcios/",
    icon:      "💍",
    title:     "Divorcios y Familia",
    h1:        "Abogado de Familia y Divorcios en Caracas",
    metaTitle: "Abogado de Familia y Divorcios en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Abogado de familia en Caracas, Venezuela. Asesoría legal en divorcios, custodia, LOPNNA, patria potestad y otros asuntos de derecho de familia.",
    heroDesc:  "Acompañamiento legal en divorcios, custodia, manutención y todos los asuntos de familia bajo el Código Civil y la LOPNNA en Venezuela.",
    intro:     "Los asuntos de familia son de los más delicados que puede enfrentar una persona. Marinela Masri ofrece asesoría legal en materia familiar con profesionalismo, empatía y discreción, buscando siempre la solución que mejor proteja los derechos de sus clientes y, especialmente, el bienestar de los niños, niñas y adolescentes involucrados.\n\nLos procesos de familia en Venezuela se rigen por el Código Civil y, en todo lo relacionado con niños, niñas y adolescentes, por la LOPNNA. Los tribunales de protección tienen procedimientos y plazos propios. Contar con asesoría legal desde el inicio puede marcar una diferencia significativa en el resultado del proceso y en el tiempo que tarda su resolución.",
    items: [
      "Divorcios contenciosos por causales del Código Civil",
      "Divorcios por desafecto (Sentencia 1070 TSJ)",
      "Separación de cuerpos",
      "Partición de bienes conyugales",
      "Acción merodeclarativa de unión estable de hecho",
      "Privación de patria potestad",
      "Régimen de convivencia familiar",
      "Régimen de obligación de manutención",
      "Reconocimiento y negación de paternidad",
      "Asuntos bajo el régimen especial LOPNNA",
    ],
    whenToSeek: [
      "Cuando está considerando separarse o divorciarse",
      "Cuando hay disputas sobre la custodia o manutención de sus hijos",
      "Cuando necesita establecer o modificar un régimen de convivencia",
      "Cuando enfrenta un proceso ante los tribunales de protección (LOPNNA)",
      "Cuando necesita resolver la partición de bienes conyugales",
      "Cuando necesita formalizar o impugnar el reconocimiento de un hijo",
    ],
    related:   ["/derecho-civil/", "/contratos-documentos/", "/bienes-inmuebles/"],
    waText:    "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20de%20Familia",
    subTopics: [
      {
        slug:  "/derecho-familia-divorcios/divorcio/",
        icon:  "💔",
        label: "Divorcio",
        desc:  "Divorcios contenciosos, por desafecto (Sentencia 1070 TSJ) y separación de cuerpos.",
      },
      {
        slug:  "/derecho-familia-divorcios/custodia-lopnna/",
        icon:  "👶",
        label: "Custodia y LOPNNA",
        desc:  "Régimen de convivencia familiar, obligación de manutención y asuntos bajo la LOPNNA.",
      },
    ],
  },
  {
    slug:      "/bienes-inmuebles/",
    icon:      "🏠",
    title:     "Bienes Inmuebles",
    h1:        "Abogado Inmobiliario en Caracas",
    metaTitle: "Abogado Inmobiliario en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Abogado inmobiliario en Caracas, Venezuela. Asesoría legal en compraventa, arrendamientos, documentos, propiedad y otros asuntos de bienes inmuebles.",
    heroDesc:  "Asesoría legal en compraventa, arrendamientos, condominio y asuntos de propiedades inmuebles en Caracas y toda Venezuela.",
    intro:     "Las transacciones y conflictos inmobiliarios requieren asesoría legal especializada. Marinela Masri ofrece asesoría integral a propietarios, compradores, arrendatarios y juntas de condominio, garantizando que sus derechos sobre los inmuebles estén completamente protegidos.\n\nEn el mercado inmobiliario venezolano existen situaciones particulares: inmuebles con documentación incompleta, deudas de condominio acumuladas, contratos de arrendamiento vencidos y propietarios que necesitan recuperar su bien. Marinela Masri conoce estas realidades y ofrece soluciones jurídicas adaptadas al contexto legal venezolano actual.",
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
      "Cuando necesita recuperar un inmueble entregado en comodato o sin contrato formalizado",
    ],
    related: ["/derecho-civil/", "/contratos-documentos/", "/derecho-mercantil/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20Bienes%20Inmuebles",
    subTopics: [
      {
        slug:  "/bienes-inmuebles/condominios/",
        icon:  "🏢",
        label: "Condominios",
        desc:  "Asesoría a juntas de condominio y propietarios: cobro de cuotas, conflictos y gestión legal.",
      },
    ],
  },
  {
    slug:      "/contratos-documentos/",
    icon:      "📄",
    title:     "Contratos y Documentos",
    h1:        "Abogado de Contratos en Caracas",
    metaTitle: "Abogado de Contratos en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Abogado de contratos en Caracas, Venezuela. Asesoría y redacción de contratos, documentos legales, poderes notariales y otros trámites jurídicos.",
    heroDesc:  "Redacción, revisión y autenticación de contratos, poderes notariales y documentos legales en Caracas y toda Venezuela.",
    intro:     "Un contrato mal redactado o un documento con errores puede generar conflictos costosos. Marinela Masri le ayuda a redactar, revisar y autenticar todos sus documentos legales con precisión, protegiéndole antes de que firme cualquier compromiso.\n\nEn Venezuela, la validez y eficacia de muchos documentos depende no solo de su contenido, sino del instrumento utilizado para formalizarlos: autenticación ante Notaría, registro ante el Registro Público o firma ante testigos. Marinela Masri le orienta sobre cuál es el instrumento correcto para cada situación y se encarga de todo el proceso de redacción y formalización.",
    items: [
      "Contrato de arrendamiento comercial y para vivienda",
      "Contratos entre particulares o empresas de cualquier tipo",
      "Contrato de trabajo conforme a la LOTTT",
      "Documentos de condominio y reglamentos de condominio",
      "Documento de compraventa de viviendas y vehículos",
      "Documentos para trámites administrativos ante entes del Estado",
      "Documentos para trámites migratorios y consulares",
      "Poderes notariales (generales, especiales, de administración y disposición)",
    ],
    whenToSeek: [
      "Cuando necesita revisar un contrato antes de firmarlo",
      "Cuando va a arrendar, comprar o vender un bien",
      "Cuando necesita otorgar o revocar un poder notarial",
      "Cuando necesita documentos para trámites administrativos o ante el Estado",
      "Cuando quiere redactar un acuerdo o convenio entre particulares",
      "Cuando necesita preparar documentos para uso en el extranjero con apostilla",
    ],
    related:   ["/derecho-civil/", "/derecho-mercantil/", "/bienes-inmuebles/"],
    waText:    "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20Contratos%20y%20Documentos",
    subTopics: [
      {
        slug:  "/contratos-documentos/poder-notarial/",
        icon:  "📜",
        label: "Poderes Notariales",
        desc:  "Poderes generales, especiales, de administración y disposición, con apostilla para uso internacional.",
      },
      {
        slug:  "/derecho-civil/legalizacion-apostilla/",
        icon:  "🌐",
        label: "Legalización y Apostilla",
        desc:  "Orientación para legalizar o apostillar documentos venezolanos para uso en el extranjero.",
      },
    ],
  },
];

export const serviceMap = Object.fromEntries(allServices.map(s => [s.slug, s]));

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
              {data.h1 ?? data.title}
            </h1>
          </div>
          <p className="font-['Schibsted_Grotesk',sans-serif] text-white/70 text-[15px] md:text-[18px] leading-[1.6] max-w-[600px]">
            {data.heroDesc}
          </p>
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

      {/* Sub-topics */}
      {data.subTopics && data.subTopics.length > 0 && (
        <section className="bg-[#eef2f7] w-full">
          <div className="px-6 md:px-16 py-8 md:py-10 max-w-[860px] mx-auto">
            <h2 className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[20px] md:text-[26px] mb-5">
              Temas relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.subTopics.map(t => (
                <Link
                  key={t.slug}
                  to={t.slug}
                  className="flex items-start gap-4 bg-white rounded-[12px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)] hover:border-[#c9a84c] border border-transparent transition-all group"
                >
                  <div className="bg-[#1a2b4a] group-hover:bg-[#c9a84c] flex items-center justify-center rounded-[14px] size-[44px] shrink-0 transition-colors">
                    <span className="text-[22px] leading-none">{t.icon}</span>
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#1a2b4a] text-[14px] leading-[1.3]">{t.label}</p>
                    <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[13px] leading-[1.5]">{t.desc}</p>
                    <span className="font-['Schibsted_Grotesk',sans-serif] text-[#c9a84c] text-[12px] font-medium mt-1">Ver más →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

export function DerechoCivilPage()        { return <ServicePageLayout data={serviceMap["/derecho-civil/"]} />; }
export function DerechoMercantilPage()    { return <ServicePageLayout data={serviceMap["/derecho-mercantil/"]} />; }
export function DerechoLaboralPage()      { return <ServicePageLayout data={serviceMap["/derecho-laboral/"]} />; }
export function DerechoFamiliaPage()      { return <ServicePageLayout data={serviceMap["/derecho-familia-divorcios/"]} />; }
export function BienesInmueblesPage()     { return <ServicePageLayout data={serviceMap["/bienes-inmuebles/"]} />; }
export function ContratosDocumentosPage() { return <ServicePageLayout data={serviceMap["/contratos-documentos/"]} />; }
