import { useState } from 'react';
import { Phone, Calendar, Menu } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Emergências', id: 'emergencias' },
  { label: 'Contato', id: 'contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const go = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-gradient-to-r from-teal-600 to-cyan-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/agenciaeua/objects/download?preview=true&prefix=clinicamenardi%2Fmenardilogonova.png&version_id=null"
              alt="Menardi Odontologia"
              className="h-20 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="text-white hover:text-teal-100 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => go('emergencias')}
              className="flex items-center gap-2 bg-red-500 text-white hover:bg-red-600 font-semibold px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              <Phone size={18} className="lucide lucide-phone " />
              <span className="text-sm">Emergência</span>
            </button>
            <button
              onClick={() => go('contato')}
              className="flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Calendar size={18} className="lucide lucide-calendar " />
              Agendar Consulta
            </button>
          </div>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden text-white hover:text-teal-100 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <Menu size={28} className="lucide lucide-menu " />
          </button>
        </div>
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="block w-full text-left text-white hover:text-teal-100 hover:bg-white/10 transition-colors font-medium px-4 py-3 rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 space-y-2 border-t border-white/20">
              <button
                onClick={() => go('emergencias')}
                className="flex items-center justify-center gap-2 w-full bg-red-500 text-white hover:bg-red-600 font-semibold px-4 py-3 rounded-lg transition-all shadow-md"
              >
                <Phone size={18} className="lucide lucide-phone " />
                Emergência 24h
              </button>
              <button
                onClick={() => go('contato')}
                className="flex items-center justify-center gap-2 w-full bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-teal-50 transition-all"
              >
                <Calendar size={18} className="lucide lucide-calendar " />
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
