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
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNav('inicio')}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2Flogo.png"
              alt="Rede Construcerto"
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-[#253579]"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e8221a] text-white px-6 py-2 rounded-full font-medium hover:bg-[#c91d16] transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </a>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg text-gray-700"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-[#253579] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e8221a] text-white px-6 py-2 rounded-full font-medium text-center hover:bg-[#c91d16] transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
