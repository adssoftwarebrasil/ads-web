import { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap className="w-10 h-10 text-[#FFD700]" />
          <div>
            <h1 className="text-2xl font-bold text-[#333333]">Impacto Baterias</h1>
            <p className="text-xs text-gray-600">Niquelândia-GO</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-[#333333] hover:text-[#FFD700] transition"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5562996175592"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-[#333333] px-6 py-2 rounded-full font-bold hover:bg-[#FFC700] transition"
          >
            PEÇA PELO WHATSAPP
          </a>
        </nav>
        <button className="md:hidden text-[#333333]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-[#333333] hover:text-[#FFD700] transition text-left"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5562996175592"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-[#333333] px-6 py-2 rounded-full font-bold hover:bg-[#FFC700] transition text-center"
          >
            PEÇA PELO WHATSAPP
          </a>
        </nav>
      )}
    </header>
  );
}
