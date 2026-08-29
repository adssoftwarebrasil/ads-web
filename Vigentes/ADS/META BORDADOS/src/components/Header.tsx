import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2Fcopia.png"
              alt="Metahome Logo"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#F7D061] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#F7D061] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('metabordados')} className="hover:text-[#F7D061] transition-colors">
              Bordados
            </button>
            <button onClick={() => scrollToSection('metahome')} className="hover:text-[#F7D061] transition-colors">
              Metahome
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#F7D061] transition-colors">
              Contato
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 hover:text-[#F7D061] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-[#F7D061] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('metabordados')} className="text-left py-2 hover:text-[#F7D061] transition-colors">
              Bordados
            </button>
            <button onClick={() => scrollToSection('metahome')} className="text-left py-2 hover:text-[#F7D061] transition-colors">
              Metahome
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-[#F7D061] transition-colors">
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
