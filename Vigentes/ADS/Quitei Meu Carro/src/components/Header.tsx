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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Offset para compensar o header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Simulador', id: 'simulador' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Política de Privacidade', id: 'privacidade' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('inicio')}
            className="flex-shrink-0"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/quiteimeucarro%2Flogomarca-sem-fundo.webp"
              alt="Quite Meu Carro"
              className="h-11 md:h-12 w-auto transition-all duration-300 hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <button
            onClick={() => scrollToSection('simulador')}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          >
            Simulação Gratuita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100">
          <nav className="flex flex-col px-6 py-6 gap-1 max-w-7xl mx-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('simulador')}
              className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              Simulação Gratuita
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}