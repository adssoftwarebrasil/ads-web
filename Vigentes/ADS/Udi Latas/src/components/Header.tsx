import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Depoimentos', id: 'depoimentos' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-2 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/udi%20latas%2Fimg%2Flogo-sem-fundo.png"
              alt="Udi Latas"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-medium transition-all duration-200 hover:scale-105 text-[#28156F] hover:text-[#F2CD00]"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+553432364573"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 bg-[#28156F] text-white hover:bg-[#F2CD00] hover:text-[#28156F]"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(34) 3236-4573</span>
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg bg-[#F2CD00] text-[#28156F]"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-medium py-2 text-[#28156F] hover:text-[#F2CD00] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+553432364573"
              className="flex items-center gap-2 px-4 py-2 mt-2 rounded-lg bg-[#28156F] text-white font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>(34) 3236-4573</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
