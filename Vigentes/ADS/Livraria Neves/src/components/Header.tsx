import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Localização', id: 'localizacao' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/img/LOGO%20AMARELO.png"
              alt="Livraria Neves"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[rgb(60,100,139)] hover:text-[rgb(157,119,0)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/557136277599"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(157,119,0)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(137,99,0)] transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-[rgb(60,100,139)] p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-[rgb(60,100,139)] hover:text-[rgb(157,119,0)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/557136277599"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(157,119,0)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(137,99,0)] transition-all duration-300 font-semibold text-center mt-2"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
