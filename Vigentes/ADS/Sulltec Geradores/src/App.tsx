import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import ServiceArea from './components/ServiceArea';
import SpecialistBanner from './components/SpecialistBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Clients />
        <Gallery />
        <ServiceArea />
        <SpecialistBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
