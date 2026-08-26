import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL, NAV_ITEMS, scrollToSection } from '../constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <div className="bg-[rgb(41,97,169)] text-white overflow-hidden transition-all duration-300 ease-in-out max-h-40 py-2 opacity-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="tel:1636187557" className="hover:text-gray-200 transition-colors flex items-center gap-1">
              <Phone size={14} className="lucide lucide-phone " />(16) 3618-7557
            </a>
            <a href="tel:1636247478" className="hover:text-gray-200 transition-colors flex items-center gap-1">
              <Phone size={14} className="lucide lucide-phone " />(16) 3624-7478
            </a>
          </div>
          <a href="mailto:contato@atacaodaobaterias.com" className="hover:text-gray-200 transition-colors">
            contato@atacaodaobaterias.com
          </a>
        </div>
      </div>
      <div className="w-full transition-all duration-300 bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src={LOGO_URL}
                alt="Atacadão das Baterias"
                className="h-12 sm:h-16 w-auto cursor-pointer"
                onClick={() => handleNav('hero')}
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-gray-700 hover:text-[rgb(41,97,169)] transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex bg-[rgb(251,35,51)] text-white px-6 py-3 rounded-full hover:bg-[rgb(231,15,31)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Fale Conosco
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-700 hover:text-[rgb(41,97,169)] transition-colors"
            >
              <Menu size={28} className="lucide lucide-menu " />
            </button>
          </div>
        </div>
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <nav className="px-4 pt-4 pb-6 space-y-3 bg-white">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left text-gray-700 hover:text-[rgb(41,97,169)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[rgb(251,35,51)] text-white px-6 py-3 rounded-full hover:bg-[rgb(231,15,31)] transition-all duration-300 font-semibold mt-4"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
