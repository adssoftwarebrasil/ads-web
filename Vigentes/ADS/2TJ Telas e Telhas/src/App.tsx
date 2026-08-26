import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen transition-opacity duration-1000 opacity-100">
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
