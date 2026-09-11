import { useState } from 'react';
import { Instagram, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Produtos/Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Brelevo%2Flogograficarelevo.jpg&version_id=null"
              alt="Gráfica Brelevo"
              className="h-12 md:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-[rgb(17,50,255)] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/graficabrelevo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[rgb(17,50,255)] transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/5561986054473"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(17,50,255)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(255,1,1)] transition-colors duration-200"
            >
              <Phone size={20} />
              <span className="font-medium">61 98605-4473</span>
            </a>
          </div>
          <button
            className="lg:hidden text-gray-800 hover:text-[rgb(17,50,255)] transition-colors duration-200"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-800 hover:text-[rgb(17,50,255)] font-medium transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5561986054473"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[rgb(17,50,255)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(255,1,1)] transition-colors duration-200 mt-2"
              >
                <Phone size={20} />
                <span className="font-medium">61 98605-4473</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
