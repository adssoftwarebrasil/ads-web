import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.gallery-item, .review-card, [data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.style.animationDelay || '0ms';
            el.style.transition = `opacity 0.6s ease-out ${delay}, transform 0.6s ease-out ${delay}`;
            el.style.opacity = '1';
            el.style.transform = 'none';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Reviews />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
