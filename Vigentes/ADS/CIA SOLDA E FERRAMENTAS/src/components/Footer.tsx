import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const produtos = [
  'Máquinas de Solda MIG',
  'Máquinas de Solda TIG',
  'Máquinas de Solda Plasma',
  'Inversoras de Eletrodo',
  'Locação de Máquinas',
  'Kit Maçarico para Locação',
  'Consumíveis para Solda',
  'EPIs para Soldagem',
  'Ferramentas Elétricas',
];

const links = [
  { href: '#hero', label: 'Início' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#locacao', label: 'Locação' },
  { href: '#epis', label: 'EPIs' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo-branco.webp"
              alt="Cia da Solda"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em equipamentos para soldagem. Vendas, locação e suporte técnico para
              todo o DF e Goiás.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/sia.solda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-orange transition-all"
              >
                <Instagram className="lucide lucide-instagram" width={16} height={16} />
              </a>
              <a
                href="https://www.facebook.com/siasolda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-orange transition-all"
              >
                <Facebook className="lucide lucide-facebook" width={16} height={16} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Produtos e Serviços</h3>
            <ul className="space-y-2">
              {produtos.map((item) => (
                <li key={item}>
                  <a
                    href="#catalogo"
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange shrink-0"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange shrink-0"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin
                  className="lucide lucide-map-pin text-brand-orange shrink-0 mt-0.5"
                  width={14}
                  height={14}
                />
                <span className="text-gray-400 text-sm">
                  SIA Trecho 17, Rua 14, Lt 70/90 — Brasília-DF
                </span>
              </div>
              <a href="tel:+556198770047" className="flex items-center gap-2.5 group">
                <Phone
                  className="lucide lucide-phone text-brand-orange shrink-0"
                  width={14}
                  height={14}
                />
                <span className="text-gray-400 text-sm group-hover:text-brand-orange transition-colors">
                  (61) 9 9877-0047
                </span>
              </a>
              <a href="tel:+556135504750" className="flex items-center gap-2.5 group">
                <Phone
                  className="lucide lucide-phone text-brand-orange shrink-0"
                  width={14}
                  height={14}
                />
                <span className="text-gray-400 text-sm group-hover:text-brand-orange transition-colors">
                  Fixo: (61) 3550-4750
                </span>
              </a>
              <a
                href="mailto:matheus.santana@ciadasolda.com.br"
                className="flex items-start gap-2.5 group"
              >
                <Mail
                  className="lucide lucide-mail text-brand-orange shrink-0 mt-0.5"
                  width={14}
                  height={14}
                />
                <span className="text-gray-400 text-sm group-hover:text-brand-orange transition-colors break-all">
                  matheus.santana@ciadasolda.com.br
                </span>
              </a>
              <div className="flex items-center gap-2.5">
                <Clock
                  className="lucide lucide-clock text-brand-orange shrink-0"
                  width={14}
                  height={14}
                />
                <span className="text-gray-400 text-sm">Seg–Sex: 08h às 18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© 2026 Cia da Solda — Todos os direitos reservados.</span>
          <span>SIA Trecho 17, Rua 14 — Brasília-DF</span>
        </div>
      </div>
    </footer>
  );
}
