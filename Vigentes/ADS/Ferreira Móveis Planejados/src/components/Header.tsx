import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#212121] shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button onClick={() => scrollTo('inicio')} className="flex items-center gap-3 focus:outline-none">
          <img
            src="https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/img/logo-sem-fundo.webp"
            alt="Ferreira Móveis Planejados"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#e4e6e7] text-sm font-medium tracking-wide hover:text-white transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e4e6e7] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>
        <a
          href="tel:+556696510268"
          className="hidden md:flex items-center gap-2 bg-[#5b5c57] hover:bg-[#e4e6e7] hover:text-[#212121] text-[#e4e6e7] text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300"
        >
          <Phone className="lucide lucide-phone" width={15} height={15} />
          (66) 9 9651-0268
        </a>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-[#e4e6e7] p-2 focus:outline-none"
          aria-label="Menu"
        >
          <Menu className="lucide lucide-menu" width={24} height={24} />
        </button>
      </div>
      <div
        className={`md:hidden bg-[#212121] overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 border-t border-[#5b5c57]/30">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-[#e4e6e7] text-base font-medium py-2 border-b border-[#5b5c57]/20 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <a href="tel:+556696510268" className="flex items-center gap-2 text-[#e4e6e7] text-sm font-semibold mt-2">
            <Phone className="lucide lucide-phone" width={16} height={16} />
            (66) 9 9651-0268
          </a>
        </div>
      </div>
    </header>
  );
}
