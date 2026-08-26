import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=5531999364049&text=Ol%C3%A1%20vim%20pelo%20Google!';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Área de Atendimento', href: '#atendimento' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Mantida ou ajustada conforme preferência */}
      <div className="bg-brand-yellow text-brand-blue hidden md:flex items-center justify-between px-6 py-2 text-sm font-barlow font-600">
        <span className="font-semibold">Segunda a Sábado: 08h às 18h</span>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-bold hover:underline"
        >
          <Phone size={14} />
          (31) 99936-4049
        </a>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          /* ALTERADO: bg-white e shadow se houver scroll */
          scrolled ? 'bg-white shadow-xl py-2' : 'bg-white py-3 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Eldorado%20Baterias/logo-eldorado-baterias-moura-tudor-chapisco_1536x1024.webp"
              alt="Eldorado Baterias Chapisco"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                /* ALTERADO: text-brand-blue ou gray-700 para contraste no branco */
                className="text-brand-blue hover:text-brand-yellow font-barlow font-500 text-sm uppercase tracking-wide px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-brand-blue font-barlow font-700 text-sm uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-brand-yellow-dark hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Phone size={15} />
              Falar no WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            /* ALTERADO: text-brand-blue para o ícone aparecer no branco */
            className="lg:hidden text-brand-blue p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          /* ALTERADO: fundo branco no mobile também */
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                /* ALTERADO: texto azul no mobile */
                className="block text-brand-blue hover:text-brand-yellow font-barlow font-500 uppercase tracking-wide py-3 border-b border-gray-50 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-brand-yellow text-brand-blue font-700 uppercase tracking-wider px-5 py-3 rounded-full flex items-center justify-center gap-2 text-sm font-barlow"
            >
              <Phone size={15} />
              Falar no WhatsApp
            </a>
          </div>
        )}
      </header>
    </>
  );
}