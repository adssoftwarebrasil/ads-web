import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Cases', href: '#cases' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=solo-eng%2FLogo-fundo-cinza.png&version_id=null"
              alt="Soloeng Logo"
              className="h-12 sm:h-14 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#6c6d71] hover:text-[#cec643] font-medium transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:block bg-[#cec643] text-[#6c6d71] px-6 py-3 rounded-lg font-semibold hover:bg-[#b8b43a] transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento
          </a>

          <button
            className="lg:hidden text-[#6c6d71] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#6c6d71] hover:text-[#cec643] font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#cec643] text-[#6c6d71] px-6 py-3 rounded-lg font-semibold hover:bg-[#b8b43a] transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}