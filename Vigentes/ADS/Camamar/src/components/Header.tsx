import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP_URL = 'https://wa.me/5562982972917';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-camamar-dark/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex-shrink-0">
          <img
            src="/assets/logo-camamar-navbar-htH3OjIu.png"
            alt="Camamar Soluções Inteligentes"
            className={`w-auto transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] ${
              scrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'
            }`}
          />
        </a>
        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide transition relative group text-white text-shadow-hero"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-whatsapp text-white px-4 py-2.5 rounded-md font-semibold text-sm hover:scale-105 hover:shadow-[0_0_24px_hsl(var(--whatsapp)/0.6)] transition-all"
        >
          <WhatsAppIcon height={18} width={18} />
          WhatsApp
        </a>
        <button
          className="lg:hidden p-2 rounded transition text-white"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X width={26} height={26} /> : <Menu width={26} height={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-camamar-dark/95 backdrop-blur-md mt-2 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-semibold tracking-wide py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-4 py-2.5 rounded-md font-semibold text-sm mt-2"
            >
              <WhatsAppIcon height={18} width={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
