import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.intersection-animate, .intersection-animate-left, .intersection-animate-right'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <HowItWorks />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
