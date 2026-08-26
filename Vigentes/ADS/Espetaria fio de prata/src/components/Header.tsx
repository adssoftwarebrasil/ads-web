import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Cardápio', id: 'cardapio' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-md py-3 shadow-lg shadow-black/30' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <button className="flex items-center group" onClick={() => handleNav('inicio')}>
          <img
            src="https://storage.lucasmendes.dev/site-sp/espetaria%20fio%20de%20prata/img/logo-sem-fundo.webp"
            alt="Fio de Prata Espetaria"
            className="h-14 w-auto object-contain drop-shadow-md transition-opacity group-hover:opacity-90"
          />
        </button>
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-[rgb(230,232,234)]/70 hover:text-amber-400 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <a
            href="http://wa.me/5566996043627"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-[#1a1a1a] text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Reservar Mesa
          </a>
        </nav>
        <button
          className="md:hidden text-[rgb(230,232,234)] p-2"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#1a1a1a]/98 backdrop-blur-md px-4 pb-6 pt-2 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-left text-[rgb(230,232,234)]/80 hover:text-amber-400 py-3 text-base font-medium border-b border-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="http://wa.me/5566996043627"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-amber-500 hover:bg-amber-400 text-[#1a1a1a] font-bold py-3 rounded-full text-center transition-colors"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </header>
  );
}
