import { useState } from 'react';
import { Zap, MessageCircle, Menu, X } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex items-center gap-2">
            <Zap className="lucide lucide-zap w-8 h-8 text-[rgb(250,204,21)]" />
            <span className="text-secondary text-xl lg:text-2xl font-bold">
              CENTER BATERIAS
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#333] text-base font-medium hover:text-[rgb(250,204,21)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => openWhatsApp()}
            className="hidden lg:flex items-center gap-2 bg-[rgb(250,204,21)] text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
            WhatsApp
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-secondary p-2"
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x w-6 h-6" />
            ) : (
              <Menu className="lucide lucide-menu w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#333] text-base font-medium py-2 hover:text-[rgb(250,204,21)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                openWhatsApp();
              }}
              className="mt-2 flex items-center justify-center gap-2 bg-[rgb(250,204,21)] text-black px-8 py-3 rounded-full font-medium shadow-md"
            >
              <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
              WhatsApp
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
