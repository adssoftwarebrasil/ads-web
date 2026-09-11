import { useState } from 'react';
import { Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Flogo.png"
              alt="Sollar Soluções Energéticas"
              className="h-12 sm:h-14 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => scrollTo('inicio')}
            />
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 transition-colors duration-300 font-medium text-sm lg:text-base relative group"
                style={{ color: 'rgb(55, 65, 81)' }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'rgb(255, 69, 0)' }}
                ></span>
              </button>
            ))}
            <a
              href="https://wa.me/5579991174811?text=Olá, vim do site e gostaria de solicitar um orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-5 lg:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap text-sm lg:text-base hover:brightness-110"
              style={{ backgroundColor: 'rgb(255, 69, 0)' }}
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            className="md:hidden text-gray-700 transition-colors p-2"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Abrir menu"
            style={{ color: 'rgb(55, 65, 81)' }}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu width={28} height={28} className="lucide lucide-menu " />
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 px-2 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors rounded-lg font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5579991174811?text=Olá, vim do site e gostaria de solicitar um orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-4 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md hover:brightness-110"
              style={{ backgroundColor: 'rgb(255, 69, 0)' }}
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
