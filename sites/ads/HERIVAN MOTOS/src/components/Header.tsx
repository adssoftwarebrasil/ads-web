import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_DEFAULT_MSG } from '../constants';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Nossas Motos', href: '#motos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-black shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="bg-[rgb(219,55,51)] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              Seg–Sex: 7h às 17h30 &nbsp;|&nbsp; Sáb: 7h às 12h
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              Av. das Palmeiras, 1570 – Sinop/MT
            </span>
          </div>
          <a
            href={`${WHATSAPP_LINK}?text=${WHATSAPP_DEFAULT_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity"
          >
            <Phone size={13} />
            (66) 9 9995-1333
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex-shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/herivan-motos%2Fimg%2Flogo-sem-fundo.webp"
            alt="Herivan Motos"
            className="h-12 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium uppercase tracking-wider hover:text-[rgb(219,55,51)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${WHATSAPP_LINK}?text=${WHATSAPP_DEFAULT_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(219,55,51)] text-white px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors duration-200 ml-2"
          >
            Fale Conosco
          </a>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-black border-t border-gray-800`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-white text-lg font-medium border-b border-gray-800 pb-3 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${WHATSAPP_LINK}?text=${WHATSAPP_DEFAULT_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(219,55,51)] text-white px-5 py-3 rounded font-bold text-center uppercase tracking-wider mt-2"
          >
            Fale Conosco
          </a>
          <div className="mt-2 pt-2 border-t border-gray-800 text-[rgb(187,189,191)] text-sm flex flex-col gap-2">
            <span className="flex items-center gap-2"><Clock size={14} /> Seg–Sex: 7h–17h30 | Sáb: 7h–12h</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Av. das Palmeiras, 1570 – Sinop/MT</span>
          </div>
        </div>
      </div>
    </header>
  );
}
