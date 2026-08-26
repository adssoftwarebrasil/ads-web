import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { scrollToId, WHATSAPP_URL } from '../lib/scroll';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Projetos de Rede Elétrica',
  'Construção de Redes',
  'Energia Solar',
  'Alta e Baixa Tensão',
  'Consultoria Especializada',
  'Inspeção, Manutenção e Laudo Técnico',
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dr%20engenharia%20eletrica/img/logo-sem-fundo.webp"
              alt="Dr. Energia Elétrica"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-brand-white/55 text-sm leading-relaxed mb-6">
              Soluções em engenharia elétrica com excelência técnica, segurança e compromisso.
              Atendemos toda a região Norte de Mato Grosso.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/dr.energiasinop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-brand-red border border-white/10 hover:border-brand-red flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-brand-white/70" />
              </a>
              <a
                href="https://www.facebook.com/p/Dr-Energia-Sinop-100063635066838/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-brand-red border border-white/10 hover:border-brand-red flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-brand-white/70" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-brand-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-brand-white/55 hover:text-brand-red text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-brand-white font-semibold text-sm uppercase tracking-widest mb-5">
              Serviços
            </p>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-brand-white/55 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-brand-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contato
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-brand-white/55 text-sm">
                  R. das Orquídeas, 863 - St. Res. Sul, Sinop - MT, 78550-035
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-red flex-shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-white/55 hover:text-brand-red text-sm transition-colors"
                >
                  +55 (66) 9 9996-1097
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-brand-red mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@drenergiaeletrica.com.br"
                  className="text-brand-white/55 hover:text-brand-red text-sm transition-colors break-all"
                >
                  contato@drenergiaeletrica.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-brand-white/55 text-sm">
                  Seg. à Sex. 07:30 - 11:30 / 13:30 - 17:30
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-white/35 text-xs text-center sm:text-left">
            © 2026 Dr. Energia Elétrica. Todos os direitos reservados.
          </p>
          <p className="text-brand-white/25 text-xs">
            Sinop, Mato Grosso — Norte do Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
