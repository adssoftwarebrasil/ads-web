import { useState } from 'react';
import { Clock, Phone, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#catalogo', label: 'Produtos' },
  { href: '#locacao', label: 'Locação' },
  { href: '#epis', label: 'EPIs' },
  { href: '#sobre', label: 'Conheça a Sia Solda' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-dark/90 backdrop-blur-sm">
      <div className="hidden md:flex items-center justify-end bg-brand-orange/10 border-b border-brand-orange/20 px-6 py-1.5">
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <span className="flex items-center gap-1.5">
            <Clock className="lucide lucide-clock text-brand-orange" width={13} height={13} />
            Seg–Sex: 08h às 18h | Sáb: 08h às 12h
          </span>
          <a
            href="tel:+556198770047"
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Phone className="lucide lucide-phone text-brand-orange" width={13} height={13} />
            (61) 9 9877-0047
          </a>
          <a
            href="tel:+556135504750"
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Phone className="lucide lucide-phone text-brand-orange" width={13} height={13} />
            Fixo: (61) 3550-4750
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center">
          <img
            src="https://storage.lucasmendes.dev/site-sp/cia%20solda%20e%20ferramentas/img/logo-sem-fundo.webp"
            alt="Sia Solda"
            className="h-14 w-auto object-contain brightness-0 invert"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="http://wa.me/556198770047"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/30"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            Falar no WhatsApp
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          aria-label="Menu"
        >
          {open ? (
            <X className="lucide lucide-x" width={22} height={22} />
          ) : (
            <Menu className="lucide lucide-menu" width={22} height={22} />
          )}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="http://wa.me/556198770047"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
