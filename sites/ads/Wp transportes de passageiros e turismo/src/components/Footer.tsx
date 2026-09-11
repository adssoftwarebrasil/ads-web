import { Instagram, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const services = [
  'Fretamento Empresarial',
  'Viagens e Turismo',
  'Transporte Escolar',
  'Aluguel de Ônibus',
  'Receptivos',
  'Translados',
];

const quickLinks = [
  { href: '#home', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#frota', label: 'Nossa Frota' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(36,31,33)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/wp%20transportes/img/logo-sem-fundo.png"
              alt="WP Transportes"
              className="h-12 mb-6"
            />
            <p className="text-white/70 mb-6 leading-relaxed">
              Transporte de passageiros em Sergipe desde 2022. Segurança, conforto e pontualidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/wptransportes.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(245,131,31)] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="http://wa.me/557981183939"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(245,131,31)] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="https://wa.me/5579981183939"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[rgb(245,131,31)] hover:underline transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[rgb(245,131,31)] hover:underline transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/5579981183939?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[rgb(245,131,31)] hover:underline transition-colors"
                >
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Entre em Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Rua+Belém+128+Aracaju+SE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-white/70 hover:text-[rgb(245,131,31)] transition-colors group"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div>Rua Belém, 128</div>
                    <div>Industrial, Aracaju - SE</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5579981183939"
                  className="flex items-center space-x-3 text-white/70 hover:text-[rgb(245,131,31)] transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>(79) 98118-3939</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:wptransportes.se@gmail.com"
                  className="flex items-center space-x-3 text-white/70 hover:text-[rgb(245,131,31)] transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">wptransportes.se@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>24 horas por dia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10">
          <div className="text-center text-white/70 text-sm">
            <p>© 2026 WP Transportes. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
