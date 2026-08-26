import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP_HEADER =
  'https://wa.me/5566996194229?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+da+Torre+Engenharia.';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/torreengenharia/logo-torre-engenharia-azul-e-preto_1132x1280.webp"
              alt="Torre Engenharia"
              className="h-11 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 font-medium text-sm hover:text-brand-blue transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_HEADER}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#0090CC] transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30"
          >
            <MessageCircle size={16} />
            Falar com Especialista
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:text-brand-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a
              href={WHATSAPP_HEADER}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-blue text-white px-5 py-3 rounded-full font-semibold text-sm"
            >
              <MessageCircle size={16} />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
