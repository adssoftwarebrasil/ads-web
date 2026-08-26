import { Instagram, Facebook, Phone, MapPin, Clock, Mail } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL } from '../constants';

const quickLinks = [
  { label: 'Início', target: 'inicio' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Sobre nós', target: 'sobre' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

const footerServices = [
  'Adesivos',
  'Lonas e Banners',
  'Fachadas Comerciais',
  'Letras Caixa e Luminosos',
  'Totem e Acrílico',
  'Envelopamento de Frotas',
  'Corte a Laser',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={LOGO_URL} alt="AL Personaliza" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Referência em comunicação visual em Sinop — MT. Transformamos marcas com criatividade,
              tecnologia e comprometimento desde 2010.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/alpersonaliza/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#FFC734] hover:text-[#102694] text-gray-400 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} strokeWidth={2} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/alpersonalizaoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#FFC734] hover:text-[#102694] text-gray-400 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook width={16} height={16} strokeWidth={2} className="lucide lucide-facebook " />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#FFC734] hover:text-[#102694] text-gray-400 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Phone width={16} height={16} strokeWidth={2} className="lucide lucide-phone " />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-gray-400 hover:text-[#FFC734] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Serviços</h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('servicos')}
                    className="text-gray-400 hover:text-[#FFC734] text-sm transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Contato</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin
                  width={16}
                  height={16}
                  strokeWidth={2}
                  className="lucide lucide-map-pin text-[#FFC734] flex-shrink-0 mt-0.5"
                />
                <p className="text-gray-400 text-sm leading-relaxed">
                  R. das Pitangueiras, 1303<br />
                  Setor Comercial, Sinop — MT
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Clock
                  width={16}
                  height={16}
                  strokeWidth={2}
                  className="lucide lucide-clock text-[#FFC734] flex-shrink-0 mt-0.5"
                />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Seg a Sex<br />
                  07:30–11:30 | 13:00–18:00
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail
                  width={16}
                  height={16}
                  strokeWidth={2}
                  className="lucide lucide-mail text-[#FFC734] flex-shrink-0"
                />
                <a
                  href="mailto:laercio@alpersonaliza.com.br"
                  className="text-gray-400 hover:text-[#FFC734] text-sm transition-colors break-all"
                >
                  laercio@alpersonaliza.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 AL Personaliza. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">Comunicação Visual em Sinop — MT</p>
        </div>
      </div>
    </footer>
  );
}
