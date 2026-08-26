import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#turmas', label: 'Turmas' },
  { href: '#atividades', label: 'Atividades' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP_VISITA =
  'https://api.whatsapp.com/send?phone=551636203244&text=Olá! Gostaria de agendar uma visita à escola.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#inicio"
            className="flex-shrink-0 flex items-center h-full py-2 lg:py-3 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=raiodesolencantado%2Fimg%2Fimage%2050.png&version_id=null"
              alt="Raio de Sol Encantado"
              className="h-full w-auto max-h-12 lg:max-h-14 object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-[rgb(224,68,72)] transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-gray-50 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[rgb(224,68,72)] transition-all duration-300 group-hover:w-3/4"></span>
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_VISITA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 bg-[rgb(224,68,72)] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[rgb(204,48,52)] transition-all duration-300 hover:shadow-lg"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Agendar Visita</span>
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-gray-700 hover:text-[rgb(224,68,72)] hover:bg-gray-50 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x" />
            ) : (
              <Menu className="lucide lucide-menu" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 hover:text-[rgb(224,68,72)] hover:bg-gray-50 transition-colors duration-300 font-medium py-3 px-4 rounded-lg text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_VISITA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[rgb(224,68,72)] text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-[rgb(204,48,52)] transition-all duration-300 mt-4"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Agendar Visita</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
