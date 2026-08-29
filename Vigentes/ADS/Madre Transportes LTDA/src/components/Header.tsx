import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Frota', href: '#frota' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-brand-blue shadow-xl shadow-brand-blue/30'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`hidden md:block overflow-hidden transition-all duration-400 ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
        } bg-black/70 border-b border-white/10 backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center text-xs text-white/70">
          <div className="flex items-center gap-5">
            <a
              href="tel:1933360006"
              className="flex items-center gap-1.5 hover:text-brand-amber transition-colors"
            >
              <Phone size={12} />
              (19) 3336-0006
            </a>
            <a
              href="mailto:comercial@madretransportes.com.br"
              className="flex items-center gap-1.5 hover:text-brand-amber transition-colors"
            >
              <Mail size={12} />
              comercial@madretransportes.com.br
            </a>
          </div>
          <span className="text-white/50">
            Seg–Sex: 8h–12h / 13h30–18h &nbsp;|&nbsp; Sáb: 8h–12h
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex-shrink-0"
        >
          <img
            src="https://storage.lucasmendes.dev/site-sp/madre%20transportes%20ltda/img/logo-letra-branca-sem-fundo.webp"
            alt="Madre Transportes"
            className="h-11 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-white/85 hover:text-white text-sm font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-amber group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
          <a
            href="https://wa.me/5519981211908"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-amber hover:bg-brand-amber-dark text-black font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:scale-105 flex items-center gap-2"
          >
            Solicitar Cotação
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-brand-blue-dark border-t border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-white/85 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg text-base font-medium border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5519981211908"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-amber hover:bg-brand-amber-dark text-black font-bold text-center px-5 py-3.5 rounded-xl transition-all mt-3 shadow-lg"
          >
            Solicitar Cotação
          </a>
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 text-sm text-white/60">
            <a href="tel:1933360006" className="flex items-center gap-2 hover:text-white">
              <Phone size={14} /> (19) 3336-0006
            </a>
            <a href="mailto:comercial@madretransportes.com.br" className="flex items-center gap-2 hover:text-white">
              <Mail size={14} /> comercial@madretransportes.com.br
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
