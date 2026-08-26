import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Containers', id: 'containers' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md"
      style={{ backgroundColor: 'rgb(3, 99, 62)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=holandatransportes%2Fimage%2052.png&version_id=null"
              alt="Holanda Transportes"
              className="h-10 lg:h-12 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5595991507264?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#03633E] px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold hover:scale-105 shadow-lg"
            >
              Solicitar Orçamento
            </a>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-gray-200 transition-colors font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5595991507264?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#03633E] px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg text-center"
            >
              Solicitar Orçamento
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
