import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#contato', label: 'Fale Conosco' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=contix%2Fimage%2063%20(1).png&version_id=null"
              alt="Contix Inovação Contábil"
              className="h-12 md:h-14 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#234783] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="lucide lucide-menu text-gray-700" width={28} height={28} />
            ) : (
              <Menu className="lucide lucide-menu text-gray-700" width={28} height={28} />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-[#234783] transition-colors duration-300 font-medium py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
