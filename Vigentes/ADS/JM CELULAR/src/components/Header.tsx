import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const WHATSAPP = 'http://wa.me/557192534118';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#001f5c]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/jm-celular/img/logo-sem-fundo-letra-branca.webp"
              alt="JM Celular"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-white/90 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#004AAC] hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            <Phone width={16} height={16} className="lucide lucide-phone " />
            Falar no WhatsApp
          </a>
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X width={24} height={24} className="lucide lucide-x " />
            ) : (
              <Menu width={24} height={24} className="lucide lucide-menu " />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 shadow-xl ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-[#004AAC] text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200"
          >
            <Phone width={16} height={16} className="lucide lucide-phone " />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
