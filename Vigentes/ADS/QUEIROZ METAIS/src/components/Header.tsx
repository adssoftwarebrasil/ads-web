import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection } from '../constants';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/queirozmetais%2Flogo.png"
              alt="Queiroz Metais"
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:6235938870"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              (62) 3593-8870
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-primary"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="block w-full text-left text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:6235938870"
            className="block text-gray-700 hover:text-primary font-medium transition-colors duration-200"
          >
            (62) 3593-8870
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary text-white px-6 py-2 rounded-full font-medium text-center hover:bg-primary-dark transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
