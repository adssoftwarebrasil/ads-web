import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Ensino', id: 'ensino' },
  { label: 'Resultados', id: 'resultados' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/colegio%20sinapse%2Fimg%2Flogo.webp"
              alt="Colégio Sinapse"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[rgb(234,58,35)] ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5562999690082"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Fale Conosco
            </a>
          </nav>
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? (
              <X className={`lucide lucide-x ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`lucide lucide-menu ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 hover:text-[rgb(234,58,35)] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5562999690082"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)] text-white px-6 py-2.5 rounded-full font-semibold text-center mt-2"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
