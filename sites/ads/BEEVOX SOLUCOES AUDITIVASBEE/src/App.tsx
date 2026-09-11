import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AparelhosAuditivos from './pages/services/AparelhosAuditivos';
import ServicosLaboratoriais from './pages/services/ServicosLaboratoriais';
import Exames from './pages/services/Exames';
import ImplantesAuditivos from './pages/services/ImplantesAuditivos';
import ConsultoriaAuditiva from './pages/services/ConsultoriaAuditiva';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Testimonials />
      <Gallery />
      <Contact />
      <Map />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/aparelhos-auditivos" element={<AparelhosAuditivos />} />
        <Route path="/servicos/laboratorial" element={<ServicosLaboratoriais />} />
        <Route path="/servicos/exames" element={<Exames />} />
        <Route path="/servicos/implantes-auditivos" element={<ImplantesAuditivos />} />
        <Route path="/servicos/consultoria-auditiva" element={<ConsultoriaAuditiva />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
