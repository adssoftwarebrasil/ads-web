import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/palhetos%20sorveteria%20e%20hamburgueria%20%2Fimg%2Flogo-palhetos.png';
const WHATSAPP = 'http://wa.me/556299822672';

const navItems = [
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Cardápio', id: 'menu' },
  { label: 'Avaliações', id: 'testimonials' },
  { label: 'Localização', id: 'location' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-[rgb(35,31,32)]/90 to-transparent py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={LOGO}
              alt="Palhettos Sorveteria e Hamburgueria"
              className="h-14 md:h-16 w-auto cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110 drop-shadow-lg"
              onClick={() => scrollTo('hero')}
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[rgb(255,204,26)] transition-colors duration-300 font-medium text-sm lg:text-base uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(255,204,26)] text-[rgb(35,31,32)] px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95"
            >
              Faça seu Pedido
            </a>
          </nav>
          <button
            className="md:hidden text-white p-2 hover:text-[rgb(255,204,26)] transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden mt-4 bg-[rgb(35,31,32)]/95 backdrop-blur-sm rounded-2xl p-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[rgb(255,204,26)] transition-colors duration-300 font-medium text-sm uppercase tracking-wide text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(255,204,26)] text-[rgb(35,31,32)] px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 text-center"
            >
              Faça seu Pedido
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
