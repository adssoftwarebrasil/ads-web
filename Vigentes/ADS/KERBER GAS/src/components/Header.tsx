import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

const WHATSAPP_URL =
  'https://wa.me/5566984052994?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20de%20g%C3%A1s%20ou%20%C3%A1gua.';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollTo('inicio')}
            className="flex items-center space-x-3 group"
          >
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=kerbergas%2Flogogas%20(1)-Photoroom.png&version_id=null"
              alt="Kerber Gás Logo"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-[rgb(248,130,31)] transition-colors">
                Kerber Gás
              </span>
              <span className="text-xs text-gray-600">Sinop - MT</span>
            </div>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[rgb(248,130,31)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[rgb(248,130,31)] to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Fazer Pedido</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 text-gray-700 hover:text-[rgb(248,130,31)] transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(248,130,31)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[rgb(248,130,31)] to-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Fazer Pedido</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
