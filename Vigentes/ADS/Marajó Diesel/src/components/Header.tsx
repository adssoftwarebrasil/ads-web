import { useState } from 'react';
import { Menu } from 'lucide-react';
import { navItems, scrollToSection } from '../lib/scroll';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (target: string) => {
    scrollToSection(target);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgb(1,51,153)] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-[70px] md:h-[80px]">
          <img
            src="https://storage.lucasmendes.dev/site-sp/marajodi%2FLOGO%20MARAJO%20VETORIZADA.pdf%20(Logotipo)%20(3)%20(1).png"
            alt="Marajó Diesel"
            className="h-12 md:h-14 w-auto cursor-pointer"
            onClick={() => handleNav('inicio')}
          />
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.target)}
                className="text-white hover:text-[rgb(255,116,16)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            className="md:hidden text-white hover:text-[rgb(255,116,16)] transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-[70px] right-0 h-[calc(100vh-70px)] w-64 bg-[rgb(1,51,153)] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.target)}
              className="text-left py-3 px-4 text-white hover:text-[rgb(255,116,16)] hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
