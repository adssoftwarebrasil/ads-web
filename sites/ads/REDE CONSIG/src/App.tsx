import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import WhyHire from './components/WhyHire';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header scrolled={scrolled} />
      <Hero />
      <Statistics />
      <About />
      <Services />
      <Advantages />
      <WhyHire />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
