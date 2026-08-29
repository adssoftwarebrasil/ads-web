import { useState } from 'react';
import { MapPin, MessageCircle, Menu } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Imóveis', href: '/imoveis' },
  { label: 'Sobre', href: '#about' },
  { label: 'Diferenciais', href: '#differentials' },
  { label: 'Serviços', href: '#services' },
  { label: 'Localização', href: '#location' },
  { label: 'Contato', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white shadow-md">
      <div className="bg-[#cfa165] text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="lucide lucide-map-pin w-4 h-4" />
            <span>Av. Luís Viana Filho, 13223 - São Cristóvão, Salvador - BA, 41500-300</span>
          </div>
          <a
            href="https://wa.me/557193469993"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#f5f5f5] transition-colors"
          >
            <MessageCircle className="lucide lucide-message-circle w-4 h-4" />
            <span>(71) 99155-8910</span>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center py-4">
          <a className="focus:outline-none focus:ring-2 focus:ring-[#cfa165] rounded-lg" href="/">
            <img
              src="https://storage.lucasmendes.dev/site-sp/golden-house%2FIMG-20251202-WA0048_1-removebg-preview.png"
              alt="Golden House 873"
              className="object-contain transition-all duration-300 h-14 md:h-16"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-gray-700 hover:text-[#cfa165] font-medium transition-colors relative group"
                href={link.href}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cfa165] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/557193469993?text=Olá! Gostaria de conhecer os serviços da Golden House 873"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#cfa165] hover:bg-[#b88a4d] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="lucide lucide-message-circle w-4 h-4" />
            <span>Fale Conosco</span>
          </a>
          <button
            className="lg:hidden text-gray-600 hover:text-[#cfa165] p-2 focus:outline-none"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu className="lucide lucide-menu " size={28} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#cfa165] transition duration-200 border-b border-gray-100 font-medium"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/557193469993?text=Olá! Gostaria de conhecer os serviços da Golden House 873"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-3 flex items-center justify-center gap-2 bg-[#cfa165] hover:bg-[#b88a4d] text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <MessageCircle className="lucide lucide-message-circle w-4 h-4" />
            <span>Fale Conosco</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
