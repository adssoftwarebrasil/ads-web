import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO =
  'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2F220923897_324038569430804_1400980047283159794_n%201-Photoroom.png';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Nossos Produtos' },
  { href: '#servicos', label: 'Serviços Especiais' },
  { href: '#sobre', label: 'Quem Somos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white py-3${
          scrolled ? ' shadow-md' : ''
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#inicio" className="flex items-center flex-shrink-0">
              <img
                src={LOGO}
                alt="Papelaria Vasconcelos"
                className="w-auto transition-all duration-300 h-14 sm:h-16"
              />
            </a>
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[rgb(45,52,142)] font-medium hover:text-[rgb(0,148,216)] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(0,148,216)] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a
                href="https://wa.me/5581995483408"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(0,148,216)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(18,70,156)] transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
              >
                Fale Conosco
              </a>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[rgb(45,52,142)] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <Menu width={28} height={28} strokeWidth={2} className="lucide lucide-menu" />
            </button>
          </div>
        </nav>
      </header>

      <div
        onClick={close}
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <img src={LOGO} alt="Papelaria Vasconcelos" className="h-12 w-auto" />
            <button
              onClick={close}
              className="text-[rgb(45,52,142)] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Fechar menu"
            >
              <X width={24} height={24} strokeWidth={2} className="lucide lucide-x" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="space-y-1 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="block text-[rgb(45,52,142)] font-medium py-3 px-4 hover:bg-[rgb(0,148,216)]/10 hover:text-[rgb(0,148,216)] rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
          <div className="p-6 border-t border-gray-200">
            <a
              href="https://wa.me/5581995483408"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[rgb(0,148,216)] text-white text-center px-6 py-3.5 rounded-full font-medium hover:bg-[rgb(18,70,156)] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Fale Conosco
            </a>
            <p className="text-center text-sm text-gray-600 mt-4">26 anos de tradição</p>
          </div>
        </div>
      </div>
    </>
  );
}
