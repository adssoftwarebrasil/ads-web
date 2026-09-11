import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Units from './components/Units';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('.section-observe, .stagger-observe')
    );
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-w-0 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Units />
        <Services />
        <Testimonials />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
