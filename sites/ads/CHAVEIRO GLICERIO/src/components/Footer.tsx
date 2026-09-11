import { Phone, MapPin, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/chaveirogliceriocampinas/',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/chaveiroglicerio',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCZs-jJHploZMclqGM0KGjBw',
  },
];

const SERVICE_LINKS = [
  'Chave Automotiva',
  'Fechadura Digital',
  'Cópia de Chaves',
  'Abertura de Cofre',
  'Abertura de Portas',
  'Controle de Portão',
  'Emergência 24h',
  'Carimbos',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/logo-sem-fundo.webp"
              alt="Chaveiro Glicério"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-brand-white/50 text-sm leading-relaxed mb-5">
              Tradição e qualidade em segurança desde 1994. Atendimento especializado em Campinas - SP.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-brand-gray-dark border border-white/8 flex items-center justify-center text-brand-white/50 hover:text-brand-yellow hover:border-brand-yellow/40 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-brand-white font-bold text-sm uppercase tracking-widest mb-4">
              Serviços
            </h4>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="http://wa.me/5519988923111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-white/45 hover:text-brand-yellow text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white font-bold text-sm uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {[
                ['Início', '#inicio'],
                ['Serviços', '#servicos'],
                ['Sobre', '#sobre'],
                ['Avaliações', '#avaliacoes'],
                ['Contato', '#contato'],
              ].map(([label, href]) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-brand-white/45 hover:text-brand-yellow text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-white font-bold text-sm uppercase tracking-widest mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+5519988923111"
                className="flex items-start gap-2.5 group"
              >
                <Phone size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-brand-white/55 group-hover:text-brand-yellow text-sm transition-colors">
                  (19) 9 8892-3111
                </span>
              </a>
              <a
                href="mailto:atendimento@chaveiroglicerio.com.br"
                className="flex items-start gap-2.5 group"
              >
                <Mail size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-brand-white/55 group-hover:text-brand-yellow text-sm transition-colors break-all">
                  atendimento@chaveiroglicerio.com.br
                </span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-brand-white/55 text-sm">
                  Av. Francisco Glicério, 1744<br />
                  Centro, Campinas - SP
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <div className="text-brand-white/55 text-sm">
                  <p>Seg–Sex: 08h às 18h</p>
                  <p>Sábado: 08h às 12h</p>
                  <p className="text-brand-yellow">Emergência: 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Chaveiro Glicério — CNPJ registrado. Todos os direitos reservados.
          </p>
          <p className="text-brand-white/20 text-xs">
            Campinas — SP — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
