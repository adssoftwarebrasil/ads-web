import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[100vw]">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <ServiceArea />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
