import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#inicio" className="flex items-center flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/logo-sem-fundo.webp"
              alt="Althus Service Car"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+551636240220"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-200"
            >
              <Phone size={15} className="lucide lucide-phone text-[rgb(240,26,40)]" />
              (16) 3624-0220
            </a>
            <a
              href="https://wa.me/551636240220"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1fa854] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5"
            >
              Agendar Agora
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X size={24} className="lucide lucide-x" />
            ) : (
              <Menu size={24} className="lucide lucide-menu" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/98 border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+551636240220"
              className="flex items-center justify-center gap-2 text-white/80 py-2.5 border border-white/20 rounded-full text-sm"
            >
              <Phone size={15} className="lucide lucide-phone text-[rgb(240,26,40)]" />
              (16) 3624-0220
            </a>
            <a
              href="https://wa.me/551636240220"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold py-3 rounded-full text-center text-sm"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
