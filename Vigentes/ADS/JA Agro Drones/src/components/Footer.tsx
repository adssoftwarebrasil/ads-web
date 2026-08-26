import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection } from '../lib/scroll';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

const serviceLinks = [
  { label: 'Pulverização Aérea', link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20em%20Pulveriza%C3%A7%C3%A3o%20A%C3%A9rea.' },
  { label: 'Mapeamento Aéreo', link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20em%20Mapeamento%20A%C3%A9reo.' },
  { label: 'Adubação Aérea', link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20em%20Aduba%C3%A7%C3%A3o%20A%C3%A9rea.' },
  { label: 'Vídeos Comerciais', link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20em%20V%C3%ADdeos%20Comerciais.' },
  { label: 'Fotos Aéreas', link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20em%20Fotos%20A%C3%A9reas.' },
  { label: 'Chá Revelação', link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20em%20Ch%C3%A1%20Revela%C3%A7%C3%A3o.' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio">
              <img
                src="https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/img/logo-sem-fundo.webp"
                alt="JA Agro Drones"
                className="h-12 w-auto object-contain mb-4"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Tecnologia de drones a serviço do agronegócio e da captura de imagens. Precisão, eficiência e inovação em
              cada operação.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/j.a.agrodrones/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#dc2743] flex items-center justify-center transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram
                  className="lucide lucide-instagram text-white/60 group-hover:text-white transition-colors"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://www.facebook.com/p/JA-Agro-Drones-Pulveriza%C3%A7%C3%A3o-Inteligente-61559199698181/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-[#1877f2] flex items-center justify-center transition-all duration-200 group"
                aria-label="Facebook"
              >
                <Facebook
                  className="lucide lucide-facebook text-white/60 group-hover:text-white transition-colors"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="http://wa.me/556295016058"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-[#25d366] flex items-center justify-center transition-all duration-200 group"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-white/60 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/50 hover:text-[#6ab534] text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-[#6ab534] text-sm transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contato</h4>
            <div className="space-y-3">
              <a
                href="http://wa.me/556295016058"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-[#6ab534] text-sm transition-colors"
              >
                <Phone className="lucide lucide-phone flex-shrink-0" width={14} height={14} />
                (62) 99501-6058
              </a>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="lucide lucide-map-pin flex-shrink-0 mt-0.5 text-[#6ab534]" width={14} height={14} />
                <span>Av. Milão, 771 – Jardim Europa, Goiânia – GO</span>
              </div>
              <div className="text-white/30 text-xs mt-2">CNPJ: 56.984.425/0001-37</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.06] px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <span>© 2026 JA Agro Drones e Serviços Ltda. Todos os direitos reservados.</span>
          <span>Goiânia, GO — Atendemos o Brasil inteiro</span>
        </div>
      </div>
    </footer>
  );
}
