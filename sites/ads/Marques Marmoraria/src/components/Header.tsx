import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-stone-950/95 backdrop-blur shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/logo-semfundo-marques.png"
            alt="Marques Marmoraria"
            className="h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-gold-300 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5562992861117"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-gold-300 text-stone-950 font-semibold text-sm px-5 py-2.5 transition-all duration-300 hover:bg-gold-400"
        >
          <Phone className="lucide lucide-phone" width={15} height={15} />
          Pedir Orçamento
        </a>
        <button
          className="md:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className="lucide lucide-x" width={24} height={24} />
          ) : (
            <Menu className="lucide lucide-menu" width={24} height={24} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-stone-950/95 backdrop-blur border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-gold-300 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5562992861117"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 bg-gold-300 text-stone-950 font-semibold text-sm px-5 py-2.5 w-fit transition-all duration-300 hover:bg-gold-400"
            >
              <Phone className="lucide lucide-phone" width={15} height={15} />
              Pedir Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
