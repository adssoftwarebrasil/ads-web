import { useState } from 'react';
import { Menu } from 'lucide-react';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'Quem Somos', target: 'quem-somos' },
  { label: 'Engates', target: 'engates' },
  { label: 'Contatos', target: 'contatos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgb(175,11,18)] shadow-md">
      <nav className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-[70px] md:h-[80px]">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fimg%2Flogotipo-uniao-engates.webp"
              alt="União Engates"
              className="h-[40px] md:h-[50px] w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-white hover:text-white/80 font-semibold transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="lucide lucide-menu " width={24} height={24} />
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="block w-full text-left px-4 py-2 text-white hover:text-white/80 hover:bg-white/10 font-semibold transition-colors rounded"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
