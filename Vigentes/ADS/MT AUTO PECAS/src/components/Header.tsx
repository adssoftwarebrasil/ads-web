import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/logo-sem-fundo.webp"
              alt="MT Auto Peças"
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[rgb(4,152,134)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/559191706760"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(4,152,134)] text-white px-6 py-3 rounded-full hover:bg-[rgb(3,122,107)] transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              <Phone size={18} />
              Fale Conosco
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-gray-700 hover:text-[rgb(4,152,134)] transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-gray-700 hover:text-[rgb(4,152,134)] transition-colors font-medium py-2"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/559191706760"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[rgb(4,152,134)] text-white px-6 py-3 rounded-full hover:bg-[rgb(3,122,107)] transition-colors font-medium"
          >
            <Phone size={18} />
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
