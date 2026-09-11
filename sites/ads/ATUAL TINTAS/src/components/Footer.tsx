import { Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Pintura Residencial',
  'Pintura Comercial',
  'Pintura Industrial',
  'Revestimento Texturizado',
  'Tintas Acrílicas',
  'Esmalte Sintético',
  'Impermeabilizantes',
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(2, 2, 2)' }}>
      <div className="border-t border-white/5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#inicio">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/atual%20tintas/img/logo-sem-fundo.webp"
                  alt="Atual Tintas"
                  className="h-12 w-auto object-contain mb-4"
                />
              </a>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Nascida da Linkoski Pinturas, a Atual Tintas reúne desde 2009 mão de obra
                especializada e linha completa de tintas, vernizes e revestimentos — tudo em um só
                lugar, em Sinop-MT.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/atualtintassinop/?locale=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                >
                  <Facebook className="lucide lucide-facebook text-white/60" width={16} height={16} />
                </a>
                <a
                  href="http://wa.me/5566996839888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="WhatsApp"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current text-white/60" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                Navegação
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-brand-green text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                Serviços
              </h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s}>
                    <span className="text-white/50 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                Contato
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="lucide lucide-map-pin flex-shrink-0 mt-0.5"
                    width={15}
                    height={15}
                    style={{ color: 'rgb(244, 60, 42)' }}
                  />
                  <p className="text-white/50 text-sm leading-relaxed">
                    Av. André Antônio Maggi, 6256
                    <br />
                    Jd. das Violetas — Sinop/MT
                    <br />
                    CEP: 78552-271
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    className="lucide lucide-phone flex-shrink-0"
                    width={15}
                    height={15}
                    style={{ color: 'rgb(164, 209, 58)' }}
                  />
                  <a
                    href="tel:+5566996839888"
                    className="text-white/50 hover:text-brand-green text-sm transition-colors duration-200"
                  >
                    (66) 9 9683-9888
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail
                    className="lucide lucide-mail flex-shrink-0"
                    width={15}
                    height={15}
                    style={{ color: 'rgb(124, 205, 223)' }}
                  />
                  <a
                    href="mailto:atualtintas_financeiro@hotmail.com"
                    className="text-white/50 hover:text-brand-blue text-sm transition-colors duration-200 break-all"
                  >
                    atualtintas_financeiro
                    <br />
                    @hotmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    className="lucide lucide-clock flex-shrink-0 mt-0.5"
                    width={15}
                    height={15}
                    style={{ color: 'rgb(217, 164, 0)' }}
                  />
                  <div>
                    <p className="text-white/50 text-sm">Seg–Sex: 7h–11h30 / 13h–17h30</p>
                    <p className="text-white/50 text-sm">Sáb: 7h–11h30</p>
                    <p className="text-sm" style={{ color: 'rgb(244, 60, 42)' }}>
                      Dom: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Atual Tintas. CNPJ: 10.920.220/0001-97. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Sinop — MT, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
