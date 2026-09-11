import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { WHATSAPP, TEL, EMAIL, MAPS, INSTAGRAM, WhatsAppIcon, waLink } from './icons';
import { scrollToId } from '../useReveal';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/forte%20autoservice%20-%20ps%20auto%20service/img/logo-sem-fundo.webp';

const NAV = [
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const SERVICE_LINKS = [
  'Mecânica Geral',
  'Elétrica e Eletrônica',
  'Injeção Eletrônica',
  'Freio e Suspensão',
  'Motor e Câmbio',
  'Sistema ARLA 32',
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-red"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img src={LOGO} alt="PS Auto Service" className="h-16 w-auto object-contain mb-5" />
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Especialistas em caminhões há mais de 30 anos. Excelência técnica e atendimento personalizado em Recife, PE.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} className="lucide lucide-instagram" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Navegação</h4>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollToId(n.id)}
                    className="text-white/55 hover:text-white text-sm transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></span>
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Serviços</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href={waLink(`Olá! Gostaria de um orçamento para: ${s}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="lucide lucide-phone text-brand-red flex-shrink-0 mt-0.5" />
                <a href={TEL} className="text-white/55 hover:text-white text-sm transition-colors leading-snug">
                  (81) 9 9146-1355
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="lucide lucide-mail text-brand-red flex-shrink-0 mt-0.5" />
                <a href={EMAIL} className="text-white/55 hover:text-white text-sm transition-colors leading-snug">
                  financeiroforteautoservice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="lucide lucide-map-pin text-brand-red flex-shrink-0 mt-0.5" />
                <a href={MAPS} className="text-white/55 hover:text-white text-sm transition-colors leading-snug">
                  R. Imperial, 1955 — São José, Recife - PE
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="lucide lucide-clock text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-white/55 text-sm leading-snug">Seg–Sex: 08:00 às 17:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 PS Auto Service. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right">
            R. Imperial, 1955, São José — Recife, PE, 50090-000
          </p>
        </div>
      </div>
    </footer>
  );
}
