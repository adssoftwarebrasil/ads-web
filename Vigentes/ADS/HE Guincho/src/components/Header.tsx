import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 "
        style={{ height: '80px', background: 'rgb(247, 247, 249)' }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/heguincho%2Flogo.jpg"
              alt="HE Guincho"
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black font-semibold hover:text-[rgb(68,235,21)] transition-all duration-500 text-base relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[rgb(68,235,21)] after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/5534998796167"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(68,235,21)] text-black font-bold px-6 py-3 rounded-full button-hover shadow-lg flex items-center gap-2"
            >
              <Phone width={18} height={18} className="lucide lucide-phone " />
              ATENDIMENTO 24H
            </a>
          </div>
          <button
            className="lg:hidden text-black z-50"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <X width={28} height={28} className="lucide lucide-x " />
            ) : (
              <Menu width={28} height={28} className="lucide lucide-menu " />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-80 shadow-2xl z-40 transform transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: '100px', background: 'rgb(247, 247, 249)' }}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-black font-semibold text-lg hover:text-[rgb(68,235,21)] transition-colors duration-300 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5534998796167"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(68,235,21)] text-black font-bold px-6 py-3 rounded-full hover:bg-black hover:text-[rgb(68,235,21)] transition-all duration-300 text-center mt-4 flex items-center justify-center gap-2"
          >
            <Phone width={18} height={18} className="lucide lucide-phone " />
            ATENDIMENTO 24H
          </a>
        </nav>
      </div>
    </>
  );
}
