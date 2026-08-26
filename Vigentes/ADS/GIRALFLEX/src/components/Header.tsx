import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL, WhatsAppIcon } from './icons';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Flogo-sem-fundo.webp';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300 bg-white">
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#inicio" className="flex-shrink-0">
              <img src={LOGO} alt="Giralflex" className="h-10 lg:h-14 w-auto object-contain" />
            </a>
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-brand-navy/80 hover:text-brand-blue rounded-lg hover:bg-brand-sky/30 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/25"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                Orçamento Grátis
              </a>
            </div>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-brand-sky/30 transition-colors"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <Menu width={24} height={24} className="lucide lucide-menu " />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        ></div>
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <img src={LOGO} alt="Giralflex" className="h-8 w-auto" />
            <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>
              <X width={20} height={20} className="lucide lucide-x " />
            </button>
          </div>
          <nav className="p-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-brand-navy/80 hover:text-brand-blue hover:bg-brand-sky/20 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-brand-red text-white py-3 rounded-lg font-semibold"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                Fale Conosco
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
