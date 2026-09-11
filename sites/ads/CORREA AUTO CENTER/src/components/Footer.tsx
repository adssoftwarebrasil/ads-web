import { Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react';
import { scrollToSection } from '../utils';

const quickLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre Nós', id: 'about' },
  { label: 'Galeria', id: 'gallery' },
  { label: 'Avaliações', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

const servicesList = [
  'Mecânica Geral',
  'Alinhamento e Balanceamento',
  'Suspensão e Freios',
  'Injeção Eletrônica',
  'Diagnóstico com Scanner',
  'Troca de Óleo',
  'Retífica de Motor',
  'Serviço de Guincho',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Flogo-sem-fundo.webp"
              alt="Correa Auto Center"
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Sua oficina de confiança em Sinop-MT. Qualidade, tecnologia e atendimento
              profissional.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/correa_auto_center/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(207,30,37)] p-3 rounded-lg hover:bg-[rgb(187,20,27)] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(207,30,37)]">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(207,30,37)]">Nossos Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              {servicesList.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(207,30,37)]">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(207,30,37)] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Av. dos Pinheiros, 2221A
                  <br />
                  Jardim das Violetas
                  <br />
                  Sinop - MT, 78552-214
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[rgb(207,30,37)] flex-shrink-0 mt-1" />
                <a
                  href="http://wa.me/556699535234"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  (66) 99953-5234
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[rgb(207,30,37)] flex-shrink-0 mt-1" />
                <span className="text-gray-400">Seg-Sex: 7h-11:30 | 13h-17:30</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[rgb(207,30,37)] flex-shrink-0 mt-1" />
                <a
                  href="mailto:santoscorreanarcizo@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 break-all"
                >
                  santoscorreanarcizo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>©2026 Correa Auto Center. Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
