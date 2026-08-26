import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO_URL =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=MAXXIMUS%2Flogo%20(1).png&version_id=null';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Assistência Técnica', target: 'assistencia' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#123876] shadow-lg z-50 h-20 md:h-20">
      <div className="container mx-auto px-5 h-full flex items-center justify-between">
        <div className="flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="Maxximus Logo"
            className="h-12 md:h-14 object-contain"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-white hover:text-[rgb(244,95,38)] transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden md:flex gap-3">
          <a
            href="https://wa.me/5516997891482?text=Olá! Gostaria de mais informações sobre os produtos da Maxximus - Ribeirão Preto."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(244,95,38)] text-white px-6 py-3 rounded-full hover:scale-105 hover:brightness-110 transition-all duration-300 font-medium shadow-lg text-sm"
          >
            Ribeirão Preto
          </a>
          <a
            href="https://wa.me/5516993268596?text=Olá! Gostaria de mais informações sobre os produtos da Maxximus - Araraquara."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(244,95,38)] text-white px-6 py-3 rounded-full hover:scale-105 hover:brightness-110 transition-all duration-300 font-medium shadow-lg text-sm"
          >
            Araraquara
          </a>
        </div>
        <button
          className="md:hidden text-white z-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#123876] shadow-lg px-5 py-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-white hover:text-[rgb(244,95,38)] transition-colors duration-300 font-medium text-left"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://wa.me/5516997891482?text=Olá! Gostaria de mais informações sobre os produtos da Maxximus - Ribeirão Preto."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(244,95,38)] text-white px-6 py-3 rounded-full text-center font-medium shadow-lg text-sm"
            >
              Ribeirão Preto
            </a>
            <a
              href="https://wa.me/5516993268596?text=Olá! Gostaria de mais informações sobre os produtos da Maxximus - Araraquara."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(244,95,38)] text-white px-6 py-3 rounded-full text-center font-medium shadow-lg text-sm"
            >
              Araraquara
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
