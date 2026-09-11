import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Maintenance from './components/Maintenance';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import CtaParallax from './components/CtaParallax';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Maintenance />
      <BeforeAfter />
      <Gallery />
      <CtaParallax />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
