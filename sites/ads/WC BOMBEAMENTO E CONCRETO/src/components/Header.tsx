import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/wc-bombeamento-e-concreto/img/logo-sem-fundo.webp"
              alt="WC Concreto e Bombeamento"
              className="h-10 lg:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-gray-light hover:text-brand-orange transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+553199292900"
              className="flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-white transition-colors duration-200"
            >
              <Phone size={15} />
              (31) 9 9929-2900
            </a>
            <a
              href="https://wa.me/553199292900"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand-orange text-brand-dark text-sm font-bold rounded-lg hover:bg-amber-400 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            className="lg:hidden p-2 text-brand-white"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Menu size={24} className="hidden" /> : null}
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-brand-dark/98 backdrop-blur-md border-t border-white/5 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-2 text-brand-gray-light hover:text-brand-orange transition-colors font-medium border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2 flex flex-col gap-3">
            <a
              href="tel:+553199292900"
              className="flex items-center justify-center gap-2 py-3 border border-brand-orange/50 text-brand-orange font-semibold rounded-lg"
            >
              <Phone size={16} />
              (31) 9 9929-2900
            </a>
            <a
              href="https://wa.me/553199292900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 bg-brand-orange text-brand-dark font-bold rounded-lg"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
