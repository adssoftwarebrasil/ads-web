import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY, BRANCHES } from '../data/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=soagricolas%2Flogo_fundo_branco_soagricolas%20(1).jpg&version_id=null"
              alt={COMPANY.name}
              className="h-16 md:h-20 w-auto rounded-md object-contain bg-white px-2 mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Há mais de 25 anos sendo a parceira de confiança do agronegócio em todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors duration-200 text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-colors duration-200 text-xs font-bold"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-widest uppercase">Navegação</h4>
            <ul className="space-y-3">
              {[
                ['Início', '#hero'],
                ['Quem Somos', '#sobre'],
                ['Produtos', '#produtos'],
                ['Nossas Unidades', '#unidades'],
                ['Contato', '#contato'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-widest uppercase">Unidades</h4>
            <ul className="space-y-4">
              {BRANCHES.map((b) => (
                <li key={b.name}>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-brand-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold leading-snug">{b.city.split(' - ')[0]}</p>
                      <a
                        href={`tel:${b.phone}`}
                        className="text-gray-400 hover:text-brand-orange text-xs transition-colors"
                      >
                        {b.phone}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-widest uppercase">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-orange mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Seg–Sex: 07h00 às 18h00
                    <br />
                    Sábado: 07h00 às 11h30
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-orange flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email.contact}`}
                  className="text-gray-400 hover:text-brand-orange text-xs transition-colors"
                >
                  {COMPANY.email.contact}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-orange flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email.jobs}`}
                  className="text-gray-400 hover:text-brand-orange text-xs transition-colors"
                >
                  {COMPANY.email.jobs}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-orange flex-shrink-0" />
                <a href="tel:6533822270" className="text-gray-400 hover:text-brand-orange text-xs transition-colors">
                  (65) 3382-2270
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {year} {COMPANY.fullName}. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">CNPJ: Só Agrícola — Campo Novo do Parecis, MT</p>
        </div>
      </div>
    </footer>
  );
}