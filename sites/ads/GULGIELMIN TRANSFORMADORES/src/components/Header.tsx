import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

const LOGO_URL = 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/logos/logo-sem-fundo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const headerHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark scrolled-header' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center">
            <img
              src={LOGO_URL}
              alt="Gulgielmin Transformadores"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-white text-sm font-medium tracking-wide hover:text-brand-yellow transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5565996248334"
              className="flex items-center gap-2 text-white text-sm font-medium hover:text-brand-yellow transition-colors"
            >
              <Phone size={16} className="text-brand-yellow" />
              <span>(65) 99624-8334</span>
            </a>
            <a
              href="https://wa.me/5565996248334"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-yellow text-brand-dark text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Orçamento Grátis
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:text-brand-yellow transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-brand-yellow transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5565996248334"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 gradient-yellow text-brand-dark text-sm font-bold py-3 px-5 rounded-full text-center hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento Grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
