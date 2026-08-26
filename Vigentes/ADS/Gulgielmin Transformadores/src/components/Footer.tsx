import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const LOGO_URL = 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/logos/logo-sem-fundo.png';

const QUICK_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES_LIST = [
  'Rebobinagem de Transformadores',
  'Manutenção Preventiva',
  'Reparação de Motores',
  'Locação de Guindaste',
  'Diagnóstico Técnico',
  'Instalações Elétricas',
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const headerHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')}>
              <img
                src={LOGO_URL}
                alt="Gulgielmin Transformadores"
                className="h-12 w-auto object-contain mb-4"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Especialistas em rebobinagem e manutenção de transformadores de média tensão
              há mais de 20 anos. Referência no Mato Grosso.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/gulgielmintransformadores/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-yellow hover:border-brand-yellow/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5565996248334"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-yellow hover:border-brand-yellow/40 transition-all"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/50 text-sm hover:text-brand-yellow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Nossos Serviços
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    onClick={(e) => handleNavClick(e, '#servicos')}
                    className="text-white/50 text-sm hover:text-brand-yellow transition-colors"
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
                <Phone size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+5565996248334"
                  className="text-white/50 text-sm hover:text-brand-yellow transition-colors"
                >
                  (65) 99624-8334
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:gulgielmintransformadores@gmail.com"
                  className="text-white/50 text-sm hover:text-brand-yellow transition-colors break-all"
                >
                  gulgielmintransformadores@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  R. dos Narcisos, 1655<br />
                  Lucas do Rio Verde — MT
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Eletrotécnica Gulgielmin. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Lucas do Rio Verde — Mato Grosso — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
