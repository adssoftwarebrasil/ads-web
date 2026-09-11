import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import Products from './components/Products';
import InstagramSection from './components/InstagramSection';
import Features from './components/Features';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.opacity-0');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <InfoBar />
      <Products />
      <InstagramSection />
      <Features />
      <Coverage />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
