import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { theme } from '../styles/theme';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mensagem padrão para o WhatsApp codificada
  const whatsappUrl = "https://wa.me/5562991093647?text=Ol%C3%A1%2C%20vim%20pelo%20Google%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-3' : 'bg-white/95 py-4'
      }`}
      style={{ backdropFilter: 'blur(10px)', borderBottom: `2px solid ${theme.colors.beigeSand}` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2FLogomarca.png"
              alt="Empório do Deck"
              className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
              style={{ maxWidth: isScrolled ? '160px' : '200px' }}
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="nav-link">Início</button>
            <button onClick={() => scrollToSection('produtos')} className="nav-link">Produtos</button>
            <button onClick={() => scrollToSection('sobre')} className="nav-link">Sobre Nós</button>
            <button onClick={() => scrollToSection('galeria')} className="nav-link">Galeria</button>
            <button onClick={() => scrollToSection('contato')} className="nav-link">Contato</button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+5562991093647"
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold">(62) 99109-3647</span>
            </a>
            <a
              href={whatsappUrl}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} color={theme.colors.primary} /> : <Menu size={28} color={theme.colors.primary} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="nav-link-mobile">Início</button>
              <button onClick={() => scrollToSection('produtos')} className="nav-link-mobile">Produtos</button>
              <button onClick={() => scrollToSection('sobre')} className="nav-link-mobile">Sobre Nós</button>
              <button onClick={() => scrollToSection('galeria')} className="nav-link-mobile">Galeria</button>
              <button onClick={() => scrollToSection('contato')} className="nav-link-mobile">Contato</button>
              <a
                href="tel:+5562991093647"
                className="flex items-center space-x-2 text-primary py-2"
              >
                <Phone size={20} />
                <span className="font-semibold">(62) 99109-3647</span>
              </a>
              <a
                href={whatsappUrl}
                className="btn-primary text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}