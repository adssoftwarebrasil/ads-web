import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-blue-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dn%20seguros/img/logo-sem-fundo.webp"
              alt="DN Seguros"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white font-medium hover:text-brand-red transition-colors duration-200 text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+558430256322"
              className="flex items-center gap-2 text-white hover:text-brand-red transition-colors duration-200 text-sm font-medium"
            >
              <Phone size={16} className="lucide lucide-phone " />
              (84) 3025-6322
            </a>
            <a href="#contato" className="btn-primary text-sm py-2.5">
              Solicitar Cotação
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-blue-dark border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href="tel:+558430256322"
              className="flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Phone size={16} className="lucide lucide-phone " />
              (84) 3025-6322
            </a>
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="btn-primary block text-center text-sm py-3"
            >
              Solicitar Cotação Grátis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
