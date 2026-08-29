import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const serviceItems = [
  'Reboque de Veículos',
  'Pane Mecânica/Elétrica',
  'Atendimento a Acidentes',
  'Remoção em Rodovias',
  'Transporte de Máquinas',
  'Emergências 24h',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/logo-sem-fundo.webp"
              alt="SS Moura Transportes"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Guincho e transporte veicular profissional em Arcos e região. Disponível 24 horas para quando você mais
              precisar.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/ss_transportes_e_servicos_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram width={17} height={17} strokeWidth={2} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://wa.me/553799568191"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  width={16}
                  height={16}
                  strokeWidth={1.8}
                  className="lucide lucide-map-pin text-brand-blue flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-400 text-sm leading-snug">R. Efraim Procópio, 197 — Arcos, MG</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  width={16}
                  height={16}
                  strokeWidth={1.8}
                  className="lucide lucide-clock text-brand-blue flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-400 text-sm leading-snug">Atendimento 24h · 7 dias por semana</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  width={16}
                  height={16}
                  strokeWidth={1.8}
                  className="lucide lucide-phone text-brand-blue flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-400 text-sm leading-snug">(37) 9956-8191</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">© 2026 SS Moura Transportes. Todos os direitos reservados.</p>
          <p className="text-gray-600 text-xs">Arcos, Minas Gerais — Atendimento 24h</p>
        </div>
      </div>
    </footer>
  );
}
