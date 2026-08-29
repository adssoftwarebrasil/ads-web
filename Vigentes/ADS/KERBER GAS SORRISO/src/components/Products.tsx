import { Flame, Building2, UtensilsCrossed, Droplets, CheckCircle, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  cardBorder: string;
  topBar: string;
  iconBg: string;
  icon: LucideIcon;
  iconClass: string;
  badgeBg: string;
  label: string;
  name: string;
  size: string;
  description: string;
  features: string[];
  button: string;
  href: string;
  cta: string;
}

const products: Product[] = [
  {
    cardBorder: 'border-orange-200',
    topBar: 'from-orange-500 to-amber-500',
    iconBg: 'from-orange-500 to-amber-500',
    icon: Flame,
    iconClass: 'lucide lucide-flame',
    badgeBg: 'bg-orange-50',
    label: 'Residencial',
    name: 'Gas P13',
    size: '13kg',
    description: 'Ideal para residencias. Entrega rapida e segura para sua casa.',
    features: ['Entrega sem taxa em Sorriso', 'Produto ULTRAGAZ certificado', 'Atendimento rapido e eficiente'],
    button: 'from-orange-500 to-amber-500',
    href: 'https://wa.me/5566999668040?text=Ola!%20Gostaria%20de%20pedir%20um%20Gas%20P13.',
    cta: 'Pedir Gas P13',
  },
  {
    cardBorder: 'border-amber-200',
    topBar: 'from-amber-500 to-yellow-500',
    iconBg: 'from-amber-500 to-yellow-500',
    icon: Building2,
    iconClass: 'lucide lucide-building2',
    badgeBg: 'bg-amber-50',
    label: 'Industrial',
    name: 'Gas P20',
    size: '20kg',
    description: 'Ideal para empilhadeiras e uso industrial com alta performance.',
    features: ['Perfeito para empilhadeiras', 'Entrega rapida para empresas', 'Produto ULTRAGAZ certificado'],
    button: 'from-amber-500 to-yellow-500',
    href: 'https://wa.me/5566999668040?text=Ola!%20Gostaria%20de%20pedir%20um%20Gas%20P20.',
    cta: 'Pedir Gas P20',
  },
  {
    cardBorder: 'border-red-200',
    topBar: 'from-red-500 to-orange-500',
    iconBg: 'from-red-500 to-orange-500',
    icon: UtensilsCrossed,
    iconClass: 'lucide lucide-utensils-crossed',
    badgeBg: 'bg-red-50',
    label: 'Comercial',
    name: 'Gas P45',
    size: '45kg',
    description: 'Ideal para restaurantes e estabelecimentos comerciais.',
    features: ['Perfeito para restaurantes', 'Grande capacidade - 45kg', 'Produto ULTRAGAZ certificado'],
    button: 'from-red-500 to-orange-500',
    href: 'https://wa.me/5566999668040?text=Ola!%20Gostaria%20de%20pedir%20um%20Gas%20P45.',
    cta: 'Pedir Gas P45',
  },
  {
    cardBorder: 'border-sky-200',
    topBar: 'from-sky-500 to-cyan-500',
    iconBg: 'from-sky-500 to-cyan-500',
    icon: Droplets,
    iconClass: 'lucide lucide-droplets',
    badgeBg: 'bg-sky-50',
    label: 'Saude',
    name: 'Agua Mineral',
    size: '20L',
    description: 'Agua mineral de qualidade superior para toda a familia.',
    features: ['Agua mineral pura e saudavel', 'Garrafoes higienizados', 'Entrega rapida e sem taxa'],
    button: 'from-sky-500 to-cyan-500',
    href: 'https://wa.me/5566999668040?text=Ola!%20Gostaria%20de%20pedir%20Agua%20Mineral%2020L.',
    cta: 'Pedir Agua 20L',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[rgb(248,130,31)] font-semibold text-sm tracking-widest uppercase mb-3">
            Catalogo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-[rgb(248,130,31)]">Produtos</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Qualidade garantida com entrega rapida e sem taxa em Sorriso
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`group relative bg-white rounded-2xl border ${product.cardBorder} hover:border-[rgb(248,130,31)] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.topBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className="p-6 lg:p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`${product.iconClass} w-7 h-7 text-white`} />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${product.badgeBg} text-gray-700`}
                    >
                      {product.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-3xl font-black text-[rgb(248,130,31)] mb-3">{product.size}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="lucide lucide-check-circle w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${product.button} text-white px-5 py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
                  >
                    <Phone className="lucide lucide-phone w-4 h-4" />
                    <span>{product.cta}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
