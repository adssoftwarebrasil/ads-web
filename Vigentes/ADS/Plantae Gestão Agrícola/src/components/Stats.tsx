import { TrendingUp, Award, MapPin, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  suffix: string;
  label: string;
  desc: string;
  delay: number;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: '1.200.000',
    suffix: '+',
    label: 'Hectares Geridos',
    desc: 'com eficácia pelo Plantae',
    delay: 0,
  },
  {
    icon: Award,
    value: '20',
    suffix: '+',
    label: 'Anos no Mercado',
    desc: 'desde 2005 em Sorriso - MT',
    delay: 150,
  },
  {
    icon: MapPin,
    value: '100',
    suffix: '%',
    label: 'Online',
    desc: 'acesse de qualquer lugar',
    delay: 300,
  },
  {
    icon: Users,
    value: '∞',
    suffix: '',
    label: 'Treinamentos',
    desc: 'número ilimitado incluído',
    delay: 450,
  },
];

export default function Stats() {
  return (
    <section className="bg-plantae-dark py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center transition-all duration-700 opacity-100 translate-y-0"
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-plantae-green/20 flex items-center justify-center">
                    <Icon width={24} height={24} className="text-plantae-green" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {stat.value}
                  <span className="text-plantae-green">{stat.suffix}</span>
                </div>
                <div className="text-plantae-teal font-bold text-sm md:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-white/50 text-xs md:text-sm">{stat.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
