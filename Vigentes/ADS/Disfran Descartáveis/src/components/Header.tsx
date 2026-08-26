import { useState } from 'react';
import { Search, MessageCircle, Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[rgb(153,21,16)] z-[100] transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
            <img
              src="https://storage.lucasmendes.dev/site-sp/disfran/img/Logo.JPG"
              alt="Disfran Descartáveis"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain rounded-lg bg-white/10 p-1 flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[rgb(255,243,229)] leading-tight truncate">
                Disfran Descartáveis
              </h1>
              <p className="text-[10px] sm:text-xs text-[rgb(255,243,229)]/80 hidden sm:block">
                26 anos de tradição
              </p>
            </div>
          </div>
          <nav className="hidden lg:flex gap-6 xl:gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[rgb(255,243,229)] no-underline font-medium text-sm xl:text-base relative transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-[rgb(255,243,229)] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-32 md:w-40 lg:w-52 xl:w-60 py-2 sm:py-2.5 pr-9 sm:pr-10 pl-3 sm:pl-4 border-2 border-[rgb(255,243,229)]/30 bg-white/10 backdrop-blur-sm text-[rgb(255,243,229)] placeholder:text-[rgb(255,243,229)]/60 rounded-full font-sans text-xs sm:text-sm transition-all duration-300 focus:outline-none focus:border-[rgb(255,243,229)] focus:bg-white/20 focus:shadow-[0_0_0_3px_rgba(255,243,229,0.2)]"
                defaultValue=""
              />
              <Search className="lucide lucide-search absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[rgb(255,243,229)]/70 pointer-events-none" width={16} height={16} />
            </div>
            <button className="sm:hidden p-2 bg-white/10 backdrop-blur-sm border-2 border-[rgb(255,243,229)]/30 rounded-full text-[rgb(255,243,229)] transition-all duration-300 hover:bg-white/20">
              <Search className="lucide lucide-search" width={18} height={18} />
            </button>
            <button className="py-2 px-3 sm:py-2.5 sm:px-4 lg:px-5 bg-[rgb(2,74,169)] text-white border-none rounded-lg font-sans font-semibold cursor-pointer transition-all duration-300 flex items-center gap-1.5 sm:gap-2 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(2,74,169,0.4)] hover:bg-[rgb(2,84,189)] text-xs sm:text-sm">
              <MessageCircle className="lucide lucide-message-circle sm:w-5 sm:h-5" width={18} height={18} />
              <span className="hidden md:inline">Contato</span>
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 bg-transparent border-none cursor-pointer text-[rgb(255,243,229)] hover:bg-white/10 rounded transition-colors duration-300"
              aria-label="Menu"
            >
              <Menu className="lucide lucide-menu" width={24} height={24} />
            </button>
          </div>
        </div>
        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-3 py-4 px-2 bg-white/5 rounded-lg backdrop-blur-sm border border-[rgb(255,243,229)]/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[rgb(255,243,229)] no-underline font-medium text-base py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
