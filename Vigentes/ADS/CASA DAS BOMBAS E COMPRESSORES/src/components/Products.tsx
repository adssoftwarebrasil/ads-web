import { Droplet, Zap, Settings, Wrench, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  icon: LucideIcon;
  iconClass: string;
  gradient: string;
  hoverOverlay: string;
  barGradient: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    icon: Droplet,
    iconClass: 'lucide lucide-droplet text-white',
    gradient: 'from-blue-500 to-cyan-500',
    hoverOverlay: 'from-blue-500 to-cyan-500',
    barGradient: 'from-blue-500 to-cyan-500',
    title: "Bombas D'água",
    description:
      'Vendas e assistência técnica especializada em bombas para uso residencial, comercial e industrial.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap text-white',
    gradient: 'from-orange-500 to-amber-500',
    hoverOverlay: 'from-orange-500 to-amber-500',
    barGradient: 'from-orange-500 to-amber-500',
    title: 'Compressores de Ar',
    description:
      'Linha completa de compressores com manutenção preventiva e corretiva por técnicos certificados.',
  },
  {
    icon: Settings,
    iconClass: 'lucide lucide-settings text-white',
    gradient: 'from-purple-500 to-pink-500',
    hoverOverlay: 'from-purple-500 to-pink-500',
    barGradient: 'from-purple-500 to-pink-500',
    title: 'Peças e Acessórios',
    description:
      'Peças originais e acessórios para todas as marcas que representamos, com garantia de qualidade.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench text-white',
    gradient: 'from-red-600 to-orange-600',
    hoverOverlay: 'from-red-600 to-orange-600',
    barGradient: 'from-red-600 to-orange-600',
    title: 'Manutenção Técnica',
    description:
      'Assistência técnica autorizada com diagnóstico preciso e reparos realizados por especialistas.',
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="absolute top-40 -right-20 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-96 h-96 bg-red-50/30 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="mb-12 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C41D1D] mb-4">
            Nossos Produtos e Serviços
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(255,163,1)] to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em bombas e compressores com qualidade garantida e assistência técnica autorizada
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.hoverOverlay} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="relative mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${p.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <Icon width={32} height={32} className={p.iconClass} />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C41D1D] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{p.description}</p>
                  <div className="flex items-center gap-2 text-[rgb(255,163,1)] font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Saiba mais</span>
                    <ArrowRight
                      width={16}
                      height={16}
                      className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${p.barGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[rgb(255,163,1)] to-amber-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Solicite um Orçamento Personalizado
            <ArrowRight width={22} height={22} className="lucide lucide-arrow-right " />
          </a>
        </div>
      </div>
    </section>
  );
}
