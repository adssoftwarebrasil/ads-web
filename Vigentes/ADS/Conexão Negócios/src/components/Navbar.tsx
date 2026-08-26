import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { openWhatsApp, scrollToId } from '../lib/site';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços/Catálogo', id: 'catalogo' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <nav className="sticky top-0 z-50 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 h-20 lg:h-28 flex items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-6">
          <img
            src="/logo1.jpeg"
            alt="Conexão Negócios - Turbinas Linha Leve e Diesel Leve"
            className="h-12 lg:h-[72px] w-auto object-contain"
          />
          <div className="w-px h-10 lg:h-14 bg-gray-300"></div>
          <img
            src="/logo2.jpeg"
            alt="Conexão Negócios - Turbina e Sistema Hidráulico"
            className="h-12 lg:h-[72px] w-auto object-contain"
          />
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-[16px] font-medium text-gray-900 hover:text-primary-blue transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
        <button
          onClick={openWhatsApp}
          className="hidden lg:inline-flex items-center gap-2 bg-accent-red text-white px-6 py-3 rounded-lg font-semibold text-[15px] hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          <MessageCircle size={20} strokeWidth={2} />
          WhatsApp
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-primary-blue"
          aria-label="Abrir menu"
        >
          {open ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-left text-[16px] font-medium text-gray-900 hover:text-primary-blue transition-colors duration-200 py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={openWhatsApp}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-accent-red text-white px-6 py-3 rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all duration-200"
          >
            <MessageCircle size={20} strokeWidth={2} />
            WhatsApp
          </button>
        </div>
      )}
    </nav>
  );
}
