import { useState } from 'react';
import { Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-primary-purple/90 to-black/90">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <div className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Flogo.webp"
                alt="JC Baterias Mogi"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white hover:text-primary-yellow transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="hidden md:block">
              <button
                onClick={() => scrollTo('contato')}
                className="bg-primary-yellow text-primary-purple px-6 py-3 rounded-lg font-bold hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Fale Conosco
              </button>
            </div>
            <button
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <Menu size={28} className="lucide lucide-menu " />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary-purple shadow-2xl z-40 transform transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-24 px-6 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white hover:text-primary-yellow transition-colors duration-200 font-medium text-left text-lg"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contato')}
            className="bg-primary-yellow text-primary-purple px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-200 text-center mt-4"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </>
  );
}
