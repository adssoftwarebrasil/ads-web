import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from './icons';

const navLinks = [
  { label: 'Sobre', target: 'sobre' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Diferenciais', target: 'diferenciais' },
  { label: 'Avaliações', target: 'avaliacoes' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/anjos%20pocos%20artesianos/img/logo-sem-fundo.webp"
              alt="Anjos Poços Artesianos"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              <Phone className="w-5 h-5" />
              (66) 3531-1026
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg font-medium w-fit"
            >
              <Phone className="w-5 h-5" />
              (66) 3531-1026
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
