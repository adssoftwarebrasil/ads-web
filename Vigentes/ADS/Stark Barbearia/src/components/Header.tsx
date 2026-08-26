import { useState } from 'react';
import { Instagram, MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL, LOGO_URL } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img src={LOGO_URL} alt="Stark Barbearia" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              className="text-black hover:text-gray-500 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
            >
              Serviços
            </a>
            <a
              href="#galeria"
              className="text-black hover:text-gray-500 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
            >
              Galeria
            </a>
            <a
              href="#localizacao"
              className="text-black hover:text-gray-500 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
            >
              Localização
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all duration-300 font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar
            </a>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg text-black"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4 flex flex-col gap-4">
          <a
            href="#servicos"
            onClick={() => setOpen(false)}
            className="text-black hover:text-gray-500 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
          >
            Serviços
          </a>
          <a
            href="#galeria"
            onClick={() => setOpen(false)}
            className="text-black hover:text-gray-500 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
          >
            Galeria
          </a>
          <a
            href="#localizacao"
            onClick={() => setOpen(false)}
            className="text-black hover:text-gray-500 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
          >
            Localização
          </a>
          <div className="flex items-center gap-4 pt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all duration-300 font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
