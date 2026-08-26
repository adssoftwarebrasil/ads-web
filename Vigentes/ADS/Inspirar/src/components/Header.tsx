import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const whatsappUrl =
  'https://api.whatsapp.com/send?phone=556630153100&text=Olá, tudo bem? Acabei de visitar o site...';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white transition-shadow duration-300 ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/inspirar%2Flogo-inspirar-300x132.png"
              alt="Inspirar Centro Integrado"
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[rgb(25,85,137)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(25,85,137)] text-white px-6 py-2 rounded-lg hover:bg-[rgb(100,150,200)] transition-colors font-medium"
            >
              WhatsApp
            </a>
          </div>
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
        {open && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2 text-gray-700 hover:text-[rgb(25,85,137)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[rgb(25,85,137)] text-white px-6 py-2 rounded-lg hover:bg-[rgb(100,150,200)] transition-colors font-medium"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
