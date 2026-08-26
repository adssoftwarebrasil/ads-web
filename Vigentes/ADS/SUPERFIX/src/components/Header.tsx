import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/supersfix%2FLogoSemFundo.png"
              alt="SUPERFIX Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#0b77aa] font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('catalogo')}
              className="text-gray-700 hover:text-[#0b77aa] font-medium transition-colors"
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-[#0b77aa] font-medium transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#0b77aa] font-medium transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/5566999029696?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20SUPERFIX."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0b77aa] text-white px-6 py-3 rounded-lg hover:bg-[#095f88] transition-colors font-medium"
            >
              <Phone size={20} />
              <span>(66) 99902-9696</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-[#0b77aa] font-medium transition-colors text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('catalogo')}
                className="text-gray-700 hover:text-[#0b77aa] font-medium transition-colors text-left"
              >
                Catálogo
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-[#0b77aa] font-medium transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-[#0b77aa] font-medium transition-colors text-left"
              >
                Contato
              </button>
              <a
                href="https://wa.me/5566999029696?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20SUPERFIX."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0b77aa] text-white px-6 py-3 rounded-lg hover:bg-[#095f88] transition-colors font-medium justify-center"
              >
                <Phone size={20} />
                <span>(66) 99902-9696</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
