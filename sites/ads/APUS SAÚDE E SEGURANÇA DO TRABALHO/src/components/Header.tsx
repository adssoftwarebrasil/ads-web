import { useState } from 'react';
import { Menu } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Localização', id: 'localizacao' },
  { label: 'Cadastro', id: 'contato' },
  { label: 'Fale Conosco', id: 'fale-conosco' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button className="flex-shrink-0" onClick={() => handleNav('inicio')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/apus%2Fimg%2Flogo-fundo-branco.png"
              alt="APUS - Saúde e Segurança do Trabalho"
              className="h-12 w-auto"
            />
          </button>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-[rgb(28,9,31)] hover:text-[rgb(78,20,104)] font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNav('contato')}
              className="px-6 py-2.5 bg-[rgb(253,144,41)] text-white font-semibold rounded-lg hover:bg-[rgb(233,124,21)] transition-all duration-200 hover:shadow-lg"
            >
              Solicitar Orçamento
            </button>
            <a
              href="http://wa.me/558192487254"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[rgb(78,20,104)] text-white font-semibold rounded-lg hover:bg-[rgb(58,0,84)] transition-all duration-200 hover:shadow-lg flex items-center space-x-2"
            >
              <span>WhatsApp</span>
            </a>
          </div>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 text-[rgb(28,9,31)]"
          >
            <Menu size={28} className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-[rgb(28,9,31)] hover:text-[rgb(78,20,104)] font-medium transition-colors duration-200 text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <button
              onClick={() => handleNav('contato')}
              className="w-full px-6 py-3 bg-[rgb(253,144,41)] text-white font-semibold rounded-lg hover:bg-[rgb(233,124,21)] transition-all duration-200"
            >
              Solicitar Orçamento
            </button>
            <a
              href="http://wa.me/558192487254"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-[rgb(78,20,104)] text-white font-semibold rounded-lg hover:bg-[rgb(58,0,84)] transition-all duration-200 text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
