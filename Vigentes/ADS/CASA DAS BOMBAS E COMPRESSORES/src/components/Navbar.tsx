import { useState } from 'react';
import { Menu } from 'lucide-react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const links = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Contato', id: 'contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg shadow-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2Flogo.webp"
              alt="Casa das Bombas e Compressores"
              className="h-16 sm:h-[70px] w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className="text-gray-100 hover:text-[#C41D1D] transition-colors font-medium"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('contato')}
              className="bg-[rgb(255,163,1)] text-white px-6 py-2.5 rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
            >
              Solicitar Orçamento
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-100 hover:text-[#C41D1D] transition-colors"
            >
              <Menu width={28} height={28} className="lucide lucide-menu " />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-20 right-0 h-screen w-64 bg-gray-900 shadow-2xl shadow-gray-900/50 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 p-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className="text-gray-100 hover:text-[#C41D1D] transition-colors font-medium text-left"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('contato')}
            className="bg-[rgb(255,163,1)] text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all duration-300 w-full"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </nav>
  );
}
