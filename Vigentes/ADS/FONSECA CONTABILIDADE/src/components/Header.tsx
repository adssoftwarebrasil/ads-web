import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#C9A44C]/25'
          : 'bg-[#0A0A0A] border-b border-white/5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('inicio')}
          >
            <img 
              src="/logo-fonseca.png"
              alt="Fonseca Contabilidade Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
              } w-auto object-contain group-hover:scale-105`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 font-medium hover:text-[#E8CE8A] relative group transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A44C] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <a
              href="https://wa.me/5562999732807?text=Olá! Gostaria de falar com um especialista da Fonseca Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A44C] text-[#0A0A0A] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#E8CE8A] hover:shadow-lg hover:shadow-[#C9A44C]/30 transform hover:scale-105 transition-all duration-300"
            >
              Falar com Especialista
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 font-medium text-left px-4 py-3 hover:bg-white/10 hover:text-[#E8CE8A] rounded-lg transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/5562999732807?text=Olá! Gostaria de falar com um especialista da Fonseca Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A44C] text-[#0A0A0A] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#E8CE8A] transition-all duration-300 mt-2"
              >
                Falar com Especialista
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}