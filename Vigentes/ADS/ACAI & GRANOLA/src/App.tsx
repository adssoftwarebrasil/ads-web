import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen transition-opacity duration-1000 opacity-100">
      <Header onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <Stats />
      <About />
      <Services />
      <Advantages />
      <Reasons />
      <Testimonials />
      <Contact />
      <Footer onNavigate={scrollToSection} />
      <WhatsAppFAB />
    </div>
  );
}
