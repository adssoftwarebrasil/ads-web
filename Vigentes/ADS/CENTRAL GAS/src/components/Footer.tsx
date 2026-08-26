import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Por que nós?', id: 'beneficios' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const productItems = [
  'Botijão de Gás P13 — 13kg',
  'Cilindro de Gás P45 — 45kg',
  'Água Mineral 20 Litros',
  'Combo Gás + Água',
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio">
              <img
                src="https://storage.lucasmendes.dev/site-sp/central%20gas/img/logo-sem-fundo.webp"
                alt="Central Gás"
                className="h-14 w-auto object-contain mb-4"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Revenda de gás e água mineral em Primavera do Leste — MT. Qualidade, segurança e entrega rápida na sua
              porta.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/centralgaspva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Central Gás"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center text-white hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100044451834611"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Central Gás"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center text-white hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} className="lucide lucide-facebook " />
              </a>
              <a
                href="http://wa.me/556696555500"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Central Gás"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center text-white hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-accent font-bold text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-accent font-bold text-sm uppercase tracking-wider mb-4">Produtos</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              {productItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-accent font-bold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="lucide lucide-map-pin text-accent shrink-0 mt-0.5" />
                <span>R. Piracicaba, 2603 — Primavera II, Primavera do Leste — MT, 78850-000</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={16} className="lucide lucide-phone text-accent shrink-0" />
                <a href="http://wa.me/556696555500" className="hover:text-accent transition-colors">
                  (66) 9 9655-5500
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={16} className="lucide lucide-mail text-accent shrink-0" />
                <a
                  href="mailto:centralgaspva2@gmail.com"
                  className="hover:text-accent transition-colors break-all"
                >
                  centralgaspva2@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Clock size={16} className="lucide lucide-clock text-accent shrink-0" />
                <span>Todos os dias — 7h às 22h</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-white/40 text-xs">
            © 2026 Central Gás — Primavera do Leste, MT. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">Revenda de Gás e Água Mineral</p>
        </div>
      </div>
    </footer>
  );
}
