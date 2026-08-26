import { useState } from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#frota', label: 'Frota' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(36,31,33)] shadow-lg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-20">
            <a href="#home">
              <img
                src="https://storage.lucasmendes.dev/site-sp/wp%20transportes/img/logo-sem-fundo.png"
                alt="WP Transportes"
                className="h-12 lg:h-16 w-auto"
              />
            </a>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white font-medium hover:text-[rgb(245,131,31)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm text-white/90">
                <a
                  href="https://wa.me/557981183939"
                  className="flex items-center space-x-2 hover:text-[rgb(245,131,31)] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(79) 98118-3939</span>
                </a>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Aracaju, SE</span>
                </div>
              </div>
              <a
                href="https://wa.me/557981183939?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(245,131,31)] hover:bg-[rgb(220,110,20)] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Solicitar Orçamento
              </a>
            </div>
            <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-[rgb(36,31,33)] z-50 lg:hidden transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <button className="text-white p-2" onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-[rgb(245,131,31)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5579981183939?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-[rgb(245,131,31)] hover:bg-[rgb(220,110,20)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 mt-8"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
