import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection } from '../useScrollReveal';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Áreas de Atuação', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
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
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/silvia%20moreira%2Fimg%2Flogo-sem-fundo.webp"
              alt="Silvia Moreira Advogados Associados"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3 xl:px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg hover:bg-brand-gold/10 ${
                  scrolled
                    ? 'text-gray-700 hover:text-brand-red'
                    : 'text-white/90 hover:text-brand-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="http://wa.me/559691327966"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 gold-gradient text-white font-semibold text-sm rounded-lg shadow-lg shadow-brand-gold-dark/20 hover:shadow-xl hover:shadow-brand-gold-dark/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl transition-transform duration-500 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <img
              src="https://storage.lucasmendes.dev/site-sp/silvia%20moreira%2Fimg%2Flogo-sem-fundo.webp"
              alt="Logo"
              className="h-10 w-auto"
            />
            <button onClick={() => setMenuOpen(false)} className="p-2 text-gray-500">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-brand-cream transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/559691327966"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 gold-gradient text-white font-semibold rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
