import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <CallToAction />
      <Contact />
      <MapSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
