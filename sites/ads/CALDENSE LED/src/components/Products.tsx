import { Zap, Layers, Sparkles, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  image: string;
  alt: string;
  icon: LucideIcon;
  iconClass: string;
  color: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  delay: string;
}

const products: Product[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-de-iluminacao-lampadas-pendentes-e-plafon_1280x575.webp',
    alt: 'Painéis LED',
    icon: Layers,
    iconClass: 'lucide lucide-layers',
    color: 'rgb(35, 145, 16)',
    category: 'Sobrepor & Embutir',
    title: 'Painéis LED',
    description:
      'Painéis de alta luminosidade para ambientes comerciais e residenciais. Distribuição de luz uniforme, baixo consumo e longa vida útil. Ideais para escritórios, lojas e tetos em geral.',
    tags: ['Alta eficiência', 'Luz uniforme', 'Fácil instalação'],
    delay: '0s',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-de-iluminacao-diversos-modelos-e-lampadas_1280x575.webp',
    alt: 'Fitas de LED',
    icon: Sparkles,
    iconClass: 'lucide lucide-sparkles',
    color: 'rgb(249, 170, 12)',
    category: 'Decoração & Destaque',
    title: 'Fitas de LED',
    description:
      'Perfeitas para realçar detalhes arquitetônicos, móveis planejados, sancas e elementos decorativos. Disponíveis em diversas tonalidades e potências para cada necessidade.',
    tags: ['RGB & Monocromático', 'Flexível', 'Cortável'],
    delay: '0.1s',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-de-iluminacao-com-variedade-de-produtos_1280x575.webp',
    alt: 'Perfis de LED',
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    color: 'rgb(35, 145, 16)',
    category: 'Design & Modernidade',
    title: 'Perfis de LED',
    description:
      'Perfis de alumínio com luz contínua e sem pontos de sombra. Conferem acabamento premium e design contemporâneo a qualquer ambiente. Versáteis para aplicação em móveis e paredes.',
    tags: ['Luz contínua', 'Design moderno', 'Sem pontos'],
    delay: '0.2s',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-de-iluminacao-com-varios-produtos_1280x575.webp',
    alt: 'Refletores & Industrial',
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    color: 'rgb(249, 170, 12)',
    category: 'IP65+ & Alta Potência',
    title: 'Refletores & Industrial',
    description:
      'Luminárias robustas para uso externo, galpões industriais e fachadas. Resistência a intempéries com IP65 ou superior, garantindo segurança e eficiência mesmo nas condições mais adversas.',
    tags: ['IP65+', 'Alta potência', 'Resistente'],
    delay: '0.3s',
  },
];

function hexRgbaFromColor(color: string, alpha: number) {
  // color is like 'rgb(35, 145, 16)'
  const nums = color.replace(/rgb\(|\)/g, '');
  return `rgba(${nums}, ${alpha})`;
}

export default function Products() {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-[#010101] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-[#239110]/20 text-[#239110] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#239110]/30 in-view">
            <Zap className="lucide lucide-zap" width={14} height={14} />
            Nossos Produtos
          </div>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 in-view">
            Soluções para <span className="text-[#F9AA0C]">cada projeto</span>
          </h2>
          <p className="animate-on-scroll text-gray-400 text-lg max-w-2xl mx-auto in-view">
            Trabalhamos com marcas nacionais e importadas de alta qualidade, sempre com o melhor
            custo-benefício para você.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="animate-on-scroll group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl in-view"
                style={{ transitionDelay: product.delay }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010101]/80"></div>
                  <div
                    className="absolute top-4 left-4 p-2.5 rounded-xl text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    <Icon className={product.iconClass} width={28} height={28} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: product.color }}
                    >
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{
                          borderColor: hexRgbaFromColor(product.color, 0.25),
                          color: product.color,
                          backgroundColor: hexRgbaFromColor(product.color, 0.063),
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="animate-on-scroll mt-12 text-center in-view">
          <a
            href="http://wa.me/553530646373?text=Olá!%20Gostaria%20de%20ver%20o%20catálogo%20de%20produtos%20da%20Caldense%20LED."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F9AA0C] hover:bg-[#d4900a] text-[#010101] px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Solicitar Catálogo Completo
            <Zap className="lucide lucide-zap" width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
