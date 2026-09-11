import { Facebook, Instagram, Youtube, Phone, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_URL = 'http://wa.me/5565981321662';
const MAPS_URL =
  'https://www.google.com/maps/place/RESTAURANTE+CHOPP%C3%83O+E+DELIVERY+%22Desde+1974%22';

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/ChoppaoRestaurante/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/choppaooficial/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/watch?v=-6ZF8w_Nvts', label: 'YouTube' },
];

const quickLinks = [
  { label: 'Cardápio Online', href: 'https://delivery.lukro.com.br/choppao/menu' },
  { label: 'Fazer Pedido', href: WHATSAPP_URL },
  { label: 'Site Oficial', href: 'https://www.choppao.com.br' },
  { label: 'Como Chegar', href: MAPS_URL },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/choppao%20restaurante%2Fimg%2Flogo-sem-fundo.webp"
              alt="CHOPPÃO"
              className="h-20 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Tradição e sabor desde 1974. O bar e restaurante mais antigo de Cuiabá.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[rgb(71,136,84)] rounded-full p-3 transition-all duration-300"
                    aria-label={s.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6536235005"
                  className="flex items-start gap-3 text-gray-300 hover:text-[rgb(71,136,84)] transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>(65) 3623-5005</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-[rgb(71,136,84)] transition-colors duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>(65) 98132-1662</span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-[rgb(71,136,84)] transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    Praça 8 de Abril, 44
                    <br />
                    Goiabeiras, Cuiabá - MT
                    <br />
                    CEP: 78045-480
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Horário</h3>
            <div className="flex items-start gap-3 text-gray-300 mb-4">
              <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white mb-2">Segunda a Domingo</p>
                <p>11:00 - 00:00</p>
                <p className="text-sm mt-2 text-gray-400">Aberto todos os dias da semana</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[rgb(71,136,84)] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2026 CHOPPÃO - MQ DE ANDRADE LTDA. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-center md:text-right">CNPJ: 02.884.121/0001-79</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
