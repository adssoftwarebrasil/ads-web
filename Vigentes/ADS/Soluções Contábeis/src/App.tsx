import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import CtaImpostos from './components/CtaImpostos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Testimonials />
      <CtaImpostos />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
