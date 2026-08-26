import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const WHATSAPP_URL = 'https://wa.me/556696045793?text=Vim%20pelo%20site';

const NAV_ITEMS: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNav('inicio'); }} className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/logo-sem-fundo.webp"
              alt="JF Diesel"
              className="h-10 md:h-16 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium text-white/80 hover:text-[rgb(255,198,45)] transition-colors duration-200 tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(255,198,45)] text-black font-bold px-5 py-2.5 rounded-full text-sm hover:bg-yellow-300 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Phone width={16} height={16} />
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-black border-t border-white/10 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-left text-white/80 hover:text-[rgb(255,198,45)] py-3 px-2 text-sm font-medium uppercase tracking-wide border-b border-white/5 last:border-0 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-[rgb(255,198,45)] text-black font-bold px-5 py-3 rounded-full text-sm"
          >
            <Phone width={16} height={16} />
            Fale Conosco no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
