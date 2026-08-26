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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img
            src="https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2FLOGO.png"
            alt="Armazém da Informática"
            className="h-12 md:h-16 w-auto"
          />

          <button
            className="lg:hidden text-[rgb(46,47,147)] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('produtos')}
                className="text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium"
              >
                Produtos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('avaliacoes')}
                className="text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium"
              >
                Avaliações
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('localizacao')}
                className="text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium"
              >
                Localização
              </button>
            </li>
            <li>
              <a
                href="http://wa.me/554191217176"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(0,168,89)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(0,148,79)] transition-all shadow-lg hover:shadow-xl"
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fadeIn">
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="block w-full text-left text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium py-2"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('produtos')}
                  className="block w-full text-left text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium py-2"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="block w-full text-left text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium py-2"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('avaliacoes')}
                  className="block w-full text-left text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium py-2"
                >
                  Avaliações
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('localizacao')}
                  className="block w-full text-left text-gray-700 hover:text-[rgb(0,168,89)] transition-colors font-medium py-2"
                >
                  Localização
                </button>
              </li>
              <li>
                <a
                  href="http://wa.me/554191217176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[rgb(0,168,89)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(0,148,79)] transition-all shadow-lg text-center"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
