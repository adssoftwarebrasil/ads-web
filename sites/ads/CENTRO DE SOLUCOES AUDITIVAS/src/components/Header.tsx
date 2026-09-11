import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { LOGO_URL } from '../constants';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={LOGO_URL} alt="CSA Logo" className="h-12 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+559299756694"
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="lucide lucide-phone w-4 h-4 mr-2" />
              <span className="text-sm font-medium">(92) 9975-6694</span>
            </a>
            <a
              href="mailto:csa.manaus@yahoo.com.br"
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              <Mail className="lucide lucide-mail w-4 h-4 mr-2" />
              <span className="text-sm font-medium">csa.manaus@yahoo.com.br</span>
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
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
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+559299756694"
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">(92) 9975-6694</span>
            </a>
            <a
              href="mailto:csa.manaus@yahoo.com.br"
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">csa.manaus@yahoo.com.br</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
