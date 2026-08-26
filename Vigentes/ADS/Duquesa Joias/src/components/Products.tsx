import { Gem, ShoppingBag, Package, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP = 'http://wa.me/556696205384';

interface Product {
  Icon: LucideIcon;
  iconClass: string;
  color: string;
  colorSoft: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  delay: number;
}

const products: Product[] = [
  {
    Icon: Gem,
    iconClass: 'lucide lucide-gem ',
    color: 'rgb(188, 151, 96)',
    colorSoft: 'rgba(188, 151, 96, 0.094)',
    badge: 'Mais Popular',
    category: 'Alta Bijuteria',
    title: 'Semijoias',
    description:
      'Peças que combinam design sofisticado com acabamento premium. Banhadas a ouro 18k, ródio ou rosé, com garantia de qualidade e durabilidade.',
    features: ['Banho de ouro 18k', 'Pedras naturais e zircônias', 'Hipoalergênicas'],
    cta: 'Ver Coleção',
    delay: 0,
  },
  {
    Icon: ShoppingBag,
    iconClass: 'lucide lucide-shopping-bag ',
    color: 'rgb(208, 210, 212)',
    colorSoft: 'rgba(208, 210, 212, 0.094)',
    badge: 'Exclusivo',
    category: 'Prata 925',
    title: 'Joias em Prata',
    description:
      'Autênticas joias em prata 925 com certificação de procedência. Anéis, colares, pulseiras e brincos com design atemporal e elegante.',
    features: [
      'Prata 925 certificada',
      'Peças únicas',
      'Ouro e prata combinados',
      'Design exclusivo',
    ],
    cta: 'Ver Peças',
    delay: 150,
  },
  {
    Icon: Package,
    iconClass: 'lucide lucide-package ',
    color: 'rgb(240, 113, 171)',
    colorSoft: 'rgba(240, 113, 171, 0.094)',
    badge: 'Para Revendedoras',
    category: 'Para Consultoras',
    title: 'Atacado & Consignação',
    description:
      'Condições especiais de atacado e consignação para consultoras que querem escalar seus negócios. Apoio completo desde o primeiro pedido.',
    features: [
      'Preços de atacado',
      'Consignação disponível',
      'Suporte completo',
      'Programa de premiações',
    ],
    cta: 'Quero Revender',
    delay: 300,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Nossos Produtos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black leading-tight">
            Uma coleção para cada <span className="italic text-gold-gradient">momento</span>
          </h2>
          <p className="text-black/55 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            De peças para uso pessoal a grandes lotes para revendedoras — temos tudo que você precisa
            para brilhar ou para empreender.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map(
            ({
              Icon,
              iconClass,
              color,
              colorSoft,
              badge,
              category,
              title,
              description,
              features,
              cta,
              delay,
            }) => (
              <div
                key={title}
                className="group relative bg-white border border-lgray/50 rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 opacity-100 translate-y-0"
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ background: color }}
                ></div>
                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: colorSoft }}
                    >
                      <Icon width={26} height={26} className={iconClass} style={{ color }} />
                    </div>
                    <span
                      className="text-xs font-bold tracking-wide px-3 py-1.5 rounded-full"
                      style={{ color, backgroundColor: colorSoft }}
                    >
                      {badge}
                    </span>
                  </div>
                  <div className="text-xs text-black/40 font-semibold tracking-widest uppercase mb-1">
                    {category}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-black mb-3">{title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed mb-5">{description}</p>
                  <ul className="space-y-2 mb-7">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-black/70">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: color }}
                        ></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
                    style={{ color }}
                  >
                    {cta}
                    <ChevronRight
                      width={16}
                      height={16}
                      className="lucide lucide-chevron-right "
                    />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
