import { useState } from 'react';
import { MessageCircle, Menu } from 'lucide-react';
import { scrollToId } from '../lib/actions';

const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Como Funciona', id: 'como-funciona' },
  { label: 'Depoimentos', id: 'depoimentos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToId('hero')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2Flogo.png"
              alt="Rita Lucachinski - Nutricionista"
              className="h-12 lg:h-14 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              loading="eager"
            />
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                className="text-gray-300 hover:text-[rgb(157,111,88)] font-light text-sm lg:text-base tracking-wide transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToId('contato')}
              className="flex items-center gap-2 bg-[rgb(157,111,88)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(137,91,68)] transition-all duration-300 font-medium shadow-[0_0_20px_rgba(157,111,88,0.3)] hover:shadow-[0_0_30px_rgba(157,111,88,0.5)] hover:-translate-y-0.5"
            >
              <MessageCircle width={18} height={18} />
              <span>Agendar Consulta</span>
            </button>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-gray-300 hover:text-[rgb(157,111,88)] transition-colors"
            aria-label="Alternar menu"
          >
            {open ? <Menu width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToId(link.id);
                  setOpen(false);
                }}
                className="text-gray-300 hover:text-[rgb(157,111,88)] font-light text-base tracking-wide transition-colors duration-300 text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToId('contato');
                setOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-[rgb(157,111,88)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(137,91,68)] transition-all duration-300 font-medium"
            >
              <MessageCircle width={18} height={18} />
              <span>Agendar Consulta</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
