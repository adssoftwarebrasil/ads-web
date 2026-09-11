import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="10" width="20" height="2.5" rx="0.5"></rect>
                <rect x="2" y="5" width="14" height="2.5" rx="0.5"></rect>
                <rect x="2" y="15" width="17" height="2.5" rx="0.5"></rect>
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-sm tracking-widest uppercase">Ferro e Aço</span>
              <span className="block text-brand-orange font-semibold text-xs tracking-wider uppercase">do Vale</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-brand-orange text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+556295226886"
              className="flex items-center gap-2 text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm font-medium"
            >
              <Phone className="lucide lucide-phone w-4 h-4" />
              <span>(62) 9 9522-6886</span>
            </a>
            <a
              href="http://wa.me/556295226886"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            className="lg:hidden p-2 text-white hover:text-brand-orange transition-colors"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="lucide lucide-menu w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/98 backdrop-blur-md border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-brand-orange hover:bg-white/5 py-3 px-3 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
            <a href="tel:+556295226886" className="flex items-center justify-center gap-2 text-gray-300 py-2 text-sm">
              <Phone className="lucide lucide-phone w-4 h-4" />
              (62) 9 9522-6886
            </a>
            <a
              href="http://wa.me/556295226886"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-sm"
            >
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
