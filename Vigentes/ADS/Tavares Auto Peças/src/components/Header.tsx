import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'bg-brand-black/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/alteracoes/logoBranca.png"
              alt="Tavares Auto Peças"
              className="h-12 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-white font-medium text-sm tracking-wide hover:text-brand-red"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+551633236646"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={15} />
              <span>(16) 3323-6646</span>
            </a>
            <a
              href="http://wa.me/551633236646"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-brand-black shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/logo-sem-fundo.webp"
              alt="Tavares Auto Peças"
              className="h-10 w-auto"
            />
            <button className="text-white/70 hover:text-white p-1" onClick={() => setMenuOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-4 flex-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 font-medium px-4 py-3 rounded-lg transition-colors text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="p-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+551633236646"
              className="flex items-center gap-3 text-white/80 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">(16) 3323-6646</span>
            </a>
            <a
              href="http://wa.me/551633236646"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-lg transition-colors"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
