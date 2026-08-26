import { useState } from 'react';
import { Menu } from 'lucide-react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const navItems = ['home', 'produtos', 'diferenciais', 'contato'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-50 transition-all duration-600 translate-y-0 opacity-100"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 4px 30px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Flogo.png"
              alt="Rainha das Baterias"
              className="h-10 lg:h-12 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className="text-white hover:text-gray-300 font-medium relative group transition-colors duration-300 capitalize"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(248,203,27)] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-[rgb(248,203,27)] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(248,203,27,0.4)] transition-all duration-300"
          >
            Fale Conosco
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-white hover:text-[rgb(248,203,27)] transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-black border-l border-white/10 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-20">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className="text-white hover:text-[rgb(248,203,27)] font-medium text-left transition-colors duration-300 border-b border-gray-800 pb-2 capitalize"
            >
              {item}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(248,203,27)] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 mt-4 text-center"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}
