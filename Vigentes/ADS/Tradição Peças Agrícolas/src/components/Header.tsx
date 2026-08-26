import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgb(1,52,47)] shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollTo('hero')}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/tradicao%20pecas%20agricolas%2Fimg%2Flogo-sem-fundo.webp"
              alt="Tradição Peças Agrícolas"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[rgb(221,183,120)] transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="https://wa.me/557736281005"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 bg-[rgb(221,183,120)] hover:bg-[rgb(173,132,84)] text-[rgb(1,52,47)] px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>(77) 3628-1005</span>
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-4 bg-[rgb(1,52,47)] rounded-2xl p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[rgb(221,183,120)] transition-colors duration-300 font-medium text-sm uppercase tracking-wider text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/557736281005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(221,183,120)] hover:bg-[rgb(173,132,84)] text-[rgb(1,52,47)] px-6 py-3 rounded-full font-semibold transition-all duration-300 w-max"
            >
              <Phone className="w-4 h-4" />
              <span>(77) 3628-1005</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
