import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '#inicio', active: true },
  { label: 'Sobre Nós', href: '#sobre', active: false },
  { label: 'Serviços', href: '#servicos', active: false },
  { label: 'Blog', href: '#blog', active: false },
  { label: 'Contato', href: '#contato', active: false },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer">
            <img src="https://iili.io/KedTp7S.png" alt="Gerencial Contábil" className="h-16 md:h-24 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`text-sm font-medium transition-colors ${
                  item.active ? 'text-[#C0A062]' : 'text-gray-700 hover:text-[#C0A062]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+5561983132002"
              className="flex items-center space-x-2 bg-[#C0A062] text-white px-4 py-2 rounded-lg hover:bg-[#a88b52] transition-colors"
            >
              <Phone className="lucide lucide-phone" width={18} height={18} />
              <span className="text-sm font-medium">(61) 98313-2002</span>
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors py-2 ${
                  item.active ? 'text-[#C0A062]' : 'text-gray-700 hover:text-[#C0A062]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+5561983132002"
              className="flex items-center space-x-2 bg-[#C0A062] text-white px-4 py-2 rounded-lg hover:bg-[#a88b52] transition-colors w-fit"
            >
              <Phone className="lucide lucide-phone" width={18} height={18} />
              <span className="text-sm font-medium">(61) 98313-2002</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
