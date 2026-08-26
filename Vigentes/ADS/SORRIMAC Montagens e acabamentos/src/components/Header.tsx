import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/utils';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); go('inicio'); }} className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/sorrimac/img/logo-sem-fundo.webp"
              alt="Sorrimac Logo"
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-sm font-medium text-white/90 hover:text-brand-orange transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5566992474531"
              className="flex items-center gap-2 text-white/80 hover:text-brand-orange text-sm font-medium transition-colors duration-200"
            >
              <Phone className="lucide lucide-phone" width={15} height={15} />
              (66) 9 9247-4531
            </a>
            <a
              href="https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5"
            >
              Orçamento Grátis
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
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
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-dark border-t border-white/10 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-left text-white/90 hover:text-brand-orange hover:bg-white/5 px-4 py-3 rounded-lg font-medium transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a href="tel:+5566992474531" className="flex items-center gap-2 text-white/80 px-4 py-2 text-sm">
              <Phone className="lucide lucide-phone" width={15} height={15} />
              (66) 9 9247-4531
            </a>
            <a
              href="https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              Orçamento Grátis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
