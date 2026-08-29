import { useState, useEffect } from 'react';
import { ExternalLink, Menu } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=5562992380432&text=Olá! Vim pelo site e quero mais informações.';
const CHANNELS_URL = 'https://eletrica.instabio.cc/3110301onzuod';

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#products', label: 'Produtos' },
  { href: '#location', label: 'Localização' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/100 backdrop-blur-sm ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <a href="#" className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/eletricamega%2Flogo.png"
              alt="Elétrica Mega Watt's"
              className="h-12 lg:h-14 w-auto bg-white p-2 rounded"
            />
          </a>
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[rgb(236,33,40)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CHANNELS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[rgb(41,35,88)] text-[rgb(41,35,88)] px-4 py-2 rounded-lg hover:bg-[rgb(41,35,88)] hover:text-white transition-all font-medium flex items-center gap-2"
            >
              Nossos Canais <ExternalLink className="lucide lucide-external-link" width={16} height={16} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(236,33,40)] text-white px-6 py-2.5 rounded-lg hover:bg-[rgb(216,13,20)] transition-colors font-medium"
            >
              Fale Conosco
            </a>
          </div>
          <button
            className="lg:hidden text-[rgb(41,35,88)] p-2"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <Menu className="lucide lucide-menu" width={28} height={28} />
          </button>
        </div>
      </nav>
      <div
        className={`lg:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 bg-[rgb(41,35,88)] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-2xl`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[rgb(236,33,40)] transition-colors text-lg font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-white/10 my-2" />
          <a
            href={CHANNELS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium text-center flex items-center justify-center gap-2"
          >
            Nossos Canais <ExternalLink className="lucide lucide-external-link" width={18} height={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(236,33,40)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(216,13,20)] transition-colors font-medium text-center"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}
