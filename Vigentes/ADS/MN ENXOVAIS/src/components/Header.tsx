import { useState } from 'react';
import { Menu } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const navItems = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre Nós', target: 'about' },
  { label: 'Produtos', target: 'products' },
  { label: 'Galeria', target: 'products' },
  { label: 'Contato', target: 'contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (target: string) => {
    setMenuOpen(false);
    scrollToSection(target);
  };

  return (
    <>
      <div className="fixed top-0 w-full h-1 z-[60]" style={{ backgroundColor: 'rgb(155, 39, 40)' }}></div>
      <header className="fixed top-1 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav('hero')}>
              <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img src="https://storage.lucasmendes.dev/site-sp/mn%2Flogomn.jpg" alt="MN Enxovais Logo" className="h-14 lg:h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold leading-tight" style={{ color: 'rgb(155, 39, 40)', fontFamily: '"Playfair Display", serif' }}>MN Enxovais</h1>
                <p className="text-xs lg:text-sm text-gray-600 font-light">Cama, Mesa e Banho</p>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button key={item.label} onClick={() => handleNav(item.target)} className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-200 group">
                  <span className="relative z-10 group-hover:text-[rgb(155,39,40)]">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[rgb(155,39,40)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ml-4 px-6 py-2.5 bg-[rgb(155,39,40)] text-white rounded-full font-semibold hover:bg-[rgb(120,30,31)] transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5" />Contato
              </a>
            </nav>
            <button onClick={() => setMenuOpen((v) => !v)} className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-200" aria-label="Abrir menu">
              <div style={{ color: 'rgb(155, 39, 40)' }}>
                <Menu size={26} className={`lucide lucide-menu transform transition-transform duration-300 ${menuOpen ? 'rotate-90' : 'rotate-0'}`} />
              </div>
            </button>
          </div>
        </div>
        <div className={`lg:hidden fixed right-0 top-[90px] h-[calc(100vh-90px)] w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="px-6 py-6 border-b" style={{ borderColor: 'rgba(155, 39, 40, 0.1)' }}>
              <div className="flex items-center gap-3">
                <img src="https://storage.lucasmendes.dev/site-sp/mn%2Flogomn.jpg" alt="MN Enxovais Logo" className="h-12 w-auto object-contain rounded-lg shadow-sm" />
                <div>
                  <h2 className="text-lg font-bold" style={{ color: 'rgb(155, 39, 40)' }}>MN Enxovais</h2>
                  <p className="text-xs text-gray-600">Cama, Mesa e Banho</p>
                </div>
              </div>
            </div>
            <nav className="py-4">
              {navItems.map((item, i) => (
                <button key={item.label} onClick={() => handleNav(item.target)} className="w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0 group flex items-center justify-between" style={{ animationDelay: `${i * 50}ms` }}>
                  <span className="group-hover:text-[rgb(155,39,40)] transition-colors duration-200">{item.label}</span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[rgb(155,39,40)] transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              ))}
            </nav>
            <div className="px-6 py-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full px-6 py-4 bg-[rgb(155,39,40)] text-white rounded-lg font-semibold hover:bg-[rgb(120,30,31)] transition-all duration-200 shadow-lg flex items-center justify-center gap-3">
                <WhatsAppIcon className="w-6 h-6" />Fale pelo WhatsApp
              </a>
            </div>
            <div className="px-6 py-4 border-t mt-auto">
              <p className="text-xs text-gray-500 text-center">Seg a Sex: 8h30 às 18h<br />Sábado: 8h30 às 12h</p>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[85px]"></div>
    </>
  );
}
