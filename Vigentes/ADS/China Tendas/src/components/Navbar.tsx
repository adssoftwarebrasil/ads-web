import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgb(247,247,247)] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=chinatendas%2FWhatsApp%20Image%202025-11-06%20at%2014.31.27.jpeg&version_id=null"
              alt="China Tendas"
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-black hover:text-[rgb(211,14,9)] transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[rgb(211,14,9)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(180,12,7)] transition-all transform hover:scale-105 shadow-lg"
            >
              SOLICITAR ORÇAMENTO
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-black p-2">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[rgb(247,247,247)] border-t border-gray-200">
          <div className="px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-black hover:text-[rgb(211,14,9)] transition-colors font-medium text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contato')}
              className="bg-[rgb(211,14,9)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(180,12,7)] transition-all shadow-lg"
            >
              SOLICITAR ORÇAMENTO
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
