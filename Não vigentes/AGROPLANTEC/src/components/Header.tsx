import { useState } from 'react';
import { Phone, Mail, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre', target: 'about' },
  { label: 'Serviços', target: 'process' },
  { label: 'Galeria', target: 'testimonials' },
  { label: 'Parceiros', target: 'partners' },
  { label: 'Contato', target: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/agroplantec%2Flogo.svg"
              alt="Agro Plantec"
              className="h-12 lg:h-12"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-[rgb(29,29,27)] hover:text-[rgb(138,154,39)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden xl:flex items-center space-x-6">
            <a
              href="tel:2835465127"
              className="flex items-center text-[rgb(29,29,27)] hover:text-[rgb(138,154,39)] transition-colors"
            >
              <Phone className="lucide lucide-phone w-4 h-4 mr-2" />
              <span className="text-sm font-medium">(28) 3546 5127</span>
            </a>
            <a
              href="mailto:atendimento@agroplantec.com.br"
              className="flex items-center text-[rgb(29,29,27)] hover:text-[rgb(138,154,39)] transition-colors"
            >
              <Mail className="lucide lucide-mail w-4 h-4 mr-2" />
              <span className="text-sm font-medium">atendimento@agroplantec.com.br</span>
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-[rgb(138,154,39)] p-2"
          >
            <Menu className="lucide lucide-menu w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed inset-0 bg-[rgba(29,29,27,0.95)] z-40 transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }}
      >
        <nav className="flex flex-col p-8 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              className="text-white text-xl font-medium text-left hover:text-[rgb(138,154,39)] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-8 border-t border-white/20 space-y-4">
            <a href="tel:2835465127" className="flex items-center text-white">
              <Phone className="lucide lucide-phone w-5 h-5 mr-3" />
              <span>(28) 3546 5127</span>
            </a>
            <a href="mailto:atendimento@agroplantec.com.br" className="flex items-center text-white">
              <Mail className="lucide lucide-mail w-5 h-5 mr-3" />
              <span className="text-sm">atendimento@agroplantec.com.br</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
