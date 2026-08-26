import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';

const LOGO =
  'https://storage.lucasmendes.dev/site-sp/dois%20irmaos%20lava%20car%20e%20estetica%20automotiva/img/logo-sem-fundo.webp';
const WHATSAPP_AGENDAR =
  'https://wa.me/5566996156031?text=Olá!%20Gostaria%20de%20agendar%20uma%20lavagem.';

const navItems = [
  { label: 'Serviços', target: 'servicos' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
        isScrolled ? 'py-3 shadow-lg' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src={LOGO}
              alt="Dois Irmãos Car"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-gray-800 hover:text-brand-blue font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+5566996156031"
              className="flex items-center gap-2 text-brand-blue text-sm font-medium hover:text-brand-light-blue transition-colors duration-200"
            >
              <Phone width={16} height={16} className="lucide lucide-phone " />
              (66) 9 9615-6031
            </a>
            <a
              href={WHATSAPP_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5"
            >
              Agendar Lavagem
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-gray-800 hover:text-brand-blue transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu width={24} height={24} className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-200 px-4 pt-4 pb-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              className="block w-full text-left py-3 px-4 text-gray-800 hover:text-brand-blue hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-200 mt-3 space-y-3">
            <a
              href="tel:+5566996156031"
              className="flex items-center gap-2 py-3 px-4 text-brand-blue font-medium"
            >
              <Phone width={16} height={16} className="lucide lucide-phone " />
              (66) 9 9615-6031
            </a>
            <a
              href={WHATSAPP_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Agendar Lavagem
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
