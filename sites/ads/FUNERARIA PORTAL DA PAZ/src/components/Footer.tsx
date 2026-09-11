import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Frota', href: '#frota' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  'Translado Nacional',
  'Transporte Aéreo e Fluvial',
  'Tanatopraxia',
  'Capelas para Velório',
  'Urnas e Roupas',
  'Venda de Sepulturas',
  'Convênios Empresariais',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(2,12,4)] border-t border-[rgb(23,56,32)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/portal%20da%20paz/img/logo-sem-fundo.webp"
              alt="Funerária Portal da Paz"
              className="h-16 w-auto object-contain mb-5"
            />
            <p className="text-[rgb(146,171,185)] text-sm leading-relaxed mb-6">
              Desde 1996 cuidando das famílias de Ananindeua e de toda a região com humanidade,
              respeito e dedicação. Atendimento 24 horas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/funeraria.portaldapaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[rgb(23,56,32)] hover:bg-[rgb(55,104,68)] flex items-center justify-center text-[rgb(146,171,185)] hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="http://wa.me/5591981493608"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[rgb(23,56,32)] hover:bg-[rgb(55,104,68)] flex items-center justify-center text-[rgb(146,171,185)] hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[rgb(146,171,185)] hover:text-[rgb(202,183,144)] text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Serviços
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <span className="text-[rgb(146,171,185)] text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Phone size={16} className="text-[rgb(156,133,92)] mt-0.5 shrink-0" />
                <a href="tel:+559181493608" className="text-[rgb(146,171,185)] hover:text-white text-sm transition-colors">
                  (91) 98149-3608
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={16} className="text-[rgb(156,133,92)] mt-0.5 shrink-0" />
                <a href="mailto:portaldapaz@gmail.com" className="text-[rgb(146,171,185)] hover:text-white text-sm transition-colors break-all">
                  portaldapaz@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-[rgb(156,133,92)] mt-0.5 shrink-0" />
                <span className="text-[rgb(146,171,185)] text-sm leading-relaxed">
                  Rua Primeira, Q. 35, nº 02<br />Centro — Ananindeua, PA<br />CEP: 67000-000
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgb(23,56,32)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[rgb(98,108,73)] text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Funerária Portal da Paz. Todos os direitos reservados.
          </p>
          <p className="text-[rgb(98,108,73)] text-xs text-center sm:text-right">
            Ananindeua, Pará — Atendimento 24h
          </p>
        </div>
      </div>
    </footer>
  );
}
