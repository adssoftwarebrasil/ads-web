import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from './icons';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/gabricioguincho%2Flogo.webp"
              alt="Fabrício Guincho Auto Socorro"
              className="h-12 w-auto lg:h-14"
              style={{ width: '180px' }}
            />
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[hsl(211,66%,41%)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end text-sm">
              <a
                href="tel:+5516991837044"
                className="flex items-center gap-2 text-gray-700 hover:text-[hsl(211,66%,41%)] transition-colors"
              >
                <Phone width={16} height={16} className="lucide lucide-phone " />
                (16) 99183-7044
              </a>
              <a
                href="mailto:fabricio@guinchoautosocorro.com.br"
                className="flex items-center gap-2 text-gray-600 text-xs hover:text-[hsl(211,66%,41%)] transition-colors"
              >
                <Mail width={14} height={14} className="lucide lucide-mail " />
                fabricio@guinchoautosocorro.com.br
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-[#ea580c] transition-all hover:scale-105 font-semibold shadow-lg"
            >
              WHATSAPP
            </a>
          </div>
          <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? (
              <X width={28} height={28} className="lucide lucide-x " />
            ) : (
              <Menu width={28} height={28} className="lucide lucide-menu " />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-[hsl(211,66%,41%)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-[#ea580c] transition-all font-semibold shadow-lg text-center mt-2"
            >
              WHATSAPP
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
