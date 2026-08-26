import { Wrench, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection, scrollToTop } from '../constants';

const navItems = [
  { label: 'Início', action: () => scrollToTop() },
  { label: 'Serviços', action: () => scrollToSection('servicos') },
  { label: 'Sobre Nós', action: () => scrollToSection('sobre') },
  { label: 'Localização', action: () => scrollToSection('localizacao') },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">
                <Wrench width={18} height={18} className="lucide lucide-wrench text-white" />
              </div>
              <div>
                <span className="block font-display text-xl text-white tracking-wide">
                  ESLEI AUTO PEÇAS
                </span>
                <span className="text-xs text-brand-blue tracking-widest uppercase">
                  Oficina &amp; Serviços
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Tradição e confiança desde 2009 em Minaçu, Goiás. Mecânica completa, venda de peças e
              serviço de guincho para toda a região.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-brand-red/10 hover:bg-brand-red text-brand-red hover:text-white border border-brand-red/30 hover:border-brand-red text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            >
              <Phone width={14} height={14} className="lucide lucide-phone " />
              WhatsApp
            </a>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="text-gray-500 hover:text-gray-200 text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  width={15}
                  height={15}
                  className="lucide lucide-map-pin text-brand-red mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-500 text-sm leading-relaxed">
                  Av. Maranhão, Qd 13 A, Lote 10
                  <br />
                  Minaçu – GO
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  width={15}
                  height={15}
                  className="lucide lucide-phone text-brand-red flex-shrink-0"
                />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-200 text-sm transition-colors"
                >
                  +55 (62) 98553-8497
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  width={15}
                  height={15}
                  className="lucide lucide-mail text-brand-red flex-shrink-0"
                />
                <a
                  href="mailto:eslei@hotmail.com"
                  className="text-gray-500 hover:text-gray-200 text-sm transition-colors"
                >
                  eslei@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  width={15}
                  height={15}
                  className="lucide lucide-clock text-brand-red mt-0.5 flex-shrink-0"
                />
                <div className="text-gray-500 text-sm leading-relaxed">
                  Seg – Sex: 07h às 18h
                  <br />
                  Sáb: 07h às 12h
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center">
            © 2026 Eslei Auto Peças. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">Minaçu &amp; Alto Paraíso – Goiás</p>
        </div>
      </div>
    </footer>
  );
}
