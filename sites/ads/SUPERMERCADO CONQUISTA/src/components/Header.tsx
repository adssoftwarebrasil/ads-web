import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const navItems = [
  { label: 'Sobre Nós', target: 'about' },
  { label: 'Produtos', target: 'products' },
  { label: 'Nossas Lojas', target: 'locations' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (target: string) => {
    setMenuOpen(false);
    scrollTo(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollTo('hero')}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/supermercado%20conquista%2Fimg%2Flogo-sem-fundo.png"
              alt="Supermercado Conquista"
              className="h-12 sm:h-16 w-auto transition-all duration-300"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNav(item.target)}
                className={`font-medium transition-colors hover:text-[rgb(221,40,45)] ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-[rgb(221,40,45)] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[rgb(200,30,35)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Fale Conosco
            </button>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNav(item.target)}
                className="text-left font-medium text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 hover:text-[rgb(221,40,45)] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-[rgb(221,40,45)] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[rgb(200,30,35)] transition-all duration-300 shadow-lg"
            >
              Fale Conosco
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
