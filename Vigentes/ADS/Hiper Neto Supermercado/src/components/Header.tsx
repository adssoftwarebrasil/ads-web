import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [open, setOpen] = useState(false);

  const links: { label: string; id: string }[] = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Produtos', id: 'produtos' },
    { label: 'Localização', id: 'localizacao' },
  ];

  const handleNav = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Flogo.webp"
              alt="Hiper Neto Supermercado"
              className="h-24 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className="text-gray-700 hover:text-[rgb(238,27,34)] transition-colors font-medium"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+556233473913"
              className="flex items-center gap-2 bg-[rgb(238,27,34)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(200,20,28)] transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              <Phone size={18} />
              (62) 3347-3913
            </a>
          </nav>
          <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className="text-gray-700 hover:text-[rgb(238,27,34)] transition-colors font-medium text-left"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+556233473913"
              className="flex items-center justify-center gap-2 bg-[rgb(238,27,34)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(200,20,28)] transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              <Phone size={18} />
              (62) 3347-3913
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
