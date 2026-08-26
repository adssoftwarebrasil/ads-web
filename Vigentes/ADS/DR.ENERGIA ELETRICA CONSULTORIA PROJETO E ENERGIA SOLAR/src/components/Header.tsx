import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import { scrollToId, WHATSAPP_URL } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Depoimentos', id: 'depoimentos' },
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
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dr%20engenharia%20eletrica/img/logo-sem-fundo.webp"
              alt="Dr. Energia Elétrica"
              className="h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium text-brand-white/80 hover:text-brand-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2 text-brand-white/80 hover:text-brand-white transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-dark/98 backdrop-blur-sm border-t border-white/10 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="block w-full text-left px-4 py-3 text-brand-white/80 hover:text-brand-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
            >
              <Phone size={16} />
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
