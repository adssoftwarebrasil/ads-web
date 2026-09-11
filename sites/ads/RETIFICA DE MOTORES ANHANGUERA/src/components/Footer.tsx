import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL, scrollToSection } from '../utils';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const servicesList = [
  'Retífica Linha Leve',
  'Retífica Linha Média',
  'Retífica Linha Pesada',
  'Centro Automotivo',
  'Manutenção Preventiva',
  'Diagnóstico de Motores',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src={LOGO_URL}
              alt="Anhanguera Retífica"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Referência em retífica de motores em Goiânia desde 2016. Qualidade, confiança e
              excelência em cada serviço prestado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/Retifica-Anhanguera-100064293330829/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(167,20,42)] p-3 rounded-lg transition-colors"
              >
                <Facebook width={20} height={20} />
              </a>
              <a
                href="https://www.instagram.com/retificaanhanguera"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(167,20,42)] p-3 rounded-lg transition-colors"
              >
                <Instagram width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[rgb(167,20,42)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              {servicesList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  width={20}
                  height={20}
                  className="flex-shrink-0 mt-1 text-[rgb(167,20,42)]"
                />
                <span className="text-gray-400 text-sm">
                  R. Cp 26, 46 - Quadra 24, Lote 03<br />
                  Res. Celina Park<br />
                  Goiânia - GO, 74373-240
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone
                  width={20}
                  height={20}
                  className="flex-shrink-0 mt-1 text-[rgb(167,20,42)]"
                />
                <div>
                  <a
                    href="tel:+556235584336"
                    className="text-gray-400 hover:text-[rgb(167,20,42)] transition-colors block text-sm"
                  >
                    (62) 3558-4336
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(167,20,42)] transition-colors text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock
                  width={20}
                  height={20}
                  className="flex-shrink-0 mt-1 text-[rgb(167,20,42)]"
                />
                <span className="text-gray-400 text-sm">
                  Seg - Sex: 7:30-11:30<br />
                  13:00-18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Anhanguera Retífica de Motores LTDA. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              CNPJ: 27.804.844/0001-41
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
