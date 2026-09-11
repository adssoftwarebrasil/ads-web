import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import WhyChoose from './components/WhyChoose';
import Servicos from './components/Servicos';
import CTASection from './components/CTASection';
import Vantagens from './components/Vantagens';
import Stats from './components/Stats';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F1F1FF]">
      <Header />
      <Hero />
      <Sobre />
      <WhyChoose />
      <Servicos />
      <CTASection />
      <Vantagens />
      <Stats />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
