import { Menu, X } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(11,9,48)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Fimg%2Flogo-sem-fundo.webp"
              alt="Arca Comunicação"
              className="h-12 sm:h-16 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('servicos')} className="text-[rgb(254,254,254)] hover:text-[rgb(255,204,44)] transition-colors duration-300 font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('diferenciais')} className="text-[rgb(254,254,254)] hover:text-[rgb(255,204,44)] transition-colors duration-300 font-medium">
              Diferenciais
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-[rgb(254,254,254)] hover:text-[rgb(255,204,44)] transition-colors duration-300 font-medium">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-[rgb(254,254,254)] hover:text-[rgb(255,204,44)] transition-colors duration-300 font-medium">
              Contato
            </button>
            <a
              href="http://wa.me/553491008921"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(255,204,44)] text-[rgb(11,9,48)] px-6 py-2 rounded-full font-bold hover:bg-[rgb(210,175,112)] transition-all duration-300 transform hover:scale-105"
            >
              Orçamento Grátis
            </a>
          </nav>

          <button
            className="lg:hidden text-[rgb(254,254,254)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('servicos')} className="text-[rgb(254,254,254)] hover:text-[rgb(255,204,44)] transition-colors duration-300 text-left py-2">
                Serviços
              </button>
              <button onClick={() => scrollToSection('diferenciais')} className="text-[rgb(254,254,254)] hover:text-[rgb(255,204,44)] transition-colors duration-300 text-left py-2">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-[rgb(254,254,254)] hover:text-[rgb(255,204,44)] transition-colors duration-300 text-left py-2">
                Portfólio
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-[rgb(254,254,254)] hover:text-[rgb(255,204,44)] transition-colors duration-300 text-left py-2">
                Contato
              </button>
              <a
                href="http://wa.me/553491008921"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(255,204,44)] text-[rgb(11,9,48)] px-6 py-3 rounded-full font-bold hover:bg-[rgb(210,175,112)] transition-all duration-300 text-center"
              >
                Orçamento Grátis
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}