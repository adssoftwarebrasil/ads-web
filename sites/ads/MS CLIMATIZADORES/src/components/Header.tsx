import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ms%20climatizadores%2Fimg%2Flogo-sem-fundo.png"
              alt="MS Climatizadores"
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/556791135480?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[rgb(255,200,1)] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
          >
            <MessageCircle width={20} height={20} />
            Fale Conosco
          </a>
          <button
            className="md:hidden text-gray-700 hover:text-yellow-500 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/556791135480?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-[rgb(255,200,1)] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg"
            >
              <MessageCircle width={20} height={20} />
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
