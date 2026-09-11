import { Phone, Mail, MapPin } from 'lucide-react';
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  LOGO_URL,
  scrollToSection,
} from '../constants';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const serviceItems = [
  'Corte Plasma',
  'Alambrados',
  'Telhas Térmicas',
  'Venda de Metalon',
  'Corte e Dobra de Chapas',
  'Estruturas Metálicas',
  'Telhas Galvalume',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src={LOGO_URL}
              alt="Casa do Serralheiro"
              className="h-16 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              A Casa do Serralheiro de Lavras é um legado que remonta a 1979, comprometida com
              qualidade e excelência.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {serviceItems.map((s) => (
                <li key={s}>
                  <span className="text-gray-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Rua Ruy Barbosa 650, Vila Murad, Lavras, MG</span>
                </div>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram w-5 h-5 flex-shrink-0"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span>{INSTAGRAM_HANDLE}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
}
