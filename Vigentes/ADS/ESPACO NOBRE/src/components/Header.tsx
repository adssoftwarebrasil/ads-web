import { useState } from 'react';
import { Instagram, Facebook, Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils';

const logo =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=espaconobre%2Fesoacinobrelogomarca.png&version_id=null';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Eventos', id: 'eventos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <img
                src={logo}
                alt="Espaço Nobre"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-[#cba26c] transition font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/espaconobre_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#cba26c] transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/espaconobre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#cba26c] transition"
            >
              <Facebook size={20} />
            </a>
            <button
              onClick={() => handleNav('contato')}
              className="text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              style={{ backgroundColor: 'rgb(203, 162, 108)' }}
            >
              Solicite um Orçamento
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-gray-700 hover:text-[#cba26c] transition font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('contato')}
                className="text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all w-full"
                style={{ backgroundColor: 'rgb(203, 162, 108)' }}
              >
                Solicite um Orçamento
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
