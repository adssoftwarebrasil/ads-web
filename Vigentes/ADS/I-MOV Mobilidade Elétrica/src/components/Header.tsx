import { useEffect, useState } from 'react';
import { Instagram, Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'HOME', id: 'home' },
  { label: 'PRODUTOS', id: 'produtos' },
  { label: 'QUEM SOMOS', id: 'quem-somos' },
  { label: 'MANUTENÇÃO', id: 'manutencao' },
  { label: 'CONTATO', id: 'contato' },
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
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/i-move%2FLOGO.webp"
              alt="I-MOV Logo"
              className="h-16 sm:h-20 w-auto cursor-pointer"
              onClick={() => scrollTo('home')}
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[#035772] font-medium relative group transition-colors"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e0fd2c] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/imovcuritiba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#035772] transition-colors"
            >
              <Instagram width={20} height={20} />
            </a>
            <a
              href="https://wa.me/5541988248004"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e0fd2c] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Phone width={18} height={18} />
              (41) 98824-8004
            </a>
          </div>
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-[#035772] font-medium py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5541988248004"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e0fd2c] text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mt-2"
            >
              <Phone width={18} height={18} />
              (41) 98824-8004
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
