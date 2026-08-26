import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY, scrollToSection } from '../lib/site';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src="https://storage.lucasmendes.dev/site-sp/expressocarse/logo.png"
            alt="Expresso Car"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-sm font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
          >
            <Phone className="lucide lucide-phone" width={16} height={16} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
          >
            WHATSAPP
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-gray-800 hover:text-red-600 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="lucide lucide-x" width={24} height={24} />
          ) : (
            <Menu className="lucide lucide-menu" width={24} height={24} />
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-sm font-medium text-gray-800 hover:text-red-600 transition-colors duration-200 tracking-wide py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors py-2"
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30 text-center mt-2"
            >
              WHATSAPP
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
