import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'py-3' : 'py-5'}`}
      style={{
        backgroundColor: scrolled ? 'rgba(5, 31, 52, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/logo-fundo-escuro-sem-fundo.webp"
              alt="FAS Rastreamento Veicular"
              className="h-10 md:h-12 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
                style={{ color: 'rgb(203, 219, 233)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5565992264219"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: 'rgb(203, 219, 233)' }}
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              <span>(65) 9 9226-4219</span>
            </a>
            <a
              href="http://wa.me/556592264219"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300"
              style={{ backgroundColor: 'rgb(37, 211, 102)' }}
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            className="lg:hidden p-2 rounded-md transition-colors duration-200"
            aria-label="Menu"
            style={{ color: 'rgb(203, 219, 233)' }}
            onClick={() => setMenuOpen((v) => !v)}
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
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: 'rgb(5, 31, 52)' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-sm font-medium rounded-md transition-all duration-200"
              style={{ color: 'rgb(203, 219, 233)' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(70, 96, 117, 0.4)' }}>
            <a
              href="http://wa.me/556592264219"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300"
              style={{ backgroundColor: 'rgb(37, 211, 102)' }}
            >
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
