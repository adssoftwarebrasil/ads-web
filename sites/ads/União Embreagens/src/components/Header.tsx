import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="bg-[rgb(60,88,144)] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/embreagens%2Flogo.png"
              alt="União Embreagens Logo"
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-[rgb(240,178,121)] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/5516936265853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(240,178,121)] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
            >
              Fale Conosco
            </a>
            <a
              href="tel:+551636265853"
              className="flex items-center space-x-2 hover:text-[rgb(240,178,121)] transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold">(16) 3626-5853</span>
            </a>
          </div>
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left hover:text-[rgb(240,178,121)] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5516936265853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(240,178,121)] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-center"
            >
              Fale Conosco
            </a>
            <a
              href="tel:+551636265853"
              className="flex items-center space-x-2 hover:text-[rgb(240,178,121)] transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold">(16) 3626-5853</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
