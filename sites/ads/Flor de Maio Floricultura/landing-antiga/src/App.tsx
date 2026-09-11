import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos';
import Categorias from './components/Categorias';
import WhyUs from './components/WhyUs';
import Depoimentos from './components/Depoimentos';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Sobre />
      <Produtos />
      <Categorias />
      <WhyUs />
      <Depoimentos />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
