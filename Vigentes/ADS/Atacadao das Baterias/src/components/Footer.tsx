import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL, NAV_ITEMS, scrollToSection } from '../constants';

const MAPS_URL =
  'https://maps.google.com/?q=R.+João+Bim,+1027+-+Jardim+Paulistano,+Ribeirão+Preto+-+SP';

const servicos = [
  'Suporte Técnico',
  'Testes de Baterias',
  'Instalação de Baterias',
  'Venda de Baterias',
  'Assistência 24h',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src={LOGO_URL}
              alt="Atacadão das Baterias"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Com mais de 40 anos de experiência, somos referência em baterias automotivas em Ribeirão
              Preto. Qualidade, confiança e atendimento 24 horas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/atacadao_das_baterias/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[rgb(251,35,51)] transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/atacadaodasbateriass/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[rgb(251,35,51)] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={20} className="lucide lucide-facebook " />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-[rgb(251,35,51)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {servicos.map((s) => (
                <li key={s} className="text-gray-300">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-[rgb(251,35,51)] transition-colors group"
                >
                  <Phone size={20} className="lucide lucide-phone flex-shrink-0 mt-1" />
                  <div>
                    <div>(16) 9294-3445</div>
                    <div>(16) 3618-7557</div>
                    <div>(16) 3624-7478</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@atacaodaobaterias.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-[rgb(251,35,51)] transition-colors"
                >
                  <Mail size={20} className="lucide lucide-mail flex-shrink-0 mt-1" />
                  <span>contato@atacaodaobaterias.com</span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-[rgb(251,35,51)] transition-colors"
                >
                  <MapPin size={20} className="lucide lucide-map-pin flex-shrink-0 mt-1" />
                  <div>
                    <div>R. João Bim, 1027</div>
                    <div>Jardim Paulistano</div>
                    <div>Ribeirão Preto - SP</div>
                    <div>14090-340</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
            <p>© 2026 Atacadão das Baterias. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
