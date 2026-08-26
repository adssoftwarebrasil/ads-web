import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP_HEADER =
  'https://wa.me/5566999980270?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-transparent py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-red/5 blur-xl group-hover:bg-brand-red/15 transition-all duration-500"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/gm-motos/img/logo-sem-fundo.webp"
                alt="GM Motos"
                className="relative h-14 w-auto object-contain"
              />
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-brand-red relative group transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-red group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_HEADER}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-[0_4px_15px_rgba(233,1,16,0.35)] hover:scale-105"
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              (66) 9 9998-0270
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 text-gray-900 hover:text-brand-red transition-colors"
              aria-label="Menu"
            >
              <Menu className="lucide lucide-menu" width={26} height={26} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-white ${
          open ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-4 rounded-lg text-gray-800 hover:bg-gray-50 hover:text-brand-red font-semibold border-l-4 border-transparent hover:border-brand-red transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_HEADER}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 bg-brand-red text-white px-5 py-4 rounded-xl font-bold"
          >
            <Phone className="lucide lucide-phone" width={18} height={18} />
            (66) 9 9998-0270
          </a>
        </nav>
      </div>
    </header>
  );
}
