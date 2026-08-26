import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import WhatsAppIcon from './WhatsAppIcon';

const servicesLinks = [
  'Projetos de Engenharia',
  'Projetos de Arquitetura',
  'Laudos e Vistorias',
  'Avaliação de Imóveis',
  'Regularização Imobiliária',
  'Levantamento Topográfico',
  'Construtora',
  'Gestão de Obras',
];

const cities = [
  'Campinorte',
  'Alto Horizonte',
  'Nova Iguaçu de Goiás',
  'Mara Rosa',
  'Uruaçu',
  'Niquelândia',
  'Barro Alto',
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-pr-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pr-engenharia/img/logo-letra-bege-sem-fundo.webp"
              alt="PR Engenharia e Arquitetura"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed text-pr-grey mb-5">
              Fundada em 2010, somos referência em engenharia, arquitetura e construção no norte goiano. Excelência
              técnica a serviço dos seus sonhos.
            </p>
            <a
              href="https://www.instagram.com/pr_projetos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pr-rose hover:text-white transition-colors text-sm"
            >
              <InstagramIcon width={16} height={16} />
              @pr_projetos
            </a>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Serviços</h4>
            <ul className="space-y-2">
              {servicesLinks.map((service) => (
                <li key={service}>
                  <a href="#servicos" className="text-pr-grey text-xs hover:text-pr-rose transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Área de Atuação</h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city} className="text-pr-grey text-xs flex items-center gap-1.5">
                  <MapPin
                    width={10}
                    height={10}
                    strokeWidth={2}
                    className="lucide lucide-map-pin text-pr-rose flex-shrink-0"
                  />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Phone
                  width={13}
                  height={13}
                  strokeWidth={2}
                  className="lucide lucide-phone text-pr-rose mt-0.5 flex-shrink-0"
                />
                <a href="tel:+556284826969" className="text-pr-grey text-xs hover:text-white transition-colors">
                  (62) 9 8482-6969
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  width={13}
                  height={13}
                  strokeWidth={2}
                  className="lucide lucide-mail text-pr-rose mt-0.5 flex-shrink-0"
                />
                <a
                  href="mailto:eng.patriciarv@gmail.com"
                  className="text-pr-grey text-xs hover:text-white transition-colors"
                >
                  eng.patriciarv@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  width={13}
                  height={13}
                  strokeWidth={2}
                  className="lucide lucide-map-pin text-pr-rose mt-0.5 flex-shrink-0"
                />
                <span className="text-pr-grey text-xs">R. Brasil, 258 · Campinorte – GO</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  width={13}
                  height={13}
                  strokeWidth={2}
                  className="lucide lucide-clock text-pr-rose mt-0.5 flex-shrink-0"
                />
                <span className="text-pr-grey text-xs">Seg–Sex: 07:30–17:00</span>
              </li>
            </ul>
            <a
              href="http://wa.me/556284826969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-[#25D366] text-white text-xs font-medium px-4 py-2.5 hover:bg-[#128C7E] transition-colors"
            >
              <WhatsAppIcon width={14} height={14} />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-pr-grey text-xs">© 2026 PR Engenharia e Arquitetura. Todos os direitos reservados.</p>
          <p className="text-pr-grey text-xs">CREA/CAU · Campinorte – Goiás – Brasil</p>
        </div>
      </div>
    </footer>
  );
}
