import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const LOGO =
  'https://storage.lucasmendes.dev/site-sp/restaurante%20e%20pousada%20ovomaltine/img/logo-sem-fundo.webp';
const WHATSAPP = 'http://wa.me/5524998199101';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#pousada', label: 'Pousada' },
  { href: '#quartos', label: 'Quartos' },
  { href: '#historia', label: 'Nossa História' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#localizacao', label: 'Localização' },
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-max px-4 md:px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={LOGO}
              alt="Restaurante e Pousada Ovomaltine"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-brand-orange transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5"
            >
              <Phone size={16} />
              Fale Conosco
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-lg transition-all duration-300 lg:hidden flex flex-col ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-4 pt-5 pb-4 border-b border-white/10">
          <img src={LOGO} alt="Ovomaltine" className="h-12 w-auto" />
          <button
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-4 text-lg font-medium text-white/90 hover:text-brand-orange hover:bg-white/5 rounded-xl transition-all duration-200 border-b border-white/5"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center text-base py-4"
          >
            <Phone size={20} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
