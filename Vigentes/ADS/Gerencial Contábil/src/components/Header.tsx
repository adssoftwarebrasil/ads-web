import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = ['Início', 'Sobre Nós', 'Serviços', 'Blog', 'Contato'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer">
            <img
              src="https://iili.io/KedTp7S.png"
              alt="Gerencial Contábil"
              className="h-16 md:h-24 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, i) => (
              <button
                key={item}
                className={
                  i === 0
                    ? 'text-sm font-medium transition-colors text-[#C0A062]'
                    : 'text-sm font-medium transition-colors text-gray-700 hover:text-[#C0A062]'
                }
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+556130361793"
              className="flex items-center space-x-2 bg-[#C0A062] text-white px-4 py-2 rounded-lg hover:bg-[#a88b52] transition-colors"
            >
              <Phone size={18} className="lucide lucide-phone" />
              <span className="text-sm font-medium">(61) 3036-1793</span>
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => setMenuOpen(false)}
                className={
                  i === 0
                    ? 'text-left text-sm font-medium transition-colors text-[#C0A062] py-2'
                    : 'text-left text-sm font-medium transition-colors text-gray-700 hover:text-[#C0A062] py-2'
                }
              >
                {item}
              </button>
            ))}
            <a
              href="tel:+556130361793"
              className="flex items-center space-x-2 bg-[#C0A062] text-white px-4 py-2 rounded-lg hover:bg-[#a88b52] transition-colors w-fit"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">(61) 3036-1793</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
