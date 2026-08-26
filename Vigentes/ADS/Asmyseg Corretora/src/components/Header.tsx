import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#advantages', label: 'Vantagens' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
];

const quoteUrl =
  'https://api.whatsapp.com/send?phone=553186610041&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/asmysegcorretora/logo.webp"
              alt="Asmyseg Logo"
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#256C8F] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FA0000] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Cotar Seguro
            </a>
          </div>
          <button
            className="md:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-[#256C8F] transition-colors duration-300 font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FA0000] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg text-center"
            >
              Cotar Seguro
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
