import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection } from '../constants';

const NAV_ITEMS: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Sobre', id: 'sobre' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Arthur%20Cortinas%2Fnilsoncortinas%2Fimage%2082.png&version_id=null"
              alt="Arthur Cortinas"
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-[rgb(218,165,33)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(218,165,33)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(198,145,13)] transition-all duration-300 font-medium flex items-center gap-2"
            >
              <Phone className="lucide lucide-phone w-4 h-4" />
              Contato
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="lucide lucide-menu w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4">
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(218,165,33)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(218,165,33)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(198,145,13)] transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              <Phone className="lucide lucide-phone w-4 h-4" />
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
