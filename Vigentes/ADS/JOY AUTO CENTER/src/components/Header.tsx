import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/joy%20auto%20center/img/logo-sem-fundo.webp';
const WHATSAPP = 'http://wa.me/5562981500426';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
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
        scrolled ? 'bg-black/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img src={LOGO} alt="Joy Auto Center" className="h-10 md:h-12 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[rgb(246,122,55)] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(246,122,55)] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(246,122,55)] hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              <Phone size={15} className="lucide lucide-phone " />
              (62) 98150-0426
            </a>
          </div>
          <button
            className="md:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur border-t border-white/10">
          <nav className="flex flex-col px-4 sm:px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-[rgb(246,122,55)] text-sm font-medium tracking-wide transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(246,122,55)] hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 mt-2 w-max"
            >
              <Phone size={15} />
              (62) 98150-0426
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
