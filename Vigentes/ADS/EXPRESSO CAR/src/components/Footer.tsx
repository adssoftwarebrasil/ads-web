import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_URL, EMAIL, scrollToSection } from '../lib/site';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Película de Proteção de Pintura',
  'Polimento de Vidro Automotivo',
  'Reparo Rápido de Amassados',
  'Polimento Técnico',
  'Serviços de Vitrificação',
  'Lavagem Técnica Profissional',
  'Serviços Adicionais',
  'Cuidados para Motos',
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/expressocarse/logo.png"
              alt="Expresso Car"
              className="h-12 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              A Expressocar é uma referência em Aracaju, com mais de 10 anos de experiência no
              mercado automotivo. Nossa missão é oferecer serviços de funilaria, pintura e estética
              automotiva com compromisso, rapidez e qualidade.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/expressocar_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram
                  className="lucide lucide-instagram text-white"
                  width={18}
                  height={18}
                />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5">Menu</h4>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Phone
                    className="lucide lucide-phone flex-shrink-0 mt-0.5"
                    width={16}
                    height={16}
                  />
                  (79) 99628-8567
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Mail
                    className="lucide lucide-mail flex-shrink-0 mt-0.5"
                    width={16}
                    height={16}
                  />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin
                  className="lucide lucide-map-pin flex-shrink-0 mt-0.5 text-red-600"
                  width={16}
                  height={16}
                />
                <span>Av. Dr. José da Silva Ribeiro Filho, 731 – América, Aracaju/SE</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs text-gray-600">
            Copyright © 2026 Expresso Car – Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  );
}
