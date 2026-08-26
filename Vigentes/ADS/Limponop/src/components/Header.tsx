import { useEffect, useState } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { WHATSAPP } from '../data';

const navLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center flex-shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/limponop/img/logo-sem-fundo.webp"
            alt="Limponop Soluções em Limpeza"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-medium text-sm tracking-wide transition-colors duration-200 hover:text-brand-pink ${
                scrolled ? 'text-brand-dark' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-pink text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-pink-600 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <ShoppingBag width={15} height={15} />
            Pedir Orçamento
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-brand-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Menu"
        >
          <Menu width={24} height={24} />
        </button>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium py-3 px-3 rounded-lg hover:bg-pink-50 hover:text-brand-pink transition-colors text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 bg-brand-pink text-white px-5 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
            >
              <ShoppingBag width={16} height={16} />
              Pedir Orçamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
