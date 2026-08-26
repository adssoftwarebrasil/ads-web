import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL } from '../constants';

const NAV_ITEMS: { label: string; target: string }[] = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Vantagens', target: 'vantagens' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
      style={{ backgroundColor: 'rgb(4, 51, 140)', height: '80px' }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between max-w-[1200px]">
        <div className="flex items-center">
          <img src={LOGO_URL} alt="JD Baterias" className="h-12 md:h-14" />
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-white hover:text-[rgb(254,186,0)] transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
          >
            WHATSAPP
          </a>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            <Menu size={28} className="lucide lucide-menu" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed top-[80px] right-0 h-[calc(100vh-80px)] w-64 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'rgb(4, 51, 140)' }}
      >
        <nav className="flex flex-col p-6 gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-white hover:text-[rgb(254,186,0)] transition-colors duration-300 text-left py-2 font-medium"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 rounded-lg font-semibold text-center"
            style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
          >
            WHATSAPP
          </a>
        </nav>
      </div>
    </header>
  );
}
