import { Layers, Grid3x3, Footprints, Shield, Palette, Frame, type LucideIcon } from 'lucide-react';

interface Product {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    icon: Layers,
    iconClass: 'lucide-layers',
    title: 'Pisos Laminados',
    description:
      'Beleza natural da madeira com durabilidade e fácil instalação. Perfeito para ambientes residenciais e comerciais.',
    features: ['Alta resistência', 'Fácil manutenção', 'Variedade de cores'],
  },
  {
    icon: Grid3x3,
    iconClass: 'lucide-grid3x3',
    title: 'Pisos Vinílicos',
    description:
      'Modernidade e praticidade em réguas ou rolos. Conforto térmico e acústico para seu projeto.',
    features: ['Impermeável', 'Conforto térmico', 'Instalação rápida'],
  },
  {
    icon: Footprints,
    iconClass: 'lucide-footprints',
    title: 'Pisos de Borracha',
    description:
      'Segurança e aderência para áreas de alto tráfego. Ideal para academias, playgrounds e áreas industriais.',
    features: ['Antiderrapante', 'Absorção de impacto', 'Durabilidade extrema'],
  },
  {
    icon: Shield,
    iconClass: 'lucide-shield',
    title: 'Carpetes & Forrações',
    description:
      'Conforto e sofisticação para ambientes corporativos e residenciais. Isolamento térmico e acústico superior.',
    features: ['Conforto acústico', 'Elegância', 'Variedade de texturas'],
  },
  {
    icon: Palette,
    iconClass: 'lucide-palette',
    title: 'Papel de Parede',
    description:
      'Transforme paredes em obras de arte. Papel de parede não tecido (TNT) com aplicação profissional.',
    features: ['Designs exclusivos', 'Fácil aplicação', 'Alta qualidade'],
  },
  {
    icon: Frame,
    iconClass: 'lucide-frame',
    title: 'Rodapés & Molduras',
    description:
      'Acabamento perfeito em MDF e poliestireno. Detalhes que fazem toda diferença no acabamento final.',
    features: ['Acabamento premium', 'Variedade de modelos', 'Fácil instalação'],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-[rgb(254,238,171)] text-[rgb(66,66,152)] px-6 py-2 rounded-full text-sm font-bold tracking-wide">
            Nossos Produtos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Soluções Completas para Seu<span className="block text-[rgb(66,66,152)]">Ambiente Ideal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma linha completa de produtos com qualidade certificada e atendimento especializado para seu projeto.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[rgb(113,147,204)] hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-[rgb(66,66,152)] to-[rgb(113,147,204)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className={`lucide ${product.iconClass} text-white`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[rgb(66,66,152)] transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[rgb(252,205,59)] rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5516991541924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-[rgb(66,66,152)] font-semibold hover:text-[rgb(113,147,204)] transition-colors"
                >
                  Saiba mais →
                </a>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(66,66,152)] to-[rgb(113,147,204)] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Precisa de Ajuda para Escolher?</h3>
          <p className="text-xl mb-8 text-gray-100">
            Nossa equipe especializada está pronta para orientar você na escolha ideal para seu projeto.
          </p>
          <a
            href="https://wa.me/5516991541924"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(252,205,59)] text-[rgb(66,66,152)] px-10 py-4 rounded-full text-lg font-bold hover:bg-[rgb(254,238,171)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
