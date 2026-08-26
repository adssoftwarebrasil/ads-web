import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#equipamentos', label: 'Equipamentos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/maqnop/img/logo-principal.webp"
              alt="MAQNOP"
              className="h-10 sm:h-12 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5566999111966"
              className="flex items-center gap-2 text-sm font-medium text-brand-orange hover:text-brand-orange-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              (66) 99911-1966
            </a>
            <a
              href="http://wa.me/556699111966"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            className="lg:hidden text-gray-700 p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50 py-3 px-3 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-3">
            <a
              href="tel:+5566999111966"
              className="flex items-center gap-2 text-sm font-medium text-brand-orange px-3 py-2"
            >
              <Phone className="w-4 h-4" />
              (66) 99911-1966
            </a>
            <a
              href="http://wa.me/556699111966"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] hover:bg-[#128C7E] transition-colors text-white px-5 py-3 rounded-lg font-semibold"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
