import { useState, useEffect } from 'react';
import { UtensilsCrossed, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgb(61,61,67)] shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <UtensilsCrossed className="w-8 h-8 text-[rgb(212,178,37)]" />
            <div>
              <h1 className="text-white font-bold text-xl md:text-2xl">Churrascaria Costelão</h1>
              <p className="text-[rgb(212,178,37)] text-xs">38 anos de tradição</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[rgb(212,178,37)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5545999434290"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(212,178,37)] text-[rgb(61,61,67)] px-6 py-2 rounded-full font-semibold hover:bg-[rgb(212,86,96)] hover:text-white transition-all duration-300 shadow-lg"
            >
              Fale Conosco
            </a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 bg-[rgb(61,61,67)] rounded-2xl p-6 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[rgb(212,178,37)] transition-colors font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5545999434290"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(212,178,37)] text-[rgb(61,61,67)] px-6 py-2 rounded-full font-semibold text-center hover:bg-[rgb(212,86,96)] hover:text-white transition-all duration-300 shadow-lg"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
