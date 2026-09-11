import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Serviços', target: 'servicos' },
  { label: 'Cases de Sucesso', target: 'cases' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-[#4285F4]">Parceiro</span>
              <span className="text-[#DB4437]"> Google</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-[#5F6368] hover:text-[#4285F4] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5511958550001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F9D58] text-white px-6 py-2 rounded-lg hover:bg-[#0d8a4d] transition-colors font-medium"
            >
              Vamos Conversar?
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="text-[#5F6368] hover:text-[#4285F4]"
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-left text-[#5F6368] hover:text-[#4285F4] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5511958550001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F9D58] text-white px-6 py-2 rounded-lg hover:bg-[#0d8a4d] transition-colors font-medium text-center"
            >
              Vamos Conversar?
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
