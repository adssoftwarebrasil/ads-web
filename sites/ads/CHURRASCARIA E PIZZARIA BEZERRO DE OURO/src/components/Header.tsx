import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <div className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2Flogo.png"
                alt="Bezerro de Ouro"
                className="h-14 lg:h-16 w-auto"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[rgb(31,29,30)] hover:text-[rgb(180,137,27)] transition-colors duration-300 text-sm font-semibold relative group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[rgb(180,137,27)] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+556733265463"
                className="flex items-center space-x-2 text-[rgb(31,29,30)] hover:text-[rgb(180,137,27)] transition-colors duration-300"
              >
                <Phone
                  width={18}
                  height={18}
                  className="lucide lucide-phone "
                />
                <span className="text-sm font-semibold">(67) 3326-5463</span>
              </a>
              <a
                href="https://wa.me/556733265463"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(208,53,77,0.99)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(180,137,27)] hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg"
              >
                WhatsApp
              </a>
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-[rgb(31,29,30)] hover:text-[rgb(180,137,27)] transition-colors duration-300 p-2"
              aria-label="Menu"
            >
              <Menu width={28} height={28} className="lucide lucide-menu " />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-50 lg:hidden transform transition-transform duration-300 shadow-2xl ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b-2 border-[rgb(180,137,27)]">
            <span className="text-[rgb(180,137,27)] font-bold text-lg">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[rgb(31,29,30)] hover:text-[rgba(208,53,77,0.99)] transition-colors duration-300"
              aria-label="Fechar menu"
            >
              <X width={28} height={28} className="lucide lucide-x " />
            </button>
          </div>
          <nav className="flex-1 px-5 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-[rgb(31,29,30)] hover:text-[rgb(180,137,27)] hover:bg-gray-50 transition-all duration-300 py-3 px-4 text-base font-semibold rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="p-5 border-t border-gray-200 space-y-3 bg-gray-50">
            <a
              href="tel:+556733265463"
              className="flex items-center space-x-2 text-[rgb(31,29,30)] hover:text-[rgb(180,137,27)] transition-colors duration-300 py-2"
            >
              <Phone width={20} height={20} className="lucide lucide-phone " />
              <span className="text-sm font-semibold">(67) 3326-5463</span>
            </a>
            <a
              href="https://wa.me/556733265463"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[rgba(208,53,77,0.99)] text-white px-6 py-3 rounded-full hover:bg-[rgb(180,137,27)] hover:scale-105 transition-all duration-300 text-sm font-semibold shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
