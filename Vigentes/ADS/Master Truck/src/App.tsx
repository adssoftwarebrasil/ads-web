import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CoverageArea from './components/CoverageArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="bg-[#010101] text-[#FFFFFD] overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <Testimonials />
      <CoverageArea />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
