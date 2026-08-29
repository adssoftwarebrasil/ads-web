import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY } from '../data/constants';

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Nossas Unidades', href: '#unidades' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-green-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ALTURA DO HEADER AUMENTADA */}
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#hero" className="flex items-center gap-3">
            {/* LOGO AUMENTADA */}
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=soagricolas%2Flogo_fundo_branco_soagricolas%20(1).jpg&version_id=null "
              alt={COMPANY.name}
              className="h-16 md:h-20 w-auto rounded-md object-contain bg-white px-1"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-brand-orange font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md"
            >
              Fale Conosco
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-brand-green-dark border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-brand-orange font-medium py-3 px-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 bg-brand-orange text-white font-semibold py-3 px-3 rounded-full text-center transition-colors duration-200 hover:bg-brand-orange-dark"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}