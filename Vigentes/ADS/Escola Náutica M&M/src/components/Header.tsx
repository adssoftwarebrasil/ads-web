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

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'Cursos', id: 'cursos' },
    { label: 'Galeria', id: 'galeria' },
    { label: 'Localização', id: 'localizacao' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#26367e] shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fimgi_1_341829618_528338402836110_797617768216956945_n-removebg-preview.png"
              alt="Escola Náutica MM"
              className="h-16 lg:h-20 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#0caff0] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => window.open('https://wa.me/5545999207671', '_blank')}
            className="hidden lg:block bg-[#c6272f] hover:bg-[#0caff0] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Fale Conosco
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#26367e] border-t border-white border-opacity-20">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#0caff0] transition-colors duration-300 font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                window.open('https://wa.me/5545999207671', '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="bg-[#c6272f] hover:bg-[#0caff0] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Fale Conosco
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
