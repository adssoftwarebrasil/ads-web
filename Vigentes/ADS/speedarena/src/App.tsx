import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BenefitsBar from './components/BenefitsBar';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import InstagramGallery from './components/InstagramGallery';
import Schedule from './components/Schedule';
import Location from './components/Location';
import CTA from './components/CTA';
import Values from './components/Values';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Aulas from './pages/Aulas';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Gerenciar navegação através de hash na URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove o #
      setCurrentPage(hash || 'home');
    };

    // Verificar hash inicial
    handleHashChange();

    // Escutar mudanças no hash
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Scroll to top quando mudar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <BenefitsBar />
            <About />
            <Services />
            <Gallery />
            <InstagramGallery />
            <Schedule />
            <Location />
            <CTA />
            <Values />
          </>
        ) : currentPage === 'aulas' ? (
          <Aulas />
        ) : (
          // Fallback para página não encontrada
          <>
            <Hero />
            <BenefitsBar />
            <About />
            <Services />
            <Gallery />
            <InstagramGallery />
            <Schedule />
            <Location />
            <CTA />
            <Values />
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;