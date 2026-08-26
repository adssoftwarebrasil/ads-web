import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Insurers from './components/Insurers';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#04152D] overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Insurers />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
