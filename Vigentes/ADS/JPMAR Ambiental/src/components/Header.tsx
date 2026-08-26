import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hero-fade-down bg-white transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-end md:justify-between h-16 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 flex items-center gap-4 z-10">
            <img
              alt="JPMAR Ambiental"
              className="h-10 w-auto object-contain rounded"
              src="https://storage.lucasmendes.dev/site-sp/jpmarambiental/logo.jpg"
            />
          </div>
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+5579991570550"
              className="flex items-center gap-1.5 text-gray-500 hover:text-[#013413] transition-colors text-sm"
            >
              <Phone width={13} height={13} className="lucide lucide-phone" aria-hidden="true" />
              <span>(79) 99157-0550</span>
            </a>
            <span className="text-gray-200">|</span>
            <a
              href="mailto:jpmar@jpmar.com.br"
              className="flex items-center gap-1.5 text-gray-500 hover:text-[#013413] transition-colors text-sm"
            >
              <Mail width={13} height={13} className="lucide lucide-mail" aria-hidden="true" />
              <span>jpmar@jpmar.com.br</span>
            </a>
            <span className="text-gray-200">|</span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#013413] text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-gray-700 p-2 z-10"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X width={32} height={32} className="lucide lucide-x" aria-hidden="true" />
            ) : (
              <Menu width={32} height={32} className="lucide lucide-menu" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-[#013413] text-sm font-semibold uppercase tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <a
              href="tel:+5579991570550"
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <Phone width={14} height={14} aria-hidden="true" />
              <span>(79) 99157-0550</span>
            </a>
            <a
              href="mailto:jpmar@jpmar.com.br"
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <Mail width={14} height={14} aria-hidden="true" />
              <span>jpmar@jpmar.com.br</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
