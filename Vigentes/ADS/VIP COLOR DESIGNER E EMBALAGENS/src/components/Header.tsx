import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/556294205040';

const navItems = [
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center cursor-pointer">
            <img
              src="https://storage.lucasmendes.dev/site-sp/vip%20color/img/logo-sem-fundo.png"
              alt="Vip Designer e Embalagens"
              className="h-14 sm:h-20 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-[rgb(3,101,84)] hover:text-[rgb(229,198,99)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(3,101,84)] text-white px-6 py-3 rounded-full hover:bg-[rgb(229,198,99)] hover:text-[rgb(3,101,84)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar Orçamento
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden text-[rgb(3,101,84)] p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-left text-[rgb(3,101,84)] hover:text-[rgb(229,198,99)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(3,101,84)] text-white px-6 py-3 rounded-full text-center hover:bg-[rgb(229,198,99)] hover:text-[rgb(3,101,84)] transition-all duration-300 font-semibold"
            >
              Solicitar Orçamento
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
