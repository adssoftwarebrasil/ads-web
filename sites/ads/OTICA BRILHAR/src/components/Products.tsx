import { Sun, Eye, Layers, Droplets, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Product = {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  iconClass: string;
};

const mainProducts: Product[] = [
  {
    title: 'Óculos Solar',
    description:
      'Proteção UV completa com modelos das melhores marcas. Do casual ao esportivo, temos o modelo ideal para seu estilo.',
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/homem-segurando-oculos-de-sol-otica-brilhar_1080x1440.webp',
    Icon: Sun,
    iconClass: 'lucide lucide-sun text-[rgb(13,111,69)]',
  },
  {
    title: 'Armações Graduadas',
    description:
      'Armações em metal, acetato, titânio e madeira. Qualidade premium e design contemporâneo para cada perfil.',
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/otica-brilhar-armacao-dourada-conforto-visual_1080x1440.webp',
    Icon: Eye,
    iconClass: 'lucide lucide-eye text-[rgb(13,111,69)]',
  },
  {
    title: 'Lentes Oftálmicas',
    description:
      'Lentes monofocais, bifocais e multifocais com tratamentos antirreflexo, fotossensíveis e proteção contra luz azul.',
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/otica-brilhar-oculos-multifocais-close-rosto_1080x1440.webp',
    Icon: Layers,
    iconClass: 'lucide lucide-layers text-[rgb(13,111,69)]',
  },
];

const secondaryProducts: Product[] = [
  {
    title: 'Lentes de Contato',
    description:
      'Lentes diárias, mensais e coloridas das principais marcas do mercado com orientação especializada.',
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/otica-brilhar-mao-segurando-lente-e-arma-o_1080x1440.webp',
    Icon: Droplets,
    iconClass: 'lucide lucide-droplets text-[rgb(13,111,69)]',
  },
  {
    title: 'Acessórios Óticos',
    description:
      'Cases, correntes, soluções para lentes de contato, flanelas e tudo que você precisa para cuidar dos seus óculos.',
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/oculos-arma-ao-dourada-texto-otica-brilhar_1080x1440.webp',
    Icon: Package,
    iconClass: 'lucide lucide-package text-[rgb(13,111,69)]',
  },
];

function ProductCard({ product }: { product: Product }) {
  const { Icon } = product;
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[rgb(13,111,69)]/10 flex items-center justify-center">
            <Icon className={product.iconClass} width={20} height={20} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[rgb(197,46,52)] font-semibold text-sm uppercase tracking-widest">Nossos Produtos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Tudo que sua visão precisa, <span className="text-[rgb(13,111,69)]">em um só lugar</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Soluções completas para saúde visual com o que há de melhor em tecnologia óptica e moda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainProducts.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {secondaryProducts.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="http://wa.me/556684469577?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Ótica%20Brilhar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(197,46,52)] hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-red-200 hover:-translate-y-0.5"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
