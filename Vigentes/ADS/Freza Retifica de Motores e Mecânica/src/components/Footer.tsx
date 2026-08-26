import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { label: 'Início', target: 'inicio' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Contato', target: 'contato' },
];

const services = [
  'Retifica de Motor',
  'Mecânica Geral',
  'Diagnóstico Eletrônico',
  'Usinagem de Precisão',
  'Troca de Óleo',
  'Arrefecimento',
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-brand-dark-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/freza%20retifica%20de%20motores/img/logo-sem-fundo.webp"
              alt="Freza Retifica de Motores"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Retifica de motores e mecânica geral em Sinop - MT. Qualidade, honestidade e compromisso com cada motor.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/frezaretifica/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={18} height={18} />
              </a>
              <a
                href="http://wa.me/5566996524291"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#25D366] flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-white/50 hover:text-brand-red text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/50 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin text-brand-red flex-shrink-0 mt-0.5" width={16} height={16} />
                <p className="text-white/50 text-sm leading-relaxed">
                  Av. dos Pinheiros, 169
                  <br />
                  St. Industrial Norte
                  <br />
                  Sinop – MT
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="lucide lucide-phone text-brand-red flex-shrink-0" width={16} height={16} />
                <a href="tel:+5566996524291" className="text-white/50 hover:text-white text-sm transition-colors">
                  (66) 99652-4291
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="lucide lucide-clock text-brand-red flex-shrink-0 mt-0.5" width={16} height={16} />
                <p className="text-white/50 text-sm leading-relaxed">
                  Seg a Sex
                  <br />
                  7:30–11:30 | 13:30–16:00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Freza Retifica de Motores e Mecânica. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Sinop – MT, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
