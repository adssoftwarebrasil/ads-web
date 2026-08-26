import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  useEffect(() => {
    const selector = '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right';
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'));
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => {
      if (!el.classList.contains('visible')) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
