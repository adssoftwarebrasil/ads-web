import Header from './components/Header';
import Hero from './components/Hero';
import AreasAtendimento from './components/AreasAtendimento';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Metodologia from './components/Metodologia';
import Beneficios from './components/Beneficios';
import CTA from './components/CTA';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AreasAtendimento />
      <Servicos />
      <Sobre />
      <Metodologia />
      <Beneficios />
      <CTA />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
