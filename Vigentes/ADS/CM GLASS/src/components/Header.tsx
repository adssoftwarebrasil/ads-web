import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#topo" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/cm%20glass%2Fimg%2Flogo.webp"
              alt="CM Glass Logo"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-[#034087] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#034087] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+559284131569"
              className="flex items-center gap-2 text-sm font-medium text-[#034087] hover:text-[#022d5e] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (92) 9 8413-1569
            </a>
            <a
              href="http://wa.me/559284131569"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#034087] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#022d5e] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-[#034087] hover:bg-blue-50 transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#034087] hover:bg-blue-50 rounded-lg transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="http://wa.me/559284131569"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#034087] text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-[#022d5e] transition-colors"
          >
            Fale pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
