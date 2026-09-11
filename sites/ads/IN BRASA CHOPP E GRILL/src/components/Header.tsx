import { useEffect, useState } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { WHATSAPP } from '../config';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/img/logo-sem-fundo.webp"
              alt="In Brasa Chopp &amp; Grill"
              className="h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-brand text-sm font-medium transition-colors duration-200 tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <Phone className="lucide lucide-phone" width={15} height={15} />
              Reserve sua Mesa
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Abrir menu"
          >
            {open ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <MenuIcon className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/98 backdrop-blur-md border-t border-white/10 px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-brand text-base font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 btn-primary justify-center"
          >
            <Phone className="lucide lucide-phone" width={16} height={16} />
            Reserve sua Mesa
          </a>
        </div>
      </div>
    </header>
  );
}
