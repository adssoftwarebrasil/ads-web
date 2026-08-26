import { useEffect, useState } from 'react';
import { Menu, Phone } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP = 'http://wa.me/5516992979707';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-lg' : 'bg-transparent'
      }`}
      style={
        scrolled
          ? {
              background:
                'linear-gradient(135deg, rgb(84, 46, 145), rgb(38, 182, 230))',
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/lavup/img/logo.webp"
              alt="Lavup Araraquara"
              className="h-10 lg:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-white/90 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background:
                  'linear-gradient(135deg, rgb(84, 46, 145), rgb(38, 182, 230))',
              }}
            >
              <Phone size={15} />
              (16) 9 9297-9707
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-4 shadow-xl">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:text-[rgb(38,182,230)] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white"
            style={{
              background:
                'linear-gradient(135deg, rgb(84, 46, 145), rgb(38, 182, 230))',
            }}
          >
            <Phone size={16} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
