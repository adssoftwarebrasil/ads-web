import { useState } from 'react';
import { Clock, Phone, Menu, X } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col">
      <div className="bg-brand-dark text-white text-sm py-2 px-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <span className="flex items-center gap-1.5">
          <Clock width={14} height={14} className="lucide lucide-clock text-brand-muted" />
          <span className="text-gray-300">
            Atendimento: <strong className="text-white">08h às 22h</strong>
          </span>
        </span>
        <span className="flex items-center gap-1.5">
          <Phone width={14} height={14} className="lucide lucide-phone text-brand-muted" />
          <a href="tel:+5561992574282" className="text-gray-300 hover:text-white transition-colors">
            (61) 99257-4282
          </a>
        </span>
        <span className="hidden md:block text-gray-400">|</span>
        <span className="text-gray-300 hidden md:block">
          Atendemos: Asa Norte, Asa Sul, Lago, Sudoeste, Taguatinga e muito mais
        </span>
      </div>
      <header className="transition-all duration-300 bg-brand-dark py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <img
              src="https://storage.lucasmendes.dev/caroba/annb%20baterias/img/logo-sem-fundo.webp"
              alt="ANNB Baterias"
              className="transition-all duration-300 h-16"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 text-gray-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="http://wa.me/5561992574282"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-red text-white text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition-all duration-200 shadow-md"
            >
              <WhatsappIcon className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-white"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X width={24} height={24} className="lucide lucide-x" />
            ) : (
              <Menu width={24} height={24} className="lucide lucide-menu" />
            )}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-brand-dark border-t border-white/10">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="http://wa.me/5561992574282"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-red text-white text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition-all duration-200 shadow-md"
              >
                <WhatsappIcon className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
