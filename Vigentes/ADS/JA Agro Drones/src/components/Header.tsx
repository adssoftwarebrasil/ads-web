import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
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
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/img/logo-sem-fundo.webp"
              alt="JA Agro Drones"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium text-white/80 hover:text-[#6ab534] transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="http://wa.me/556295016058"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#4a8427] hover:bg-[#3d6d20] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#4a8427]/30"
          >
            <Phone className="lucide lucide-phone" width={15} height={15} />
            (62) 99501-6058
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/98 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-left text-white/80 hover:text-[#6ab534] hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
          <a
            href="http://wa.me/556295016058"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-[#4a8427] text-white font-semibold px-5 py-3 rounded-full transition-colors hover:bg-[#3d6d20]"
          >
            <Phone className="lucide lucide-phone" width={16} height={16} />
            (62) 99501-6058
          </a>
        </div>
      </div>
    </header>
  );
}
