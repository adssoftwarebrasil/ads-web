import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (target: string) => {
    setIsOpen(false);
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fatualizadas%2Flogo-atualizada-sem-fundo.webp"
              alt="Tathiane Guimarães"
              className="h-16 sm:h-20 w-auto brightness-0"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/553791564540"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              Agendar Consulta
            </a>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/553791564540"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black text-white px-6 py-3 rounded-full text-sm font-semibold text-center hover:bg-gray-800 transition-all"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
