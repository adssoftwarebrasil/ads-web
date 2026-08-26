import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import About from './components/About';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Hours from './components/Hours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useScrollReveal } from './useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Products />
      <About />
      <Differentials />
      <Testimonials />
      <Hours />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
