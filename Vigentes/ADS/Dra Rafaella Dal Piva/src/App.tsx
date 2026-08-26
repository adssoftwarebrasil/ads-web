import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
