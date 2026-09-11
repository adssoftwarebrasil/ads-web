import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const links: { label: string; target: string }[] = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Serviços/Catálogo', target: 'catalogo' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 h-20 lg:h-28 flex items-center justify-between">
        <img
          src="https://storage.lucasmendes.dev/site-sp/hidrau%20turbo%2Fimg%2Flogo.webp"
          alt="Hidrau Turbo Centro de Direções Bosch"
          className="h-14 lg:h-[80px] w-auto object-contain"
        />
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.target)}
              className="text-[16px] font-medium text-gray-900 hover:text-primary-blue transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="hidden lg:inline-flex items-center gap-2 bg-accent-red text-white px-6 py-3 rounded-lg font-semibold text-[15px] hover:scale-105 hover:shadow-lg transition-all duration-200">
          <MessageCircle size={20} className="lucide lucide-message-circle " />
          WhatsApp
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-primary-blue"
        >
          {open ? (
            <X size={28} className="lucide lucide-x " />
          ) : (
            <Menu size={28} className="lucide lucide-menu " />
          )}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.target)}
              className="text-left text-[16px] font-medium text-gray-900 hover:text-primary-blue transition-colors duration-200 py-2"
            >
              {l.label}
            </button>
          ))}
          <button className="mt-2 inline-flex items-center justify-center gap-2 bg-accent-red text-white px-6 py-3 rounded-lg font-semibold text-[15px] hover:scale-105 hover:shadow-lg transition-all duration-200">
            <MessageCircle size={20} className="lucide lucide-message-circle " />
            WhatsApp
          </button>
        </div>
      )}
    </nav>
  );
}
