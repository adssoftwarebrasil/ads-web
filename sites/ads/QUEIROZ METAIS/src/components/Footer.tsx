import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { scrollToSection } from '../constants';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Calhas',
  'Ferro Redondo Mecânico',
  'Barra Chata',
  'Cantoneiras',
  'Metalon',
  'Chapa para Portão',
  'Perfil de Aço',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/queirozmetais%2Flogo.png"
              alt="Queiroz Metais"
              className="h-12 w-auto mb-4 bg-white p-2 rounded-lg"
            />
            <p className="text-gray-400 mb-4">
              A Queiroz Metais foi fundada em 2014, desde então se destacou pela qualidade e preço justo. Com uma ampla gama de produtos metálicos, oferecemos soluções para obras de todos os tamanhos.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-primary transition-colors"
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
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5562992978089"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                (62) 99297-8089
              </a>
              <a
                href="tel:6235938870"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                (62) 3593-8870
              </a>
              <a
                href="mailto:contato@queirozmetais.com.br"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                contato@queirozmetais.com.br
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>
                  Rua Trindade, nº 572, QD 02 LT 31 SALA GALPÃO, Residencial Pilar dos Sonhos, Goiânia/GO CEP 74.494-251
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/queirozmetais?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary p-2 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>Copyright © 2026 Queiroz Metais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
