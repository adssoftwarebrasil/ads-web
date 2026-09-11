import { useState } from 'react';
import { ArrowRight, Menu, Instagram, Facebook } from 'lucide-react';
import { scrollToId } from '../lib/utils';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Projetos', id: 'gallery' },
  { label: 'Social', id: 'social' },
  { label: 'Contato', id: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => go('hero')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/legsol%2Fimg%2Flogo-sem-fundo.png"
              alt="LEGSOL Energia Solar"
              className="w-auto transition-all duration-300 h-12 md:h-14"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="group relative text-[rgb(27,45,114)] font-medium text-sm uppercase tracking-wide hover:text-[rgb(26,110,76)] transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(26,110,76)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => go('cta')}
              className="bg-[rgb(26,110,76)] hover:bg-[rgb(26,110,76)]/90 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-green-900/10 hover:shadow-green-900/20 hover:-translate-y-0.5 flex items-center gap-2"
            >
              Simular Economia
              <ArrowRight className="lucide lucide-arrow-right" width={16} height={16} />
            </button>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-[rgb(27,45,114)] hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="lucide lucide-menu" width={28} height={28} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-left text-[rgb(27,45,114)] hover:text-[rgb(26,110,76)] hover:bg-gray-50 px-4 py-3 rounded-xl transition-colors font-bold text-lg border-b border-gray-50 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <button
              onClick={() => go('contact')}
              className="w-full bg-[rgb(26,110,76)] active:bg-[rgb(26,110,76)]/90 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all text-center flex items-center justify-center gap-2"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="lucide lucide-arrow-right" width={20} height={20} />
            </button>
          </div>
          <div className="flex justify-center gap-6 pt-6 border-t border-gray-100">
            <a
              href="https://www.instagram.com/legsol.energiasolar/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#E1306C]"
            >
              <Instagram className="lucide lucide-instagram" width={24} height={24} />
            </a>
            <a
              href="https://www.facebook.com/legsolenergiasolar"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#1877F2]"
            >
              <Facebook className="lucide lucide-facebook" width={24} height={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
