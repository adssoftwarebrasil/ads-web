import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL, navItems, scrollToSection } from '../lib/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
      <div className="max-w-[100vw] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/pharmafloris/logo.webp"
                alt="Pharma Floris"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-gray-700 hover:text-[rgb(88,171,218)] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-6 py-3 bg-[rgb(88,171,218)] text-white font-semibold rounded-full hover:bg-[rgb(78,161,208)] transition-all duration-300 hover:scale-105 shadow-md"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? (
                <X
                  width={28}
                  height={28}
                  className="lucide lucide-x"
                />
              ) : (
                <Menu
                  width={28}
                  height={28}
                  className="lucide lucide-menu"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left py-2 text-gray-700 hover:text-[rgb(88,171,218)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[rgb(88,171,218)] text-white font-semibold rounded-full hover:bg-[rgb(78,161,208)] transition-all duration-300 shadow-md mt-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
