import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Keywords from './components/Keywords';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <WhyChoose />
      <Keywords />
      <Instagram />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
