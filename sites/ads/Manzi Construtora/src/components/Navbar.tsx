import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#institucional', label: 'Institucional' },
  { href: '#empreendimentos', label: 'Empreendimentos' },
  { href: '#novidades', label: 'Novidades' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[rgb(0,40,71)] bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <div className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/manzi/logo%2FLogo%20Manzi%20Construtora%202024%20Branca.png"
                alt="Manzi Construtora"
                className="w-auto transition-all duration-300 h-14 md:h-16"
              />
            </div>
            <div className="flex items-center space-x-1 xl:space-x-3">
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
                {links.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-4 xl:px-6 py-2.5 text-sm xl:text-base font-medium text-white cursor-pointer transition-all duration-300 hover:text-white hover:text-opacity-80 group"
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4"></span>
                  </a>
                ))}
              </div>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2.5 text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300"
                aria-label="Menu"
              >
                <Menu className="lucide lucide-menu" width={26} height={26} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-20 md:h-24"></div>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm bg-[rgb(0,40,71)] z-50 transform transition-transform duration-300 lg:hidden shadow-2xl ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white border-opacity-20">
            <img
              src="https://storage.lucasmendes.dev/manzi/logo%2FLogo%20Manzi%20Construtora%202024%20Branca.png"
              alt="Manzi Construtora"
              className="h-10"
            />
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              aria-label="Fechar menu"
            >
              <X className="lucide lucide-x" width={24} height={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-8 px-6">
            <nav className="space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 text-base font-semibold text-white hover:bg-white hover:bg-opacity-10 rounded-xl transition-all cursor-pointer border-l-4 border-transparent hover:border-[rgb(37,211,102)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="p-6 border-t border-white border-opacity-20">
            <a
              href="https://wa.me/5538999171314"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-white text-[rgb(0,40,71)] px-6 py-4 rounded-xl text-base font-bold hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl"
            >
              <Phone className="lucide lucide-phone mr-2" width={20} height={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
