import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#gallery', label: 'Serviços' },
  { href: '#locations', label: 'Unidades' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Agropet%20Imperatriz%2Flogo.png"
              alt="Agropet Imperatriz"
              className="h-12 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#FD7500] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-[#FD7500] font-medium transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
