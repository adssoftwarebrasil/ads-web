import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../lib/site';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md' : 'bg-white/95'
      }`}
      style={{ height: '80px' }}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-7xl">
        <img
          src="https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL%2Fimg%2Flogo%201.png"
          alt="Chopp Nattos Brasil"
          className="h-12 md:h-14 object-contain"
        />
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-[rgb(40,44,115)] font-medium hover:text-[rgb(176,146,71)] transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-[rgb(40,44,115)] p-2"
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 shadow-md border-t border-gray-100">
          <nav className="container mx-auto px-6 max-w-7xl flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-[rgb(40,44,115)] font-medium hover:text-[rgb(176,146,71)] transition-colors duration-300 py-3 text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
