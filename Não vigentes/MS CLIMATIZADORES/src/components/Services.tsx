import { ShoppingCart, Wrench, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services: { number: string; icon: LucideIcon; title: string; description: string; delay: string }[] = [
  {
    number: '01',
    icon: ShoppingCart,
    title: 'Venda de Climatizadores',
    description:
      'Linha completa de climatizadores Rotoplast, reconhecidos pela eficiência e durabilidade. Produtos adequados para residências e empresas.',
    delay: '0ms',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Manutenção Especializada',
    description:
      'Serviços técnicos especializados para garantir o pleno funcionamento dos seus climatizadores, prolongando a vida útil e otimizando o desempenho.',
    delay: '100ms',
  },
  {
    number: '03',
    icon: Settings,
    title: 'Peças de Reposição',
    description:
      'Peças originais Rotoplast com garantia de qualidade e compatibilidade. Estoque completo para manutenção do seu equipamento.',
    delay: '200ms',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para seu conforto
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="transition-all duration-700 opacity-100 translate-y-0"
                style={{ transitionDelay: service.delay }}
              >
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-500 group">
                  <span className="absolute top-8 right-8 text-6xl font-bold text-gray-100 group-hover:text-yellow-50 transition-colors">
                    {service.number}
                  </span>
                  <div className="relative z-10">
                    <div className="w-12 h-12 text-yellow-500 mb-4">
                      <Icon width={48} height={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
