import { useState } from 'react';
import { Clock, MapPin, Phone, Menu } from 'lucide-react';
import { WHATSAPP_URL, PHONE_URL } from './icons';

const NAV_ITEMS: { label: string; target: string }[] = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Avaliações', target: 'avaliacoes' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="hidden md:block bg-[#29394C] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#2F44C8]" />Seg–Sáb: 07h às 18h
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#2F44C8]" />Av. Duque de Caxias, 733 – Santa Carmem/MT
            </span>
          </div>
          <a href={PHONE_URL} className="flex items-center gap-1.5 hover:text-[#2F44C8] transition-colors">
            <Phone size={13} />(66) 9 9667-5395
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 transition-all duration-300 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/carmem%20materiais%20para%20construcao/img/logo-sem-fundo.webp"
              alt="Carmem Materiais para Construção"
              className="h-12 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-[#29394C] font-medium text-sm hover:text-[#2F44C8] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#2F44C8] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href={PHONE_URL} className="flex items-center gap-2 text-sm font-medium text-[#29394C] hover:text-[#2F44C8] transition-colors">
              <Phone size={15} />(66) 9 9667-5395
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-[#2F44C8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#29394C] transition-colors">
              Falar no WhatsApp
            </a>
          </div>
          <button onClick={() => setMenuOpen((v) => !v)} className="lg:hidden p-2 text-[#29394C]" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="px-6 pb-6 flex flex-col gap-1 bg-white border-t border-gray-100">
            <div className="flex items-center gap-4 py-3 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Clock size={13} />Seg–Sáb: 07h–18h
              </span>
            </div>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-left py-3 text-[#29394C] font-medium border-b border-gray-50 hover:text-[#2F44C8] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 bg-[#2F44C8] text-white text-center font-semibold px-5 py-3 rounded-lg">
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
