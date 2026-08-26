import { Facebook, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { PHONE_HREF, EMAIL, LOGO, scrollToId } from '../lib/constants';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

const productList = [
  'Salame Defumado',
  'Linguiça Toscana',
  'Copa',
  'Torresmo',
  'Banha',
  'Cortes Suínos',
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={LOGO}
              alt="Serrano Embutidos e Defumados"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Tradição e sabor desde 1994. Embutidos e defumados coloniais feitos com capricho,
              qualidade e o autentico sabor de Sorriso-MT.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/SalameSerranoColonial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#FF6601]/20 border border-white/10 hover:border-[#FF6601]/30 rounded-lg flex items-center justify-center text-white/50 hover:text-[#FF6601] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} className="lucide lucide-facebook " />
              </a>
              <button
                className="w-9 h-9 bg-white/5 hover:bg-[#FF6601]/20 border border-white/10 hover:border-[#FF6601]/30 rounded-lg flex items-center justify-center text-white/50 hover:text-[#FF6601] transition-all"
                aria-label="WhatsApp"
              >
                <Phone size={16} className="lucide lucide-phone " />
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-white/45 hover:text-[#FF6601] text-sm transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Produtos
            </h4>
            <ul className="flex flex-col gap-3">
              {productList.map((product) => (
                <li key={product}>
                  <span className="text-white/45 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="lucide lucide-map-pin text-[#FF6601] mt-0.5 flex-shrink-0"
                />
                <span className="text-white/45 text-sm leading-relaxed">
                  R. Visc. de Mauá, 1451 – Industrial Leonel Bedin, Sorriso – MT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="lucide lucide-phone text-[#FF6601] flex-shrink-0" />
                <a
                  href={PHONE_HREF}
                  className="text-white/45 hover:text-[#FF6601] text-sm transition-colors"
                >
                  (66) 9605-4019
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="lucide lucide-mail text-[#FF6601] flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/45 hover:text-[#FF6601] text-sm transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  size={15}
                  className="lucide lucide-clock text-[#FF6601] mt-0.5 flex-shrink-0"
                />
                <span className="text-white/45 text-sm leading-relaxed">
                  Seg – Sex: 07h–11h | 13h–17h
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2026 Serrano Embutidos e Defumados. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Sorriso – MT | CNPJ/Entreposto de Carnes e Derivados
          </p>
        </div>
      </div>
    </footer>
  );
}
