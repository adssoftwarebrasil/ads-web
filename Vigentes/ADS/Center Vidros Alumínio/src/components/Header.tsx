import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToId } from '../hooks/useInView';

const NAV_ITEMS: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/img/logo-sem-fundo.webp"
              alt="Center Vidros e Alumínio"
              className="h-10 md:h-12 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-white/90 hover:text-brand-cyan text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <a
            href="tel:+559888677636"
            className="hidden md:flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-md shadow-brand-blue/30"
          >
            <Phone width={15} height={15} />
            (98) 9 8867-7636
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {open ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-dark/98 backdrop-blur-md border-t border-white/10 px-4 pb-6 pt-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="block w-full text-left text-white/90 hover:text-brand-cyan py-3 px-4 rounded-lg hover:bg-white/5 text-sm font-medium transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+559888677636"
            className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 mt-4"
          >
            <Phone width={15} height={15} />
            (98) 9 8867-7636
          </a>
        </div>
      </div>
    </header>
  );
}
