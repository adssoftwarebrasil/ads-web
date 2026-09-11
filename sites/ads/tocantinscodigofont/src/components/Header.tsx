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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fimg%2Flogo-sem-fundo.png"
              alt="Tamboraria Tocantins"
              className="h-14 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:6336023333"
              className="flex items-center space-x-2 text-[rgb(51,71,144)] hover:text-[rgb(78,128,196)] transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(63) 3602-3333</span>
            </a>
            <a
              href="https://wa.me/556392280772"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(51,71,144)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(78,128,196)] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
            >
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium text-left py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium text-left py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium text-left py-2"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium text-left py-2"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[rgb(45,62,84)] hover:text-[rgb(78,128,196)] transition-colors duration-200 font-medium text-left py-2"
            >
              Contato
            </button>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <a
                href="tel:6336023333"
                className="flex items-center space-x-2 text-[rgb(51,71,144)] hover:text-[rgb(78,128,196)] transition-colors duration-200 py-2"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(63) 3602-3333</span>
              </a>
              <a
                href="https://wa.me/556392280772"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(51,71,144)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(78,128,196)] transition-all duration-200 font-semibold text-center shadow-lg"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
