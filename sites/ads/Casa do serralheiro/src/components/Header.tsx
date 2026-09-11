import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY, LOGO_URL, scrollToSection } from '../constants';

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
    <header className="fixed top-0 left-0 right-0 bg-[rgb(122,21,25)] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 bg-[rgb(122,21,25) p-2 rounded-lg">
            <img
              src={LOGO_URL}
              alt="Casa do Serralheiro"
              className="h-8 w-auto sm:h-10 lg:h-12"
              loading="eager"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-gray-100 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={PHONE_TEL ? `tel:${PHONE_TEL}` : undefined}
              className="flex items-center space-x-2 text-white hover:text-gray-100 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[rgb(122,21,25)] px-6 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium"
            >
              Orçamento
            </a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[rgb(122,21,25)] border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left text-white hover:text-gray-100 transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center space-x-2 text-white py-2"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-[rgb(122,21,25)] px-6 py-2 rounded-lg text-center hover:bg-gray-100 transition-all duration-300 font-medium"
            >
              Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
