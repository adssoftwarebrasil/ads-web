import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_ACCENTED } from '../constants';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Produtos' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgb(45,48,145)] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center group">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=lojadasconexoes%2Fimage%2089.png&version_id=null"
                alt="RA Loja das Conexões"
                className="h-12 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[rgb(248,232,48)] transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_ACCENTED}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(248,232,48)] text-[rgb(45,48,145)] px-7 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300 hover:scale-105 shadow-md"
            >
              ORÇAMENTO
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 hover:bg-blue-700 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden mt-4 flex flex-col gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-[rgb(248,232,48)] transition-colors duration-300 font-semibold text-sm uppercase tracking-wider py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_ACCENTED}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-[rgb(248,232,48)] text-[rgb(45,48,145)] px-7 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300 text-center shadow-md mt-2"
            >
              ORÇAMENTO
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
