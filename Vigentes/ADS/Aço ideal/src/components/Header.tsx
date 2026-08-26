import { useState } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/acoideal%2Flogo.jpeg"
              alt="Aços Ideal Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('produtos')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium">
              Produtos
            </button>
            <button onClick={() => scrollToSection('cidades')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium">
              Cidades Atendidas
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium">
              Contato
            </button>

            <div className="flex flex-col items-end ml-4 border-l border-gray-300 pl-4">
              <a href="tel:3133335156" className="flex items-center gap-2 text-[rgb(238,51,52)] font-bold text-lg hover:text-[rgb(63,63,152)] transition-colors">
                <Phone size={20} />
                (31) 3333-5156
              </a>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <Clock size={12} />
                Seg-Sex 08h-17:20h | Sáb 08h-12h
              </div>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[88px] bg-white z-40 overflow-y-auto">
          <nav className="flex flex-col items-center gap-6 py-8">
            <button onClick={() => scrollToSection('inicio')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium text-lg">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium text-lg">
              Sobre
            </button>
            <button onClick={() => scrollToSection('produtos')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium text-lg">
              Produtos
            </button>
            <button onClick={() => scrollToSection('cidades')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium text-lg">
              Cidades Atendidas
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-[rgb(70,70,70)] hover:text-[rgb(238,51,52)] transition-colors font-medium text-lg">
              Contato
            </button>

            <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-gray-300">
              <a href="tel:3133335156" className="flex items-center gap-2 text-[rgb(238,51,52)] font-bold text-xl hover:text-[rgb(63,63,152)] transition-colors">
                <Phone size={24} />
                (31) 3333-5156
              </a>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Clock size={14} />
                Seg-Sex 08h-17:20h | Sáb 08h-12h
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
