import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/caroba/objects/download?preview=true&prefix=scorpionxpress%2FLogomarca_Scorpion-removebg-preview.png&version_id=null';

const NAV = [
  { href: '#inicio', label: 'Início' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#loja', label: 'Nossa Loja' },
  { href: '#contato', label: 'Contato' },
];

const BRANDS = ['Moura', 'Heliar', 'Cral', 'Zetta', 'Pioneiro'];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={LOGO} alt="Scorpion Xpress" className="h-14 w-auto object-contain mb-4" />
            <p className="text-white/40 text-sm leading-relaxed">
              Especialistas em baterias automotivas em Lins-SP e região. Qualidade, agilidade e preço
              justo.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/scorpion_lins.sp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#fcc209]/10 border border-white/10 hover:border-[#fcc209]/30 flex items-center justify-center text-white/40 hover:text-[#fcc209] transition-all"
              >
                <Instagram size={16} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/scorpionbaterias/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#fcc209]/10 border border-white/10 hover:border-[#fcc209]/30 flex items-center justify-center text-white/40 hover:text-[#fcc209] transition-all"
              >
                <Facebook size={16} className="lucide lucide-facebook " />
              </a>
              <a
                href="https://wa.me/5514996487352"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#fcc209]/10 border border-white/10 hover:border-[#fcc209]/30 flex items-center justify-center text-white/40 hover:text-[#fcc209] transition-all"
              >
                <WhatsAppIcon size={16} fill="currentColor" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Navegação</h4>
            <ul className="flex flex-col gap-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/40 hover:text-[#fcc209] text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Marcas</h4>
            <ul className="flex flex-col gap-2">
              {BRANDS.map((brand) => (
                <li key={brand}>
                  <span className="text-white/40 text-sm">{brand}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Localização</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin
                  size={14}
                  className="lucide lucide-map-pin text-[#fcc209] mt-0.5 flex-shrink-0"
                />
                <span>
                  Lins - SP
                  <br />
                  Guaiçara - SP
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Phone size={14} className="lucide lucide-phone text-[#fcc209] flex-shrink-0" />
                <a href="tel:+5514996487352" className="hover:text-[#fcc209] transition-colors">
                  (14) 99648-7352
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Scorpion Xpress. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs text-center sm:text-right">
            Especialistas em Baterias Automotivas — Lins-SP
          </p>
        </div>
      </div>
    </footer>
  );
}
