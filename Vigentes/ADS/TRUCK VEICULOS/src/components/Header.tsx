import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';
import { scrollToSection } from '../useScrollReveal';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Estoque', id: 'estoque' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#010101]/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNav('inicio');
            }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/truck-veiculos%2Fimg%2Flogo-sem-fundo.webp"
              alt="Truck Veículos"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="px-4 py-2 text-sm font-medium text-[#fefefe]/80 hover:text-[#fefefe] hover:bg-white/5 rounded-md transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+559292834895"
              className="flex items-center gap-2 text-sm font-medium text-[#fefefe]/70 hover:text-[#fefefe] transition-colors"
            >
              <Phone width={14} height={14} />
              (92) 9 9283-4895
            </a>
            <a
              href="http://wa.me/559292834895"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#af0201] hover:bg-[#600202] text-[#fefefe] font-semibold text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-[#fefefe] rounded-md hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <Menu width={24} height={24} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#010101]/98 border-t border-white/10 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="w-full text-left px-4 py-3 text-[#fefefe]/80 hover:text-[#fefefe] hover:bg-white/5 rounded-md transition-all font-medium cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href="tel:+559292834895"
              className="flex items-center gap-2 px-4 py-3 text-[#fefefe]/70 text-sm"
            >
              <Phone width={14} height={14} />
              (92) 9 9283-4895
            </a>
            <a
              href="http://wa.me/559292834895"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#af0201] hover:bg-[#600202] text-[#fefefe] font-semibold py-3 rounded-md transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
