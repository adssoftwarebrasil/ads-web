import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Depoimentos', id: 'depoimentos' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/j%20a%20solucoes%20contabeis/img/logo-sem-fundo.png"
              alt="Soluções Contábeis"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300 "
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollTo('inicio')}
              className="font-medium transition-colors text-white hover:text-[rgb(245,134,52)]"
            >
              Início
            </button>
            <button
              onClick={() => scrollTo('sobre')}
              className="font-medium transition-colors text-white hover:text-[rgb(245,134,52)]"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollTo('servicos')}
              className="font-medium transition-colors text-white hover:text-[rgb(245,134,52)]"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollTo('depoimentos')}
              className="font-medium transition-colors text-white hover:text-[rgb(245,134,52)]"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollTo('contato')}
              className="bg-[rgb(245,134,52)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(225,114,32)] transition-all transform hover:scale-105"
            >
              Fale Conosco
            </button>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-white"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 bg-[rgb(47,55,56)] rounded-lg p-4 flex flex-col space-y-4 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-medium transition-colors text-white hover:text-[rgb(245,134,52)] text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contato')}
              className="bg-[rgb(245,134,52)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(225,114,32)] transition-all"
            >
              Fale Conosco
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
