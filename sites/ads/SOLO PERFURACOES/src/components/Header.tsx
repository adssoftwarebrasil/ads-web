import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { openWhatsApp, scrollToSection } from '../lib/whatsapp';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#004358]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNav('inicio')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/solo-perfuracao%2Flogo%20(1)%201.png"
              alt="Solo Perfurações Logo"
              className="h-12 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-yellow-400 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5564999919305"
              className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(64) 9 9991-9305</span>
            </a>
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento.')}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Solicitar Orçamento
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-yellow-400 font-medium transition-colors duration-200 text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+5564999919305"
              className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors py-2"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(64) 9 9991-9305</span>
            </a>
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento.')}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-all duration-200 shadow-lg"
            >
              Solicitar Orçamento
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
