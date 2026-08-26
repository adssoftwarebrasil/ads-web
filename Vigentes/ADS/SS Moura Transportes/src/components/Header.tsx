import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" aria-label="SS Moura Transportes" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/logo-sem-fundo.webp"
            alt="SS Moura Transportes"
            className="h-11 w-auto drop-shadow-md"
          />
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-blue relative group ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-blue rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/553799568191"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone
              width={15}
              height={15}
              strokeWidth={2.5}
              className="lucide lucide-phone "
            />
            Chamar Agora
          </a>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {menuOpen ? (
              <X width={24} height={24} strokeWidth={2} />
            ) : (
              <Menu width={24} height={24} strokeWidth={2} className="lucide lucide-menu " />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 font-medium py-3 px-4 rounded-xl hover:bg-brand-blue-50 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/553799568191"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-blue text-white font-semibold py-3.5 px-4 rounded-xl mt-3 mb-1 hover:bg-brand-blue-dark transition-colors shadow-md"
            >
              <Phone width={16} height={16} strokeWidth={2} className="lucide lucide-phone " />
              Chamar Agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
