import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const selectors = [
      '.animate-on-scroll',
      '.animate-on-scroll-left',
      '.animate-on-scroll-right',
    ].join(', ');

    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollAnimations();

  return (
    <div className="min-w-0 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
