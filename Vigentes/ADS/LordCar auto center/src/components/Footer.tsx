import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  'Mecânica Geral',
  'Alinhamento e Balanceamento',
  'Injeção Eletrônica',
  'Troca de Óleo',
  'Ar-Condicionado',
  'Suspensão e Freios',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-darkgray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/lord%20car%20auto%20center/img/logo-sem-fundo.webp"
              alt="Lord Car Auto Center"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Auto center em Sinop — MT. Qualidade, transparência e dedicação em cada serviço.
              Emerson e Cleiton, mais de 16 anos de experiência automotiva.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/lordcarsinop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-brand-yellow hover:text-brand-dark text-white rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61567916931141&locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-brand-yellow hover:text-brand-dark text-white rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Serviços
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-white/60 hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Av. dos Tarumãs, 3756<br />
                  Jardim Nações, Sinop - MT<br />
                  CEP: 78556-402
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-brand-yellow flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Seg–Sex: 7h–11h | 13h–18h
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-yellow flex-shrink-0" />
                <a
                  href="tel:+5566992327182"
                  className="text-white/60 hover:text-brand-yellow text-sm transition-colors"
                >
                  (66) 99232-7182
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-yellow flex-shrink-0" />
                <a
                  href="mailto:lordcarautocenter@gmail.com"
                  className="text-white/60 hover:text-brand-yellow text-sm transition-colors break-all"
                >
                  lordcarautocenter@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {year} Lord Car Auto Center. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Sinop e região — MT
          </p>
        </div>
      </div>
    </footer>
  );
}
