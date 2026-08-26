import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const WA_URL = 'https://api.whatsapp.com/send?phone=5541998468028&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900 border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNav('#inicio'); }} className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/logo.webp"
              alt="Calhas Barigui"
              className="h-10 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-sm font-medium text-dark-200 hover:text-primary transition-colors duration-200 font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5541998468028" className="flex items-center gap-2 text-dark-200 hover:text-primary transition-colors text-sm font-body">
              <Phone size={14} />
              <span>(41) 99846-8028</span>
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-dark-900 font-heading font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-primary-400 transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-dark-800 border-t border-dark-700 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="py-3 px-2 text-dark-200 hover:text-primary hover:bg-dark-700 rounded-lg transition-colors font-body text-sm border-b border-dark-700 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-primary text-dark-900 font-heading font-bold text-sm px-5 py-3 rounded-lg text-center hover:bg-primary-400 transition-colors"
            >
              Enviar WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
