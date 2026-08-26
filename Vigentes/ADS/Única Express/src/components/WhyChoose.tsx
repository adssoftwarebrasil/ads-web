import { Zap, Truck, Shield, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Eficiência Operacional',
    description: 'Processos otimizados e entregas rápidas que garantem agilidade no seu dia a dia empresarial.',
  },
  {
    icon: Truck,
    title: 'Frota Moderna e Manutenção de Qualidade',
    description: 'Veículos novos e bem mantidos para assegurar entregas seguras e pontuais.',
  },
  {
    icon: Shield,
    title: 'Transparência e Rastreabilidade',
    description: 'Acompanhamento em tempo real das suas entregas com total visibilidade do processo.',
  },
  {
    icon: Heart,
    title: 'Satisfação do Cliente',
    description: 'Atendimento personalizado e comprometimento total com a excelência em cada serviço.',
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,38,100)] mb-4">Por que escolher a Única Express?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white border-t-4 border-[rgb(38,129,196)] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-[rgb(38,129,196)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(0,38,100)] mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
