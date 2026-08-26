import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP, TEL } from './icons';
import { scrollToId } from '../useReveal';

const NAV = [
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Avaliações', id: 'avaliacoes' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/forte%20autoservice%20-%20ps%20auto%20service/img/logo-sem-fundo.webp"
              alt="PS Auto Service"
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group cursor-pointer"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={TEL}
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={16} className="lucide lucide-phone text-brand-red" />
              (81) 9 9146-1355
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 active:scale-95"
            >
              Falar no WhatsApp
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2 rounded-md"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} className="lucide lucide-x" /> : <Menu size={24} className="lucide lucide-menu" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-4 bg-brand-dark/95 backdrop-blur-md rounded-2xl border border-white/10 p-5 flex flex-col gap-4">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-white/90 hover:text-white text-left text-sm font-medium tracking-wide transition-colors"
              >
                {n.label}
              </button>
            ))}
            <a
              href={TEL}
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={16} className="text-brand-red" />
              (81) 9 9146-1355
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-darkred text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-all duration-300 active:scale-95"
            >
              Falar no WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
