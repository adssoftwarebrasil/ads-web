import { useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=guerreiro%2Flogo%20guerreiro%20em%20PNG.png&version_id=null';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Nossas Filiais', href: '#filiais' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm backdrop-blur-md bg-white/95">
      <div className="max-w-[1600px] mx-auto px-[5%] h-20 lg:h-20 flex items-center justify-between">
        <a href="#hero" className="h-12 lg:h-16 flex items-center">
          <img src={LOGO} alt="Guerreiro Ferro e Aço" className="h-full w-auto object-contain" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#F48221] transition-colors relative group"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#F48221] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/5571996694235?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Guerreiro%20Ferro%20e%20Aço."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F48221] text-white px-6 py-3 rounded-full font-semibold text-[15px] hover:bg-[#E67318] hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            📱 FALE CONOSCO
          </a>
          <a
            href="https://instagram.com/guerreiroferroeaco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1A1A] hover:text-[#F48221] transition-colors"
          >
            <Instagram className="lucide lucide-instagram" size={24} />
          </a>
        </div>
        <button className="lg:hidden text-[#1A1A1A] z-50" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={28} /> : <Menu className="lucide lucide-menu" size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-[5%] py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#1A1A1A] hover:text-[#F48221] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5571996694235?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Guerreiro%20Ferro%20e%20Aço."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-[#F48221] text-white px-6 py-3 rounded-full font-semibold text-[15px] text-center hover:bg-[#E67318] transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              📱 FALE CONOSCO
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
