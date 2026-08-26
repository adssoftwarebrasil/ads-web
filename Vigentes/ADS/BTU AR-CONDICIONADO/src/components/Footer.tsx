import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, LOGO_URL } from '../constants';

const servicos = [
  'Instalação de Split Hi-Wall',
  'Instalação de Cassete',
  'Instalação de Piso-Teto',
  'Manutenção Preventiva',
  'Limpeza e Higienização',
  'Conserto e Reparo',
  'Contratos Empresariais',
];

const marcas = ['Gree', 'Fujitsu', 'Elgin', 'TCL'];

const navegacao = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

const palavrasChave = [
  'Instalação de ar condicionado',
  'Manutenção de ar condicionado',
  'Limpeza de ar condicionado',
  'Conserto de ar condicionado',
  'Autorizada Gree',
  'Autorizada Fujitsu',
  'Autorizada Elgin',
  'Autorizada TCL',
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={LOGO_URL}
                alt="BTU Ar Condicionado"
                className="h-10 w-auto object-contain"
              />
              <span className="text-white font-bold text-lg">
                BTU <span className="text-secondary font-light">Ar Condicionado</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Especialistas em climatização desde 2013. Venda, instalação e manutenção de ar
              condicionado no DF e entorno.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Phone size={14} className="text-secondary" />
                {PHONE_DISPLAY}
              </a>
              <a
                href="mailto:btuarcondicionadodf@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors break-all"
              >
                <Mail size={14} className="text-secondary" />
                btuarcondicionadodf@gmail.com
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="text-secondary mt-0.5 shrink-0" />
                <span>Rua 115 QD 176 LT 17</span>
              </div>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <Clock size={14} className="text-secondary mt-0.5 shrink-0" />
                <span>Seg–Sex: 08h–12h / 14h–18h</span>
              </div>
            </div>
            <a
              href="https://www.instagram.com/btuarcondicionados"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-white/60 hover:text-white transition-colors text-sm"
            >
              <Instagram size={16} className="text-secondary" />
              @btuarcondicionados
            </a>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="flex flex-col gap-2">
              {servicos.map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Marcas Autorizadas
            </h4>
            <ul className="flex flex-col gap-2">
              {marcas.map((item) => (
                <li key={item}>
                  <span className="text-white/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mt-8 mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Palavras-chave
            </h4>
            <div className="flex flex-wrap gap-2">
              {palavrasChave.map((item) => (
                <span
                  key={item}
                  className="bg-white/5 text-white/40 text-xs px-3 py-1 rounded-full border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            © 2026 BTU Ar Condicionado — CNPJ 18.414.827/0001-07. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Valparaíso de Goiás · Cidade Ocidental · Novo Gama · Santa Maria · Gama · DF e entorno
          </p>
        </div>
      </div>
    </footer>
  );
}
