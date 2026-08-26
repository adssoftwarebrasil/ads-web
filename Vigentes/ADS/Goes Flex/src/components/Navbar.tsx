import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Benefícios', id: 'beneficios' },
  { label: 'Quem Somos', id: 'sobre' },
  { label: 'Nossa Loja', id: 'showroom' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-gray-100 shadow-sm py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('inicio')}>
              <img
                src="https://storage.lucasmendes.dev/site-sp/goes%20flex%2Fimg%2Flogo-sem-fundo.png"
                alt="Goes Flex Logo"
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-semibold uppercase tracking-wide text-slate-600 hover:text-[rgb(26,91,178)] transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="http://wa.me/557988094313"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(240,53,41)] hover:bg-[rgb(200,40,30)] text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="lucide lucide-phone" width={18} height={18} fill="currentColor" />
                <span>Falar com Terapeuta</span>
              </a>
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <Menu width={28} height={28} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
            <span className="text-lg font-bold text-slate-800">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-slate-500 hover:text-red-500 transition-colors"
            >
              <X width={24} height={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-lg font-medium text-slate-700 hover:text-[rgb(26,91,178)] hover:bg-blue-50 px-4 py-3 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-auto pt-8">
            <a
              href="http://wa.me/557988094313"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[rgb(240,53,41)] text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg active:scale-95 transition-transform flex justify-center items-center gap-2"
            >
              <Phone className="lucide lucide-phone" width={20} height={20} fill="currentColor" />
              Solicitar Orçamento
            </a>
            <p className="text-center text-xs text-slate-400 mt-4">Atendimento especializado Goes Flex</p>
          </div>
        </div>
      </div>
    </>
  );
}
