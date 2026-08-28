import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navLinks: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Área de Atendimento', id: 'atendimento' },
  { label: 'Contato', id: 'contato' },
];

const serviceLinks: string[] = [
  'Locação de Geradores',
  'Venda de Geradores',
  'Manutenção Preventiva',
  'Manutenção Corretiva',
  'Rejuvenescimento',
  'Subestações MT',
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="/logo.webp"
              alt="Sulltec Geradores"
              className="h-14 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Fundada em 2007, somos referência em venda, locação e manutenção
              de geradores em Santa Catarina. Autorizada MWM.
            </p>
            <a
              href="https://www.instagram.com/sulltecgeradores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
            >
              <Instagram
                width={18}
                height={18}
                className="lucide lucide-instagram text-brand-red"
              />
              Sulltec Geradores
            </a>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="text-white/60 hover:text-white text-sm transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone
                  width={15}
                  height={15}
                  className="lucide lucide-phone text-brand-red mt-0.5 shrink-0"
                />
                <a
                  href="tel:+5548991372058"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  (48) 99137-2058
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  width={15}
                  height={15}
                  className="lucide lucide-mail text-brand-red mt-0.5 shrink-0"
                />
                <a
                  href="mailto:comercial@sulltec.com.br"
                  className="text-white/60 hover:text-white text-sm transition-colors break-all"
                >
                  comercial@sulltec.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  width={15}
                  height={15}
                  className="lucide lucide-map-pin text-brand-red mt-0.5 shrink-0"
                />
                <span className="text-white/60 text-sm">
                  Rua Padova, 44, Pagani
                  <br />
                  Palhoça – SC
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  width={15}
                  height={15}
                  className="lucide lucide-clock text-brand-red mt-0.5 shrink-0"
                />
                <span className="text-white/60 text-sm">
                  Seg – Sex: 08h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            © 2026 Sulltec Geradores. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs">
            Autorizada MWM · CNPJ registrado · Palhoça – SC
          </p>
        </div>
      </div>
    </footer>
  );
}
