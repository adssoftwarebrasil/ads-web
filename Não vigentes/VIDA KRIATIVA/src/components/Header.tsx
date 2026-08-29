import { useState } from 'react';
import { Phone, Clock, MapPin, Menu } from 'lucide-react';

const navItems = ['Início', 'Sobre', 'Produtos', 'Cursos', 'Contato'];

const sectionMap: Record<string, string> = {
  'Início': 'inicio',
  'Sobre': 'sobre',
  'Produtos': 'produtos',
  'Cursos': 'cursos',
  'Contato': 'contato',
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (label: string) => {
    const id = sectionMap[label];
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-2">
      <div className="bg-[#1a2e5a] text-white transition-all duration-300 py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-xs md:text-sm font-medium">
            <a href="tel:+554530289710" className="flex items-center gap-2 hover:text-[#FDBA16] transition-colors group">
              <Phone className="lucide lucide-phone w-4 h-4 text-[#FDBA16] group-hover:scale-110 transition-transform" />
              <span>(45) 3028-9710</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="lucide lucide-clock w-4 h-4 text-[#FDBA16]" />
                <span className="opacity-90">Seg-Sex: 8h-18h | Sáb: 8h-14h</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="lucide lucide-map-pin w-4 h-4 text-[#FDBA16]" />
                <a href="https://goo.gl/maps/seu-link" target="_blank" rel="noreferrer" className="opacity-90 hover:text-[#FDBA16] transition-colors">Vila Portes, Foz do Iguaçu-PR</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fimg%2Flogo-sem-fundo.png" alt="Vida Kriativa" className="h-10 md:h-14 w-auto object-contain transition-all hover:opacity-90" />
          </div>
          <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden p-2 text-[#1a2e5a] hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="lucide lucide-menu w-6 h-6" />
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-gray-600 hover:text-[#009CA6] font-semibold transition-all hover:-translate-y-0.5 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#009CA6] transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a href="http://wa.me/554599938248" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#E63428] to-[#EB097C] text-white px-7 py-2.5 rounded-full font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Fale Conosco</span>
            </a>
          </div>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-2 border-t border-gray-100 space-y-2">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#009CA6] hover:bg-gray-50 rounded-lg font-medium transition-colors">
                {item}
              </button>
            ))}
            <div className="pt-2 px-2">
              <a href="http://wa.me/554599938248" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-gradient-to-r from-[#E63428] to-[#EB097C] text-white px-6 py-3 rounded-xl font-bold shadow-md">
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
