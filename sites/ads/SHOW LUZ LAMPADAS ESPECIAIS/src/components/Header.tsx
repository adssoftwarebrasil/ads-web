import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        isScrolled ? 'bg-[#010510]/95 shadow-lg backdrop-blur-sm border-b border-[#00a6ff]/20' : 'bg-[#010510] border-b border-[#00a6ff]/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=showluz%2FGroup_116-removebg-preview.png&version_id=null"
              alt="Show Luz Goiânia Logo"
              className="h-14 md:h-16 w-auto"
              loading="eager"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-[#fff457] transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-gray-300 hover:text-[#fff457] transition-colors duration-200 font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-300 hover:text-[#fff457] transition-colors duration-200 font-medium"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#fff457] text-[#010510] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffe621] transition-all duration-300 hover:scale-105"
            >
              Fale Conosco
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#fff457] hover:text-[#00a6ff] transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-[#010510] border-t border-[#00a6ff]/20">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left py-3 text-gray-300 hover:text-[#fff457] transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="block w-full text-left py-3 text-gray-300 hover:text-[#fff457] transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left py-3 text-gray-300 hover:text-[#fff457] transition-colors font-medium"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="w-full bg-[#fff457] text-[#010510] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffe621] transition-all"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
