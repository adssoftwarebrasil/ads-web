import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY, LOGO_URL } from '../constants';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={LOGO_URL}
              alt="Centro Automotivo Bosco"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[rgb(10,33,75)] hover:text-[rgb(204,53,49)] font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center space-x-2 text-[rgb(10,33,75)] hover:text-[rgb(204,53,49)] transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(204,53,49)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(184,43,39)] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Agendar Serviço
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[rgb(10,33,75)] p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-[rgb(10,33,75)] hover:text-[rgb(204,53,49)] font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center space-x-2 text-[rgb(10,33,75)] hover:text-[rgb(204,53,49)] transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(204,53,49)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(184,43,39)] transition-all duration-200 shadow-lg text-center"
            >
              Agendar Serviço
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
