import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Localização', id: 'localizacao' },
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
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#0a0a0a]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mecanica%20277/img/logo-sem-fundo.png"
              alt="Mecânica 277"
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-300 hover:text-[#f0e92c] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <a
              href="http://wa.me/5545998527494"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#f0e92c] text-[#0a0a0a] px-6 py-3 rounded-lg font-bold hover:bg-[#e0d91c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="lucide lucide-phone" width={18} height={18} />
              (45) 99852-7494
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x" width={28} height={28} />
            ) : (
              <Menu className="lucide lucide-menu" width={28} height={28} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 border-t border-[#595959]/30">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-300 hover:text-[#f0e92c] transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5545998527494"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#f0e92c] text-[#0a0a0a] px-6 py-3 rounded-lg font-bold mt-2"
            >
              <Phone className="lucide lucide-phone" width={18} height={18} />
              (45) 99852-7494
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
