import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-navy/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-10 rounded-xl overflow-hidden flex items-center justify-center transition bg-white">
              <img
                src="https://storage.lucasmendes.dev/site-sp/s-silva-distribuidora/img/logo-sem-fundo.webp"
                alt="S. Silva"
                className="w-full h-full object-contain p-1"
              />
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-brand-red hover:after:w-full after:transition-all text-white/90 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+5575981960232" className="flex items-center gap-2 text-sm font-semibold text-white">
              <Phone className="lucide lucide-phone w-4 h-4" />
              <span className="hidden xl:inline">(75) 98196-0232</span>
            </a>
            <a
              href="http://wa.me/5575981960232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-wine text-white text-sm font-bold tracking-wide shadow-lg shadow-brand-red/30 hover:shadow-brand-wine/40 transition-all hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-white"
          >
            <Menu className="lucide lucide-menu w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'} bg-brand-navy`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-base font-semibold text-white/90 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="http://wa.me/5575981960232"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-red text-white font-bold"
          >
            Fale no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
