import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useScrollReveal } from './hooks';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
