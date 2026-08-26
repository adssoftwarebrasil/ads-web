import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_PLAIN, INSTAGRAM_URL, EMAIL, IMG, ADDRESS_LINES, scrollToSection } from '../constants';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const specialties = [
  'Consulta Online',
  'Consulta de Urgência',
  'Consulta de Rotina',
  'Orientação do Sono',
  'Introdução Alimentar',
  'Puericultura',
  'Pré-Natal',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(218,185,165)] via-[rgb(235,208,217)] to-[rgb(218,185,165)]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[rgb(218,185,165)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[rgb(235,208,217)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img
              src={IMG.logo}
              alt="Dra. Mariana Boccanera"
              className="h-16 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-gray-400 leading-relaxed font-light text-sm">
              Meu nome é Mariana Boccanera, sou pediatra e apaixonada por crianças. Acredito que cada
              criança é única, e minha missão é nutrir esperança e promover o bem-estar.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[rgb(218,185,165)] hover:text-white transition-all duration-300 text-gray-400 border border-white/10"
              >
                <Instagram width="20" height="20" className="lucide lucide-instagram " />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Navegação
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[rgb(218,185,165)] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[rgb(218,185,165)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(218,185,165)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Especialidades
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[rgb(218,185,165)] rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {specialties.map((item) => (
                <li
                  key={item}
                  className="hover:text-[rgb(218,185,165)] transition-colors cursor-default flex items-center gap-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Fale Conosco
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[rgb(218,185,165)] rounded-full"></span>
            </h3>
            <div className="space-y-5">
              <a
                href={WHATSAPP_PLAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[rgb(218,185,165)] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[rgb(218,185,165)]/20 transition-colors border border-white/5">
                  <Phone width="18" height="18" className="lucide lucide-phone " />
                </div>
                <span className="text-sm font-medium">(62) 99644-1515</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[rgb(218,185,165)] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[rgb(218,185,165)]/20 transition-colors border border-white/5">
                  <Mail width="18" height="18" className="lucide lucide-mail " />
                </div>
                <span className="text-sm break-all">{EMAIL}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[rgb(218,185,165)]/20 transition-colors border border-white/5 mt-1">
                  <MapPin width="18" height="18" className="lucide lucide-map-pin " />
                </div>
                <div className="text-sm">
                  {ADDRESS_LINES.map((line, i) => (
                    <p
                      key={line}
                      className={`group-hover:text-gray-300 transition-colors${i < ADDRESS_LINES.length - 1 ? ' mb-1' : ''}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright © 2025 Dra. Mariana Boccanera. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
