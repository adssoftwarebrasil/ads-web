import { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[rgb(32,29,30)]/95 backdrop-blur shadow-lg'
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/img/logo-sem-fundo.webp"
            alt="Mago das Tesouras"
            className="h-11 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[rgb(247,246,247)] hover:text-[rgb(254,197,52)] transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="http://wa.me/553488238723"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-[rgb(254,197,52)] text-[rgb(32,29,30)] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[rgb(245,133,79)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[rgb(254,197,52)]/30"
        >
          <Scissors className="lucide lucide-scissors" width={15} height={15} />
          Agendar Agora
        </a>
        <button
          className="lg:hidden text-[rgb(247,246,247)] p-1"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className="lucide lucide-x" width={26} height={26} />
          ) : (
            <Menu className="lucide lucide-menu" width={26} height={26} />
          )}
        </button>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[rgb(32,29,30)] border-t border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[rgb(247,246,247)] hover:text-[rgb(254,197,52)] transition-colors py-3 font-medium border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="http://wa.me/553488238723"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-[rgb(254,197,52)] text-[rgb(32,29,30)] px-5 py-3.5 rounded-full font-bold text-sm"
          >
            <Scissors className="lucide lucide-scissors" width={15} height={15} />
            Agendar Agora
          </a>
        </div>
      </div>
    </header>
  );
}
