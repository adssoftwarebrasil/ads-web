import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

const WHATSAPP_URL =
  'https://wa.me/5562982830047?text=Olá! Gostaria de saber mais sobre os produtos da Dias Motors.';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-[70px] lg:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="block focus:outline-none focus:ring-2 focus:ring-[rgb(19,161,209)] rounded"
              aria-label="Dias Motors Náutica - Voltar ao início"
            >
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=diasmotors%2Fdias_motors.jpg&version_id=null"
                alt="Dias Motors Náutica"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </button>
          </div>
          <nav
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[rgb(30,43,75)] hover:text-[rgb(19,161,209)] transition-colors duration-300 text-base font-semibold relative group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[rgb(19,161,209)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[rgb(19,161,209)] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:bg-[rgb(17,145,188)] transition-all duration-300 shadow-md"
          >
            <WhatsappIcon size={20} />
            Fale no WhatsApp
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-[rgb(30,43,75)] p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="lucide lucide-x" size={24} />
            ) : (
              <Menu className="lucide lucide-menu" size={24} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className="lg:hidden bg-white border-t border-gray-100 shadow-md"
          role="navigation"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-[rgb(30,43,75)] hover:text-[rgb(19,161,209)] transition-colors duration-300 text-base font-semibold py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[rgb(19,161,209)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(17,145,188)] transition-all duration-300 shadow-md mt-2"
            >
              <WhatsappIcon size={20} />
              Fale no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
