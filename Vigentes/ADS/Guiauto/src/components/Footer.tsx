import { Wrench, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_URL_PLAIN } from '../constants';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const serviceList = [
  'Injeção Eletrônica',
  'Reparos em Motores',
  'Troca de Freios',
  'Serviços de Reboque',
  'Funilaria e Pintura',
];

export default function Footer() {
  return (
    <footer className="bg-[#00335F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-8 h-8 text-[#D7282A]" />
              <div>
                <h3 className="text-xl font-bold">Guiauto</h3>
                <p className="text-[#2BA2CC] text-sm">Serviços e Peças</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A Guiauto começou como uma pequena oficina mecânica no quintal da casa de seu fundador, Sr. José de
              Oliveira Aguiar, e, desde então, passou por gerações. Com mais de 44 anos de atuação em Sobral e região, é
              uma das oficinas mais experientes e respeitadas do setor automotivo, oferecendo serviços de mecânica em
              geral, funilaria, pintura e muito mais. A excelência no atendimento e na qualidade dos serviços são os
              diferenciais que destacam a Guiauto no mercado.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#2BA2CC]">Menu</h4>
            <ul className="space-y-3">
              {menuLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-300 hover:text-[#2BA2CC] transition-colors duration-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#2BA2CC]">Serviços</h4>
            <ul className="space-y-3">
              {serviceList.map((s) => (
                <li key={s} className="text-gray-300">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#2BA2CC]">Contato</h4>
            <div className="space-y-4">
              <a
                href={WHATSAPP_URL_PLAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#2BA2CC] transition-colors duration-300"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(88) 99647-1212</span>
              </a>
              <a
                href="mailto:guiauto30horas@hotmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#2BA2CC] transition-colors duration-300"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>guiauto30horas@hotmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>
                  Rua Sousa Aguiar, Nº 66
                  <br />
                  Cidade Gerardo Cristino de Menezes
                  <br />
                  Sobral-CE – CEP: 62.051-420
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400">
            Copyright © 2026 Guiauto Serviços e Peças Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
