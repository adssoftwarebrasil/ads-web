import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/whatsapp';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl sm:text-3xl font-bold text-gray-900 hover:text-amber-700 transition-colors"
            >
              Marmoraria <span className="text-amber-700">Anhanguera</span>
            </button>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+556235973057"
              className="flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(62) 3597-3057</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-gray-700 hover:text-amber-700 transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+556235973057"
              className="flex items-center justify-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-all shadow-lg mt-2"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(62) 3597-3057</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
