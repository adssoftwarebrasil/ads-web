import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_BASE, scrollToId } from '../hooks/useInView';

const LOGO =
  'https://storage.lucasmendes.dev/site-sp/mecanica%20cordeiro/att/logo-att.webp';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Revisão Completa',
  'Troca de Óleo',
  'Freios',
  'Embreagem',
  'Suspensão',
  'Injeção Eletrônica',
  'Retífica de Motor',
  'Diesel & Utilitários',
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1b17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={LOGO}
              alt="Mecânica Cordeiro"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Nova referência em mecânica em Sinop – MT. Qualidade, honestidade e
              serviço bem feito de verdade.
            </p>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1da855] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-white/60 text-sm hover:text-[#E32626] transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-5">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-white/60 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="text-[#E32626] flex-shrink-0 mt-0.5"
                />
                <span className="text-white/60 text-sm leading-relaxed">
                  Rua Ema Kunch, 167
                  <br />
                  Jardim Safira, Sinop – MT
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[#E32626] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5566996293425"
                  className="text-white/60 text-sm hover:text-[#E32626] transition-colors"
                >
                  (66) 99629-3425
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-[#E32626] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:Nasimmascena2@gmail.com"
                  className="text-white/60 text-sm hover:text-[#E32626] transition-colors break-all"
                >
                  Nasimmascena2@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-[#E32626] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Seg.–Sex.:
                  <br />
                  07:30–11:30 | 13:30–18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Mecânica Cordeiro — Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">Sinop – MT, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
