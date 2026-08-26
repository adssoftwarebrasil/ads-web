import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Differentials />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
