import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const LOGO_URL =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=jrveiculos%2Fmobile-removebg-preview.png&version_id=null';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black shadow-lg shadow-black/40'
          : 'bg-brand-black/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <img
              src={LOGO_URL}
              alt="JR Veículos"
              className="h-10 md:h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(204,0,0,0.5)]"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#C0C0C0] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+5566999755005"
              className="flex items-center gap-2 text-sm font-semibold text-[#C0C0C0] hover:text-white transition-colors"
            >
              <Phone size={15} className="text-brand-red" />
              <span>(66) 99975-5005</span>
            </a>
            <a
              href="https://wa.me/5566999755005"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-red/20"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[#C0C0C0] hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-brand-black-soft border-t border-white/10">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 text-sm font-medium text-[#C0C0C0] hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-3 border-t border-white/10 mt-2">
              <a
                href="https://wa.me/5566999755005"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-xl transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
