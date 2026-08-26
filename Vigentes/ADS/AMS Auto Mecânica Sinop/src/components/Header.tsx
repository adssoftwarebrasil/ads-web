import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_LINK, scrollToId } from '../lib/whatsapp';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
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

  const handleNav = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-blue/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNav('inicio'); }}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/ams%20auto%20mecanica%20sinop/img/logo-sem-fundo.webp"
              alt="AMS Auto Mecânica Sinop"
              className="h-12 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white font-medium text-sm tracking-wide hover:text-brand-red transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <Phone size={16} />
              Agendar Serviço
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden mt-4 bg-brand-blue/95 backdrop-blur-sm rounded-2xl p-4 flex flex-col gap-1 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white font-medium text-sm tracking-wide hover:text-brand-red transition-colors duration-200 text-left py-2 px-2 rounded-lg hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 mt-2"
            >
              <Phone size={16} />
              Agendar Serviço
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
