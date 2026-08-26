import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Diferenciais from './components/Diferenciais';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.animate-on-scroll'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Produtos />
        <Sobre />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
