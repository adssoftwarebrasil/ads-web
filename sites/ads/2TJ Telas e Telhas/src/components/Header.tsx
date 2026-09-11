import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon, {
  LOGO_URL,
  openWhatsApp,
  scrollToSection,
} from './WhatsAppIcon';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src={LOGO_URL}
              alt="2TJ Telas e Telhas"
              className="h-12 sm:h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-[rgb(42,38,43)] hover:text-[rgb(238,115,62)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={openWhatsApp}
            className="hidden md:flex items-center gap-2 bg-[rgb(238,115,62)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(218,95,42)] transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold"
          >
            <WhatsAppIcon width={20} height={20} />
            WhatsApp
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-[rgb(42,38,43)] p-2"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X
                width={28}
                height={28}
                strokeWidth={2}
                className="lucide lucide-x "
              />
            ) : (
              <Menu
                width={28}
                height={28}
                strokeWidth={2}
                className="lucide lucide-menu "
              />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-[rgb(42,38,43)] hover:text-[rgb(238,115,62)] transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                openWhatsApp();
              }}
              className="flex items-center gap-2 bg-[rgb(238,115,62)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(218,95,42)] transition-all duration-300 font-semibold justify-center mt-2"
            >
              <WhatsAppIcon width={20} height={20} />
              WhatsApp
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
