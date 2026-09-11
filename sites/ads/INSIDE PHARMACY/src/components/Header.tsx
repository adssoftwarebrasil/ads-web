import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
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
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/img/logo-sem-fundo.webp"
              alt="Inside Pharmacy"
              className="h-10 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-brand-red text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:6132028296"
              className="flex items-center gap-2 text-gray-600 hover:text-brand-red text-sm transition-colors"
            >
              <Phone width={15} height={15} strokeWidth={2} />
              <span>(61) 3202-8296</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30 hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>
          <button
            className="lg:hidden text-gray-900 p-2"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X width={24} height={24} strokeWidth={2} /> : <Menu width={24} height={24} strokeWidth={2} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="block w-full text-left text-gray-700 hover:text-brand-red py-3 text-base font-medium border-b border-gray-100 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 space-y-3">
            <a href="tel:6132028296" className="flex items-center gap-2 text-gray-600 text-sm">
              <Phone width={15} height={15} strokeWidth={2} />
              <span>(61) 3202-8296</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brand-red text-white text-center font-semibold py-3 rounded-full transition-all hover:bg-brand-red-dark"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
