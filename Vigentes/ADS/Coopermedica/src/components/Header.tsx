import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        isScrolled ? 'bg-white shadow-lg h-16 md:h-20' : 'bg-white/95 backdrop-blur-sm h-16 md:h-20'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <img
          src="https://storage.lucasmendes.dev/site-sp/coopermedicafoz%2Flogomarca-sem-fundo-removebg-preview.png"
          alt="Coopermédica"
          className="h-12 md:h-16 w-auto"
        />

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-primary transition-colors font-medium">
            Início
          </button>
          <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-primary transition-colors font-medium">
            Serviços
          </button>
          <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-primary transition-colors font-medium">
            Sobre Nós
          </button>
          <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-primary transition-colors font-medium">
            Contato
          </button>
          <a
            href="https://wa.me/5545988038430"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emergency text-white px-6 py-3 rounded-lg hover:bg-emergency/90 transition-all hover:shadow-lg font-semibold"
          >
            Fale Conosco
          </a>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in-up">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left py-2">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left py-2">
              Serviços
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left py-2">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left py-2">
              Contato
            </button>
            <a
              href="https://wa.me/5545988038430"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emergency text-white px-6 py-3 rounded-lg hover:bg-emergency/90 transition-all text-center font-semibold"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
