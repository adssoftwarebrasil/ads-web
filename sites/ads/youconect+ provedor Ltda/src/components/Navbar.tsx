import { useState } from 'react';
import { Home, AlertCircle, Zap, MapPin, Star, Instagram, Phone, Menu } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=youconnectpe%2FAtivo%201%20(1).png&version_id=null';

interface NavItem {
  label: string;
  target: string;
  Icon: typeof Home;
}

const navItems: NavItem[] = [
  { label: 'Início', target: 'hero', Icon: Home },
  { label: 'Problemas', target: 'problemas', Icon: AlertCircle },
  { label: 'Diferenciais', target: 'diferenciais', Icon: Zap },
  { label: 'Cobertura', target: 'cobertura', Icon: MapPin },
  { label: 'Depoimentos', target: 'avaliacoes', Icon: Star },
  { label: 'Instagram', target: 'instagram', Icon: Instagram },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  const handleClick = (item: NavItem) => {
    setActive(item.target);
    setMenuOpen(false);
    if (item.target === 'instagram') {
      window.open('https://instagram.com/youconnectpe', '_blank', 'noopener,noreferrer');
      return;
    }
    document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <img
              src={LOGO}
              alt="You Connect"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain cursor-pointer drop-shadow-lg brightness-0 invert"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = active === item.target;
              const { Icon } = item;
              return (
                <button
                  key={item.label}
                  onClick={() => handleClick(item)}
                  className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 group ${
                    isActive ? 'text-white bg-white/20' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon
                    className={`lucide lucide-${item.label} w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    }`}
                  />
                  <span>{item.label}</span>
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"></div>}
                </button>
              );
            })}
          </div>
          <div className="hidden lg:block">
            <button
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              CONTRATAR
            </button>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-gradient-to-r from-orange-600 to-orange-700 border-t border-white/20">
          {navItems.map((item) => {
            const isActive = active === item.target;
            const { Icon } = item;
            return (
              <button
                key={item.label}
                onClick={() => handleClick(item)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-3 ${
                  isActive ? 'bg-white/30 text-white' : 'text-white/90 hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <button
            onClick={() => {
              setMenuOpen(false);
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-white text-orange-600 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-2 shadow-lg hover:bg-gray-100"
          >
            <Phone className="w-5 h-5" />
            CONTRATAR AGORA
          </button>
        </div>
      </div>
    </nav>
  );
}
