import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Servicos', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

const whatsappUrl =
  'https://wa.me/557598115869?text=Ol%C3%A1%2C%20vim%20pelo%20Google.%20Quero%20fazer%20um%20or%C3%A7amento.';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgb(2,66,147)] shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ts%20tecnologia%2Fimg%2Flogo-fundo-azul.webp"
              alt="TS Serviços"
              className="h-12 sm:h-14 w-auto transition-all duration-300"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium transition-colors duration-200 text-white hover:text-[rgb(16,215,237)]"
              >
                {item.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(16,215,237)] text-[rgb(2,66,147)] px-6 py-2.5 rounded-full font-semibold hover:bg-[rgb(0,68,139)] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
            </a>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-white"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden mt-4 bg-[rgb(2,66,147)] rounded-2xl p-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-sm font-medium text-white hover:text-[rgb(16,215,237)] transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(16,215,237)] text-[rgb(2,66,147)] px-6 py-2.5 rounded-full font-semibold text-center hover:bg-[rgb(0,68,139)] hover:text-white transition-all duration-300"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
