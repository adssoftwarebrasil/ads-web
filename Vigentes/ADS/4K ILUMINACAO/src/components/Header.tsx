import { Phone } from 'lucide-react';
import { scrollToId, scrollToTop } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Benefícios', id: 'beneficios' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md shadow-lg py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            aria-label="Voltar ao topo"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/img/logo-esticada.webp"
              alt="4K Iluminação"
              className="h-12 md:h-16 w-auto rounded-xl"
            />
          </button>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="tel:+556241410490"
            className="flex items-center gap-3 text-white font-semibold hover:text-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-2 py-1"
            aria-label="Ligar para (62) 4141-0490"
          >
            <Phone size={18} className="text-yellow-400" />
            <span className="hidden sm:block">(62) 4141-0490</span>
          </a>
        </div>
      </div>
    </header>
  );
}
