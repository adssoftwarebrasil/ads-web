import { MapPin, Phone, Clock, Heart } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=LOUISE%20POS%20OPERATORIO%2Flogo-louise.png&version_id=null';

const quickLinks = [
  { href: '#início', label: 'Início' },
  { href: '#serviços', label: 'Serviços' },
  { href: '#sobrenós', label: 'Sobre Nós' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

const servicesList = [
  'Cuidados Pós-Operatórios',
  'Alimentação Balanceada',
  'Hospedagem Confortável',
  'Cuidadores Especializados',
  'Técnicas de Enfermagem',
];

export default function Footer() {
  return (
    <footer className="bg-[#F4F4DB] text-[#282E6A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src={LOGO}
              alt="Louise Pós-Operatório"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-[#282E6A]/80 leading-relaxed">
              Cuidados pós-operatórios com excelência e humanização em Palmas -
              TO.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#624A7F]">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#282E6A]/80 hover:text-[#624A7F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#624A7F]">
              Nossos Serviços
            </h3>
            <ul className="space-y-2 text-[#282E6A]/80">
              {servicesList.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#624A7F]">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="flex-shrink-0 mt-1 text-[#624A7F]"
                />
                <p className="text-[#282E6A]/80 text-sm">
                  603 Sul, Alameda 09, 15
                  <br />
                  Palmas - TO, 77016-364
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-[#624A7F]" />
                <a
                  href="https://wa.me/5563992135677"
                  className="text-[#282E6A]/80 hover:text-[#624A7F] transition-colors text-sm"
                >
                  (63) 99213-5677
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="flex-shrink-0 text-[#624A7F]" />
                <p className="text-[#282E6A]/80 text-sm">24 horas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#282E6A]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#282E6A]/70 text-sm text-center md:text-left">
              © 2026 Louise Pós-Operatório Ltda. - CNPJ: 54.875.826/0001-23
            </p>
            <p className="text-[#282E6A]/70 text-sm flex items-center gap-2">
              Feito com{' '}
              <Heart size={16} className="text-red-500 fill-red-500" /> para sua
              recuperação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
