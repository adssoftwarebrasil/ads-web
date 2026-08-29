import { Instagram, Facebook, Phone } from 'lucide-react';

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/laborphoto%2Fimg%2Flogo-sem-fundo.webp"
              alt="Laborphoto"
              className="h-12 lg:h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[rgb(2,126,198)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://www.instagram.com/laborphoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[rgb(2,126,198)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Laborphoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[rgb(2,126,198)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="tel:+5561992241725"
                className="flex items-center space-x-2 text-gray-700 hover:text-[rgb(2,126,198)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">(61) 9 9224-1725</span>
              </a>
            </div>
            <a
              href="http://wa.me/556192241725"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[rgb(2,126,198)] to-[rgb(6,51,133)] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Orçamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
