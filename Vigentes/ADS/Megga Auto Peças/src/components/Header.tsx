import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Unidades', id: 'unidades' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/megga%20auto%20pecas/img/logo-retangular.png"
              alt="Megga Auto Peças"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-[rgb(216,32,38)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => handleNav('contato')}
            className="hidden lg:flex items-center gap-2 bg-[rgb(216,32,38)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(196,22,28)] transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Fale Conosco
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-[rgb(28,58,122)] p-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-2 pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(216,32,38)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contato')}
              className="flex items-center gap-2 bg-[rgb(216,32,38)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(196,22,28)] transition-all duration-300 font-semibold shadow-md"
            >
              <Phone className="w-5 h-5" />
              Fale Conosco
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
