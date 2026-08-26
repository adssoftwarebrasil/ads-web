import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Nilson%20Cortinas%2Flogo2_Nilson%20Cortinas.avif&version_id=null"
              alt="Nilson Cortinas"
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[rgb(114,115,119)] hover:text-[rgb(207,173,109)] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:6536374521"
              className="flex items-center gap-2 bg-[rgb(207,173,109)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(187,153,89)] transition-all duration-300 font-medium"
            >
              <Phone className="lucide lucide-phone " width={18} height={18} />
              (65) 3637-4521
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-lg text-[rgb(114,115,119)] hover:bg-gray-100 transition-colors"
          >
            {open ? (
              <X className="lucide lucide-x " width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu " width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[rgb(114,115,119)] hover:text-[rgb(207,173,109)] transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:6536374521"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 bg-[rgb(207,173,109)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(187,153,89)] transition-all duration-300 font-medium w-fit"
          >
            <Phone className="lucide lucide-phone " width={18} height={18} />
            (65) 3637-4521
          </a>
        </div>
      )}
    </header>
  );
}
