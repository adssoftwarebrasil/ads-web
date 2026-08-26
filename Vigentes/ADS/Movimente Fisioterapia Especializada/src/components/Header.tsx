import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#contato', label: 'Contato' },
];

const PHONE_DISPLAY = '(66) 9 9910-2233';
const PHONE_TEL = '+5566999102233';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fora do topo o header ganha fundo branco — sem isso o menu fica branco
  // sobre as seções claras do site e some.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center group">
            {/* No topo (hero escuro) vale a silhueta branca; no header branco a
                versão sem fundo perde o "mente" rosa-claro, então usa-se a
                oficial com fundo roxo. */}
            <img
              src={solid ? '/img/logo.webp' : '/img/logo-sem-fundo.webp'}
              alt="Movimente Fisioterapia Especializada"
              className={`h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                solid ? 'rounded-lg' : 'brightness-0 invert'
              }`}
              width={518}
              height={427}
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-accent relative group ${
                  solid ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-accent ${
                solid ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              <Phone size={14} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href="https://wa.me/556699102233"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, rgb(219, 67, 43), rgb(181, 51, 28))' }}
            >
              Agendar Consulta
            </a>
          </div>
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              solid ? 'text-brand-primary hover:bg-brand-primary/10' : 'text-white hover:bg-white/10'
            }`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 shadow-xl">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-brand-light hover:text-brand-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center justify-center gap-2 w-full py-3 mb-2 rounded-full font-bold text-brand-primary border-2 border-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
          >
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
          <a
            href="https://wa.me/556699102233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-bold text-white transition-all"
            style={{ background: 'linear-gradient(135deg, rgb(219, 67, 43), rgb(181, 51, 28))' }}
          >
            Agendar via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
