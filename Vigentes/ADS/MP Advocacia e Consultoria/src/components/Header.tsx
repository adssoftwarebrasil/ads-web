import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(249,253,249)] shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNav('hero')}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/mp%20advocacia/img/logo-sem-texto.webp"
              alt="MP Advocacia Logo"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[rgb(3,74,41)]">MP Assessoria Jurídica</h1>
              <p className="text-xs text-[rgb(146,118,47)]">Especializada</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNav('sobre')}
              className="text-[rgb(8,16,20)] hover:text-[rgb(3,74,41)] transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNav('servicos')}
              className="text-[rgb(8,16,20)] hover:text-[rgb(3,74,41)] transition-colors font-medium"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => handleNav('depoimentos')}
              className="text-[rgb(8,16,20)] hover:text-[rgb(3,74,41)] transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => handleNav('contato')}
              className="text-[rgb(8,16,20)] hover:text-[rgb(3,74,41)] transition-colors font-medium"
            >
              Contato
            </button>
            <a
              href="http://wa.me/556281931078"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(3,74,41)] text-[rgb(249,253,249)] px-6 py-2.5 rounded-lg hover:bg-[rgb(46,81,35)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              <Phone className="lucide lucide-phone w-4 h-4" />
              <span>(62) 98193-1078</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[rgb(3,74,41)] hover:text-[rgb(46,81,35)] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x w-6 h-6" />
            ) : (
              <Menu className="lucide lucide-menu w-6 h-6" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-3">
            <button
              onClick={() => handleNav('sobre')}
              className="text-left text-[rgb(8,16,20)] hover:text-[rgb(3,74,41)] transition-colors font-medium py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNav('servicos')}
              className="text-left text-[rgb(8,16,20)] hover:text-[rgb(3,74,41)] transition-colors font-medium py-2"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => handleNav('depoimentos')}
              className="text-left text-[rgb(8,16,20)] hover:text-[rgb(3,74,41)] transition-colors font-medium py-2"
            >
              Depoimentos
            </button>
            <button
              onClick={() => handleNav('contato')}
              className="text-left text-[rgb(8,16,20)] hover:text-[rgb(3,74,41)] transition-colors font-medium py-2"
            >
              Contato
            </button>
            <a
              href="http://wa.me/556281931078"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[rgb(3,74,41)] text-[rgb(249,253,249)] px-6 py-2.5 rounded-lg hover:bg-[rgb(46,81,35)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              <Phone className="lucide lucide-phone w-4 h-4" />
              <span>(62) 98193-1078</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
