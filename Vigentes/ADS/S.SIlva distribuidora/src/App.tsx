import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-white antialiased">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Products />
        <Differentials />
        <Testimonials />
        <CtaBanner />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
