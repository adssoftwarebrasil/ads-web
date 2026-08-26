import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const brands = [
  { name: 'Elizabeth', logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FElizabeth.png' },
  { name: 'Eliane', logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FEliane.png' },
  { name: 'Decortiles', logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FDecortiles.png' },
  { name: 'Gart', logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FGart.png' },
  { name: 'Gauss', logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FGauss.png' },
  { name: 'Arquitech', logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FArquitech.png' },
  { name: 'E-home', logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FE-home.png' },
  { name: 'Debacco', logo: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Flogomarca%2FDeBacco.png' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBrandsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      setIsBrandsOpen(false);
    }
  };

  const navItems = ['Produtos', 'Catálogos', 'Sobre', 'Contato'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-gradient-to-b from-black/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ALTERAÇÃO AQUI: Aumentei a altura do container de h-20 para h-24 (mobile) e h-28 (desktop) */}
        <div className="flex items-center justify-between h-24 md:h-28">
          <div
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            {/* ALTERAÇÃO AQUI: Aumentei a logo de h-16 para h-20 (mobile) e h-24 (desktop) */}
            <img
              src="https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Flogo.png"
              alt="Fino Acabamento"
              className="h-20 md:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))}
                className="relative px-4 py-2 text-white hover:text-gray-300 transition-all duration-200 text-sm font-medium tracking-wide group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4"></span>
              </button>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                className="flex items-center gap-1 px-4 py-2 text-white hover:text-gray-300 transition-all duration-200 text-sm font-medium tracking-wide group"
              >
                Marcas
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isBrandsOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4"></span>
              </button>

              {isBrandsOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                      Marcas Parceiras
                    </h3>
                    <div className="grid grid-cols-3 gap-3 max-h-80 overflow-y-auto custom-scrollbar">
                      {brands.map((brand, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection('marcas')}
                          className="bg-white hover:bg-gray-50 border border-white/20 hover:border-white/40 rounded-xl p-3 h-20 flex items-center justify-center transition-all duration-300 group overflow-hidden"
                        >
                          <img
                            src={brand.logo}
                            alt={`Logo ${brand.name}`}
                            className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
                          />
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => scrollToSection('marcas')}
                      className="w-full mt-4 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white text-sm font-medium transition-all duration-300"
                    >
                      Ver Todas as Marcas
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5581992928284?text=Olá,%20gostaria%20de%20mais%20informações"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone size={16} />
              Contato
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <nav className="px-4 pt-4 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))}
                className="block w-full text-left text-white hover:bg-white/10 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('marcas')}
              className="block w-full text-left text-white hover:bg-white/10 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200"
            >
              Marcas
            </button>
            <a
              href="https://wa.me/5581992928284?text=Olá,%20gostaria%20de%20mais%20informações"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              <Phone size={18} />
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}