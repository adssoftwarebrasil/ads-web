import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

const WA_LINK = 'https://wa.me/5565996610607';

function ToothIcon({ size = 22, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2C9.2 2 7 4 7 6.5c0 2 .8 4 1.5 6l.5 1.5v.5L10 19c.2 1 .7 1.5 1.3 1.5h.4c.6 0 .9-.3 1-.7L13 17l.3 2.8c.1.4.4.7 1 .7h.4c.6 0 1.1-.5 1.3-1.5l.5-5 .5-1.5C17.8 10.5 17 8.5 17 6.5 17 4 14.8 2 12 2z" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#32A19A] to-[#1a6a65] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <ToothIcon size={20} className="text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-gray-900 text-sm md:text-base tracking-tight">
                Dr. Antonio Carlos Junior
              </span>
              <span className="text-[10px] md:text-[11px] text-[#32A19A] font-semibold tracking-widest uppercase">
                Implantodontia & Prótese
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-[#32A19A] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#32A19A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#32A19A] hover:bg-[#217a74] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              <Phone size={14} />
              Agendar Consulta
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-gray-700 hover:text-[#32A19A] py-3 px-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#32A19A] text-white font-semibold py-3 rounded-xl transition-all duration-200"
            >
              <Phone size={16} />
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
