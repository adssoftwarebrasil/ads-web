import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mecrolamentos/logo.png"
              alt="MEC Rolamentos"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#EC3132] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC3132] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:6635315352"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#2B559F] transition-colors"
            >
              <Phone width={16} height={16} className="lucide lucide-phone text-[#2B559F]" />
              (66) 3531-5352
            </a>
            <a
              href="https://wa.me/5566999952065"
              className="bg-[#EC3132] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#c82828] transition-all duration-200 hover:shadow-md"
            >
              Falar no WhatsApp
            </a>
          </div>
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X width={24} height={24} className="lucide lucide-x" />
            ) : (
              <Menu width={24} height={24} className="lucide lucide-menu" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-[#EC3132] transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:6635315352"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#2B559F] transition-colors py-2"
            >
              <Phone width={16} height={16} className="lucide lucide-phone text-[#2B559F]" />
              (66) 3531-5352
            </a>
            <a
              href="https://wa.me/5566999952065"
              className="bg-[#EC3132] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#c82828] transition-all duration-200 text-center mt-2"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
