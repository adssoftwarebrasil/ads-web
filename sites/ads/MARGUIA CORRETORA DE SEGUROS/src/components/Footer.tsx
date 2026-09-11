import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Seguro de Vida',
  'Previdência Privada',
  'Consórcio',
  'Seguro Saúde',
  'Seguro Auto',
  'Seguro Residencial',
  'Seguro Empresarial',
  'Seguro Viagem',
];

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/marguia_corretoraa/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/marguiaseg', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/marguia-corretora-de-seguros/', label: 'LinkedIn' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(2,2,2)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/marguia%20corretora%20de%20seguros/img/logo-sem-fundo.webp"
              alt="Marguia Corretora de Seguros"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Corretora de seguros em Cuiabá há mais de 17 anos. Atendemos em todo o Brasil
              com as melhores seguradoras do mercado.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[rgb(77,175,215)]/20 border border-white/10 hover:border-[rgb(77,175,215)]/40 flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} className="text-white/60 hover:text-[rgb(77,175,215)]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="text-white/50 hover:text-[rgb(77,175,215)] text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">Nossos Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('#servicos')}
                    className="text-white/50 hover:text-[rgb(77,175,215)] text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="http://wa.me/556599183725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-[rgb(77,175,215)] transition-colors text-sm"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  (65) 9 9918-3725
                </a>
              </li>
              <li>
                <a
                  href="mailto:marguiaseg@terra.com.br"
                  className="flex items-start gap-3 text-white/50 hover:text-[rgb(77,175,215)] transition-colors text-sm"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  marguiaseg@terra.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[rgb(77,175,215)]" />
                <span>R. Comendador Henrique, 301 — Dom Aquino, Cuiabá - MT</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Marguia Corretora de Seguros. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            CNPJ registrado · SUSEP autorizada
          </p>
        </div>
      </div>
    </footer>
  );
}
