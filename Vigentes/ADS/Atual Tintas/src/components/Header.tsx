import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-400 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/atual%20tintas/img/logo-sem-fundo.webp"
              alt="Atual Tintas"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link px-4 py-2 text-sm font-medium text-gray-800 hover:text-brand-green transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5566996839888"
              className="flex items-center gap-2 text-gray-800 hover:text-brand-green transition-colors duration-200 text-sm font-medium"
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              <span>(66) 9 9683-9888</span>
            </a>
            <a
              href="http://wa.me/5566996839888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-brand-dark transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: 'rgb(164, 209, 58)' }}
            >
              Orçamento Grátis
            </a>
          </div>
          <button
            className="lg:hidden p-2 rounded-lg text-gray-800 transition-colors duration-200 hover:bg-gray-100"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 border-t border-gray-100">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3 border-t border-gray-50 mt-2">
            <a
              href="tel:+5566996839888"
              className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-brand-green text-sm font-medium transition-colors"
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              (66) 9 9683-9888
            </a>
            <a
              href="http://wa.me/5566996839888"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-4 py-3 rounded-lg text-sm font-semibold text-brand-dark transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'rgb(164, 209, 58)' }}
            >
              Orçamento Grátis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
