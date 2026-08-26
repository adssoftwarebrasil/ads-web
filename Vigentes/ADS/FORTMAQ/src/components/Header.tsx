import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/559491009092';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A1E55]/95 py-3 shadow-lg backdrop-blur-sm' : 'bg-[#0A1E55]/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/fortmaq%2Fimg%2Flogo-sem-fundo.webp"
              alt="FORTMAQ Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#E6E6E4] hover:text-[#AA1C1F] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#AA1C1F] text-white px-6 py-2.5 rounded-full hover:bg-[#8A1619] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(94) 99100-9092</span>
            </a>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#E6E6E4] hover:text-[#AA1C1F] transition-colors p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#E6E6E4] hover:text-[#AA1C1F] transition-colors duration-300 font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#AA1C1F] text-white px-6 py-2.5 rounded-full hover:bg-[#8A1619] transition-all duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(94) 99100-9092</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
