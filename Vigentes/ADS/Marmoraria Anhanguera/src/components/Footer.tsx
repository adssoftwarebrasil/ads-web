import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { scrollToSection } from '../lib/whatsapp';

const quickLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

const servicesList = [
  'Bancadas de Mármore',
  'Bancadas de Granito',
  'Bancadas de Quartzo',
  'Pias e Lavabos',
  'Banheiros Completos',
  'Cozinhas Premium',
  'Escadas em Pedra',
  'Revestimentos',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Marmoraria <span className="text-amber-400">Anhanguera</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Especialistas em mármores, granitos e quartzos. Transformando ambientes com elegância e qualidade desde 2025.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <p className="text-sm">CNPJ: 60.172.920/0001-19</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              {servicesList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Contato</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Av. Anhanguera Nº 12077<br />Bairro Ipiranga<br />Goiânia/GO - CEP: 74453-390
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:+556235973057" className="hover:text-amber-400 transition-colors block">
                    (62) 3597-3057
                  </a>
                  <a
                    href="https://wa.me/5562992861117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors block"
                  >
                    (62) 99286-1117
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Segunda a Sexta<br />07:30 às 17:30</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:contatomarmorariaanhanguera@gmail.com"
                  className="text-gray-400 text-sm hover:text-amber-400 transition-colors"
                >
                  contatomarmorariaanhanguera@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Marmoraria Anhanguera. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
