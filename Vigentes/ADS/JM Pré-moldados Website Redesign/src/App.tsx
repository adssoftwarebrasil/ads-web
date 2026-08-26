import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Products />
      <Advantages />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
