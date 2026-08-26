import { useState } from 'react';
import { Menu } from 'lucide-react';
import { openWhatsApp, scrollToSection } from '../lib/whatsapp';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/so-copias%2Fso%20copias%2Flogo-copias.webp"
              alt="Só Cópias Logo"
              className="h-12 w-auto"
              loading="eager"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => openWhatsApp()}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Solicitar Orçamento
            </button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 hover:text-blue-800"
          >
            <Menu size={28} className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-20 right-0 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-gray-700 hover:text-blue-800 font-medium py-4 text-left transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              openWhatsApp();
              setOpen(false);
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </nav>
  );
}
