import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Aqui é o pulo do gato: a tag main com o padding-top (pt) */}
      <main className="pt-28 md:pt-32">
        <Hero />
        <Stats />
        <Services />
        <Products />
        <About />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}