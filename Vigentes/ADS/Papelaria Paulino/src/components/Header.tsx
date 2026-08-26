import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=papelaria%20paulino%2Fimg%2Flogo-sem-fundo.png&version_id=null"
              alt="Papelaria Paulino"
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[rgb(61,61,147)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5519982880081"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(237,48,54)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(217,28,34)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Fazer Pedido
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden text-gray-700 hover:text-[rgb(61,61,147)] transition-colors"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-[rgb(61,61,147)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5519982880081"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-[rgb(237,48,54)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(217,28,34)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-center"
            >
              Fazer Pedido
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
