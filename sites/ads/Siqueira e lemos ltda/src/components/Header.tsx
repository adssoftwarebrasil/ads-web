import { useState } from 'react';
import { Shield, Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollTo('inicio')} className="flex items-center gap-3 focus:outline-none">
            <img
              src="https://storage.lucasmendes.dev/site-sp/assistec%20sistema%20de%20seguranca/img/logo-sem-fundo.webp"
              alt="Assistec Sistema de Segurança"
              className="h-14 w-auto object-contain transition-all duration-300 brightness-0 invert"
            />
            <div className="hidden items-center gap-2" style={{ display: 'none' }}>
              <Shield className="lucide lucide-shield h-8 w-8 text-brand" />
              <div>
                <span className="text-lg font-bold block leading-none text-white">ASSISTEC</span>
                <span className="text-xs leading-none text-blue-200">Sistema de Segurança</span>
              </div>
            </div>
          </button>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-white/90 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5537999961702"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 text-white/80 hover:text-white"
            >
              <Phone className="lucide lucide-phone h-4 w-4" />
              (37) 99996-1702
            </a>
            <a
              href="https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg transition-colors text-white"
            aria-label="Menu"
          >
            <Menu className="lucide lucide-menu h-6 w-6" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-neutral-100 shadow-lg">
          <nav className="flex flex-col py-4 px-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-4 py-3 text-neutral-700 font-medium rounded-lg hover:bg-brand-50 hover:text-brand transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-neutral-100 flex flex-col gap-3">
              <a
                href="tel:+5537999961702"
                className="flex items-center gap-2 px-4 py-3 text-neutral-600 font-medium"
              >
                <Phone className="lucide lucide-phone h-4 w-4 text-brand" />
                (37) 99996-1702
              </a>
              <a
                href="https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mx-4"
              >
                Solicitar Orçamento
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
