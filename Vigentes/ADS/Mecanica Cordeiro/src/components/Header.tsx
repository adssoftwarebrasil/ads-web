import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_BASE, scrollToId } from '../hooks/useInView';

const LOGO =
  'https://storage.lucasmendes.dev/site-sp/mecanica%20cordeiro/att/logo-att.webp';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        scrolled ? 'bg-[#30312C]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={LOGO}
              alt="Mecânica Cordeiro"
              className="h-10 md:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-[#FDFDFD] text-sm font-medium tracking-wide hover:text-[#E32626] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#E32626] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+5566996293425"
              className="flex items-center gap-2 text-[#FDFDFD] text-sm font-medium hover:text-[#E32626] transition-colors"
            >
              <Phone size={16} />
              <span>(66) 99629-3425</span>
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E32626] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#c41e1e] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Agendar Serviço
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-[#FDFDFD] p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-[#30312C] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-[#FDFDFD] text-base font-medium py-3 px-3 text-left rounded-lg hover:bg-white/10 hover:text-[#E32626] transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-[#E32626] text-white text-center font-semibold py-3 rounded-full hover:bg-[#c41e1e] transition-colors"
          >
            Agendar Serviço
          </a>
        </div>
      </div>
    </header>
  );
}
