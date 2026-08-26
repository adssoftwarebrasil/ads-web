import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Differentials />
      <Gallery />
      <CtaBanner />
      <Contact />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
