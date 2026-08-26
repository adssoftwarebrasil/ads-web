import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Structure from './components/Structure';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Structure />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
