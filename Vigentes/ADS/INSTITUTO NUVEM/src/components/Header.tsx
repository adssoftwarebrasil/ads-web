import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#locations', label: 'Unidades' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center group">
          <img
            src="https://storage.lucasmendes.dev/site-sp/instituto%20nuuvem/img/logo.webp"
            alt="Instituto Nuvem"
            className="h-14 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-heading font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden sm:flex items-center gap-2 font-heading font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md ${
              scrolled ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-white text-primary hover:bg-cream'
            }`}
          >
            <Phone size={14} />
            Fale Conosco
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-primary/10' : 'text-white hover:bg-white/20'
            }`}
            aria-label="Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="block font-heading font-semibold text-gray-700 hover:text-primary hover:bg-cream px-4 py-3 rounded-xl transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="w-full mt-2 bg-primary text-white font-heading font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors"
          >
            <Phone size={14} />
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}
