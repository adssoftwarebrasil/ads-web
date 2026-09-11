import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL, NAV_LINKS, scrollToId } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

const footerServices = [
  'Diagnóstico Eletrônico',
  'Reparo de Bombas Injetoras',
  'Bicos Injetores',
  'Bombas de Alta Pressão',
  'Falhas Eletrônicas',
  'Manutenção Preventiva',
];

export default function Footer() {
  return (
    <footer className="bg-brand-darkDeep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="MTTORK"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Especialistas em sistemas de injeção eletrônica diesel em Rondonópolis-MT. Diagnóstico preciso,
              equipe qualificada, atendimento transparente.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mttork_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-brand-red rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram " width={17} height={17} />
              </a>
              <a
                href="https://www.facebook.com/sistemadeinjecaodiesel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-brand-red rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook " width={17} height={17} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">Navegação</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">Serviços</h4>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToId('servicos')}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">Contato</h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 items-start">
                <MapPin
                  className="lucide lucide-map-pin text-brand-light flex-shrink-0 mt-0.5"
                  width={15}
                  height={15}
                />
                <span className="text-white/50 text-sm leading-relaxed">
                  Av. Pedro Miguel dos Santos Pisa Quente, 353 — Vila Rica, Rondonópolis-MT
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone
                  className="lucide lucide-phone text-brand-light flex-shrink-0"
                  width={15}
                  height={15}
                />
                <a href={WHATSAPP_URL} className="text-white/50 hover:text-white text-sm transition-colors">
                  +55 (66) 99242-6961
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="lucide lucide-mail text-brand-light flex-shrink-0" width={15} height={15} />
                <a
                  href="mailto:mttork.adm@gmail.com"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  mttork.adm@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock
                  className="lucide lucide-clock text-brand-light flex-shrink-0 mt-0.5"
                  width={15}
                  height={15}
                />
                <div className="text-white/50 text-sm leading-relaxed">
                  <p>Seg–Sex: 07:00–11:00 | 13:00–17:00</p>
                  <p>Sábado: 07:00–11:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center">
            © 2026 MTTORK Sistemas de Injeção Diesel. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">CNPJ: Rondonópolis – MT</p>
        </div>
      </div>
    </footer>
  );
}
