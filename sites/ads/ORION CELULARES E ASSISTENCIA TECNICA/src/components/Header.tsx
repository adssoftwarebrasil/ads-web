import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER, LOGO_URL, scrollToSection } from '../lib/constants';

const navItems: { label: string; id: string }[] = [
  { label: 'Produtos', id: 'produtos' },
  { label: 'Assistência Técnica', id: 'assistencia' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-black ">
        <nav className="h-20 md:h-24 px-4 md:px-8 lg:px-16 flex items-center justify-between">
          <img
            src={LOGO_URL}
            alt="Órion Celulares"
            className="h-10 md:h-12 w-auto cursor-pointer"
            onClick={() => scrollToSection('root')}
          />
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm lg:text-base text-white hover:text-[rgb(231,189,44)] transition-colors hover:underline underline-offset-4"
              >
                {item.label}
              </button>
            ))}
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[rgb(231,189,44)] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(241,199,54)] transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 bg-black z-40 md:hidden transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-2xl text-white hover:text-[rgb(231,189,44)] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[rgb(231,189,44)] text-black px-8 py-4 rounded-lg font-semibold text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
