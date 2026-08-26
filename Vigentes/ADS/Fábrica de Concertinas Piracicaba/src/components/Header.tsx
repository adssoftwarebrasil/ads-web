import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src="https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/atualizacao/logo-atualizada-sem-fundo.webp"
            alt="Fábrica de Concertinas Piracicaba"
            className={`h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-semibold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[rgb(240,27,38)] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? 'text-[rgb(37,34,35)] hover:text-[rgb(240,27,38)]'
                  : 'text-white hover:text-[rgb(240,27,38)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <a
          href="tel:+5519981442455"
          className="hidden lg:flex items-center gap-2 bg-[rgb(240,27,38)] text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <Phone
            width={15}
            height={15}
            strokeWidth={2}
            className="lucide lucide-phone "
          />
          (19) 9 8144-2455
        </a>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? 'text-[rgb(37,34,35)] hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Menu"
        >
          {menuOpen ? (
            <X width={24} height={24} strokeWidth={2} className="lucide lucide-x " />
          ) : (
            <Menu width={24} height={24} strokeWidth={2} className="lucide lucide-menu " />
          )}
        </button>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-gray-700 font-semibold py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-[rgb(240,27,38)] transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+5519981442455"
            className="mt-2 flex items-center gap-2 justify-center bg-[rgb(240,27,38)] text-white font-bold py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            <Phone width={16} height={16} strokeWidth={2} className="lucide lucide-phone " />
            (19) 9 8144-2455
          </a>
        </nav>
      </div>
    </header>
  );
}
