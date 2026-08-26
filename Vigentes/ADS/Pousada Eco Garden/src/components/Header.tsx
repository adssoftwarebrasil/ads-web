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
        isScrolled
          ? 'bg-[#cbd01c] shadow-lg'
          : 'bg-[#cbd01c]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img
            src="https://storage.lucasmendes.dev/site-sp/eco-garden%2Flogomarca-sem-fundo.png"
            alt="Eco Garden"
            className="h-12 md:h-16 object-contain cursor-pointer"
            onClick={() => scrollToSection('hero')}
          />

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] transition-colors font-semibold text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('acomodacoes')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] transition-colors font-semibold text-base"
            >
              Acomodações
            </button>
            <button
              onClick={() => scrollToSection('estrutura')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] transition-colors font-semibold text-base"
            >
              Estrutura
            </button>
            <button
              onClick={() => scrollToSection('localizacao')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] transition-colors font-semibold text-base"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] transition-colors font-semibold text-base"
            >
              Contato
            </button>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden text-[#2a2d1a] hover:text-[#fbfcf2] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#cbd01c] border-t-2 border-[#2a2d1a]/20 animate-fadeIn">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] hover:bg-[#2a2d1a]/10 transition-all font-semibold text-left py-3 px-4 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('acomodacoes')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] hover:bg-[#2a2d1a]/10 transition-all font-semibold text-left py-3 px-4 rounded-lg"
            >
              Acomodações
            </button>
            <button
              onClick={() => scrollToSection('estrutura')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] hover:bg-[#2a2d1a]/10 transition-all font-semibold text-left py-3 px-4 rounded-lg"
            >
              Estrutura
            </button>
            <button
              onClick={() => scrollToSection('localizacao')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] hover:bg-[#2a2d1a]/10 transition-all font-semibold text-left py-3 px-4 rounded-lg"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#2a2d1a] hover:text-[#fbfcf2] hover:bg-[#2a2d1a]/10 transition-all font-semibold text-left py-3 px-4 rounded-lg"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}