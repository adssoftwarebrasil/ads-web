import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/useReveal';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/lojao%20do%20parabrisa/img/logo.png';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Diferenciais', id: 'differentials' },
  { label: 'Sobre', id: 'about' },
  { label: 'Contato', id: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-20">
            <button onClick={() => handleNav('hero')} className="flex-shrink-0 transition-transform hover:scale-105">
              <img src={LOGO} alt="Lojão do Parabrisa" className="h-10 md:h-12 object-contain" />
            </button>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-base font-medium text-gray-600 hover:text-[rgb(1,160,199)] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <a
              href="http://wa.me/557188114690"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[rgb(1,160,199)] hover:bg-[rgb(1,140,179)] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle width={20} height={20} />
              Fale Conosco
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-gray-700 transition-transform hover:scale-110"
              aria-label="Abrir menu"
            >
              <Menu width={28} height={28} />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <img src={LOGO} alt="Lojão do Parabrisa" className="h-10 object-contain" />
            <button onClick={() => setOpen(false)} className="text-gray-700" aria-label="Fechar menu">
              <X width={24} height={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <a
              href="http://wa.me/557188114690"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(1,160,199)] hover:bg-[rgb(1,140,179)] text-white font-semibold px-6 py-3 mx-6 mb-4 rounded-full shadow-lg transition-all duration-300"
            >
              <MessageCircle width={20} height={20} />
              Fale Conosco
            </a>
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-[rgb(1,160,199)] transition-colors ${
                  i < navItems.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
