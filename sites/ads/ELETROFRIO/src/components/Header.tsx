import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('inicio')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Flogo-sem-fundo.png"
              alt="Mineiros Eletro Frio"
              className="h-14 sm:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[rgb(28,85,163)] font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+556436615151"
              className="text-[rgb(28,85,163)] font-semibold hover:text-[rgb(16,130,201)] transition-colors"
            >
              (64) 3661-5151
            </a>
            <a
              href="http://wa.me/5564999368011"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(28,85,163)] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[rgb(16,130,201)] transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(28,85,163)] font-medium transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+556436615151"
              className="text-[rgb(28,85,163)] font-semibold py-2"
            >
              (64) 3661-5151
            </a>
            <a
              href="http://wa.me/5564999368011"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(28,85,163)] text-white px-6 py-2.5 rounded-full font-semibold text-center hover:bg-[rgb(16,130,201)] transition-all duration-300"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
