import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#equipamentos', label: 'Equipamentos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const equipmentLinks = [
  'Betoneiras',
  'Andaimes',
  'Compactadores',
  'Marteletes',
  'Lixadeira Girafa',
  'Escoras',
];

const waHref = (name: string) =>
  `http://wa.me/556699111966?text=${encodeURIComponent(`Olá! Gostaria de alugar: ${name}`)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-orange-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/maqnop/img/logo-principal.webp"
              alt="MAQNOP"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-orange-100 text-sm leading-relaxed mt-4 max-w-xs">
              Empresa especializada em locação de equipamentos para a construção civil em Sinop e região, com foco em agilidade e qualidade.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/maqnop_locadora/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="http://wa.me/556699111966"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-orange-100 hover:text-brand-blue text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5">Equipamentos</h4>
            <ul className="space-y-3">
              {equipmentLinks.map((label) => (
                <li key={label}>
                  <a
                    href={waHref(label)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-100 hover:text-brand-blue text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-orange-100 text-sm">Av. Joaquim Socreppa, 964 - Jardim Celeste, Sinop - MT</span>
              </li>
              <li>
                <a href="tel:+5566999111966" className="flex items-center gap-3 text-orange-100 hover:text-brand-blue text-sm transition-colors">
                  <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  (66) 99911-1966
                </a>
              </li>
              <li>
                <a href="mailto:maqnoplocadora@gmail.com" className="flex items-center gap-3 text-orange-100 hover:text-brand-blue text-sm transition-colors">
                  <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  maqnoplocadora@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <div className="text-orange-100 text-sm">
                  <div>Seg-Sex: 07:00–11:00 e 13:00–17:30</div>
                  <div>Sábado: 07:00–11:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-orange-200 text-sm">© 2026 MAQNOP - Aluguel de Equipamentos. Todos os direitos reservados.</p>
          <p className="text-orange-300 text-xs">Sinop - MT | CEP: 78556-630</p>
        </div>
      </div>
    </footer>
  );
}
