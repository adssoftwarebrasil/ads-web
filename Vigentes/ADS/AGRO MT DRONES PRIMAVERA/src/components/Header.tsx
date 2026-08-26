import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Contato', href: '#contato' },
];

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
          ? 'bg-brand-dark shadow-lg shadow-brand-dark/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex items-center gap-2 shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/agro-mt-drones/img/logo-sem-fundo.webp"
            alt="Agro MT Drones"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-white/90 hover:text-brand-accent transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="http://wa.me/556599004844"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-brand-accent hover:bg-brand-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-brand-accent/30"
        >
          <Phone size={15} />
          (65) 9 9900-4844
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-brand-dark`}
      >
        <div className="px-4 py-4 flex flex-col gap-4 border-t border-white/10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base font-medium text-white/90 hover:text-brand-accent transition-colors py-1"
            >
              {link.label}
            </button>
          ))}
          <a
            href="http://wa.me/556599004844"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-accent text-white text-sm font-semibold px-5 py-3 rounded-full w-full justify-center mt-2"
          >
            <Phone size={15} />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
