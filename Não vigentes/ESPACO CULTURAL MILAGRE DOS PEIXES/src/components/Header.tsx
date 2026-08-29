import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Flogo.png"
              alt="Espaço Cultural Milagre dos Peixes"
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black hover:text-[#ED1B24] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5562981842290"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ED1B24] hover:bg-[#c41620] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </a>
          </nav>
          <button
            className="md:hidden text-black p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-black hover:text-[#ED1B24] transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5562981842290"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ED1B24] hover:bg-[#c41620] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 text-center"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
