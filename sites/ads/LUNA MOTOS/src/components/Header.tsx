import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection, scrollToTop } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Nossa Loja', id: 'loja' },
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
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020202]/95 backdrop-blur-sm shadow-lg'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <button
            onClick={scrollToTop}
            className="flex-shrink-0 transition-transform hover:scale-105 duration-300"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fimg%2Flogo-sem-fundo.png"
              alt="Luna Motos"
              className="h-12 md:h-14 w-auto invert"
              loading="eager"
            />
          </button>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-[#D3D6D5] hover:text-white text-sm font-medium relative group transition-colors duration-200"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F97316] to-[#DC2626] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+559591772210"
              className="flex items-center space-x-2 px-4 py-2 border border-[#D3D6D5] rounded-lg text-[#D3D6D5] hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200"
            >
              <Phone className="lucide lucide-phone w-4 h-4" />
              <span className="text-sm font-medium">(95) 99177-2210</span>
            </a>
            <button
              onClick={() => handleNav('contato')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#F97316] to-[#DC2626] text-white font-semibold text-sm uppercase rounded-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-200"
            >
              FALE CONOSCO
            </button>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x w-6 h-6" />
            ) : (
              <Menu className="lucide lucide-menu w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[#020202]/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-[#D3D6D5] hover:text-white text-sm font-medium py-2 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+559591772210"
              className="flex items-center space-x-2 py-2 text-[#D3D6D5] hover:text-[#F97316] transition-colors"
            >
              <Phone className="lucide lucide-phone w-4 h-4" />
              <span className="text-sm font-medium">(95) 99177-2210</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
