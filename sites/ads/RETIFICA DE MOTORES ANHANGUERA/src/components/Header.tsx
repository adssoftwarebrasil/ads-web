import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL, scrollToSection } from '../utils';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={LOGO_URL}
              alt="Anhanguera Retífica de Motores"
              className="h-12 md:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-[rgb(167,20,42)] font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(167,20,42)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(147,15,37)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone
                width={20}
                height={20}
                className="lucide lucide-phone "
              />
              <span>(62) 3558-4336</span>
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-[rgb(167,20,42)] transition-colors"
          >
            {isOpen ? (
              <X width={28} height={28} />
            ) : (
              <Menu width={28} height={28} className="lucide lucide-menu " />
            )}
          </button>
        </div>
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left px-2 py-2 text-gray-700 hover:text-[rgb(167,20,42)] font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(167,20,42)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(147,15,37)] transition-all duration-300 font-semibold mt-2"
            >
              <Phone width={20} height={20} />
              <span>(62) 3558-4336</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
