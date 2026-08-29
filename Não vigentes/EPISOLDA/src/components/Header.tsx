import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Quem Somos', id: 'quem-somos' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/episolda/img/logo-sem-fundo.webp"
              alt="EPISOLDA"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-[rgb(16,109,71)] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(16,109,71)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+551933012049"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[rgb(16,109,71)] transition-colors"
            >
              <Phone className="lucide lucide-phone text-[rgb(16,109,71)]" width={16} height={16} />
              (19) 3301-2049
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(16,109,71)] hover:bg-[rgb(13,90,58)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {open ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-[rgb(16,109,71)] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-2 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="tel:+551933012049"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 transition-colors"
            >
              <Phone className="lucide lucide-phone text-[rgb(16,109,71)]" width={16} height={16} />
              (19) 3301-2049
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(16,109,71)] text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors hover:bg-[rgb(13,90,58)]"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
