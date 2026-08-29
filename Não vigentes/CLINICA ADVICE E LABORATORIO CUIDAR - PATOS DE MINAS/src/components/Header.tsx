import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Estrutura', id: 'estrutura' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-black/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Flogo-sem-fundo.webp"
              alt="Advice Medicina e Engenharia do Trabalho"
              className={`h-12 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-500 ${
                  scrolled ? 'text-neutral-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+553438231771"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-neutral-700' : 'text-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              (34) 3823-1771
            </a>
            <button className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25">
              Fale Conosco
            </button>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-neutral-700' : 'text-white'}`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-xl border-t px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left text-neutral-700 hover:text-brand-500 font-medium py-2 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <hr className="border-neutral-200" />
          <a
            href="tel:+553438231771"
            className="flex items-center gap-2 text-neutral-600 font-medium py-2"
          >
            <Phone className="w-4 h-4" />
            (34) 3823-1771
          </a>
          <button className="w-full bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold transition-all">
            Fale Conosco
          </button>
        </div>
      </div>
    </header>
  );
}
