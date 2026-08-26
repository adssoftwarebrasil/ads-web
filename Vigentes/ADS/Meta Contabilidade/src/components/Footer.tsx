import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { NAV_ITEMS, FOOTER_SERVICES, PHONE, EMAIL, TEL, LOGO } from '../data';
import { scrollToId } from '../hooks';

export default function Footer() {
  return (
    <footer style={{ background: 'rgb(50, 18, 58)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={LOGO}
              alt="Meta Contabilidade"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Contabilidade digital com atendimento humano e consultivo para o crescimento do seu
              negócio em Dourados/MS e região.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/metacontabilidadedigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-gray-400 hover:text-primary text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToId('servicos')}
                    className="text-gray-400 hover:text-primary text-sm transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={TEL}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  R. Aquidauana, 31<br />Jardim Caramuru<br />Dourados - MS
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Seg–Sex: 07:30–11:00<br />e 13:00–17:30
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 Meta Contabilidade LTDA. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs text-center">
            CRC MS 013818/O-9 — Adriana Oliveira Correa
          </p>
        </div>
      </div>
    </footer>
  );
}
