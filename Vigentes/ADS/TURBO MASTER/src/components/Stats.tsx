import { Award, Shield, MapPin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  value: string;
  title: string;
  subtitle: string;
}

const stats: Stat[] = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-primary-500',
    value: '30+',
    title: 'Anos no Mercado',
    subtitle: 'Referência em diesel no MT',
  },
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield text-primary-500',
    value: '100%',
    title: 'Garantia nos Serviços',
    subtitle: 'Qualidade assegurada',
  },
  {
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-primary-500',
    value: 'MT',
    title: 'Atendimento Estadual',
    subtitle: 'Todo Mato Grosso',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-primary-500',
    value: '2x',
    title: 'Turnos de Atendimento',
    subtitle: '07:30–11:30 / 13:00–17:45',
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-gray-950 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const { Icon } = stat;
            return (
              <div
                key={stat.title}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-600/10 border border-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
                  <Icon className={stat.iconClass} width={22} height={22} />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
                  <p className="text-sm font-semibold text-gray-200 mt-0.5">{stat.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
