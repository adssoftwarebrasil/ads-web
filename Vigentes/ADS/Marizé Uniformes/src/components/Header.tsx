import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio">
            <img
              src="https://storage.lucasmendes.dev/site-sp/marize%20uniformes/img/logo-sem-fundo.webp"
              alt="Marizé Uniformes"
              className={`transition-all duration-500 w-auto object-contain ${scrolled ? 'h-12' : 'h-16'}`}
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:text-brand-blue ${
                  scrolled ? 'text-gray-700 hover:bg-brand-blue/5' : 'text-white hover:bg-white/20'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+559881135450"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="lucide lucide-phone" width={15} height={15} strokeWidth={2} />
              <span>(98) 9 8113-5450</span>
            </a>
            <a
              href="http://wa.me/559881135450"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222) 0%, rgb(0, 187, 254) 100%)' }}
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="lucide lucide-x" width={24} height={24} strokeWidth={2} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-xl border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-brand-blue/5 hover:text-brand-blue transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 pb-1">
            <a
              href="http://wa.me/559881135450"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 rounded-full text-white font-semibold"
              style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222) 0%, rgb(0, 187, 254) 100%)' }}
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
