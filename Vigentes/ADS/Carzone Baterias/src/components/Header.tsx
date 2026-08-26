import { useState } from 'react';
import { Clock, MapPin, Phone, Menu } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1003AD] text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="lucide lucide-clock text-[#F7EE30]" width={13} height={13} />
              <span className="text-white/90">Seg-Sex: 7h30 às 21h | Sáb: 7h30 às 17h</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="lucide lucide-map-pin text-[#F7EE30]" width={13} height={13} />
              <span className="text-white/90">Cuiabá e Várzea Grande – MT</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="http://wa.me/556593448962"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/90 hover:text-[#F7EE30] transition-colors"
            >
              <Phone className="lucide lucide-phone" width={13} height={13} />
              (65) 9 9344-8962
            </a>
            <a
              href="https://www.instagram.com/carzonebateriascba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-[#F7EE30] transition-colors font-medium"
            >
              @carzonebateriascba
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 transition-all duration-300 bg-[#000E27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/carzone%20baterias/img/logo-sem-fundo.webp"
                alt="Carzone Baterias"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-[#F7EE30] rounded-lg transition-all duration-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+556593448962"
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                <Phone className="lucide lucide-phone" width={15} height={15} />
                (65) 9 9344-8962
              </a>
              <a
                href="http://wa.me/556593448962"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F7EE30] text-[#000E27] px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-lg shadow-yellow-400/20"
              >
                Solicitar Orçamento
              </a>
            </div>
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="lucide lucide-menu" width={22} height={22} />
            </button>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#000E27] border-t border-white/10 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-[#F7EE30] hover:bg-white/5 rounded-lg transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href="tel:+556593448962"
                className="flex items-center gap-2 px-4 py-2.5 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone className="lucide lucide-phone" width={15} height={15} />
                (65) 9 9344-8962
              </a>
              <a
                href="http://wa.me/556593448962"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#F7EE30] text-[#000E27] px-5 py-3 rounded-lg text-sm font-bold"
              >
                Solicitar Orçamento no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
