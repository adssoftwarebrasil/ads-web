import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Nossas Lojas', id: 'localizacao' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 shadow-md">
      <div className="bg-[#1A385C] transition-all duration-300 h-auto opacity-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-4 md:gap-6 text-white text-xs sm:text-sm">
              <a
                href="tel:+556799220122"
                className="flex items-center gap-2 hover:text-[#F8D617] transition-colors group"
              >
                <Phone
                  width={16}
                  height={16}
                  className="lucide lucide-phone group-hover:rotate-12 transition-transform"
                />
                <span className="hidden sm:inline">(67) 99807-8170</span>
              </a>
              <a
                href="mailto:contato@novocampoagricolas.com.br"
                className="hidden md:flex items-center gap-2 hover:text-[#F8D617] transition-colors group"
              >
                <Mail
                  width={16}
                  height={16}
                  className="lucide lucide-mail group-hover:scale-110 transition-transform"
                />
                <span>contato@novocampoagricolas.com.br</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 text-[#25D366] hover:text-[#1fb855] transition-colors text-xs font-semibold">
                <WhatsAppIcon className="w-4 h-4" />
                Atendimento WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-3 md:py-4">
            <button className="flex-shrink-0" onClick={() => handleNav('inicio')}>
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=novocampo%2Flogo-12-Photoroom.png&version_id=null"
                alt="Novo Campo - Peças e Implementos Agrícolas"
                className="transition-all duration-300 h-12 md:h-14"
              />
            </button>
            <button
              className="lg:hidden text-[#1A385C] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X
                  width={28}
                  height={28}
                  className="lucide lucide-x"
                />
              ) : (
                <Menu
                  width={28}
                  height={28}
                  className="lucide lucide-menu "
                />
              )}
            </button>
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-[#1A385C] hover:text-[#001F7A] hover:bg-gray-100 px-4 py-2 rounded-lg transition-all font-semibold text-sm xl:text-base"
                >
                  {item.label}
                </button>
              ))}
              <button className="ml-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#1fb855] transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 text-sm xl:text-base group">
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="hidden xl:inline">WhatsApp</span>
              </button>
            </div>
          </nav>
          {mobileOpen && (
            <div className="lg:hidden pb-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-left text-[#1A385C] hover:text-[#001F7A] hover:bg-gray-100 px-4 py-3 rounded-lg transition-all font-semibold"
                >
                  {item.label}
                </button>
              ))}
              <button className="mt-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#1fb855] transition-all flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
