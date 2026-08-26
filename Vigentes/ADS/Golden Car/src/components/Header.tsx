import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import { navLinks, WHATSAPP } from '../data';
import { scrollToSection } from '../utils';

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (target: string) => {
    setOpen(false);
    scrollToSection(target);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-gradient-to-b from-brand-black/95 to-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/golden-car/img/logo-sem-fundo.webp"
              alt="Golden Car Veículos"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.target}
                onClick={() => go(l.target)}
                className="text-white/80 hover:text-golden text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+556697218384"
              className="flex items-center gap-2 text-white/70 hover:text-golden text-sm transition-colors duration-200"
            >
              <Phone size={16} className="lucide lucide-phone text-golden" />
              <span>(66) 9 9721-8384</span>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-golden text-sm py-2 px-5 rounded-lg font-semibold"
            >
              Falar no WhatsApp
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <Menu size={24} className="lucide lucide-menu" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-black border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((l) => (
            <button
              key={l.target}
              onClick={() => go(l.target)}
              className="w-full text-left text-white/80 hover:text-golden hover:bg-white/5 py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
          <div className="pt-3 pb-1 space-y-2">
            <a href="tel:+556697218384" className="flex items-center gap-2 text-white/70 py-2 px-4 text-sm">
              <Phone size={16} className="lucide lucide-phone text-golden" />
              (66) 9 9721-8384
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-golden w-full text-center rounded-lg py-3 text-sm font-semibold"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
