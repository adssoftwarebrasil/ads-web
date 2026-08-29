import { Phone, Instagram, Menu, X, Handshake } from 'lucide-react';
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
    <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex-shrink-0 transition-transform hover:scale-105"
          >
            <img
              src="https://acsbrasilbahia.com.br/wp-content/uploads/2019/10/Logotipo-21.png"
              alt="ACS Brasil Consórcios"
              width="178"
              height="80"
              loading="eager"
              fetchpriority="high"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 flex-1 justify-center">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#57a82d] transition-colors font-medium px-3 py-2 text-sm xl:text-base rounded-lg hover:bg-gray-50"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-[#57a82d] transition-colors font-medium px-3 py-2 text-sm xl:text-base rounded-lg hover:bg-gray-50 whitespace-nowrap"
            >
              Linha de Crédito
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-700 hover:text-[#57a82d] transition-colors font-medium px-3 py-2 text-sm xl:text-base rounded-lg hover:bg-gray-50 whitespace-nowrap"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('aposentados')}
              className="text-gray-700 hover:text-[#57a82d] transition-colors font-medium px-3 py-2 text-sm xl:text-base rounded-lg hover:bg-gray-50 whitespace-nowrap"
            >
              Aposentadoria imobiliária
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-[#57a82d] transition-colors font-medium px-3 py-2 text-sm xl:text-base rounded-lg hover:bg-gray-50"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-[#57a82d] transition-colors font-medium px-3 py-2 text-sm xl:text-base rounded-lg hover:bg-gray-50 whitespace-nowrap"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#57a82d] transition-colors font-medium px-3 py-2 text-sm xl:text-base rounded-lg hover:bg-gray-50"
            >
              Contato
            </button>
          </nav>

          {/* Action Buttons Desktop */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a 
              href="https://wa.me/5571982041655"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#57a82d] hover:bg-[#4a9126] text-white px-5 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-sm whitespace-nowrap"
            >
              <Phone size={18} />
              <span>(71) 98204-1655</span>
            </a>
            <button
              onClick={() => scrollToSection('parceiro')}
              className="flex items-center gap-2 bg-gradient-to-r from-[#fdc014] to-[#f5b800] text-white px-5 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-bold text-sm whitespace-nowrap"
            >
              <Handshake size={18} />
              <span>Seja Parceiro</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#57a82d] transition-colors p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-[#57a82d] transition-colors font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-700 hover:text-[#57a82d] transition-colors font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg"
              >
                Linha de Crédito
              </button>
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-left text-gray-700 hover:text-[#57a82d] transition-colors font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('aposentados')}
                className="text-left text-gray-700 hover:text-[#57a82d] transition-colors font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg"
              >
                Aposentadoria imobiliária
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-gray-700 hover:text-[#57a82d] transition-colors font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-[#57a82d] transition-colors font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-[#57a82d] transition-colors font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg"
              >
                Contato
              </button>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t mt-2">
                <button
                  onClick={() => scrollToSection('parceiro')}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#fdc014] to-[#f5b800] text-white px-5 py-3.5 rounded-lg hover:shadow-xl transition-all font-bold"
                >
                  <Handshake size={22} />
                  <span>Seja Parceiro</span>
                </button>

                <a 
                  href="https://wa.me/5571982041655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#57a82d] hover:bg-[#4a9126] text-white px-5 py-3.5 rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  <Phone size={22} />
                  <span>(71) 98204-1655</span>
                </a>

                <a 
                  href="https://www.instagram.com/acsbrasilconsorcios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white px-5 py-3.5 rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  <Instagram size={22} />
                  <span>@acsbrasilconsorcios</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}