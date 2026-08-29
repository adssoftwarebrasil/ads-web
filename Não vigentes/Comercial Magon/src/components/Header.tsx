import { useState } from 'react';
import { ShoppingBag, Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900/95 to-gray-950/95 backdrop-blur-md shadow-lg border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Flogo-sem-fundo.png"
              alt="Comercial Magon"
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-300 hover:text-white transition-colors font-medium text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.magonshop.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-900/20"
            >
              <ShoppingBag size={18} className="lucide lucide-shopping-bag" />
              <span className="font-semibold text-sm lg:text-base">Loja Virtual</span>
            </a>
            <a
              href="https://wa.me/5516991541924"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(66,66,152)] text-white px-5 py-2.5 rounded-full hover:bg-[rgb(80,80,180)] transition-all duration-300 shadow-lg hover:shadow-blue-900/20"
            >
              <Phone size={18} className="lucide lucide-phone" />
              <span className="font-semibold text-sm lg:text-base">Fale Conosco</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} className="lucide lucide-menu" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-6 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-300 hover:text-white transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.magonshop.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-all duration-300 mt-2"
            >
              <ShoppingBag size={18} />
              <span className="font-semibold">Loja Virtual</span>
            </a>
            <a
              href="https://wa.me/5516991541924"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(66,66,152)] text-white px-5 py-2.5 rounded-full hover:bg-[rgb(80,80,180)] transition-all duration-300"
            >
              <Phone size={18} />
              <span className="font-semibold">Fale Conosco</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
