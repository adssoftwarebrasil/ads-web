import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP =
  'https://api.whatsapp.com/send?phone=5562999220030&text=Olá, gostaria de agendar uma consulta';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/drviniciusortopedista%2Flogo.png"
              alt="Dr. Vinícius Rezende Rios"
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-900 hover:text-[#2563eb] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563eb] text-white px-6 py-2 rounded-lg hover:bg-[#1e40af] transition-all duration-300"
            >
              Agendar Consulta
            </a>
          </nav>
          <button
            className="md:hidden text-gray-900"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-900 hover:text-[#2563eb] transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563eb] text-white px-6 py-2 rounded-lg hover:bg-[#1e40af] transition-all duration-300 text-center"
            >
              Agendar Consulta
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
