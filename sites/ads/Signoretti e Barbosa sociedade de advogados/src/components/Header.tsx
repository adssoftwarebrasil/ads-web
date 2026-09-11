import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, NAV_LINKS, scrollToId } from '../constants';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#10202F] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav('hero'); }}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/signorettiebarbosa/Logo%20Oficial%20fundo%20azul(1).jpg"
              alt="Signoretti & Barbosa Advogados"
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-white/80 hover:text-[#EB7104] text-sm font-medium transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#EB7104] hover:bg-[#d46303] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            <Phone width={15} height={15} className="lucide lucide-phone " />
            Fale Conosco
          </a>
          <button
            className="md:hidden text-white p-2"
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
      {open && (
        <div className="md:hidden bg-[#10202F] border-t border-white/10 px-4 sm:px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-white/80 hover:text-[#EB7104] text-sm font-medium transition-colors duration-200 tracking-wide text-left py-3"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 bg-[#EB7104] hover:bg-[#d46303] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 w-fit"
            >
              <Phone width={15} height={15} className="lucide lucide-phone " />
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
