import { useState } from 'react';
import { Menu } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-20">
            <a href="#" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <img
                src="https://storage.lucasmendes.dev/site-sp/kellysilva%2Fimg%2Flogo-fundo-azul-Photoroom.png"
                alt="Kelly Silva Advocacia"
                className="h-12 lg:h-14 w-auto"
              />
            </a>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-off-white hover:text-gold-light transition-colors duration-300 font-medium text-base relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-light transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="https://kellysilva.adv.br/periciaorientada/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light border border-gold-light px-4 py-1.5 rounded-md hover:bg-gold-light hover:text-navy transition-all duration-300 font-medium"
              >
                Curso Perícia
              </a>
            </nav>
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/5562999714722?text=Olá"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark text-off-white px-6 py-3 rounded-lg font-semibold hover:from-whatsapp-dark hover:to-whatsapp transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Fale Conosco
              </a>
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden text-off-white p-2 hover:text-gold-light transition-colors relative z-50"
              aria-label="Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-navy z-40 lg:hidden transition-transform duration-300 ease-in-out shadow-2xl ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6">
          <nav className="flex flex-col space-y-6 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-off-white hover:text-gold-light text-xl font-medium transition-all duration-300 hover:translate-x-2 border-b border-gold-light border-opacity-20 pb-4"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://kellysilva.adv.br/periciaorientada/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light text-xl font-medium flex items-center gap-2"
            >
              Curso Perícia Orientada
            </a>
          </nav>
          <div className="flex flex-col gap-4 mt-6">
            <a
              href="https://wa.me/5562999714722?text=Olá"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark text-off-white px-6 py-4 rounded-lg font-semibold text-center hover:from-whatsapp-dark hover:to-whatsapp transition-all duration-300 shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
