import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const logo =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=aeafreios%2Flogo%20(2).jpg&version_id=null';

const navItems = [
  { label: 'Início', href: '#top', active: true },
  { label: 'Serviços', href: '#services', active: false },
  { label: 'Diferenciais', href: '#differentiator', active: false },
  { label: 'Localização', href: '#location', active: false },
  { label: 'Orçamento', href: '#contact', active: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          <div className="flex items-center space-x-3 min-w-[150px]">
            <img src={logo} alt="AEA Freios" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-6 flex-grow justify-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className={
                  item.active
                    ? 'text-sm font-bold transition-colors text-[rgb(8,36,75)] hover:text-[rgb(230,10,12)]'
                    : 'text-sm font-medium transition-colors text-gray-700 hover:text-[rgb(230,10,12)]'
                }
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-4 ml-auto">
            <a
              href="tel:+5585987753852"
              className="hidden md:flex items-center space-x-2 bg-[rgb(230,10,12)] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[rgb(200,8,10)] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="lucide lucide-phone" width={18} height={18} />
              <span>Ligar Agora</span>
            </a>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
              {open ? (
                <X className="lucide lucide-x text-gray-800" width={24} height={24} />
              ) : (
                <Menu className="lucide lucide-menu text-gray-800" width={24} height={24} />
              )}
            </button>
          </div>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="text-left text-sm font-medium text-gray-700 hover:text-[rgb(230,10,12)] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+5585987753852"
              className="flex items-center justify-center space-x-2 bg-[rgb(230,10,12)] text-white px-6 py-2.5 rounded-md font-medium"
            >
              <Phone width={18} height={18} />
              <span>Ligar Agora</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
