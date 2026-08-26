import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const servicos = [
  'Contabilidade Geral',
  'Planejamento Tributário',
  'Abertura de Empresas',
  'Departamento Pessoal',
  'Contabilidade Rural',
  'Imposto de Renda',
  'Assessoria Fiscal',
  'Consultoria Contábil',
];

const areas = [
  'Primavera do Leste – MT',
  'Campo Verde – MT',
  'Poxoréu – MT',
  'Santo Antônio do Leste – MT',
  'Gaúcha do Norte – MT',
  'Todo o Brasil (Online)',
];

export default function Footer() {
  return (
    <footer className="bg-brand-burgundy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/assistec%20contabilidade/img/logo-sem-fundo.webp"
              alt="Assistec Contabilidade"
              className="h-14 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Escritório de contabilidade em Primavera do Leste – MT, com mais de 30 anos de experiência. Assessoria
              contábil completa para empresas, produtores rurais e profissionais autônomos.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/assistec_contabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-blue transition-colors duration-200 flex items-center justify-center"
              >
                <Instagram className="lucide lucide-instagram" width={17} height={17} strokeWidth={2} />
              </a>
              <a
                href="https://wa.me/5566999538963"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {servicos.map((item) => (
                <li key={item}>
                  <button className="text-white/50 hover:text-white text-sm transition-colors duration-200 text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Área de Atuação</h4>
            <ul className="space-y-2.5">
              {areas.map((item) => (
                <li key={item} className="text-white/50 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-blue rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin text-brand-blue mt-0.5 flex-shrink-0" width={16} height={16} strokeWidth={2} />
                <span className="text-white/50 text-sm leading-relaxed">
                  Av. Cuiabá, 155 – Primavera I<br />
                  Primavera do Leste – MT<br />
                  CEP 78850-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="lucide lucide-phone text-brand-blue flex-shrink-0" width={16} height={16} strokeWidth={2} />
                <a href="tel:+5566999538963" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                  (66) 9 9953-8963
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="lucide lucide-mail text-brand-blue flex-shrink-0" width={16} height={16} strokeWidth={2} />
                <a
                  href="mailto:fiscal.assistec@gmail.com"
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  fiscal.assistec@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="lucide lucide-clock text-brand-blue mt-0.5 flex-shrink-0" width={16} height={16} strokeWidth={2} />
                <span className="text-white/50 text-sm leading-relaxed">
                  Seg–Sex: 07h–11h<br />
                  e 13h–17h30
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Assistec Contabilidade. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right">
            Escritório de Contabilidade em Primavera do Leste – MT | CRC/MT
          </p>
        </div>
      </div>
    </footer>
  );
}
