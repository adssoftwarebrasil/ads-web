import { useState } from 'react';
import { Flame, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Diferenciais', target: 'diferenciais' },
  { label: 'Contato', target: 'contato' },
];

const WHATSAPP_ORDER =
  'https://wa.me/5516992821647?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Flame className="lucide lucide-flame h-10 w-10 text-[rgb(219,138,69)]" />
              <div className="absolute inset-0 blur-sm bg-[rgb(219,138,69)] opacity-30 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-none">
                AZARIAS GÁS
              </h1>
              <p className="text-xs text-gray-600 uppercase tracking-wide">
                Ligou, Chegou
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-gray-700 hover:text-[rgb(219,138,69)] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(219,138,69)] text-white px-6 py-2 rounded-full font-semibold hover:bg-[rgb(199,118,49)] transition-all duration-300"
            >
              Peça Agora
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-gray-700"
          >
            <Menu className="lucide lucide-menu h-6 w-6" />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-20 right-0 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-gray-700 hover:text-[rgb(219,138,69)] transition-colors duration-300 text-left py-2"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(219,138,69)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(199,118,49)] transition-all duration-300 text-center"
          >
            Peça Agora
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
