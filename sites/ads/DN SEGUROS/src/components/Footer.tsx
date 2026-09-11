import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const services = [
  'Seguro Automóvel',
  'Seguro de Vida',
  'Seguro Residencial',
  'Seguro Empresarial',
  'Seguro Viagem',
];

const company = [
  { label: 'Sobre a DN Seguros', href: '#sobre' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dn%20seguros/img/logo-sem-fundo.webp"
              alt="DN Seguros"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Corretora de seguros fundada em 2022, parte de um grupo com mais de 35 anos no mercado. Proteção
              de qualidade com preço justo para você e sua empresa.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              Atendimento Online Disponível
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Serviços</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Empresa</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+558430256322"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm group"
                >
                  <Phone
                    size={15}
                    className="lucide lucide-phone mt-0.5 flex-shrink-0 group-hover:text-brand-red transition-colors"
                  />
                  (84) 3025-6322
                </a>
              </li>
              <li>
                <a
                  href="http://wa.me/5584991089072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm group"
                >
                  <Phone
                    size={15}
                    className="lucide lucide-phone mt-0.5 flex-shrink-0 group-hover:text-brand-red transition-colors"
                  />
                  (84) 9 9108-9072
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial@dnseguros.com.br"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm group"
                >
                  <Mail
                    size={15}
                    className="lucide lucide-mail mt-0.5 flex-shrink-0 group-hover:text-brand-red transition-colors"
                  />
                  comercial@dnseguros.com.br
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin size={15} className="lucide lucide-map-pin mt-0.5 flex-shrink-0" />
                  Av. Ramualdo Galvão, 2109 SL 103<br />Lagoa Nova – Natal, RN<br />CEP 59056-165
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <Clock size={15} className="lucide lucide-clock mt-0.5 flex-shrink-0" />
                  Seg a Sex: 08:00 – 17:00
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2026 DN Seguros. Todos os direitos reservados.</p>
          <p>Corretora de Seguros</p>
        </div>
      </div>
    </footer>
  );
}
