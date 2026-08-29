import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Produtos', id: 'products' },
  { label: 'Avaliações', id: 'reviews' },
  { label: 'Localização', id: 'location' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fimg%2Ftsa-logo.webp"
              alt="TSA Centro de Direções Bosch"
              className="h-12 md:h-14 w-auto transition-all duration-300"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-[rgb(4,26,58)] hover:text-[rgb(163,24,23)] font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(163,24,23)] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-[rgb(163,24,23)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(143,20,20)] transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
              <Phone width={20} height={20} />
              Fale Conosco
            </button>
          </div>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden text-[rgb(4,26,58)] p-2"
          >
            <Menu width={28} height={28} />
          </button>
        </div>
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-[rgb(4,26,58)] hover:text-[rgb(163,24,23)] font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[rgb(163,24,23)] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[rgb(143,20,20)] transition-all duration-200 flex items-center justify-center gap-2 mt-2">
              <Phone width={20} height={20} />
              Fale Conosco
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
