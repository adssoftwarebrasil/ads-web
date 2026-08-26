import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Especialidades', id: 'especialidades' },
  { label: 'Contato', id: 'contato' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#3A9E3E] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/petexotic%2FWhatsApp%20Image%202025-12-10%20at%2016.57.50%20%281%29.jpeg"
              alt="Pet Exotic"
              className="h-14 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-green-100 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/556283177646"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#3A9E3E] px-6 py-2.5 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="lucide lucide-phone" width={18} height={18} />
              Agendar
            </a>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-green-700 rounded-lg transition-colors duration-300"
          >
            {isOpen ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left py-2 hover:text-green-100 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/556283177646"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#3A9E3E] px-6 py-2.5 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 w-fit"
            >
              <Phone className="lucide lucide-phone" width={18} height={18} />
              Agendar
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
