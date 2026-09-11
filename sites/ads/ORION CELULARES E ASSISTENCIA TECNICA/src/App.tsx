import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Assistencia from './components/Assistencia';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Accessories from './components/Accessories';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useRevealOnScroll } from './lib/useRevealOnScroll';

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Assistencia />
      <Testimonials />
      <Gallery />
      <Accessories />
      <Contact />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
