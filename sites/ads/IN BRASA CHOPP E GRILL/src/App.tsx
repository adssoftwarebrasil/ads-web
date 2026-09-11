import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observa o proprio no e seus descendentes; re-observar e no-op.
    const observe = (root: Element | Document) => {
      if (root instanceof Element && root.classList.contains('animate-reveal')) {
        observer.observe(root);
      }
      root.querySelectorAll('.animate-reveal').forEach((el) => observer.observe(el));
    };

    observe(document);

    // Trocar de categoria no cardapio monta cards novos: sem isso eles
    // nascem com opacity 0 e nunca recebem a classe .visible.
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observe(node as Element);
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
