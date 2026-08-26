import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Location from './components/Location';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    const elements = document.querySelectorAll('.section-observe');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-white overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <About />
      <WhyChoose />
      <Reviews />
      <Contact />
      <Location />
      <CtaBanner />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
