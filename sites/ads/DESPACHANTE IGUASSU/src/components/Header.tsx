import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre', id: 'about' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/despachante%20iguassu%2Fimg%2Flogo-sem-fundo.webp"
              alt="Despachante Iguassu"
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 hover:text-[#FA1213] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="http://wa.me/5545999661849"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-6 py-3 bg-[#FA1213] text-white font-semibold rounded-full hover:bg-[#d10f10] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Fale Conosco
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-800 hover:text-[#FA1213] hover:bg-gray-50 rounded-lg transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5545999661849"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-2 px-6 py-3 bg-[#FA1213] text-white font-semibold rounded-full hover:bg-[#d10f10] transition-all duration-300 shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
