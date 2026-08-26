import { Instagram, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK, LOGO_URL } from '../lib/constants';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Fisioterapia Ortopédica',
  'Pilates Clínico',
  'Terapia Manual',
  'Drenagem Linfática',
  'Treino Gestual',
  'Neo Pilates',
  'Dry Needling',
];

export default function Footer() {
  return (
    <footer className="bg-clinic-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Clínica Saúde Movimento"
              className="h-14 w-auto object-contain mb-4 brightness-200"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Fisioterapia e Pilates com excelência desde 2016. Cuidamos do seu movimento com
              dedicação e protocolos individualizados.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/clinica_saude_movimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-clinic-gold transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={16} height={16} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-clinic-gold transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-clinic-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Serviços</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="text-white/60 text-sm hover:text-clinic-gold transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  className="lucide lucide-phone text-clinic-gold flex-shrink-0 mt-0.5"
                  width={16}
                  height={16}
                />
                <div>
                  <a
                    href={PHONE_LINK}
                    className="text-white/80 text-sm hover:text-clinic-gold transition-colors"
                  >
                    (66) 9 9920-2262
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-clinic-gold flex-shrink-0 mt-0.5"
                  width={16}
                  height={16}
                />
                <div className="text-white/60 text-sm leading-relaxed">
                  Av. Mal. Rondon, 2339
                  <br />
                  Jardim dos Pioneiros
                  <br />
                  Rondonópolis - MT
                </div>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-clinic-gold hover:bg-clinic-gold-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Clínica Saúde Movimento. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs text-center sm:text-right">
            Av. Mal. Rondon, 2339 – Rondonópolis - MT
          </p>
        </div>
      </div>
    </footer>
  );
}
