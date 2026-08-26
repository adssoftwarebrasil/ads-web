import { useState, useEffect } from 'react';
import { Phone, Mail, Menu } from 'lucide-react';
import { WHATSAPP_DEFAULT, INSTAGRAM_URL, scrollToId } from '../constants';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white${
        scrolled ? ' shadow-lg' : ''
      }`}
    >
      <div className="bg-[rgb(34,34,34)] text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:6599806-4793"
              className="flex items-center gap-2 hover:text-[rgb(246,239,3)] transition-colors"
            >
              <Phone size={16} />
              <span>65 99806-4793</span>
            </a>
            <a
              href="mailto:detudoltda760@gmail.com"
              className="flex items-center gap-2 hover:text-[rgb(246,239,3)] transition-colors"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">detudoltda760@gmail.com</span>
            </a>
          </div>
          <div className="flex gap-3">
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[rgb(246,239,3)] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[rgb(246,239,3)] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToId('inicio')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/detudo%2FWhatsApp%20Image%202025-11-15%20at%2010.58.21%20(1).jpeg"
              alt="Detudo Eletro Ferragens"
              className="h-12 w-12 object-cover rounded-lg"
            />
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-[rgb(34,34,34)] hover:text-[rgb(246,239,3)] transition-colors"
          >
            <Menu size={28} />
          </button>
          <ul className="hidden lg:flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className="text-[rgb(34,34,34)] hover:text-[rgb(246,239,3)] transition-all duration-300 relative group font-medium"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(246,239,3)] group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className="text-[rgb(34,34,34)] hover:text-[rgb(246,239,3)] transition-colors font-medium block w-full text-left py-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
