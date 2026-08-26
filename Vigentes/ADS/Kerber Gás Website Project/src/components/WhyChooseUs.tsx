import { Truck, Clock, DollarSign, Zap, LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: Truck,
    title: 'Entrega Sem Taxa',
    description: 'Entregamos sem cobrar taxa de entrega em Sinop',
  },
  {
    Icon: Clock,
    title: 'Plantão de Entrega',
    description: 'Atendimento de 7h às 22h todos os dias',
  },
  {
    Icon: DollarSign,
    title: 'Melhor Preço',
    description: 'Os melhores preços da cidade garantidos',
  },
  {
    Icon: Zap,
    title: 'Atendimento Rápido',
    description: 'Entrega ágil e atendimento de qualidade',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher a{' '}
            <span className="text-[rgb(248,130,31)]">Kerber Gás?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossos diferenciais fazem toda a diferença no seu dia a dia
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[rgb(248,130,31)] to-orange-600 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
