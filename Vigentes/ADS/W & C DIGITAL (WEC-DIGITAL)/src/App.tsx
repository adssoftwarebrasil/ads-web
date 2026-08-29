import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import CTA from './components/CTA';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.opacity-0'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'none';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Produtos />
        <Sobre />
        <CTA />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
