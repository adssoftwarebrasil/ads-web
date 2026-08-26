import { Award, Users, MapPin, ThumbsUp } from 'lucide-react';
import type { ComponentType } from 'react';

interface Stat {
  Icon: ComponentType<{ width?: number; height?: number; className?: string }>;
  iconClass: string;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { Icon: Award, iconClass: 'lucide lucide-award', value: '+10', label: 'Anos de experiência' },
  { Icon: Users, iconClass: 'lucide lucide-users', value: '+5.000', label: 'Clientes atendidos' },
  { Icon: MapPin, iconClass: 'lucide lucide-map-pin', value: '217', label: 'Municípios no MA' },
  { Icon: ThumbsUp, iconClass: 'lucide lucide-thumbs-up', value: '5.0', label: 'Avaliação no Google' },
];

export default function Stats() {
  return (
    <section className="py-16" style={{ backgroundColor: 'rgb(31, 66, 131)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                style={{ backgroundColor: 'rgba(252, 255, 252, 0.1)', color: 'rgb(255, 193, 7)' }}
              >
                <stat.Icon width={32} height={32} className={stat.iconClass} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium" style={{ color: 'rgba(252, 255, 252, 0.75)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
