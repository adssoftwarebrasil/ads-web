import { useState } from 'react';
import { Menu } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, scrollToSection } from '../lib/utils';

const NAV_ITEMS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300 "
      style={{ backgroundColor: 'rgb(252, 255, 252)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleNav('inicio');
            }}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/img/logo-sem-fundo.webp"
              alt="Casa das Latarias"
              className="h-10 md:h-16 w-auto object-contain brightness-50"
            />
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-white"
                style={{ color: 'rgb(31, 66, 131)' }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href={`${WHATSAPP_URL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: 'rgb(37, 211, 102)' }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Fale no WhatsApp
          </a>
          <button
            className="md:hidden p-2 rounded-md"
            aria-label="Menu"
            style={{ color: 'rgb(31, 66, 131)' }}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu width={24} height={24} className="lucide lucide-menu" />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
        style={{ backgroundColor: 'rgb(252, 255, 252)', borderTop: '2px solid rgb(31, 66, 131)' }}
      >
        <div className="px-4 pb-4 pt-2 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
              style={{ color: 'rgb(31, 66, 131)' }}
            >
              {item.label}
            </button>
          ))}
          <a
            href={`${WHATSAPP_URL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-3 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: 'rgb(37, 211, 102)' }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Fale no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
