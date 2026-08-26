import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Promoções', id: 'promocoes' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Lojas', id: 'lojas' },
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
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/logo-sem-fundo.webp"
              alt="Ótica Brilhar"
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium transition-colors duration-200 text-white hover:text-red-300 drop-shadow"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="tel:+556634237556"
            className="hidden lg:flex items-center gap-2 bg-[rgb(197,46,52)] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            <Phone className="lucide lucide-phone" width={14} height={14} />
            (66) 3423-7556
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md transition-colors text-white"
          >
            <Menu className="lucide lucide-menu" width={24} height={24} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+556634237556"
            className="mt-2 flex items-center gap-2 bg-[rgb(197,46,52)] text-white px-4 py-2 rounded-full text-sm font-semibold justify-center"
          >
            <Phone className="lucide lucide-phone" width={14} height={14} />
            (66) 3423-7556
          </a>
        </div>
      </div>
    </header>
  );
}
