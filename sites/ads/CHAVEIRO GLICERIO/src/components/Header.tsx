import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-brand-black shadow-[0_2px_20px_rgba(255,192,1,0.15)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex items-center gap-3">
          <img
            src="https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/logo-sem-fundo.webp"
            alt="Chaveiro Glicério"
            className="h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-brand-white/90 hover:text-brand-yellow text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <a
          href="tel:+5519988923111"
          className="hidden lg:flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,192,1,0.4)]"
        >
          <Phone size={16} />
          (19) 9 8892-3111
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-brand-white p-2"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-gray-dark border-t border-brand-yellow/20 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-brand-white/90 hover:text-brand-yellow text-base font-medium py-3 px-2 text-left transition-colors border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+5519988923111"
            className="flex items-center justify-center gap-2 bg-brand-yellow text-brand-black font-semibold py-3 px-4 rounded-xl mt-3 transition-all"
          >
            <Phone size={18} />
            (19) 9 8892-3111
          </a>
        </div>
      </div>
    </header>
  );
}
