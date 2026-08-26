import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Gallery from './components/Gallery';
import About from './components/About';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <About />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
