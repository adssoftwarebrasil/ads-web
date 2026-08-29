import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { TELEFONES, WHATSAPP_PADRAO } from '../lib/contato';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#locacao', label: 'Locação' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-[#0b3d5c] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <span className="hidden sm:inline text-white/80">
            Av. Heráclito Graça, 641 – Centro, Fortaleza/CE
          </span>
          <a
            href={TELEFONES[0].href}
            className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors"
          >
            <Phone size={14} />
            {TELEFONES[0].rotulo}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#inicio" className="flex-shrink-0 leading-tight">
            <span className="block text-xl font-extrabold text-[#0b3d5c] tracking-tight">
              Centro Ortopédico
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0e6d8f]">
              Saúde e Mobilidade
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 font-medium hover:text-[#0e6d8f] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_PADRAO}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e6d8f] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0b3d5c] transition-all duration-300"
            >
              Fale Conosco
            </a>
          </nav>

          <button
            className="lg:hidden text-[#0b3d5c]"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-800 font-medium hover:text-[#0e6d8f] transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_PADRAO}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e6d8f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0b3d5c] transition-all duration-300 text-center"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
