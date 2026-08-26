import { Flame, Droplets, CheckCircle, Phone, LucideIcon } from 'lucide-react';

interface Product {
  Icon: LucideIcon;
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
}

const products: Product[] = [
  {
    Icon: Flame,
    image: 'https://storage.lucasmendes.dev/site-sp/kerbergas%2Fvariosgas.jpg',
    imageAlt: 'Gás P13 - Vários Botijões',
    badge: 'Melhor Preço',
    title: 'Gás P13',
    description:
      'Botijão de gás de 13kg com entrega rápida e segura para sua casa ou empresa.',
    features: [
      'Entrega sem taxa em Sinop',
      'Produto de qualidade garantida',
      'Atendimento rápido e eficiente',
    ],
    cta: 'Pedir Gás P13',
    href: 'https://wa.me/5566984052994?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20G%C3%A1s%20P13.',
  },
  {
    Icon: Droplets,
    image: 'https://storage.lucasmendes.dev/site-sp/kerbergas%2Fgarrafaodeagua20l.jpg',
    imageAlt: 'Água Mineral 20L',
    badge: 'Qualidade',
    title: 'Água Mineral 20L',
    description:
      'Água mineral de qualidade superior em garrafão de 20 litros para toda a família.',
    features: [
      'Água mineral pura e saudável',
      'Garrafões higienizados',
      'Entrega rápida e sem taxa',
    ],
    cta: 'Pedir Água 20L',
    href: 'https://wa.me/5566984052994?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20%C3%81gua%20Mineral%2020L.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Qualidade garantida com o melhor preço da cidade
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => {
            const { Icon } = product;
            return (
              <div
                key={product.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[rgb(248,130,31)] text-white px-4 py-2 rounded-full text-sm font-bold">
                    {product.badge}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[rgb(248,130,31)]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[rgb(248,130,31)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-[rgb(248,130,31)] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[rgb(248,130,31)] to-orange-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{product.cta}</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
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
