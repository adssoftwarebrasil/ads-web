import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Menu from './components/Menu';
import Advantages from './components/Advantages';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen transition-opacity duration-1000 opacity-100">
      <Header onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <Features />
      <About />
      <Menu />
      <Advantages />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer onNavigate={scrollToSection} />
      <a
        href="https://wa.me/5534996450016"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 animate-pulse hover:animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} className="text-white" />
      </a>
    </div>
  );
}
