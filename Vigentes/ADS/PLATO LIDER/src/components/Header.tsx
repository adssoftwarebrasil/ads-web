import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP_ORCAMENTO =
  'https://wa.me/556696775369?text=Ol%C3%A1%2C%20Plat%C3%B4%20L%C3%ADder!%20Gostaria%20de%20um%20or%C3%A7amento.';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 transition-all duration-500 bg-white/95 backdrop-blur">
      <div className="container-x flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="https://storage.lucasmendes.dev/site-sp/plato-lider/img/logo-sem-fundo.webp"
            alt="Platô Líder Embreagens"
            className="h-12 w-auto object-contain"
            loading="eager"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-ink hover:text-brand-red transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+556696775369"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-red transition-colors"
          >
            <Phone className="lucide lucide-phone w-4 h-4" />
            (66) 9 9677-5369
          </a>
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-brand-red hover:bg-[rgb(120,8,1)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-red/20"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Orçamento
          </a>
          <button
            aria-label="Abrir menu"
            className="lg:hidden p-2 text-brand-navy"
            onClick={() => setOpen(true)}
          >
            <Menu className="lucide lucide-menu w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)}></div>
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-20 px-5 border-b border-black/5">
            <img
              src="https://storage.lucasmendes.dev/site-sp/plato-lider/img/logo-sem-fundo.webp"
              alt=""
              className="h-10"
            />
            <button aria-label="Fechar menu" className="p-2 text-brand-navy" onClick={() => setOpen(false)}>
              <X className="lucide lucide-x w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-5 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-brand-ink hover:bg-brand-navy hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-5 py-3 rounded-full"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="tel:+556696775369"
              className="mt-2 inline-flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy font-semibold px-5 py-3 rounded-full"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              (66) 9 9677-5369
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
