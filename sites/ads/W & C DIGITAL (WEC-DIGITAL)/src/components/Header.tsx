import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2FWhatsApp%20Image%202025-11-18%20at%2020.35.34-Photoroom.png&version_id=null';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0">
            <img src={LOGO} alt="W&C Digital" className="h-12 lg:h-14 w-auto" />
          </div>
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-[rgb(237,27,38)] font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(237,27,38)] group-hover:w-full transition-all duration-200"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <a
              href="https://wa.me/c/558491775185"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(237,27,38)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(217,17,28)] transition-colors duration-200"
            >
              Ver Catálogo
            </a>
          </div>
          <button
            className="md:hidden text-[rgb(237,27,38)] p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-gray-700 hover:text-[rgb(237,27,38)] font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/c/558491775185"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-[rgb(237,27,38)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(217,17,28)] transition-colors duration-200"
                >
                  Ver Catálogo
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
