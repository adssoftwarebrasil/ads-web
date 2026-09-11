import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import About from './components/About';
import Differentials from './components/Differentials';
import Products from './components/Products';
import Gallery from './components/Gallery';
import WhyChoose from './components/WhyChoose';
import Advantages from './components/Advantages';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const ImperioDasBombasLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome');
    const whatsapp = formData.get('whatsapp');
    const email = formData.get('email');
    const assunto = formData.get('assunto');
    const mensagem = formData.get('mensagem');

    const mensagemFormatada = `*Novo contato do site*%0A%0A*Nome:* ${nome}%0A*WhatsApp:* ${whatsapp}%0A*E-mail:* ${email}%0A*Assunto:* ${assunto}%0A*Mensagem:* ${mensagem}`;

    window.open(
      `https://wa.me/5591980252240?text=${mensagemFormatada}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrolled={scrolled}
      />
      <Hero />
      <FeaturesGrid />
      <About />
      <Differentials />
      <Products />
      <Gallery />
      <WhyChoose />
      <Advantages />
      <Statistics />
      <Testimonials />
      <Contact onSubmit={handleFormSubmit} />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ImperioDasBombasLandingPage;
