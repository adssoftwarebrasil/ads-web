import { Instagram, Facebook, Phone, Clock, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(5, 31, 52)' }}>
      <div className="py-14" style={{ borderTop: '1px solid rgba(70, 96, 117, 0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <a href="#inicio">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/logo-fundo-escuro-sem-fundo.webp"
                  alt="FAS Rastreamento Veicular"
                  className="h-12 w-auto mb-4"
                />
              </a>
              <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: 'rgb(112, 136, 160)' }}>
                Referência em rastreamento veicular em Mato Grosso e Mato Grosso do Sul desde 2013. Tecnologia avançada e suporte 24 horas para sua segurança.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/fasrastreamento/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="Instagram"
                  style={{ backgroundColor: 'rgba(70, 96, 117, 0.5)' }}
                >
                  <Instagram className="lucide lucide-instagram" width={18} height={18} style={{ color: 'rgb(203, 219, 233)' }} />
                </a>
                <a
                  href="https://www.facebook.com/fasrastreamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="Facebook"
                  style={{ backgroundColor: 'rgba(70, 96, 117, 0.5)' }}
                >
                  <Facebook className="lucide lucide-facebook" width={18} height={18} style={{ color: 'rgb(203, 219, 233)' }} />
                </a>
                <a
                  href="http://wa.me/556592264219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="WhatsApp"
                  style={{ backgroundColor: 'rgba(70, 96, 117, 0.5)' }}
                >
                  <WhatsAppIcon className="w-4 h-4" style={{ color: 'rgb(203, 219, 233)' }} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Navegação</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgb(112, 136, 160)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Phone
                    className="lucide lucide-phone flex-shrink-0 mt-0.5"
                    width={15}
                    height={15}
                    style={{ color: 'rgb(112, 136, 160)' }}
                  />
                  <a
                    href="http://wa.me/556592264219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgb(112, 136, 160)' }}
                  >
                    (65) 9 9226-4219
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock
                    className="lucide lucide-clock flex-shrink-0 mt-0.5"
                    width={15}
                    height={15}
                    style={{ color: 'rgb(112, 136, 160)' }}
                  />
                  <span className="text-sm" style={{ color: 'rgb(112, 136, 160)' }}>
                    24h por dia, todos os dias
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin
                    className="lucide lucide-map-pin flex-shrink-0 mt-0.5"
                    width={15}
                    height={15}
                    style={{ color: 'rgb(112, 136, 160)' }}
                  />
                  <span className="text-sm" style={{ color: 'rgb(112, 136, 160)' }}>
                    Av. Brasil, 31 - Tancredo Neves
                    <br />
                    Cuiabá - MT, 78053-540
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5" style={{ borderTop: '1px solid rgba(70, 96, 117, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgb(112, 136, 160)' }}>
            © 2026 FAS Consultoria, Projetos e Tecnologia LTDA. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgb(70, 96, 117)' }}>
            Cuiabá, MT — Atendimento em MT e MS
          </p>
        </div>
      </div>
    </footer>
  );
}
