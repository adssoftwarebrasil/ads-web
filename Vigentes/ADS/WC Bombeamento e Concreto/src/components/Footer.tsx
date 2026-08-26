import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Concreto Usinado',
  'Bombeamento de Concreto',
  'Concreto para Piso',
  'Concreto Sarrafeado',
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/wc-bombeamento-e-concreto/img/logo-sem-fundo.webp"
              alt="WC Concreto e Bombeamento"
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="text-sm text-brand-gray leading-relaxed">
              Concreto usinado e bombeamento de qualidade em Betim e região. Atendimento personalizado para
              obras residenciais e comerciais.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/w.cconcreto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center text-brand-gray hover:text-brand-orange hover:bg-brand-orange/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551479420629&mibextid=haYZDX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center text-brand-gray hover:text-brand-orange hover:bg-brand-orange/10 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-white mb-5 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-brand-gray hover:text-brand-orange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-white mb-5 uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-sm text-brand-gray hover:text-brand-orange transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-white mb-5 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <a href="tel:+553199292900" className="text-sm text-brand-gray hover:text-brand-white transition-colors">
                  (31) 9 9929-2900
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:wcbombeamento@gmail.com"
                  className="text-sm text-brand-gray hover:text-brand-white transition-colors break-all"
                >
                  wcbombeamento@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-gray">
                  R. Tavira, 54 — São João,
                  <br />
                  Betim - MG, 32655-616
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-gray">Seg–Sex: 07h às 17h</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-gray text-center sm:text-left">
            © 2026 WC Concreto &amp; Bombeamento. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-gray/50">Betim, Minas Gerais — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
