import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-[rgba(54,55,58,0.95)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/logo.webp"
              alt="Exatidão Contabilidade"
              className="h-10 md:h-12 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-white hover:text-[rgb(202,162,106)] transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/556232113304?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(202,162,106)] hover:bg-[rgb(204,162,74)] text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium"
            >
              Falar com Especialista
            </a>
          </nav>
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-64 bg-[rgb(54,55,58)] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white p-2" aria-label="Fechar menu">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-6 mt-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white hover:text-[rgb(202,162,106)] transition-colors duration-200 text-left py-2"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/556232113304?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(202,162,106)] hover:bg-[rgb(204,162,74)] text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium text-center mt-4"
          >
            Falar com Especialista
          </a>
        </nav>
      </div>
    </header>
  );
}
