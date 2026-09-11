import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#premiacoes', label: 'Premiações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgb(53,53,53)]/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#inicio">
          <img
            src="https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/logo-sem-fundo.webp"
            alt="Mega Eventos"
            className="h-14 w-auto brightness-0 invert"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white hover:text-[rgb(255,241,18)] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(255,241,18)] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="tel:+5565996292448"
            className="flex items-center gap-2 bg-[rgb(234,50,56)] hover:bg-[rgb(249,171,118)] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
          >
            <Phone width={14} height={14} />
            (65) 99629-2448
          </a>
        </nav>
        <button
          className="lg:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu width={24} height={24} />
        </button>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[rgb(53,53,53)] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white font-medium border-b border-white/10 hover:text-[rgb(255,241,18)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+5565996292448"
            className="mt-4 flex items-center justify-center gap-2 bg-[rgb(234,50,56)] text-white font-semibold py-3 rounded-full"
          >
            <Phone width={16} height={16} />
            (65) 99629-2448
          </a>
        </div>
      </div>
    </header>
  );
}
