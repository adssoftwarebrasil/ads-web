import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-3 flex-shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/img/logo-sem-fundo.webp"
            alt="Botequim do Comandante"
            className="h-20 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-brand-gray-light hover:text-brand-gold transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/556285601337"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 btn-primary"
        >
          <Phone size={15} />
          Reservar Mesa
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
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-brand-black/98 backdrop-blur-md`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-brand-gray-light hover:text-brand-gold transition-colors duration-200 text-base font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/556285601337"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 text-center inline-block"
          >
            Reservar Mesa
          </a>
        </nav>
      </div>
    </header>
  );
}
