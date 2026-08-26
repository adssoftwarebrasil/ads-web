import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const socials = [
  { href: 'https://www.instagram.com/megaeventosmt/', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.facebook.com/MEGAEVENTOSBRASIL/', label: 'Facebook', Icon: Facebook },
  {
    href: 'https://www.linkedin.com/company/mega-eventos-divulga-es-e-promo-es-ltda/',
    label: 'LinkedIn',
    Icon: Linkedin,
  },
  { href: 'https://x.com/megaeventosmt', label: 'X (Twitter)', Icon: Twitter },
];

const services = [
  'Organização de Eventos',
  'Promotoras & Receptivo',
  'Panfletagem & Blitz',
  'Locação de Sonorização',
  'Logística & Merchandising',
  'Marketing Promocional',
];

const navigation = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#premiacoes', label: 'Premiações' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(53,53,53)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/logo-sem-fundo.webp"
              alt="Mega Eventos"
              className="h-14 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Há quase 30 anos promovendo, gerenciando e desenvolvendo projetos estratégicos em
              marketing promocional em Mato Grosso.
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[rgb(249,171,118)] flex items-center justify-center text-white transition-colors duration-200"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Serviços</div>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-white/55 text-sm hover:text-[rgb(249,171,118)] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Navegação</div>
            <ul className="space-y-3">
              {navigation.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/55 text-sm hover:text-[rgb(249,171,118)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contato</div>
            <div className="space-y-3 text-white/55 text-sm">
              <p>
                Rua 27, 222 - Boa Esperança
                <br />
                Cuiabá - MT, CEP 78.068-595
              </p>
              <a
                href="tel:+5565996292448"
                className="block hover:text-[rgb(249,171,118)] transition-colors"
              >
                (65) 99629-2448
              </a>
              <a
                href="mailto:atendimento@megaeventos.net"
                className="block hover:text-[rgb(249,171,118)] transition-colors"
              >
                atendimento@megaeventos.net
              </a>
              <p className="text-white/40">Das 8h às 18h — Seg a Sex</p>
            </div>
            <a
              href="http://wa.me/5565996292448"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 bg-[rgb(234,50,56)] hover:bg-[rgb(249,171,118)] text-white text-sm font-bold px-5 py-3 rounded-full transition-all duration-200 hover:scale-105 w-fit"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Mega Eventos — Organização de Eventos e Marketing Promocional. Todos os direitos
            reservados.
          </p>
          <p className="text-white/30 text-xs">Cuiabá - Mato Grosso</p>
        </div>
      </div>
    </footer>
  );
}
