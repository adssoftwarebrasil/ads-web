import { useState } from 'react';
import { Menu } from 'lucide-react';
import { NAV_ITEMS, scrollToSection } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (target: string) => {
    setOpen(false);
    scrollToSection(target);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/vitadent/logo-vitadent-site.png"
              alt="Vitadent"
              className="h-10 md:h-12 object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.target)}
                className="text-sm font-medium text-gray-300 hover:text-white relative group transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0C4E9D] group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
            ))}
            <button
              onClick={() => handleNav('contato')}
              className="ml-2 px-5 py-2 bg-[#0C4E9D] text-white text-sm font-semibold rounded-lg hover:bg-[#1a6fd4] transition-all duration-300 blue-glow"
            >
              Fale Conosco
            </button>
          </nav>
          <button
            className="md:hidden p-2 text-white"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="lucide lucide-menu" width={24} height={24} />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black border-t border-[#1a1a1a] px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.target)}
              className="text-left text-gray-300 hover:text-white hover:bg-[#111] px-3 py-3 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contato')}
            className="mt-2 px-4 py-3 bg-[#0C4E9D] text-white text-sm font-semibold rounded-lg text-center"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </header>
  );
}
