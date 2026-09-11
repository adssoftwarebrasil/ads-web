import { useState } from 'react';
import { Mail, Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const emailUrl = 'https://server7.pureteserver.com:2031/roundcube/?_task=mail&_mbox=INBOX';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#00335F] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-2">
          <a href="#inicio" className="flex-shrink-0 transition-transform hover:scale-105">
            <img
              src="https://storage.lucasmendes.dev/site-sp/guiautos/logo.png"
              alt="Guiauto Logo"
              className="h-10 w-auto sm:h-12"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#2BA2CC] transition-colors duration-300 font-medium whitespace-nowrap text-sm xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2BA2CC] text-white px-4 py-2.5 rounded-full font-semibold hover:bg-[#238bb0] transition-all duration-300 flex items-center gap-2 text-sm shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden xl:inline">E-mail</span>
              <span className="xl:hidden">E-mail</span>
            </a>
            <a
              href="tel:+5588996471212"
              className="bg-[#D7282A] text-white px-4 py-2.5 rounded-full font-semibold hover:bg-[#b82228] transition-all duration-300 flex items-center gap-2 text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(88) 99647-1212</span>
            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-[#00335F] transition-all duration-300 ease-in-out ${
          open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-lg border-b border-white/10 pb-2 hover:text-[#2BA2CC]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4">
            <a
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2BA2CC] text-white p-4 rounded-xl font-bold text-center flex items-center justify-center gap-3 active:scale-95 transition-transform"
            >
              <Mail className="w-5 h-5" />
              Acessar E-mail
            </a>
            <a
              href="tel:+5588996471212"
              className="bg-[#D7282A] text-white p-4 rounded-xl font-bold text-center flex items-center justify-center gap-3 active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5" />
              (88) 99647-1212
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
