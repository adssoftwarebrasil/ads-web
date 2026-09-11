import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-dark-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/helena%20despachante/img/logo.webp"
              alt="Helena Despachante"
              className="h-10 md:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-gray hover:text-brand-yellow transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="http://wa.me/556696535401"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-300 transition-all duration-200 hover:shadow-lg hover:shadow-brand-yellow/20 hover:-translate-y-0.5"
            >
              <Phone width={15} height={15} strokeWidth={2.5} className="lucide lucide-phone" />
              Fale Conosco
            </a>
          </div>
          <button
            className="md:hidden p-2 text-white"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu width={24} height={24} className="lucide lucide-menu" />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-dark/98 backdrop-blur-md border-t border-brand-dark-border px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-brand-gray hover:text-brand-yellow px-3 py-3 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="http://wa.me/556696535401"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-brand-yellow text-brand-dark font-bold text-sm px-5 py-3 rounded-full"
            >
              <Phone width={16} height={16} strokeWidth={2.5} className="lucide lucide-phone" />
              Fale Conosco pelo WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
