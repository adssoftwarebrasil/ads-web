import { Facebook, ArrowRight, Phone, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#services', label: 'Serviços' },
  { href: '#how-it-works', label: 'Como Funciona' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
];

const services = [
  'Instalação de Energia Solar',
  'Venda de Placas Solares',
  'Manutenção de Sistemas',
  'Projetos Personalizados',
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/raio-solar/img/logo-letra-branca-sem-fundo.webp"
              alt="Raio-Solar Energia Solar"
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Especialistas em energia solar fotovoltaica, oferecendo soluções completas para residências e empresas no
              Recôncavo Baiano.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/raiosolarsaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow/20 hover:text-brand-yellow transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook width={17} height={17} className="lucide lucide-facebook " />
              </a>
              <a
                href="http://wa.me/5575988443984"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow/20 hover:text-brand-yellow transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-brand-yellow text-sm flex items-center gap-1.5 transition-colors duration-200 group"
                  >
                    <ArrowRight
                      width={12}
                      height={12}
                      className="lucide lucide-arrow-right opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-white/55 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone width={15} height={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+5575988443984" className="text-white/55 hover:text-brand-yellow text-sm transition-colors">
                    (75) 9 8844-3984
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin width={15} height={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-white/55 text-sm leading-relaxed">
                  R. Armando Tavares, 36 – Centro
                  <br />
                  Santo Antônio de Jesus – BA
                  <br />
                  CEP 44571-017
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock width={15} height={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <div className="text-white/55 text-sm space-y-1">
                  <p>Seg–Sex: 08h às 17h30</p>
                  <p>Sábado: 08h às 12h</p>
                  <p>Domingo: Atendimento 24h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
          <p>© 2026 Raio-Solar Energia Solar. Todos os direitos reservados.</p>
          <p>Santo Antônio de Jesus – BA · Recôncavo Baiano</p>
        </div>
      </div>
    </footer>
  );
}
