import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import { WHATSAPP_URL, PHONE_HREF, LOGO, scrollToId } from '../lib/constants';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={LOGO}
              alt="Serrano Embutidos e Defumados"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-white/90 hover:text-[#FF6601] text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              <Phone size={15} className="lucide lucide-phone text-[#FF6601]" />
              <span>(66) 9605-4019</span>
            </a>
            <a
              href={WHATSAPP_URL}
              className="bg-[#FF6601] hover:bg-[#AF4502] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Fale Conosco
            </a>
          </div>
          <button
            className="md:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu size={24} className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-black/97 backdrop-blur-sm ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4 border-t border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-white/90 hover:text-[#FF6601] text-base font-medium text-left py-1 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            className="bg-[#FF6601] hover:bg-[#AF4502] text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-all duration-200 mt-2"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
