import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import { scrollToId } from '../hooks/useReveal';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/saga%20sorriso%20centro%20automotivo/img/logo-atualizada-sem-fundo.webp"
              alt="Saga Sorriso Centro Automotivo"
              className="h-10 md:h-14 w-auto object-contain brightness-0 invert"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white/80 hover:text-[#EF1C1A] text-sm font-medium px-3 py-2 rounded transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5566996116371"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              <Phone size={16} className="lucide lucide-phone text-[#EF1C1A]" />
              (66) 9 9611-6371
            </a>
            <a
              href="http://wa.me/5566996116371"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EF1C1A] hover:bg-[#962A21] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Agendar Serviço
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            aria-label="Menu"
          >
            <Menu size={24} className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgb(10, 10, 10)' }}
      >
        <div className="px-4 py-4 flex flex-col gap-1 border-t border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-white/80 hover:text-[#EF1C1A] text-base font-medium py-3 px-2 text-left border-b border-white/5 last:border-0 transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:+5566996116371"
              className="flex items-center gap-2 text-white/80 text-sm font-medium py-2"
            >
              <Phone size={16} className="lucide lucide-phone text-[#EF1C1A]" />
              (66) 9 9611-6371
            </a>
            <a
              href="http://wa.me/5566996116371"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EF1C1A] hover:bg-[#962A21] text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-all duration-200"
            >
              Agendar Serviço
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
