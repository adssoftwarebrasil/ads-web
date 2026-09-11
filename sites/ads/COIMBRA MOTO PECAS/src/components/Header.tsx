import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Avaliações', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/logo.png"
              alt="Coimbra Moto Peças"
              className="h-12 md:h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-medium transition-colors hover:text-[rgb(2,73,137)] ${
                  isScrolled ? 'text-[rgb(2,73,137)]' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="http://wa.me/559591557077"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-[rgb(2,73,137)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(1,58,109)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span>(95) 99155-7077</span>
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? 'text-[rgb(2,73,137)]' : 'text-white'
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? 'text-[rgb(2,73,137)]' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-medium text-[rgb(2,73,137)] hover:text-[rgb(1,58,109)] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/559591557077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(2,73,137)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(1,58,109)] transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>(95) 99155-7077</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
