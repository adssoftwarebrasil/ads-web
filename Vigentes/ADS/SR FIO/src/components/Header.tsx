import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Resultados', id: 'resultados' },
  { label: 'Credenciais', id: 'credenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgb(83,90,115)] border-b border-white/10 ${
        scrolled ? 'py-3 shadow-lg' : 'py-4 shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <button onClick={() => go('inicio')} className="flex items-center transition-transform hover:scale-105">
          <img
            src="https://storage.lucasmendes.dev/site-sp/sr-fio/logotipo-sr-fio-cabelo-dourado-fundo-cinza_1600x1076.webp"
            alt="SR FIO Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-white/80 hover:text-brand-gold transition-colors duration-200 text-sm font-body font-medium tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go('contato')}
            className="bg-brand-gold text-[rgb(83,90,115)] text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
          >
            Agendar Consulta
          </button>
        </nav>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-brand-gold p-2"
          aria-label="Menu"
        >
          <Menu size={28} />
        </button>
      </div>
      <div
        className={`absolute top-full left-0 right-0 bg-[rgb(83,90,115)] border-t border-white/10 overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-white/80 hover:text-brand-gold py-3 text-left text-lg font-body font-medium border-b border-white/5 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go('contato')}
            className="mt-4 bg-brand-gold text-[rgb(83,90,115)] font-bold py-4 rounded-xl text-center shadow-lg"
          >
            Agendar Avaliação
          </button>
        </div>
      </div>
    </header>
  );
}
