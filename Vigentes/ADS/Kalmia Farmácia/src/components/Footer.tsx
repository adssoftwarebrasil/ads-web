import { Instagram, Facebook, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Manipulação para humanos',
  'Manipulação veterinária',
  'Dermocosméticos',
  'Fitoterápicos',
  'Suplementos',
  'Homeopatia e florais',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/img/logo-sem-fundo.webp"
              alt="Kalmia Farmácia de Manipulação"
              className="h-16 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Sua saúde é a nossa melhor fórmula. Desde 2004 cuidando de você com excelência, ética e
              responsabilidade ambiental.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/kalmiafarmacia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} className="lucide lucide-instagram" />
              </a>
              <a
                href="https://www.facebook.com/farmaciakalmia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} className="lucide lucide-facebook" />
              </a>
              <a
                href="http://wa.me/5516991594153"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-base mb-5">Links rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-brand-mint text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-brand-mint rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-5">Nossos serviços</h4>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-brand-mint text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-brand-mint rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-5">Informações</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="lucide lucide-map-pin text-brand-mint mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Av. Dr. Carlos Botelho, 2471 – Centro, São Carlos – SP
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="lucide lucide-phone text-brand-mint flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">(16) 3372-8889</p>
                  <p className="text-gray-400 text-sm">(16) 99159-4153</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Clock size={16} className="lucide lucide-clock text-brand-mint mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Seg–Sex: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </li>
              <li>
                <a
                  href="https://www.kalmiafarmacia.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-brand-mint text-sm hover:underline"
                >
                  <ExternalLink size={14} className="lucide lucide-external-link" />
                  kalmiafarmacia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center">
              © 2026 Kalmia Farmácia de Manipulação São Carlos LTDA ME — CNPJ 05.529.662/0001-77
            </p>
            <p className="text-gray-600 text-xs">Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
