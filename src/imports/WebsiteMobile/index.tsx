import { motion } from "motion/react";
import svgPaths from "./svg-a8rdxypccj";
import imgHero from "./c1070124e5afc89bd68e1e4d92caeb5306ab5160.png";
import imgRectangle from "./db574d06762a18763fd34165d99983ad364d4047.png";
import imgRectangle1 from "./f23974d1c6001db55b9b2363a3521dae87c918e7.png";

function Frame1() {
  return (
    <motion.div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full" data-name="Frame">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#c9a84c] text-[32px] w-full">Abogada Marinela Masri</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[40px] text-white w-full">Asesoría Legal Profesional en Venezuela</p>
      <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c9a84c] text-[18px] w-full">Más de 25 años de experiencia al servicio de sus derechos</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.6] opacity-80 relative shrink-0 text-[16px] text-white w-full">Especialista en Derecho Civil, Laboral y Mercantil. Representación legal con dedicación, ética y resultados.</p>
    </motion.div>
  );
}

function IconFrame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_432)" id="icon-frame">
          <path d={svgPaths.p14501180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_432">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#25d366] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.13)] relative rounded-[8px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[14px] relative size-full">
          <IconFrame />
          <a className="[word-break:break-word] block font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" href="https://wa.me/584141700773?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta" target="_blank">
            <p className="cursor-pointer leading-[normal]">Escríbeme por WhatsApp</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="button">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[14px] relative size-full">
          <a className="[word-break:break-word] block font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" href="tel:+14141700773" target="_blank">
            <p className="cursor-pointer leading-[normal]">Llámame: +58 414-170-0773</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <motion.div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Button />
      <Button1 />
    </motion.div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Hero() {
  return (
    <motion.div className="relative shrink-0 w-full" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(26,43,74,0.82)] inset-0" />
      </div>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[51px] pt-[46px] px-[24px] relative size-full">
          <Frame />
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeading() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center w-full" data-name="section-heading">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#c9a84c] text-[36px] w-full">Áreas de Práctica</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4b5563] text-[16px] w-full">Soluciones jurídicas integrales para personas y empresas</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#1a2b4a] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="icon">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-center text-white w-full">⚖️</p>
    </div>
  );
}

function ServiceCard() {
  return (
    <div className="bg-white drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex-[1_0_0] h-[220px] min-w-px relative rounded-[12px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[32px] relative size-full">
          <Icon />
          <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Derecho Civil</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#1a2b4a] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="icon">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-center text-white w-full">🏢</p>
    </div>
  );
}

function ServiceCard1() {
  return (
    <div className="bg-white drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex-[1_0_0] h-[220px] min-w-px relative rounded-[12px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[32px] relative size-full">
          <Icon1 />
          <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Derecho Mercantil</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-1">
      <ServiceCard />
      <ServiceCard1 />
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
    <div className="bg-white drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex-[1_0_0] h-[220px] min-w-px relative rounded-[12px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[32px] relative size-full">
          <Icon2 />
          <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Derecho Laboral</p>
        </div>
      </div>
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
    <div className="bg-white drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex-[1_0_0] h-[220px] min-w-px relative rounded-[12px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[32px] relative size-full">
          <Icon3 />
          <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Divorcios y Familia</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-2">
      <ServiceCard2 />
      <ServiceCard3 />
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
    <div className="bg-white drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex-[1_0_0] h-[220px] min-w-px relative rounded-[12px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[32px] relative size-full">
          <Icon4 />
          <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Bienes Inmuebles</p>
        </div>
      </div>
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
    <div className="bg-white drop-shadow-[0px_6px_9px_rgba(0,0,0,0.04)] flex-[1_0_0] h-[220px] min-w-px relative rounded-[12px]" data-name="service-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[32px] relative size-full">
          <Icon5 />
          <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[22px] text-center w-[min-content]">Contratos y Documentos</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-3">
      <ServiceCard4 />
      <ServiceCard5 />
    </div>
  );
}

function ServicesGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="services-grid">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Areas() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="areas">
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-[44px] pt-[48px] px-[24px] relative size-full">
        <SectionHeading />
        <ServicesGrid />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-center leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#1a2b4a] text-[32px] w-full">Abogada Marinela Masri</p>
      <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c9a84c] text-[18px] text-center w-full">Más de 25 años defendiendo sus derechos</p>
    </div>
  );
}

function BtnQuienesSomos() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center justify-center min-w-px relative" data-name="btn-quienes-somos">
      <div className="relative shrink-0 size-[120px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle} />
      </div>
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[#1a2b4a] text-[24px] text-center underline w-[min-content]">Quiénes Somos</p>
    </div>
  );
}

function BtnQueHacemos() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center justify-center min-w-px relative" data-name="btn-que-hacemos">
      <div className="relative shrink-0 size-[120px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[#1a2b4a] text-[24px] text-center underline w-[min-content]">Qué Hacemos</p>
    </div>
  );
}

function ButtonsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="buttons-row">
      <BtnQuienesSomos />
      <BtnQueHacemos />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#1a2b4a] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] px-[24px] py-[16px] relative size-full text-center">
          <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#c9a84c] text-[24px] w-full">25+</p>
          <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] text-white uppercase w-full">Años Experiencia</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#1a2b4a] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] px-[24px] py-[16px] relative size-full text-center">
          <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#c9a84c] text-[24px] w-full">{`Derecho Civil & Laboral`}</p>
          <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] text-white uppercase w-full">Especialidades</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#1a2b4a] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] px-[24px] py-[16px] relative size-full text-center">
          <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[#c9a84c] text-[24px] w-full">Caracas, VZLA</p>
          <p className="font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12px] text-white uppercase w-full">Ubicación</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame4 />
      <ButtonsRow />
      <Frame5 />
    </div>
  );
}

function About() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name="about">
      <div className="content-stretch flex flex-col items-start pb-[34px] pt-[42px] px-[24px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function SectionHeading1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center w-[342px]" data-name="section-heading">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#c9a84c] text-[36px] w-full">¿Por Qué Confiar en Marinela Masri?</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white w-full">Compromiso inquebrantable con la justicia y sus intereses</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#c9a84c] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">✅</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[22px] text-center w-full">Experiencia Comprobada</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#c9a84c] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">🤝</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[22px] text-center w-full">Atención Personalizada</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#c9a84c] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">📋</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[22px] text-center w-full">Resultados Reales</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#c9a84c] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">⚡</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c9a84c] text-[22px] text-center w-full">Respuesta Rápida</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[342px]" data-name="Frame">
      <Frame10 />
      <Frame13 />
      <Frame16 />
      <Frame19 />
    </div>
  );
}

function Trust() {
  return (
    <div className="bg-[#1a2b4a] content-stretch flex flex-col gap-[48px] items-start px-[24px] py-[49px] relative shrink-0" data-name="trust">
      <SectionHeading1 />
      <Frame9 />
    </div>
  );
}

function SectionHeading2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center w-full" data-name="section-heading">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#c9a84c] text-[36px] w-full">Formación Continua</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4b5563] text-[16px] w-full">Capacitación constante para ofrecer la mejor defensa técnica</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2025</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[20px] w-[min-content]">Diplomado Derecho Laboral</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">ULAC</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2024</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[20px] w-[min-content]">Taller: Arrendamientos en Venezuela</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Actualización Legal</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2008</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[20px] w-[min-content]">XI Congreso Centroamericano del Derecho del Trabajo</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Panamá</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2007</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[20px] w-[min-content]">Congreso Internacional de Derecho Laboral</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">Nueva Esparta</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative" data-name="Frame">
      <p className="font-['Schibsted_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#c9a84c] text-[14px] whitespace-nowrap">2005</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#1a2b4a] text-[20px] w-[min-content]">Primera Conferencia sobre Mediación</p>
      <p className="font-['Schibsted_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap">TSJ, Caracas</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame23 />
      <Frame25 />
      <Frame27 />
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Education() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="education">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[31px] pt-[53px] px-[24px] relative size-full">
        <SectionHeading2 />
        <Frame22 />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[normal] relative shrink-0 text-[#1a2b4a] text-center w-full" data-name="Frame">
      <p className="font-['Instrument_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[36px] w-full">¿Necesita Asesoría Legal?</p>
      <p className="font-['Schibsted_Grotesk:Medium',sans-serif] font-medium opacity-80 relative shrink-0 text-[18px] w-full">Contácteme hoy mismo para una consulta</p>
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_432)" id="icon-frame">
          <path d={svgPaths.p14501180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_432">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#25d366] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.13)] relative rounded-[8px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[14px] relative size-full">
          <IconFrame1 />
          <a className="[word-break:break-word] block font-['Schibsted_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" href="https://wa.me/584141700773?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta" target="_blank">
            <p className="cursor-pointer leading-[normal]">WhatsApp - +58 414-170-0773</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Frame">
          <path d={svgPaths.p1b613e00} id="Vector" stroke="var(--stroke-0, #1A2B4A)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame36 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2b4a] text-[15px] whitespace-nowrap">marinelamasri79@gmail.com</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g clipPath="url(#clip0_1_429)" id="Frame">
          <path d={svgPaths.p11e34d00} id="Vector" stroke="var(--stroke-0, #1A2B4A)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_429">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame38 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2b4a] text-[15px] whitespace-nowrap">0412-280-9538</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Frame">
          <path d={svgPaths.p36a12e80} id="Vector" stroke="var(--stroke-0, #1A2B4A)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame40 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2b4a] text-[15px] whitespace-nowrap">Plaza Venezuela, Caracas</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame35 />
      <Frame37 />
      <Frame39 />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-[#c9a84c] relative shrink-0 w-full" data-name="contact">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center pb-[31px] pt-[27px] px-[24px] relative size-full">
          <Frame33 />
          <Button2 />
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Frame">
          <path d={svgPaths.paed4cf0} id="Vector" stroke="var(--stroke-0, #C9A84C)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame44 />
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Marinela Masri</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame43 />
      <p className="[word-break:break-word] font-['Schibsted_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full opacity-60 relative shrink-0 text-[14px] text-white w-[min-content]">Defensa legal con ética y profesionalismo en Caracas, Venezuela. Más de 25 años de trayectoria impecable.</p>
    </div>
  );
}

function Frame45() {
  return <div className="h-[78px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start mb-[-75px] relative shrink-0 w-full" data-name="Frame">
      <Frame42 />
      <Frame45 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Schibsted_Grotesk:Regular',sans-serif] font-normal gap-[8px] items-center relative shrink-0 text-center text-white w-full" data-name="Frame">
      <p className="leading-[normal] opacity-50 relative shrink-0 text-[12px] w-full">Abogada Marinela Masri © 2026 - Caracas, Venezuela</p>
      <p className="leading-[1.4] opacity-30 relative shrink-0 text-[10px] w-full">Este sitio web es únicamente informativo y no constituye asesoría legal formal.</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 342 1" width="342">
            <line id="Line" opacity="0.1" stroke="var(--stroke-0, white)" x2="342" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame47 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0f1e36] relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col items-start pb-[40px] pt-[60px] px-[24px] relative size-full">
        <Frame41 />
        <Frame46 />
      </div>
    </div>
  );
}

export default function WebsiteMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="website-mobile">
      <Hero />
      <Areas />
      <About />
      <Trust />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}