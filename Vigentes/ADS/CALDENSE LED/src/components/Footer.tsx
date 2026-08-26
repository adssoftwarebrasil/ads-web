import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

const productList = [
  'Painéis LED',
  'Fitas de LED',
  'Perfis de LED',
  'Refletores Industriais',
  'Luminárias Decorativas',
  'Plafons e Pendentes',
];

export default function Footer() {
  return (
    <footer className="bg-[#010101] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/caldense%20led/img/logo-sem-fundo.webp"
              alt="Caldense LED Iluminação"
              className="h-14 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Especialistas em iluminação LED há mais de 8 anos. Soluções para residências,
              comércios, indústrias e projetos decorativos.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/caldenseledloja/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#239110] text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={18} height={18} />
              </a>
              <a
                href="https://www.facebook.com/p/Caldense-Led-100071021046256/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#239110] text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook" width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#F9AA0C] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Produtos</h4>
            <ul className="space-y-3">
              {productList.map((product) => (
                <li key={product}>
                  <span className="text-gray-400 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-[#239110] flex-shrink-0 mt-0.5"
                  width={16}
                  height={16}
                />
                <span className="text-gray-400 text-sm">
                  R. Cel. Virgílio Silva, 1294, Vila Nova, Poços de Caldas - MG
                </span>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="lucide lucide-phone text-[#239110] flex-shrink-0 mt-0.5"
                  width={16}
                  height={16}
                />
                <a
                  href="tel:+553530646373"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  (35) 3064-6373
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="lucide lucide-mail text-[#239110] flex-shrink-0 mt-0.5"
                  width={16}
                  height={16}
                />
                <a
                  href="mailto:caldenseled@yahoo.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  caldenseled@yahoo.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock
                  className="lucide lucide-clock text-[#239110] flex-shrink-0 mt-0.5"
                  width={16}
                  height={16}
                />
                <div>
                  <p className="text-gray-400 text-sm">Seg - Sex: 08h às 18h</p>
                  <p className="text-gray-400 text-sm">Sábado: 08h às 12h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs text-center sm:text-left">
              © 2026 Caldense LED Iluminação. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#239110] animate-pulse"></div>
              <p className="text-gray-600 text-xs">Poços de Caldas - MG</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
