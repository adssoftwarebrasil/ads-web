import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Segments from './components/Segments';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Advantages />
      <Segments />
      <Sustainability />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
