import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingDiscount from './components/FloatingDiscount';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FloatingDiscount />
        <Stats />
        <section id="sobre">
          <About />
        </section>
        <section id="catalogo">
          <Services />
          <Catalog />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
