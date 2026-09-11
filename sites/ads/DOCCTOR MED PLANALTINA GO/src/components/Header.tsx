import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Exames', href: '#exames' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#fefefe] shadow-md transition-all duration-300 ${
          isScrolled ? 'h-[65px]' : 'h-20 md:h-[80px]'
        }`}
      >
        <div className="container-custom h-full flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=docctormedplanaltina%2Fdocctormedplanaltina%2Flogomarca-sem-o-fundo.png&version_id=null"
              alt="Docctor Med Planaltina"
              className="h-[70px] object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-[#2d4a3e] hover:text-[#f37f1a] transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href="https://wa.me/5561982400076?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-[#f37f1a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d97015] transition-all duration-300 hover:scale-105"
          >
            Agendar Consulta
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#2d4a3e] p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-0 bottom-0 w-64 bg-white z-50 lg:hidden shadow-xl">
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#2d4a3e] hover:text-[#f37f1a] transition-colors duration-300 font-medium text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/5561982400076?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-[#f37f1a] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#d97015] transition-colors"
              >
                Agendar Consulta
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
