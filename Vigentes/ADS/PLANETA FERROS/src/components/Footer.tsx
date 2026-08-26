import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS,
  HOURS,
  INSTAGRAM_URL,
  WA_DEFAULT,
} from '../data';

const footerNav = [
  { label: 'Nossos Serviços', href: '#servicos' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Como Funciona', href: '#processo' },
  { label: 'Perguntas Frequentes', href: '#faq' },
  { label: 'Entre em Contato', href: '#contato' },
];

const areaEntrega = ['Luzimangues', 'Porto Nacional', 'Palmas', 'Paraíso do Tocantins'];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Coluna 1 */}
        <div>
          <img alt="Planeta Ferros" className="h-10 w-auto mb-4" src="/images/logo.png" />
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Distribuidor de telhas galvalume, perfis, metalon e chapas de aço em Luzimangues, TO.
            Atendemos construtoras, serralheiros e calheiros desde 2018.
          </p>
          <div className="flex gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-accent/10 text-gray-500 hover:text-accent flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2 - Contato */}
        <div>
          <h4 className="font-semibold text-primary text-xs uppercase tracking-widest mb-5">
            Contato
          </h4>
          <div className="space-y-3.5">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-accent transition-colors"
            >
              <Phone width={13} height={13} className="text-accent flex-shrink-0" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-accent transition-colors break-all"
            >
              <Mail width={13} height={13} className="text-accent flex-shrink-0" aria-hidden="true" />
              {EMAIL}
            </a>
            <div className="flex items-start gap-2.5 text-sm text-gray-600">
              <MapPin
                width={13}
                height={13}
                className="text-accent flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              {ADDRESS}
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600">
              <Clock width={13} height={13} className="text-accent flex-shrink-0" aria-hidden="true" />
              {HOURS}
            </div>
          </div>
        </div>

        {/* Coluna 3 - Navegação */}
        <div>
          <h4 className="font-semibold text-primary text-xs uppercase tracking-widest mb-5">
            Navegação
          </h4>
          <nav className="flex flex-col gap-2.5">
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Coluna 4 - Área de Entrega */}
        <div>
          <h4 className="font-semibold text-primary text-xs uppercase tracking-widest mb-5">
            Área de Entrega
          </h4>
          <div className="flex flex-col gap-2.5 mb-6">
            {areaEntrega.map((cidade) => (
              <div key={cidade} className="flex items-center gap-2.5 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                {cidade}
              </div>
            ))}
          </div>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center w-full bg-accent text-white font-semibold py-3 px-4 rounded-xl text-sm hover:bg-accent/90 transition-colors"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>

      <div className="border-t border-gray-100 py-5 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © 2026 Planeta Ferros. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400">Luzimangues, Porto Nacional — Tocantins</p>
        </div>
      </div>
    </footer>
  );
}
