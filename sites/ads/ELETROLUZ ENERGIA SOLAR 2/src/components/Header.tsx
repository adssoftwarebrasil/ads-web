import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import { BLUE, YELLOW, WA_SOLAR, WA_MATERIAL, scrollToId } from '../theme';

const navItems: { label: string; id: string }[] = [
  { label: 'Home', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'serviços' },
  { label: 'Área de Atendimento', id: 'área-de-atendimento' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md"
      style={{ backgroundColor: BLUE, animation: '0.5s ease-out 0s 1 normal none running fadeIn' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => go('home')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/eletroluz%2Fimage%2044.png"
              alt="Eletroluz"
              className="h-12 lg:h-14 w-auto transition-all duration-300"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-base font-medium transition-all duration-300 hover:translate-y-[-2px] text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={WA_SOLAR}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center space-x-2"
              style={{ backgroundColor: YELLOW, color: BLUE }}
            >
              <Phone width={18} height={18} className="lucide lucide-phone " />
              <span>Energia Solar</span>
            </a>
            <a
              href={WA_MATERIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 flex items-center space-x-2 bg-white"
              style={{ color: BLUE }}
            >
              <Phone width={18} height={18} className="lucide lucide-phone " />
              <span>Material Elétrico</span>
            </a>
          </div>
          <button className="lg:hidden p-2 text-white" onClick={() => setOpen(true)}>
            <Menu width={28} height={28} className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-64 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: BLUE, boxShadow: 'rgba(0, 0, 0, 0.3) -4px 0px 15px' }}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-left text-lg font-medium text-white hover:text-yellow-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 space-y-3 border-t border-white/20">
            <a
              href={WA_SOLAR}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-3 rounded-lg font-semibold text-center"
              style={{ backgroundColor: YELLOW, color: BLUE }}
            >
              Energia Solar
            </a>
            <a
              href={WA_MATERIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-3 rounded-lg font-semibold text-center bg-white"
              style={{ color: BLUE }}
            >
              Material Elétrico
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
