import { useEffect, useState } from 'react';
import { MessageCircle, Menu } from 'lucide-react';

const navLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex-shrink-0 flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/loja%20padre%20cicero/img/logo-sem-fundo.webp"
              alt="Loja Padre Cícero"
              className="h-10 md:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-brand-gold transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <a
              href="http://wa.me/5588999153119"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-2.5 px-5"
            >
              <MessageCircle size={16} />
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgb(3, 0, 1)' }}
      >
        <nav className="px-4 py-4 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-white/80 hover:text-brand-gold hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="http://wa.me/5588999153119"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 btn-gold justify-center"
          >
            <MessageCircle size={16} />
            Fale pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
