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
    slug:      "/derecho-civil/",
    icon:      "⚖️",
    title:     "Derecho Civil",
    metaTitle: "Abogada de Derecho Civil en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Asesoría legal civil en Caracas y toda Venezuela. Sucesiones, contratos, poderes notariales, desalojos y litigios civiles. Más de 25 años de experiencia.",
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
    faq: [
      { q: "¿Qué es una sucesión y cuándo necesito un abogado?", a: "La sucesión es el proceso legal por el cual los bienes de una persona fallecida se transfieren a sus herederos. Implica declaraciones ante el SENIAT y trámites en el Registro. Un abogado garantiza que el proceso sea correcto, evita errores que pueden retrasar la herencia y protege los derechos de cada heredero." },
      { q: "¿Qué documentos se necesitan para tramitar una herencia en Venezuela?", a: "Para iniciar una sucesión en Venezuela generalmente se requiere el acta de defunción del causante, los documentos de identidad de los herederos, los títulos de propiedad de los bienes que integran el patrimonio y la declaración sucesoral ante el SENIAT. Dado que los trámites varían según la composición del patrimonio y los herederos, consultar con un abogado desde el inicio evita errores costosos y demoras." },
      { q: "¿Qué es un Título Supletorio?", a: "Es un documento judicial que acredita la propiedad o posesión de una mejora o bienhechría sobre un terreno. Se tramita ante los tribunales civiles y requiere la asistencia de un abogado para presentar correctamente las pruebas y el expediente." },
      { q: "¿Qué es la prescripción adquisitiva?", a: "Es el mecanismo legal por el cual una persona puede adquirir la propiedad de un bien al haberlo poseído de forma pública, pacífica y continua durante el tiempo establecido por la ley venezolana. El proceso requiere demanda judicial y representación legal." },
      { q: "¿Se puede resolver un conflicto civil sin ir a juicio?", a: "Sí. Muchos conflictos civiles se resuelven mediante acuerdos extrajudiciales, lo cual ahorra tiempo y costos considerables. Marinela Masri puede asesorarle en la negociación de estos acuerdos garantizando que sus intereses queden debidamente protegidos." },
      { q: "¿Cuánto puede tardar un proceso civil en Venezuela?", a: "Los tiempos varían significativamente según el tipo de proceso: un trámite notarial puede resolverse en días; un proceso judicial puede extenderse meses o más dependiendo de la complejidad del caso y la carga del tribunal. Los acuerdos extrajudiciales suelen ser la vía más rápida. Marinela Masri puede darle una estimación realista según las particularidades de su situación." },
      { q: "¿Puedo tramitar poderes para personas fuera de Venezuela?", a: "Sí. Es posible gestionar poderes para personas en el extranjero con apostilla y los registros correspondientes, tanto dentro de Venezuela como en cualquier país del mundo, con la debida gestión notarial e internacional." },
    ],
    related: ["/bienes-inmuebles/", "/contratos-documentos/", "/derecho-familia-divorcios/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20Civil",
  },
  {
    slug:      "/derecho-mercantil/",
    icon:      "🏢",
    title:     "Derecho Mercantil",
    metaTitle: "Abogada Mercantil en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Asesoría jurídica para empresas en Caracas. Constitución de empresas, actas de asamblea, actualización de C.A., disolución y contratos comerciales en Venezuela.",
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
    faq: [
      { q: "¿Qué tipo de empresa puedo constituir en Venezuela?", a: "La forma más común para negocios medianos y grandes es la Compañía Anónima (C.A.). Su constitución requiere redactar el acta constitutiva y los estatutos sociales, inscribirlos en el Registro Mercantil correspondiente y publicar un aviso en prensa." },
      { q: "¿Qué documentos se necesitan para crear una Compañía Anónima en Venezuela?", a: "Para constituir una C.A. se necesitan los documentos de identidad de los socios, el capital inicial definido, el acta constitutiva redactada con los estatutos sociales, la inscripción ante el Registro Mercantil y la publicación de prensa correspondiente. Contar con un abogado garantiza que los estatutos protejan los intereses de todos los socios y que el proceso sea ágil." },
      { q: "¿Qué es un acta de asamblea y cuándo se requiere?", a: "Es el documento que registra las decisiones tomadas por los accionistas de una empresa en una reunión formal. Se requiere para cambios de junta directiva, modificaciones del objeto social, aumento de capital, y otros actos que afecten la estructura de la empresa." },
      { q: "¿Con qué frecuencia debe actualizarse una empresa?", a: "Las empresas deben celebrar asambleas ordinarias al menos una vez al año y actualizar sus datos en el Registro Mercantil cada vez que ocurran cambios en su composición, junta directiva u objeto social. Mantenerse al día evita sanciones y problemas operativos." },
      { q: "¿Qué consecuencias tiene no actualizar los datos de una empresa?", a: "Una empresa con datos desactualizados puede enfrentar dificultades en gestiones bancarias, firma de contratos, participación en licitaciones o demostrar su validez legal frente a terceros. Además, los actos realizados por personas que ya no forman parte de la junta directiva oficial pueden ser cuestionados. Mantener los registros al día es una medida de protección básica." },
      { q: "¿Cómo se transfieren acciones en una C.A.?", a: "La transferencia de acciones requiere modificar el libro de accionistas, redactar el acta correspondiente e inscribirla en el Registro Mercantil. Un abogado garantiza que el proceso sea válido y no genere disputas futuras entre los socios." },
      { q: "¿Cuándo debo consultar a un abogado para mi empresa?", a: "Siempre que realice cambios estructurales, firme contratos importantes, enfrente disputas comerciales, o necesite actualizar documentos legales. Una revisión periódica de la situación jurídica de su empresa previene problemas mayores." },
    ],
    related: ["/contratos-documentos/", "/derecho-laboral/", "/derecho-civil/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20Mercantil",
  },
  {
    slug:      "/derecho-laboral/",
    icon:      "👔",
    title:     "Derecho Laboral",
    metaTitle: "Abogada Laboral en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Asesoría laboral en Caracas. Prestaciones sociales, calificación de despido, acuerdos extrajudiciales laborales. Defensa de trabajadores y empleadores en Venezuela.",
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
    faq: [
      { q: "¿Qué es la calificación de despido?", a: "Es el procedimiento judicial mediante el cual un trabajador impugna su despido ante los tribunales laborales. El empleador debe demostrar que existía una causa justificada para la terminación de la relación laboral. Si no puede hacerlo, el tribunal puede ordenar el reenganche o el pago de indemnizaciones adicionales." },
      { q: "¿Qué es el reenganche y cuándo puede solicitarse?", a: "El reenganche es el derecho de un trabajador a ser restituido a su puesto de trabajo tras un despido que el tribunal declara injustificado o ilegal. Procede cuando el trabajador tiene inamovilidad laboral —por ejemplo, durante un embarazo, enfermedad profesional o dentro del plazo protegido por la LOTTT— o cuando el empleador no puede demostrar causa justificada de despido." },
      { q: "¿Qué conceptos incluyen las prestaciones sociales en Venezuela?", a: "Las prestaciones sociales bajo la LOTTT incluyen la garantía de prestaciones (equivalente a 15 días de salario por año o parte proporcional), los días adicionales acumulados por antigüedad, y pueden sumarse vacaciones no disfrutadas, bono vacacional, utilidades y otros conceptos dependiendo de cada caso. El cálculo correcto requiere revisar el historial salarial y de beneficios del trabajador." },
      { q: "¿Cuándo prescriben las prestaciones sociales?", a: "De acuerdo con la LOTTT, la acción para reclamar prestaciones sociales y otros conceptos laborales tiene un plazo de prescripción que comienza a correr desde la terminación de la relación laboral. Es importante actuar a tiempo para no perder el derecho a reclamar." },
      { q: "¿Qué diferencia hay entre un despido justificado e injustificado?", a: "El despido justificado ocurre cuando el empleador puede demostrar una causa legal específica según la LOTTT. El despido injustificado ocurre sin causa legal válida y genera la obligación de pagar indemnizaciones adicionales al trabajador. La distinción es clave para determinar los derechos del trabajador y las responsabilidades del empleador." },
      { q: "¿Puedo llegar a un acuerdo con mi empleador sin ir a juicio?", a: "Sí. Los acuerdos extrajudiciales laborales son posibles y, en muchos casos, la mejor opción para ambas partes, ahorrando tiempo y costos. Marinela Masri puede asesorarle y redactar el acuerdo para que tenga validez legal y proteja sus intereses." },
      { q: "¿Qué es la LOTTT?", a: "La Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT) es la normativa laboral vigente en Venezuela. Establece derechos, obligaciones, prestaciones, jornadas y procedimientos para la relación laboral en el país." },
    ],
    related: ["/contratos-documentos/", "/derecho-mercantil/", "/derecho-civil/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20Laboral",
  },
  {
    slug:      "/derecho-familia-divorcios/",
    icon:      "💍",
    title:     "Divorcios y Familia",
    metaTitle: "Abogada de Familia y Divorcios en Caracas | Marinela Masri",
    metaDesc:  "Abogada de familia y divorcios en Caracas. Divorcios, custodia, manutención, patria potestad y régimen LOPNNA. Asesoría familiar con profesionalismo y empatía.",
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
    faq: [
      { q: "¿Cuáles son los tipos de divorcio en Venezuela?", a: "Los principales son el divorcio contencioso (por causales establecidas en el Código Civil) y el divorcio por desafecto (reconocido por la Sentencia 1070 del TSJ), que permite disolver el matrimonio por pérdida del afecto marital, sin necesidad de demostrar causas específicas." },
      { q: "¿Qué es el divorcio por desafecto?", a: "Es una modalidad reconocida por el Tribunal Supremo de Justicia (Sentencia 1070) que permite a cualquiera de los cónyuges solicitar el divorcio alegando la pérdida del afecto conyugal. No requiere demostrar culpa del otro cónyuge, lo que simplifica el proceso en muchos casos." },
      { q: "¿Cuánto tiempo tarda un proceso de divorcio en Venezuela?", a: "Depende del tipo de divorcio y de si existe acuerdo entre las partes. Un divorcio por desafecto puede tramitarse en semanas si no hay bienes en disputa ni hijos menores en conflicto. Un divorcio contencioso con bienes en disputa y proceso de custodia puede extenderse varios meses. La voluntad de ambas partes para llegar a acuerdos es el factor que más influye en la duración." },
      { q: "¿Puedo iniciar un proceso de divorcio si mi cónyuge está en el extranjero?", a: "Sí, es posible. El proceso puede iniciarse ante los tribunales venezolanos competentes con las debidas notificaciones. Si el cónyuge en el extranjero cuenta con un poder notarial vigente, el proceso puede agilizarse considerablemente. Marinela Masri puede asesorarle sobre los pasos específicos según la situación de su caso." },
      { q: "¿Qué es la patria potestad y cuándo puede privarse?", a: "La patria potestad es el conjunto de derechos y obligaciones de los padres sobre sus hijos menores. Puede ser privada judicialmente cuando el progenitor incurre en conductas que perjudican al niño, según las causales establecidas en el Código Civil y la LOPNNA." },
      { q: "¿Cómo se determina la obligación de manutención?", a: "La obligación de manutención (pensión alimentaria) se determina judicialmente considerando las necesidades del menor y la capacidad económica del obligado. Se tramita bajo el régimen especial de la LOPNNA y puede modificarse si cambian las circunstancias de las partes." },
      { q: "¿Qué es la LOPNNA?", a: "La Ley Orgánica para la Protección del Niño, Niña y Adolescente (LOPNNA) es la normativa que rige todos los asuntos legales relacionados con menores de edad en Venezuela, incluyendo custodia, manutención, régimen de convivencia y protección de derechos." },
    ],
    related: ["/derecho-civil/", "/contratos-documentos/", "/bienes-inmuebles/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20en%20Derecho%20de%20Familia",
  },
  {
    slug:      "/bienes-inmuebles/",
    icon:      "🏠",
    title:     "Bienes Inmuebles",
    metaTitle: "Abogada Bienes Inmuebles en Caracas | Marinela Masri Kasrin",
    metaDesc:  "Asesoría legal inmobiliaria en Caracas. Compraventa, arrendamientos, condominio, desalojos. Experta en Ley de Propiedad Horizontal. Más de 25 años en Venezuela.",
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
    faq: [
      { q: "¿Qué verificaciones legales debo hacer antes de comprar un inmueble?", a: "Debe verificar que el vendedor sea el legítimo propietario, que el inmueble no tenga hipotecas, embargos o cargas, y que los documentos de propiedad estén correctamente registrados. Un abogado puede revisar todos estos aspectos y evitar que adquiera un inmueble con problemas legales." },
      { q: "¿Cómo se realiza el proceso de compraventa de un inmueble en Venezuela?", a: "El proceso típico incluye: revisión de los documentos de propiedad y cargas del inmueble, elaboración del contrato de opción de compra, gestión del crédito hipotecario si aplica, redacción del documento definitivo de compraventa, y protocolización ante el Registro Público correspondiente. Un abogado garantiza que cada paso proteja tanto al comprador como al vendedor." },
      { q: "¿Puedo desalojar a un inquilino que no paga el alquiler en Venezuela?", a: "Sí, pero el proceso debe seguirse por la vía legal correspondiente. La Ley de Regularización y Control de Arrendamientos de Vivienda establece procedimientos específicos para inmuebles de uso habitacional. Para locales comerciales, el Código Civil regula el procedimiento. El incumplimiento del proceso puede invalidar el desalojo, por lo que contar con asesoría jurídica es fundamental." },
      { q: "¿Qué es la Ley de Propiedad Horizontal?", a: "Es la ley que regula la propiedad compartida en edificios o conjuntos residenciales en Venezuela. Establece los derechos y obligaciones de los propietarios respecto a las áreas comunes, el pago de cuotas de condominio y las normas de convivencia." },
      { q: "¿Qué puedo hacer si un propietario no paga las cuotas de condominio?", a: "Existen mecanismos de cobranza extrajudicial (notificaciones, acuerdos de pago) y judicial (demanda de cobro de bolívares) para recuperar las deudas de condominio. Marinela Masri asesora a juntas de condominio en ambos tipos de procedimientos." },
      { q: "¿Qué es un documento de condominio?", a: "Es el documento fundamental que regula la vida en comunidad en un edificio o conjunto residencial. Establece las áreas privadas y comunes, las cuotas de participación de cada propietario y las normas básicas de convivencia." },
      { q: "¿Cuándo es obligatorio registrar un contrato de arrendamiento?", a: "En Venezuela, los contratos de arrendamiento de vivienda deben notariarse para tener plena validez entre las partes. Para mayor seguridad jurídica y oponibilidad frente a terceros, el registro es recomendable. Un abogado puede orientarle sobre el instrumento adecuado según su caso." },
    ],
    related: ["/derecho-civil/", "/contratos-documentos/", "/derecho-mercantil/"],
    waText:  "Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20Bienes%20Inmuebles",
  },
  {
    slug:      "/contratos-documentos/",
    icon:      "📄",
    title:     "Contratos y Documentos",
    metaTitle: "Abogada Contratos y Documentos en Caracas | Marinela Masri",
    metaDesc:  "Redacción y revisión de contratos en Caracas. Contratos de arrendamiento, trabajo, compraventa. Poderes notariales y documentos legales en Venezuela.",
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
    faq: [
      { q: "¿Por qué es importante revisar un contrato con un abogado antes de firmarlo?", a: "Un abogado identifica cláusulas abusivas, ambigüedades o términos que podrían resultar perjudiciales. Esta revisión previa evita conflictos futuros, protege sus intereses y le da claridad sobre los compromisos que está asumiendo." },
      { q: "¿Qué diferencia hay entre un contrato autenticado y uno registrado?", a: "La autenticación ante Notaría verifica la identidad de los firmantes y la fecha del acto. El registro ante el Registro Público otorga fecha cierta y oponibilidad frente a terceros. La importancia de cada uno depende del tipo de bien o acto jurídico involucrado." },
      { q: "¿Qué debe incluir un contrato de arrendamiento?", a: "Como mínimo debe incluir: identificación de las partes, descripción del inmueble, canon de arrendamiento, duración, condiciones de renovación y cláusulas sobre incumplimiento. Un contrato bien redactado protege tanto al arrendador como al arrendatario." },
      { q: "¿Para qué sirve un poder notarial y cuáles son sus tipos?", a: "Un poder notarial permite que otra persona actúe legalmente en su nombre. Puede ser general (para múltiples actos), especial (para un acto específico) o de administración y disposición (para gestionar bienes). Marinela Masri puede asesorarle sobre cuál es el más adecuado para su situación." },
      { q: "¿Qué es la apostilla y cuándo se necesita?", a: "La apostilla es una certificación que otorga validez internacional a documentos públicos venezolanos, de acuerdo con el Convenio de La Haya. Se necesita cuando un documento emitido en Venezuela debe surtir efectos legales en otro país: contratos, poderes notariales, actas civiles, entre otros. El trámite en Venezuela se realiza ante el Ministerio de Relaciones Exteriores." },
      { q: "¿Qué sucede si la otra parte no cumple un contrato firmado?", a: "Si una parte incumple sus obligaciones contractuales, el afectado puede exigir el cumplimiento forzoso, la resolución del contrato y/o el pago de daños y perjuicios, según lo estipulado en el contrato y las disposiciones del Código Civil venezolano. Marinela Masri puede asesorarle sobre la vía más conveniente —extrajudicial o judicial— según las circunstancias de su caso." },
      { q: "¿Puedo otorgar poderes para personas que están fuera de Venezuela?", a: "Sí. Es posible gestionar poderes para personas en el extranjero mediante el proceso de apostilla y los registros correspondientes, tanto dentro de Venezuela como en otros países, con la debida coordinación notarial e internacional." },
    ],
    related: ["/derecho-civil/", "/derecho-mercantil/", "/bienes-inmuebles/"],
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
        <div className="px-6 md:px-16 py-10 md:py-14 max-w-[860px] mx-auto flex flex-col gap-4">
          {data.intro.split("\n\n").map((para, i) => (
            <p key={i} className="font-['Schibsted_Grotesk',sans-serif] text-[#374151] text-[15px] md:text-[17px] leading-[1.75]">
              {para}
            </p>
          ))}
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

export function DerechoCivilPage()            { return <ServicePageLayout data={serviceMap["/derecho-civil/"]} />; }
export function DerechoMercantilPage()        { return <ServicePageLayout data={serviceMap["/derecho-mercantil/"]} />; }
export function DerechoLaboralPage()          { return <ServicePageLayout data={serviceMap["/derecho-laboral/"]} />; }
export function DerechoFamiliaPage()          { return <ServicePageLayout data={serviceMap["/derecho-familia-divorcios/"]} />; }
export function BienesInmueblesPage()         { return <ServicePageLayout data={serviceMap["/bienes-inmuebles/"]} />; }
export function ContratosDocumentosPage()     { return <ServicePageLayout data={serviceMap["/contratos-documentos/"]} />; }
