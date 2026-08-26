import { useState } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=alianca-credito%2Flogo-novo.png.webp&version_id=null';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Como Funciona', id: 'como-funciona' },
  { label: 'Simulação', id: 'simulacao' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Dúvidas', id: 'duvidas' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0B2447]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center group relative z-10">
            <div className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
              <img
                src={LOGO}
                alt="Aliança Assessoria de Crédito"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="http://cliente.aliancassessoria.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40 hover:scale-105"
            >
              <ExternalLink className="lucide lucide-external-link" width={15} height={15} />
              Acompanhar Negociação
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? (
                <X className="lucide lucide-x" width={24} height={24} />
              ) : (
                <Menu className="lucide lucide-menu" width={24} height={24} />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://cliente.aliancassessoria.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30"
            >
              <ExternalLink className="lucide lucide-external-link" width={15} height={15} />
              Acompanhar Negociação
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
