import { useState } from 'react';
import { Phone, Instagram, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#empresa', label: 'EMPRESA' },
  { href: '#equipamentos', label: 'EQUIPAMENTOS' },
  { href: '#servicos', label: 'SERVIÇOS' },
  { href: '#orcamento', label: 'ORÇAMENTO' },
  { href: '#contato', label: 'CONTATO' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img
                src="https://storage.lucasmendes.dev/site-sp/force%2Flogo-force_page-0001-Photoroom.png"
                alt="Force Locações"
                className="h-12 w-auto"
              />
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-force-dark-blue hover:text-force-yellow transition-colors font-medium text-sm"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/5591985785150"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-force-dark-blue hover:text-green-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold text-sm">(91) 98578-5150</span>
            </a>
            <a
              href="https://instagram.com/forcelocacaobr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-force-dark-blue hover:text-pink-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#orcamento"
              className="bg-force-yellow text-force-dark-blue px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-md"
            >
              ORÇAMENTO
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-force-dark-blue hover:text-force-yellow transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 sm:px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-force-dark-blue hover:text-force-yellow transition-colors font-medium text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5591985785150"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-force-dark-blue hover:text-green-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold text-sm">(91) 98578-5150</span>
          </a>
          <a
            href="#orcamento"
            onClick={() => setOpen(false)}
            className="inline-block bg-force-yellow text-force-dark-blue px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-all shadow-md"
          >
            ORÇAMENTO
          </a>
        </div>
      )}
    </header>
  );
}
