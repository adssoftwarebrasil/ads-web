import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre', id: 'about' },
  { label: 'Galeria', id: 'gallery' },
  { label: 'Avaliações', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#031B3A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/nosso%20carro%20centro%20automotivo/img/logo-sem-fundo.webp"
              alt="Nosso Carro Centro Automotivo"
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+557991950295"
              className="flex items-center gap-2 text-sm font-medium text-[#6D94BE] hover:text-white transition-colors duration-200"
            >
              <Phone size={16} className="lucide lucide-phone " />
              <span>(79) 9 9195-0295</span>
            </a>
            <a
              href="http://wa.me/557991950295"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#174C7E] hover:bg-[#6D94BE] text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#174C7E]/40"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <Menu size={24} className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#031B3A]/98 backdrop-blur-md ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1 border-t border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full text-left px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              {item.label}
            </button>
          ))}
          <a
            href="http://wa.me/557991950295"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3 bg-[#174C7E] hover:bg-[#6D94BE] text-white text-center font-semibold rounded-lg transition-all"
          >
            Solicitar Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
