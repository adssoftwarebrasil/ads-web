import { MapPin, Coffee, Clock, DollarSign, Wifi, LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconName: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: MapPin,
    iconName: 'lucide-map-pin',
    title: 'Localização Estratégica',
    description: '1,1 km do Centro de Convenções',
  },
  {
    Icon: Coffee,
    iconName: 'lucide-coffee',
    title: 'Café da Manhã Incluso',
    description: '06:30 às 09:30',
  },
  {
    Icon: Clock,
    iconName: 'lucide-clock',
    title: 'Atendimento 24 Horas',
    description: 'Estamos sempre disponíveis',
  },
  {
    Icon: DollarSign,
    iconName: 'lucide-dollar-sign',
    title: 'Preços Acessíveis',
    description: 'Melhor custo-benefício',
  },
  {
    Icon: Wifi,
    iconName: 'lucide-wifi',
    title: 'Wi-Fi Gratuito',
    description: 'Internet de alta velocidade',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-gray-100"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-[rgb(190,0,3)] transition-colors duration-300">
                <feature.Icon
                  size={36}
                  strokeWidth={1.5}
                  className={`lucide ${feature.iconName} text-[rgb(190,0,3)] group-hover:text-white transition-colors duration-300`}
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
