import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/r%20l%20tintas/img/logo-sem-fundo.webp"
              alt="RL Tintas"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5566984628134"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="lucide lucide-phone text-red-600" width={16} height={16} />
              <span>(66) 98462-8134</span>
            </a>
            <a
              href="http://wa.me/5566984628134"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200 tracking-wide"
            >
              Fale Conosco
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="lucide lucide-menu " width={24} height={24} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-black border-t border-gray-800 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white py-3 px-4 rounded hover:bg-gray-900 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="http://wa.me/5566984628134"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-red-700 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded text-center transition-colors"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
