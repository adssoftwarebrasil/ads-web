import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import { NAV_ITEMS, PHONE, TEL, WHATSAPP_BASE, LOGO } from '../data';
import { scrollToId, useScrolled } from '../hooks';

export default function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNav('inicio');
            }}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img
              src={LOGO}
              alt="Meta Contabilidade"
              className={`h-10 md:h-14 w-auto object-contain transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white drop-shadow'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={TEL}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary-light'
              }`}
            >
              <Phone size={15} className="lucide-phone" />
              <span>{PHONE}</span>
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Falar pelo WhatsApp
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left px-4 py-3 text-gray-700 font-medium text-sm hover:bg-neutral-light hover:text-primary rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 pb-1 border-t border-gray-100 mt-2 flex flex-col gap-2">
              <a
                href={TEL}
                className="flex items-center gap-2 px-4 py-3 text-gray-600 text-sm hover:text-primary transition-colors"
              >
                <Phone size={15} />
                <span>{PHONE}</span>
              </a>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-all duration-200"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
