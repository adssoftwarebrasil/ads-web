import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToId } from '../useReveal';

const WHATSAPP = 'http://wa.me/556696205384';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Seja Consultora', id: 'consultora' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="flex-shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/duquesa%20joias/img/logo-letra-branca.webp"
            alt="Duquesa Joias"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-white/90 hover:text-gold-light font-medium text-sm tracking-wide transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Phone width={14} height={14} className="lucide lucide-phone " />
          Fale Conosco
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {open ? (
            <X width={24} height={24} className="lucide lucide-x " />
          ) : (
            <Menu width={24} height={24} className="lucide lucide-menu " />
          )}
        </button>
      </div>
      <div
        className={`lg:hidden bg-black/97 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1 border-t border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-white/90 hover:text-gold-light font-medium text-base py-3 px-4 rounded-lg hover:bg-white/5 text-left transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 btn-gold text-center text-sm"
          >
            <Phone width={16} height={16} className="lucide lucide-phone " />
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}
