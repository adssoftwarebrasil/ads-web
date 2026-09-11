import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Diferenciais from './components/Diferenciais';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useScrollReveal } from './useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-brand-white font-body">
      <Header />
      <Hero />
      <About />
      <Services />
      <Diferenciais />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
