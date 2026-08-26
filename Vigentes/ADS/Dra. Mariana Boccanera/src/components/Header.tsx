import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, IMG, scrollToSection } from '../constants';

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
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white"
      style={{ height: '80px' }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={IMG.logo}
            alt="Dra. Mariana Boccanera"
            className="h-[50px] md:h-[60px] w-auto object-contain"
          />
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-gray-600 hover:text-[rgb(218,185,165)] transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-[rgb(218,185,165)] text-white rounded-full hover:bg-[rgb(198,165,145)] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
          >
            <Phone
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              className="lucide lucide-phone "
            />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X width="28" height="28" className="lucide lucide-x " />
            ) : (
              <Menu
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                className="lucide lucide-menu "
              />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-gray-600 hover:text-[rgb(218,185,165)] transition-colors duration-300 font-medium text-sm uppercase tracking-wide py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-6 py-2.5 bg-[rgb(218,185,165)] text-white rounded-full hover:bg-[rgb(198,165,145)] transition-all duration-300 shadow-md font-medium"
            >
              <Phone width="18" height="18" className="lucide lucide-phone " />
              <span>WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
