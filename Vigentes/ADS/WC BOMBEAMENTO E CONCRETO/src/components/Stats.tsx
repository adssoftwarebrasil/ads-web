import type { LucideIcon } from 'lucide-react';
import { Star, MapPin, Clock, ThumbsUp } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  iconColor: string;
  value: string;
  suffix: string;
  suffixColor: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Star, iconColor: 'text-brand-orange', value: '4.9', suffix: '', suffixColor: 'text-brand-orange', label: 'Avaliação no Google' },
  { icon: MapPin, iconColor: 'text-brand-green', value: '30', suffix: 'km', suffixColor: 'text-brand-green', label: 'Raio de atendimento' },
  { icon: Clock, iconColor: 'text-brand-orange', value: '07', suffix: 'h', suffixColor: 'text-brand-orange', label: 'Atendimento a partir de' },
  { icon: ThumbsUp, iconColor: 'text-brand-green', value: '100', suffix: '%', suffixColor: 'text-brand-green', label: 'Satisfação garantida' },
];

export default function Stats() {
  return (
    <section className="relative bg-brand-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-brand-dark/50 border border-white/5 hover:border-brand-orange/20 transition-all duration-500 opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`p-3 rounded-xl bg-white/5 ${stat.iconColor}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-extrabold text-brand-white">
                    {stat.value}
                    <span className={`text-xl font-bold ${stat.suffixColor}`}>{stat.suffix}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-brand-gray mt-1">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
