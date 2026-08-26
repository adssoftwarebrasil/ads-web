import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL, NAV_LINKS, scrollToId } from '../constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-darkDeep/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio">
            <img
              src={LOGO_URL}
              alt="MTTORK Logo"
              className="h-12 sm:h-14 w-auto object-contain brightness-0 invert"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5"
            >
              <Phone className="lucide lucide-phone " width={16} height={16} />
              Falar no WhatsApp
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x " width={26} height={26} />
            ) : (
              <Menu className="lucide lucide-menu " width={26} height={26} />
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden mt-4 bg-brand-darkDeep/95 backdrop-blur-md rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-white/90 hover:text-white font-medium text-sm tracking-wide text-left transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200"
            >
              <Phone className="lucide lucide-phone " width={16} height={16} />
              Falar no WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
