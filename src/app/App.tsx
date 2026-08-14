import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar, Footer } from "./shared";
import HomePage from "./pages/HomePage";
import SobreMarinelaPage from "./pages/SobreMarinelaPage";
import ServiciosPage from "./pages/ServiciosPage";
import {
  DerechoCivilPage,
  DerechoMercantilPage,
  DerechoLaboralPage,
  DerechoFamiliaPage,
  BienesInmueblesPage,
  ContratosDocumentosPage,
} from "./pages/ServicePage";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-6 text-center">
      <p className="font-['Instrument_Serif',serif] text-[#1a2b4a] text-[48px] md:text-[72px] leading-none">404</p>
      <p className="font-['Schibsted_Grotesk',sans-serif] text-[#4b5563] text-[16px] md:text-[18px]">
        Página no encontrada
      </p>
      <a
        href="/"
        className="font-['Schibsted_Grotesk',sans-serif] font-semibold text-[#c9a84c] text-[15px] underline hover:text-[#1a2b4a] transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen w-full overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"                            element={<HomePage />} />
            <Route path="/sobre-marinela-masri"        element={<SobreMarinelaPage />} />
            <Route path="/sobre-marinela-masri/"       element={<SobreMarinelaPage />} />
            <Route path="/servicios"                   element={<ServiciosPage />} />
            <Route path="/servicios/"                  element={<ServiciosPage />} />
            <Route path="/derecho-civil"                element={<DerechoCivilPage />} />
            <Route path="/derecho-civil/"               element={<DerechoCivilPage />} />
            <Route path="/derecho-mercantil"            element={<DerechoMercantilPage />} />
            <Route path="/derecho-mercantil/"           element={<DerechoMercantilPage />} />
            <Route path="/derecho-laboral"              element={<DerechoLaboralPage />} />
            <Route path="/derecho-laboral/"             element={<DerechoLaboralPage />} />
            <Route path="/derecho-familia-divorcios"    element={<DerechoFamiliaPage />} />
            <Route path="/derecho-familia-divorcios/"   element={<DerechoFamiliaPage />} />
            <Route path="/bienes-inmuebles"             element={<BienesInmueblesPage />} />
            <Route path="/bienes-inmuebles/"            element={<BienesInmueblesPage />} />
            <Route path="/contratos-documentos"         element={<ContratosDocumentosPage />} />
            <Route path="/contratos-documentos/"        element={<ContratosDocumentosPage />} />
            <Route path="*"                            element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
