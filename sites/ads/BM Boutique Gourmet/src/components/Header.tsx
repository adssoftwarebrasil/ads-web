import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#diferenciais', label: 'Como Funciona' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero">
            <img
              src="https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fimg%2FLogo.webp"
              alt="BM Boutique das Linguiças"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-[rgb(242,51,52)] transition-colors duration-300 font-medium text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/556293474673"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(242,51,52)] hover:bg-red-700 px-6 py-2.5 rounded-full text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Faça seu Pedido
            </a>
          </nav>
          <button
            className="lg:hidden text-white p-2"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden flex flex-col gap-4 mt-4 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-200 hover:text-[rgb(242,51,52)] transition-colors duration-300 font-medium text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/556293474673"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-[rgb(242,51,52)] hover:bg-red-700 px-6 py-2.5 rounded-full text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2 w-fit"
            >
              <MessageCircle className="w-4 h-4" />
              Faça seu Pedido
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
