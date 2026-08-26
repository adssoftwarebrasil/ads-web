import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Structure from './components/Structure';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import WhatsAppModal from './components/WhatsAppModal';

export default function App() {
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);

  const openWhatsApp = () => setWhatsAppOpen(true);
  const closeWhatsApp = () => setWhatsAppOpen(false);

  return (
    <div className="min-h-screen">
      <Header onWhatsAppClick={openWhatsApp} />
      <Hero onWhatsAppClick={openWhatsApp} />
      <About />
      <Services onWhatsAppClick={openWhatsApp} />
      <Stats />
      <Structure />
      <Testimonials />
      <CtaBanner onWhatsAppClick={openWhatsApp} />
      <Contact />
      <Footer />
      <WhatsAppFab onClick={openWhatsApp} />
      <WhatsAppModal isOpen={whatsAppOpen} onClose={closeWhatsApp} />
    </div>
  );
}
