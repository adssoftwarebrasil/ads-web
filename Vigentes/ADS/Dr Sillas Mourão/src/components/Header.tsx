import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#144170]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio">
          <img
            src="https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/img/logo-sem-fundo.webp"
            alt="Dr. Sillas Mourão Coloproctologista"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white text-sm font-medium hover:text-[#009FC2] transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/553399711500"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#009FC2] hover:bg-[#007fa0] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Phone width={15} height={15} className="lucide lucide-phone " />
            Agendar Consulta
          </a>
        </nav>
        <button
          className="md:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X width={24} height={24} className="lucide lucide-x " />
          ) : (
            <Menu width={24} height={24} className="lucide lucide-menu " />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#144170]/98 backdrop-blur-md border-t border-white/10 mt-3">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white text-sm font-medium hover:text-[#009FC2] transition-colors duration-200 text-left py-1"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/553399711500"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#009FC2] hover:bg-[#007fa0] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg mt-1"
            >
              <Phone width={15} height={15} className="lucide lucide-phone " />
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
