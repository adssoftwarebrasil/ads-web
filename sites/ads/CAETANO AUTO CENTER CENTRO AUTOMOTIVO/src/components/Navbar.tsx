import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=caetano%2Fimage%2062.png&version_id=null';

const links = [
  { label: 'Início', href: '#' },
  { label: 'História', href: '#historia' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img
              src={LOGO}
              alt="Caetano Auto Center"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-red-500 font-semibold transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+5562992222332"
              className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              <span className="font-semibold">(62) 99222-2332</span>
            </a>
            <a
              href="https://wa.me/5562992222332"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
            >
              AGENDAR
            </a>
          </div>
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-gray-800 transition-colors"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="lucide lucide-x w-6 h-6" />
            ) : (
              <Menu className="lucide lucide-menu w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-red-500 font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5562992222332"
              className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              <span className="font-semibold">(62) 99222-2332</span>
            </a>
            <a
              href="https://wa.me/5562992222332"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-lg font-bold text-center transition-all duration-300"
            >
              AGENDAR
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
