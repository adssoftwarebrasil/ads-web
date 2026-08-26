import { CreditCard, Truck, Shield, Headphones } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: CreditCard,
    title: 'Parcelamento Flexível',
    description: 'Até 15x no cartão'
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Compre em nossa loja física ou pelas nossas redes sociais e receba em sua casa com rapidez e segurança.'
  },
  {
    icon: Shield,
    title: 'Garantia Total',
    description: 'Produtos com nota fiscal'
  },
  {
    icon: Headphones,
    title: 'Atendimento Humanizado',
    description: 'Suporte especializado'
  }
];

export const Diferenciais = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="diferenciais" className="py-20 bg-[rgb(248,248,248)]" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-2 hover:border-[rgb(237,27,38)] ${
                isVisible ? 'animate-in fade-in slide-in-from-bottom duration-500' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 pulse">
                  <feature.icon size={48} className="text-[rgb(237,27,38)]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
