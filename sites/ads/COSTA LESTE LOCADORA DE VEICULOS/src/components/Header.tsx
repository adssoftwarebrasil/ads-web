import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Frota', id: 'frota' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(16,14,13)] shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Flogo-sem-fundo.png"
              alt="Locadora Costa Leste"
              className="h-12 sm:h-16 w-auto object-contain brightness-0 invert"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[rgb(255,254,252)] hover:text-[rgb(202,25,27)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5585986018954"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-6 py-3 rounded-full hover:bg-[rgb(143,25,19)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone size={18} />
              <span>Reserve Agora</span>
            </a>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[rgb(255,254,252)] hover:text-[rgb(202,25,27)] transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-[rgb(255,254,252)] hover:text-[rgb(202,25,27)] transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5585986018954"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-6 py-3 rounded-full hover:bg-[rgb(143,25,19)] transition-all duration-300 font-semibold shadow-lg mt-2"
            >
              <Phone size={18} />
              <span>Reserve Agora</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
