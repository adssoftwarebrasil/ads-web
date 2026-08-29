import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_URL, LOGO_URL, scrollToSection } from '../constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 "
      style={{ backgroundColor: 'rgb(255, 220, 2)' }}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="cursor-pointer" onClick={() => handleNav('inicio')}>
            <img
              src={LOGO_URL}
              alt="Boa Massa Logo"
              className="h-12 lg:h-14 w-auto"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-base font-medium hover:opacity-70 transition-opacity"
                style={{ color: 'rgb(0, 0, 0)' }}
              >
                {link.label}
              </button>
            ))}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'rgb(255, 220, 2)' }}
          >
            WhatsApp
          </a>
          <button
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X size={28} color="rgb(0, 0, 0)" strokeWidth={2} />
            ) : (
              <Menu size={28} color="rgb(0, 0, 0)" strokeWidth={2} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-5 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-base font-medium text-left hover:opacity-70 transition-opacity"
                style={{ color: 'rgb(0, 0, 0)' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-8 py-3 rounded-lg font-semibold"
              style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'rgb(255, 220, 2)' }}
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
