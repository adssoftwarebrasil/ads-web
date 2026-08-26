import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=LOUISE%20POS%20OPERATORIO%2Flogo-louise.png&version_id=null';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#F4F4DB] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src={LOGO}
              alt="Louise Pós-Operatório"
              className="h-14 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#282E6A] hover:text-[#624A7F] transition-colors duration-300 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5563992135677"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#624A7F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a5d9e] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Agendar Atendimento
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#282E6A] hover:text-[#624A7F] transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#282E6A] hover:text-[#624A7F] transition-colors duration-300 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5563992135677"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#624A7F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a5d9e] transition-all duration-300 shadow-lg text-center"
            >
              Agendar Atendimento
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
