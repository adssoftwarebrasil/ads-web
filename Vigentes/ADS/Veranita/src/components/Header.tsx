import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO =
  'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fimg%2FLOGO%20VERANITA%20-%20ALTA.png';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center">
            <img src={LOGO} alt="Veranita Produtos Alimentícios" className="h-12 lg:h-16 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[rgb(0,173,239)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5516997516375"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[rgb(238,29,35)] to-[rgb(253,241,0)] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Fale Conosco
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-gray-700 hover:text-[rgb(0,173,239)] transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} className="lucide lucide-menu " />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(0,173,239)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5516997516375"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[rgb(238,29,35)] to-[rgb(253,241,0)] text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
