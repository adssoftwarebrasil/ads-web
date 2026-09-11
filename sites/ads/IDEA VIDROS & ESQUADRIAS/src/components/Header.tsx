import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', target: 'inicio' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#020202]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src="https://storage.lucasmendes.dev/site-sp/idea%20vidros/img/logo-sem-fundo.webp"
            alt="IDEA Vidros & Esquadrias"
            className="h-14 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-white text-sm font-medium hover:text-[#EACD68] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EACD68] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        <a
          href="http://wa.me/556699856445"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-[#F60301] hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-red-500/30 hover:scale-105"
        >
          <Phone width={16} height={16} />
          (66) 9 9985-6445
        </a>
        <button
          className="lg:hidden p-2 text-white"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[#020202]/95 backdrop-blur-md mt-2 mx-4 rounded-2xl p-4 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="text-white text-sm font-medium hover:text-[#EACD68] transition-colors duration-200 text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href="http://wa.me/556699856445"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#F60301] hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 mt-2"
            >
              <Phone width={16} height={16} />
              (66) 9 9985-6445
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
