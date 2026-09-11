import { Baby, Star, Clock, Utensils, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Baby,
    iconClass: 'lucide lucide-baby',
    title: 'Ambiente Familiar',
    description:
      'Brinquedoteca para as crianças se divertirem enquanto você aproveita',
  },
  {
    icon: Star,
    iconClass: 'lucide lucide-star',
    title: 'Qualidade Premium',
    description:
      'Ingredientes frescos e selecionados diariamente pelos nossos chefs',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Horário Estendido',
    description:
      'Aberto até meia-noite para sua conveniência de segunda a sábado',
  },
  {
    icon: Utensils,
    iconClass: 'lucide lucide-utensils',
    title: 'Cardápio Variado',
    description: 'Mais de 50 opções entre pratos tradicionais e contemporâneos',
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-black py-16 md:py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-exo font-bold text-4xl md:text-5xl text-white mb-4">
            Por que escolher o Himitsu?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group">
                <div className="inline-flex items-center justify-center mb-6">
                  <Icon
                    className={`${feature.iconClass} w-12 h-12 text-[#E02023] group-hover:-translate-y-2 transition-transform duration-300`}
                  />
                </div>
                <h3 className="font-exo font-semibold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-exo text-gray-300 text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
