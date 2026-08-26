import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Equipment from './components/Equipment';
import Benefits from './components/Benefits';
import Process from './components/Process';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import ServiceAreas from './components/ServiceAreas';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Equipment />
      <Benefits />
      <Process />
      <CtaBanner />
      <Contact />
      <ServiceAreas />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
