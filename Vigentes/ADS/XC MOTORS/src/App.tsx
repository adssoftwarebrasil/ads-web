import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] overflow-x-hidden">
      <Header />
      <Hero />
      <Catalog />
      <Services />
      <About />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
