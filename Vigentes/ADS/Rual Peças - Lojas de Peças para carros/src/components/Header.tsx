import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

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

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'Produtos', id: 'produtos' },
    { label: 'Localização', id: 'localizacao' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 animate-fade-in ${
        isScrolled ? 'h-[70px] shadow-lg' : 'h-20 shadow-md'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://storage.lucasmendes.dev/site-sp/rualpecas%2Flogomarca-sem-fundo.webp"
            alt="Rual Peças - Autopeças em Foz do Iguaçu"
            className={`transition-all duration-300 ${
              isScrolled ? 'h-[45px]' : 'h-[50px]'
            }`}
            loading="eager"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[#0a0d00] hover:text-[#2b2d91] transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        
          <a href="https://wa.me/5545984268490?text=Olá! Vim do site da Rual Peças e gostaria de mais informações."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: '#fdf309', color: '#0a0d00' }}
        >
          <MessageCircle size={20} />
          <span>Fale no WhatsApp</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden"
          style={{ color: '#2b2d91' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-up">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-[#0a0d00] hover:text-[#2b2d91] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            
              <a href="https://wa.me/5545984268490?text=Olá! Vim do site da Rual Peças e gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold mt-4"
              style={{ backgroundColor: '#fdf309', color: '#0a0d00' }}
            >
              <MessageCircle size={20} />
              <span>Fale no WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}