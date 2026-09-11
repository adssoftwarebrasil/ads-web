import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { CLIENT_AREA_URL, waLink, scrollToId } from '../lib/site';

const NAV_LINKS: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Quem Somos', id: 'quem-somos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Sustentabilidade', id: 'sustentabilidade' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 bg-white shadow-md h-[90px]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <button onClick={() => go('inicio')} className="hover:opacity-90 transition-opacity">
          <img
            src="https://storage.lucasmendes.dev/site-sp/indcom/img/logo.png"
            alt="Grupo Indcom"
            className="transition-all duration-300 h-16 md:h-[50px]"
            loading="eager"
          />
        </button>
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="font-medium transition-all relative group text-[rgb(40,120,80)] hover:text-[rgb(130,196,92)]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(130,196,92)] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={CLIENT_AREA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-[rgb(40,120,80)] text-[rgb(40,120,80)] rounded-full font-semibold hover:bg-[rgb(40,120,80)] hover:text-white transition-all"
          >
            <User className="lucide lucide-user" width={18} height={18} />
            Área do Cliente
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-gradient-to-r from-[rgb(40,120,80)] to-[rgb(130,196,92)] text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all"
          >
            Solicitar Orçamento
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Menu"
        >
          {open ? (
            <X className="lucide lucide-x w-7 h-7 text-[rgb(40,120,80)]" />
          ) : (
            <Menu className="lucide lucide-menu w-7 h-7 text-[rgb(40,120,80)]" />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-[90px] left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="text-left py-3 font-medium text-[rgb(40,120,80)] hover:text-[rgb(130,196,92)] border-b border-gray-50"
              >
                {link.label}
              </button>
            ))}
            <a
              href={CLIENT_AREA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 px-5 py-3 border border-[rgb(40,120,80)] text-[rgb(40,120,80)] rounded-full font-semibold justify-center"
            >
              <User className="lucide lucide-user" width={18} height={18} />
              Área do Cliente
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-7 py-3 bg-gradient-to-r from-[rgb(40,120,80)] to-[rgb(130,196,92)] text-white rounded-full font-semibold text-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
