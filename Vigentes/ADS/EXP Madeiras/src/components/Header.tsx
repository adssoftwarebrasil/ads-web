import { useState } from 'react';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const budgetUrl =
  'https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 "
        style={{ backgroundColor: 'rgba(46, 32, 15, 0.95)', backdropFilter: 'blur(10px)' }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-[70px] md:h-[80px]">
            <div className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FLogo.png"
                alt="EXP Madeiras Logo"
                className="h-[40px] md:h-[50px]"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#F1F1FF] font-medium hover:text-[#B88654] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={budgetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-6 py-2 border-2 border-[#B88654] text-[#F1F1FF] rounded-lg hover:bg-[#B88654] hover:text-[#2E200F] transition-all duration-300"
            >
              Orçamento
            </a>
            <button
              className="md:hidden text-[#F1F1FF] p-2"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Menu className="lucide lucide-menu " width={28} height={28} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-[#2E200F] z-40 md:hidden transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F1F1FF] text-2xl font-medium hover:text-[#B88654] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={budgetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-[#B88654] text-[#F1F1FF] rounded-lg hover:bg-[#B88654] hover:text-[#2E200F] transition-all duration-300"
          >
            Orçamento
          </a>
        </div>
      </div>
    </>
  );
}
