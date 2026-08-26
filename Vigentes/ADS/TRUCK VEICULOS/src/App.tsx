import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Estoque from './components/Estoque';
import Sobre from './components/Sobre';
import CTA from './components/CTA';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import useScrollReveal from './useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#010101] text-[#fefefe] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Estoque />
        <Sobre />
        <CTA />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
