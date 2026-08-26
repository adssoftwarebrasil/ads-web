import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/sj0bike%2Flogo.jpg"
              alt="SJ Bike Logo"
              className="h-12 sm:h-14 w-auto max-w-[180px] object-contain"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-[rgb(253,88,34)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/5571982803566"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-[rgb(253,88,34)] transition-colors duration-300"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              <span className="font-medium">(71) 98280-3566</span>
            </a>
            <button
              onClick={() => handleNav('contato')}
              className="bg-[rgb(253,88,34)] text-white px-6 py-2 rounded hover:bg-[rgb(230,70,20)] transition-all duration-300 font-medium"
            >
              Fale Conosco
            </button>
          </div>
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-[rgb(253,88,34)] transition-colors duration-300 font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5571982803566"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-[rgb(253,88,34)] transition-colors duration-300"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              <span className="font-medium">(71) 98280-3566</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
