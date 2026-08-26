import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre', id: 'about' },
  { label: 'Galeria', id: 'gallery' },
  { label: 'Contato', id: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-950/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-24">
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center group transition-transform hover:scale-105"
          >
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=TURBO%20MASTER%2Flogoturbomaster%20(1).png&version_id=null"
              alt="Turbo Master Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-300 hover:text-primary-400 text-sm font-medium transition-colors tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+5565992174220"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone className="lucide lucide-phone" width={15} height={15} />
              <span>(65) 99217-4220</span>
            </a>
            <a
              href="https://wa.me/5565992174220"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-900/40"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white p-1.5"
            aria-label="Menu"
          >
            {open ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-950/98 border-t border-gray-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-gray-300 hover:text-primary-400 text-sm font-medium transition-colors tracking-wide py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+5565992174220"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors py-2"
            >
              <Phone className="lucide lucide-phone" width={15} height={15} />
              <span>(65) 99217-4220</span>
            </a>
            <a
              href="https://wa.me/5565992174220"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-center mt-2"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
