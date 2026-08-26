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
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Flogomarca-leao-engrenagem-amarelo-preto-fundo-transparente.webp"
              alt="Lyon Trator Peças"
              className="h-14 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('produtos')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#1a1a18] hover:text-[#fbba00]' : 'text-white hover:text-[#fbba00]'
              }`}
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#1a1a18] hover:text-[#fbba00]' : 'text-white hover:text-[#fbba00]'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('unidades')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#1a1a18] hover:text-[#fbba00]' : 'text-white hover:text-[#fbba00]'
              }`}
            >
              Unidades
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#1a1a18] hover:text-[#fbba00]' : 'text-white hover:text-[#fbba00]'
              }`}
            >
              Contato
            </button>
            <a
              href="https://wa.me/5595984303773"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fbba00] text-[#1a1a18] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffd04d] transition-all hover:scale-105"
            >
              Solicitar Orçamento
            </a>
          </nav>

          <button
            className={`lg:hidden ${isScrolled ? 'text-[#1a1a18]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-[#1a1a18] font-medium hover:text-[#fbba00] text-left py-2"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-[#1a1a18] font-medium hover:text-[#fbba00] text-left py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('unidades')}
              className="text-[#1a1a18] font-medium hover:text-[#fbba00] text-left py-2"
            >
              Unidades
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#1a1a18] font-medium hover:text-[#fbba00] text-left py-2"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5595984303773"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fbba00] text-[#1a1a18] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#ffd04d] transition-all"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
