import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Equipment from './components/Equipment';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useReveal } from './useReveal';

export default function App() {
  useReveal();

  return (
    <div className="font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <About />
        <Portfolio />
        <Equipment />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
