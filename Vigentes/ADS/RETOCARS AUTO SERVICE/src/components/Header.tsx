import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://storage.lucasmendes.dev/site-sp/retocars%2Fretocars-logo-sem-fundo.webp" 
              alt="Retocars Auto Service - Lanternagem e Pintura"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Serviços', 'Galeria', 'Sobre', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))}
                className="text-white hover:text-[#fafe05] transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fafe05] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          
            <a href="https://wa.me/5561982160800?text=Olá! Vim pelo site e gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#fafe05] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#fafe05]/90 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={20} />
            Orçamento Grátis
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-black/98 backdrop-blur-md transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {['Início', 'Serviços', 'Galeria', 'Sobre', 'Contato'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))}
              className="text-white hover:text-[#fafe05] transition-colors duration-300 font-medium text-lg text-left"
            >
              {item}
            </button>
          ))}
          
            <a href="https://wa.me/5561982160800?text=Olá! Vim pelo site e gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#fafe05] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#fafe05]/90 transition-all duration-300 mt-4"
          >
            <MessageCircle size={20} />
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}