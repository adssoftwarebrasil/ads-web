import { useState } from 'react';
import { Phone, MessageCircle, Menu } from 'lucide-react';
import { scrollToId, waLink } from '../lib/site';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Equipamentos', id: 'equipamentos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Processo', id: 'processo' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const go = (id: string) => {
    scrollToId(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/amazon%20loc%2Fimg%2Flogo.png"
              alt="AmazonLoc Logo"
              className="h-12 md:h-14 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-gray-700 hover:text-[rgb(13,133,77)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:6539274720"
              className="flex items-center space-x-2 text-gray-700 hover:text-[rgb(13,133,77)] transition-colors duration-300"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              <span className="font-medium">(65) 3927-4720</span>
            </a>
            <a
              href={waLink('Olá! Gostaria de saber mais sobre locação de equipamentos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(13,133,77)] text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
              <span className="font-semibold">WhatsApp</span>
            </a>
          </div>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden text-gray-700 hover:text-[rgb(13,133,77)] transition-colors"
          >
            <Menu className="lucide lucide-menu w-7 h-7" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="block w-full text-left text-gray-700 hover:text-[rgb(13,133,77)] transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a
                href="tel:6539274720"
                className="flex items-center space-x-2 text-gray-700 hover:text-[rgb(13,133,77)] transition-colors duration-300"
              >
                <Phone className="lucide lucide-phone w-5 h-5" />
                <span className="font-medium">(65) 3927-4720</span>
              </a>
              <a
                href={waLink('Olá! Gostaria de saber mais sobre locação de equipamentos.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[rgb(13,133,77)] text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg w-full"
              >
                <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
