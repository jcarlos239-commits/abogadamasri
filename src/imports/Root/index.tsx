import { motion } from "motion/react";
import svgPaths from "./svg-72i1clds9c";
import imgHero from "./c1070124e5afc89bd68e1e4d92caeb5306ab5160.png";
import imgRectangle from "./db574d06762a18763fd34165d99983ad364d4047.png";
import imgRectangle1 from "./f23974d1c6001db55b9b2363a3521dae87c918e7.png";

function CircleX() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="circle-x">
          <path d={svgPaths.p12c4d700} id="Vector" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <CircleX />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a2b4a] text-[24px] whitespace-nowrap">Marinela Masri</p>
    </div>
  );
}

function MessageCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_222)" id="message-circle">
          <path d={svgPaths.p2ea05980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_222">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WhatsappButton() {
  return (
    <div className="bg-[#25d366] content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.13)] flex gap-[10px] items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0" data-name="whatsapp-button">
      <MessageCircle />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Consulta</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1a2b4a] text-[16px] whitespace-nowrap">Inicio</p>
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1a2b4a] text-[16px] whitespace-nowrap">Servicios</p>
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1a2b4a] text-[16px] whitespace-nowrap">Sobre Mí</p>
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1a2b4a] text-[16px] whitespace-nowrap">Contacto</p>
      <WhatsappButton />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[64px] py-[20px] right-0 top-0" data-name="navbar">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <motion.div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full" data-name="Frame">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[72px] w-full">Abogada Marinela Masri Kasrin</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[72px] text-white w-full">Asesoría Legal Profesional en Venezuela</p>
      <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c9a84c] text-[24px] w-full">Más de 25 años de experiencia al servicio de sus derechos</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.6] opacity-80 relative shrink-0 text-[18px] text-white w-full">Especialista en Derecho Civil, Laboral y Mercantil. Representación legal con dedicación, ética y resultados.</p>
    </motion.div>
  );
}

function MessageCircle1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_222)" id="message-circle">
          <path d={svgPaths.p2ea05980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_222">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WhatsappButton1() {
  return (
    <div className="bg-[#25d366] content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.13)] flex gap-[10px] items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0" data-name="whatsapp-button">
      <MessageCircle1 />
      <a className="[word-break:break-word] block font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" href="https://wa.me/584141700773?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta" target="_blank">
        <p className="cursor-pointer leading-[normal]">📱 Escríbeme por WhatsApp</p>
      </a>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <a className="[word-break:break-word] block font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" href="tel:+14141700773" target="_blank">
        <p className="cursor-pointer leading-[normal]">Llámame: +58 414-170-0773</p>
      </a>
    </div>
  );
}

function Frame4() {
  return (
    <motion.div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Frame">
      <WhatsappButton1 />
      <Frame5 />
    </motion.div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Hero() {
  return (
    <motion.div className="h-[571px] relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(26,43,74,0.82)] inset-0" />
      </div>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[41px] pt-[105px] px-[64px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeading() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center w-full" data-name="section-heading">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#c9a84c] text-[48px] w-[min-content]">Áreas de Práctica</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4b5563] text-[18px] w-[700px]">Soluciones jurídicas integrales para personas y empresas</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#1a2b4a] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="icon">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">⚖️</p>
    </div>
  );
}

function ServiceCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex flex-col gap-[16px] h-[220px] items-center justify-center p-[32px] relative rounded-[12px] shrink-0 w-[420px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Derecho Civil</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#1a2b4a] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="icon">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">🏢</p>
    </div>
  );
}

function ServiceCard1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex flex-col gap-[16px] h-[220px] items-center justify-center p-[32px] relative rounded-[12px] shrink-0 w-[420px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon1 />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Derecho Mercantil</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#1a2b4a] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="icon">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">👔</p>
    </div>
  );
}

function ServiceCard2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex flex-col gap-[16px] h-[220px] items-center justify-center p-[32px] relative rounded-[12px] shrink-0 w-[420px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon2 />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Derecho Laboral</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-1">
      <ServiceCard />
      <ServiceCard1 />
      <ServiceCard2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#1a2b4a] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="icon">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">💍</p>
    </div>
  );
}

function ServiceCard3() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex flex-col gap-[16px] h-[220px] items-center justify-center p-[32px] relative rounded-[12px] shrink-0 w-[420px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon3 />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Divorcios y Familia</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#1a2b4a] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="icon">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">🏠</p>
    </div>
  );
}

function ServiceCard4() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex flex-col gap-[16px] h-[220px] items-center justify-center p-[32px] relative rounded-[12px] shrink-0 w-[420px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon4 />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Bienes Inmuebles</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#1a2b4a] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="icon">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">📄</p>
    </div>
  );
}

function ServiceCard5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex flex-col gap-[16px] h-[220px] items-center justify-center p-[32px] relative rounded-[12px] shrink-0 w-[420px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon5 />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Contratos y Documentos</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row-2">
      <ServiceCard3 />
      <ServiceCard4 />
      <ServiceCard5 />
    </div>
  );
}

function ServicesGrid() {
  return (
    <div className="content-stretch flex flex-col flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="services-grid">
      <Row />
      <Row1 />
    </div>
  );
}

function Servicios() {
  return (
    <div className="bg-white h-[692px] relative shrink-0 w-full" data-name="servicios">
      <div className="content-stretch flex flex-col gap-[64px] items-start pb-[120px] pt-[38px] px-[64px] relative size-full">
        <SectionHeading />
        <ServicesGrid />
      </div>
    </div>
  );
}

function TitleBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-end relative shrink-0 w-full whitespace-pre-wrap" data-name="title-block">
      <p className="font-['Instrument_Serif:Regular',sans-serif] h-[113px] leading-[1.1] not-italic relative shrink-0 text-[#1a2b4a] text-[72px] w-full">{`                      Abogada Marinela Masri Kasrin`}</p>
      <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold h-[61px] leading-[1.2] relative shrink-0 text-[#c9a84c] text-[24px] w-full">{`                                                                       Más de 25 años defendiendo sus derechos`}</p>
    </div>
  );
}

function BtnQuienesSomos() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0" data-name="btn-quienes-somos">
      <div className="relative shrink-0 size-[120px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle} />
      </div>
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1a2b4a] text-[24px] underline whitespace-nowrap">Quiénes Somos</p>
    </div>
  );
}

function BtnQueHacemos() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0" data-name="btn-que-hacemos">
      <div className="relative shrink-0 size-[120px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid flex-[1_0_0] font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[1.2] min-h-px relative text-[#1a2b4a] text-[24px] underline w-[163px]">Qué Hacemos</p>
    </div>
  );
}

function ButtonsRow() {
  return (
    <div className="content-stretch flex gap-[96px] items-center justify-center py-[24px] relative shrink-0 w-full" data-name="buttons-row">
      <BtnQuienesSomos />
      <BtnQueHacemos />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#1a2b4a] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] px-[24px] py-[16px] relative size-full whitespace-nowrap">
          <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#c9a84c] text-[28px]">25+</p>
          <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] text-white uppercase">Años Experiencia</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#1a2b4a] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] px-[24px] py-[16px] relative size-full whitespace-nowrap">
          <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#c9a84c] text-[28px]">{`Derecho Civil & Laboral`}</p>
          <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] text-white uppercase">Especialidades</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#1a2b4a] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] px-[24px] py-[16px] relative size-full whitespace-nowrap">
          <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#c9a84c] text-[28px]">Caracas, VZLA</p>
          <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] text-white uppercase">Ubicación</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[620px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <TitleBlock />
      <ButtonsRow />
      <Frame8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[392px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame7 />
    </div>
  );
}

function SobreMi() {
  return (
    <div className="bg-[#f5f5f5] h-[588px] relative shrink-0 w-full" data-name="sobre-mi">
      <div className="content-stretch flex flex-col items-start pb-[120px] px-[64px] relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function SectionHeading1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center w-full" data-name="section-heading">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#c9a84c] text-[48px] w-[min-content]">¿Por Qué Confiar en Marinela Masri?</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-white w-[700px]">Compromiso inquebrantable con la justicia y sus intereses</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#c9a84c] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">✅</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[22px] w-full whitespace-pre-wrap">{`               Experiencia Comprobada`}</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-white w-full">​</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-w-px relative" data-name="Frame">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#c9a84c] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">🤝</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[22px] w-full whitespace-pre-wrap">{`                  Atención Personalizada`}</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-white w-full">​</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-w-px relative" data-name="Frame">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#c9a84c] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">📋</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[22px] w-full whitespace-pre-wrap">{`                        Resultados Reales`}</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-white w-full">​</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-w-px relative" data-name="Frame">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#c9a84c] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">⚡</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[22px] w-full whitespace-pre-wrap">{`                       Respuesta Rápida`}</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[15px] text-white w-full">​</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-w-px relative" data-name="Frame">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame13 />
      <Frame16 />
      <Frame19 />
      <Frame22 />
    </div>
  );
}

function WhyTrust() {
  return (
    <div className="bg-[#1a2b4a] h-[413px] relative shrink-0 w-full" data-name="why-trust">
      <div className="content-stretch flex flex-col gap-[80px] items-start pb-[120px] pt-[57px] px-[64px] relative size-full">
        <SectionHeading1 />
        <Frame12 />
      </div>
    </div>
  );
}

function SectionHeading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="section-heading">
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4b5563] text-[18px] text-center w-[700px]">Capacitación constante para ofrecer la mejor defensa técnica</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2025</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] w-[min-content]">Diplomado Derecho Laboral</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] p-[24px] relative size-full">
          <Frame28 />
          <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[15px] whitespace-nowrap">ULAC</p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2024</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] w-[min-content]">Taller: Arrendamientos en Venezuela</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] p-[24px] relative size-full">
          <Frame30 />
          <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[15px] whitespace-nowrap">Actualización Legal</p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2008</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] w-[min-content]">XI Congreso Centroamericano del Derecho del Trabajo</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] p-[24px] relative size-full">
          <Frame32 />
          <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[15px] whitespace-nowrap">Panamá</p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2007</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] w-[min-content]">Congreso Internacional de Derecho Laboral</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] p-[24px] relative size-full">
          <Frame34 />
          <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[15px] whitespace-nowrap">Nueva Esparta</p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2005</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] w-[min-content]">Primera Conferencia sobre Mediación</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] p-[24px] relative size-full">
          <Frame36 />
          <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[15px] whitespace-nowrap">TSJ, Caracas</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame27 />
      <Frame29 />
      <Frame31 />
      <Frame33 />
      <Frame35 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white h-[795px] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[120px] pt-[28px] px-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] h-[62px] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[48px] text-center w-full">Formación Continua</p>
        <SectionHeading2 />
        <Frame26 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[normal] relative shrink-0 text-[#1a2b4a] text-center w-full" data-name="Frame">
      <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[56px] w-full">¿Necesita Asesoría Legal?</p>
      <p className="font-['Schibsted_Grotesk:Medium',sans-serif] font-medium opacity-80 relative shrink-0 text-[22px] w-full">Contácteme hoy mismo para una consulta</p>
    </div>
  );
}

function MessageCircle2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_222)" id="message-circle">
          <path d={svgPaths.p2ea05980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_222">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WhatsappButton2() {
  return (
    <div className="bg-[#25d366] content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.13)] flex gap-[10px] items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0 w-[600px]" data-name="whatsapp-button">
      <MessageCircle2 />
      <a className="[word-break:break-word] block font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" href="https://wa.me/584141700773?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta" target="_blank">
        <p className="cursor-pointer leading-[normal]">Escribir por WhatsApp - +58 414-170-0773</p>
      </a>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="mail">
          <path d={svgPaths.p3d4f9680} id="Vector" stroke="var(--stroke-0, #1A2B4A)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Mail />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2b4a] text-[18px] whitespace-nowrap">marinelamasri79@gmail.com</p>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="phone">
          <path d={svgPaths.p28682900} id="Vector" stroke="var(--stroke-0, #1A2B4A)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Phone />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2b4a] text-[18px] whitespace-nowrap">0412-280-9538</p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="map-pin">
          <path d={svgPaths.p3d476500} id="Vector" stroke="var(--stroke-0, #1A2B4A)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <MapPin />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2b4a] text-[18px] whitespace-nowrap">Plaza Venezuela, Caracas</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[64px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <Frame39 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function ContactoCta() {
  return (
    <div className="bg-[#c9a84c] h-[361px] relative shrink-0 w-full" data-name="contacto-cta">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center pb-[120px] pt-[41px] px-[64px] relative size-full">
          <Frame37 />
          <WhatsappButton2 />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Scale() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="scale">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="scale">
          <path d={svgPaths.p11c279e0} id="Vector" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Scale />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">Marinela Masri</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[400px]" data-name="Frame">
      <Frame44 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full opacity-60 relative shrink-0 text-[15px] text-white w-[min-content]">Defensa legal con ética y profesionalismo en Caracas, Venezuela. Más de 25 años de trayectoria impecable.</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame43 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-[12px] items-center relative shrink-0 text-white w-full" data-name="Frame">
      <p className="leading-[normal] opacity-50 relative shrink-0 text-[14px] whitespace-nowrap">Abogada Marinela Masri Kasrin © 2026 - Caracas, Venezuela</p>
      <p className="leading-[1.4] opacity-30 relative shrink-0 text-[12px] text-center w-[800px]">Este sitio web es únicamente informativo y no constituye asesoría legal formal.</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1291 1" width="1291">
            <line id="Line" opacity="0.1" stroke="var(--stroke-0, white)" x2="1291" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame46 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0f1e36] h-[305px] relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col gap-[22px] items-start pb-[40px] pt-[80px] px-[64px] relative size-full">
        <Frame42 />
        <Frame45 />
      </div>
    </div>
  );
}

function DesktopVersion() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] h-[3737px] items-start min-h-[1024px] relative shrink-0 w-[1419px]" data-name="desktop-version">
      <Navbar />
      <Hero />
      <Servicios />
      <SobreMi />
      <WhyTrust />
      <Frame25 />
      <ContactoCta />
      <Footer />
    </div>
  );
}

export default function Root() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-start justify-center relative size-full" data-name="root">
      <DesktopVersion />
    </div>
  );
}