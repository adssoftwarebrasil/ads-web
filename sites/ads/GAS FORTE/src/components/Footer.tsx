import { Instagram, Phone, MapPin } from 'lucide-react';

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';

const navLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#como-pedir', label: 'Como Pedir' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

const productList = [
  'Botijão GLP 13kg (P13)',
  'Botijão GLP 20kg (P20)',
  'Botijão GLP 45kg (P45)',
  'Galão de Água 20L',
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/gas%20forte/img/logo-sem-fundo.webp"
              alt="Gás Forte"
              className="h-12 w-auto mb-4"
            />
            <p className="text-brand-light/50 text-sm leading-relaxed max-w-xs">
              Há mais de 20 anos abastecendo Goiânia com gás GLP de qualidade, entrega rápida e atendimento humanizado.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/gas.forte/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-brand-orange/50 flex items-center justify-center text-brand-light/50 hover:text-brand-orange transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram" />
              </a>
              <a
                href="http://wa.me/556282381515"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-green-500/50 flex items-center justify-center text-brand-light/50 hover:text-green-400 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d={WA_PATH}></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-light/50 hover:text-brand-orange text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Produtos</h4>
            <ul className="space-y-3 text-sm text-brand-light/50">
              {productList.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6235738001"
                  className="flex items-start gap-2 text-brand-light/50 hover:text-brand-orange text-sm transition-colors"
                >
                  <Phone width={14} height={14} className="lucide lucide-phone shrink-0 mt-0.5" />
                  (62) 3573-8001 / (62) 3573-1000
                </a>
              </li>
              <li>
                <a
                  href="http://wa.me/556282381515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-brand-light/50 hover:text-green-400 text-sm transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0 mt-0.5">
                    <path d={WA_PATH}></path>
                  </svg>
                  (62) 98238-1515
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-light/50 text-sm">
                <MapPin width={14} height={14} className="lucide lucide-map-pin shrink-0 mt-0.5" />
                <span>R. Tv. 6 - Lot. Tropical Verde, Goiânia - GO, 74483-604</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 pb-4">
          <p className="text-brand-light/20 text-[10px] text-justify leading-relaxed">
            <strong>Buscas relacionadas:</strong> Gás do Povo Tropical Verde Goiânia, Gás do Povo entrega rápida
            Tropical Verde, Gás do Povo distribuidora de gás Goiânia, Gás do Povo botijão de gás Tropical Verde, revenda
            de gás Tropical Verde, depósito de gás Tropical Verde, Gás do Povo gás 13kg entrega em Goiânia.
          </p>
        </div>
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-light/30 text-xs">
            © 2026 Gás Forte – distribuidora de gás GLP. Todos os direitos reservados.
          </p>
          <p className="text-brand-light/20 text-xs">Distribuidora Oficial Supergasbras · Normas ANP</p>
        </div>
      </div>
    </footer>
  );
}
