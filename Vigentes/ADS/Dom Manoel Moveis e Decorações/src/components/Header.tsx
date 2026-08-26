import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'produtos' },
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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[rgb(103,66,42)] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dom-manoel-moveis-e-decoracoes/img/logo-sem-fundo.webp"
              alt="Dom Manoel Móveis e Decorações"
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-cream font-sans text-sm font-medium tracking-wide hover:text-[rgb(183,149,108)] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(183,149,108)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <a
            href="tel:+556696455950"
            className="hidden md:flex items-center gap-2 bg-[rgb(183,149,108)] hover:bg-[rgb(175,140,100)] text-cream px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Phone size={16} />
            (66) 9 9645-5950
          </a>
          <button
            className="md:hidden text-cream p-2"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-[rgb(103,66,42)] ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 border-t border-[rgb(183,149,108)]/30">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-cream text-base font-medium text-left py-2 border-b border-[rgb(183,149,108)]/20 hover:text-[rgb(183,149,108)] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+556696455950"
            className="flex items-center gap-2 bg-[rgb(183,149,108)] text-cream px-5 py-3 rounded-full text-sm font-semibold mt-2 justify-center"
          >
            <Phone size={16} />
            (66) 9 9645-5950
          </a>
        </div>
      </div>
    </header>
  );
}
