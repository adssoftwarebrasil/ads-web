import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Nossa Frota', href: '#frota' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Pisos e Revestimentos Cerâmicos',
  'Chapas e Bobinas de Aço',
  'Ração e Grãos',
  'Pluma de Algodão',
  'Equipamentos Industriais',
  'Produtos em Geral',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/madre%20transportes%20ltda/img/logo-letra-branca-sem-fundo.webp"
              alt="Madre Transportes"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Transporte rodoviário de cargas com excelência, comprometimento e os melhores
              preços do mercado. Transportamos para todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/madretransportes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-brand-amber flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5519981211908"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#25D366] flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L.057 23.882a.75.75 0 0 0 .919.919l6.04-1.464A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 0 1-5.023-1.381l-.36-.215-3.733.905.93-3.638-.236-.374A9.818 9.818 0 1 1 12 21.818z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-5">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-gray-400 hover:text-brand-amber text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-5">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i} className="text-gray-400 text-sm leading-snug">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-amber flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-snug">
                  R. Dr. José Antonio Levy, 262<br />
                  Cordeirópolis — SP, 13494-018
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-amber flex-shrink-0" />
                <a href="tel:1933360006" className="text-gray-400 hover:text-white text-sm transition-colors">
                  (19) 3336-0006
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-amber flex-shrink-0" />
                <a
                  href="mailto:comercial@madretransportes.com.br"
                  className="text-gray-400 hover:text-white text-sm transition-colors break-all"
                >
                  comercial@madretransportes.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-brand-amber flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-snug">
                  Seg–Sex: 8h–12h / 13h30–18h<br />
                  Sábado: 8h–12h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Madre Transportes LTDA — CNPJ registrado. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            madretransportes.com.br
          </p>
        </div>
      </div>
    </footer>
  );
}
