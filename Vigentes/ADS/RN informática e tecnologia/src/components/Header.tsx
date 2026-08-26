import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Serviços', target: 'services' },
  { label: 'Sobre', target: 'about' },
  { label: 'Avaliações', target: 'testimonials' },
  { label: 'Localização', target: 'location' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Flogo-sem-fundo.png"
              alt="RN Informática"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-gray-300 hover:text-[rgb(152,204,50)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20RN%20Informática."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[rgb(1,102,52)] text-white px-4 py-2.5 rounded-lg hover:bg-[rgb(152,204,50)] transition-all duration-300 shadow-md hover:shadow-lg hover:text-black"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium text-sm xl:text-base">(75) 98191-4422</span>
              </a>
              <a
                href="https://wa.me/557591575254?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20RN%20Informática."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[rgb(1,102,52)] text-white px-4 py-2.5 rounded-lg hover:bg-[rgb(152,204,50)] transition-all duration-300 shadow-md hover:shadow-lg hover:text-black"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium text-sm xl:text-base">(75) 99157-5254</span>
              </a>
            </div>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-white hover:text-[rgb(152,204,50)] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-4 pb-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-left text-gray-300 hover:text-[rgb(152,204,50)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20RN%20Informática."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(1,102,52)] text-white px-4 py-2.5 rounded-lg hover:bg-[rgb(152,204,50)] transition-all duration-300 shadow-md hover:shadow-lg hover:text-black w-fit"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">(75) 98191-4422</span>
            </a>
            <a
              href="https://wa.me/557591575254?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20RN%20Informática."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(1,102,52)] text-white px-4 py-2.5 rounded-lg hover:bg-[rgb(152,204,50)] transition-all duration-300 shadow-md hover:shadow-lg hover:text-black w-fit"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">(75) 99157-5254</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
