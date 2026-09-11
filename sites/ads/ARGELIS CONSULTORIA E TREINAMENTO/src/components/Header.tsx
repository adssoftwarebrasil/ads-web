import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems: { label: string; target: string }[] = [
  { label: 'Início', target: 'hero' },
  { label: 'Serviços', target: 'services' },
  { label: 'Sobre Nós', target: 'differentials' },
  { label: 'Profissionais', target: 'team' },
  { label: 'Clientes', target: 'testimonials' },
  { label: 'Contato', target: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/argelis%20consultoria%2Fimg%2Flogo-sem-fundo.png"
              alt="Argelis Consultoria"
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-gray-700 hover:text-[rgb(64,102,215)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a
              href="http://wa.me/5516991931444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
            >
              <Phone width={20} height={20} />
              Fale Conosco
            </a>
          </div>
          <button className="lg:hidden p-2 text-gray-700" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-left py-2 text-gray-700 hover:text-[rgb(64,102,215)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5516991931444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] text-white rounded-lg font-semibold mt-2"
            >
              <Phone width={20} height={20} />
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
