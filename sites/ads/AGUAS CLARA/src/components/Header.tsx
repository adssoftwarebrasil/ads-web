import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP_ORCAMENTO =
  'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-4">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center">
          <a href="#inicio" className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2Flogo.webp"
              alt="Águas Claras Piscinas"
              className="transition-all duration-300 h-12 md:h-14 lg:h-16"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-[#0096C7] transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Fale Conosco</span>
          </a>
          <button
            className="md:hidden text-gray-700 p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-4 flex flex-col gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-base py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-[#0096C7] transition-all duration-300 mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Fale Conosco</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
