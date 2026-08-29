import { Calendar, Users, Truck, Award, LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  value: string;
  suffix: string;
  label: string;
  delay: number;
}

const STATS: Stat[] = [
  { Icon: Calendar, iconClass: 'lucide-calendar', value: '30', suffix: '+', label: 'Anos de experiência', delay: 0 },
  { Icon: Users, iconClass: 'lucide-users', value: '500', suffix: '+', label: 'Clientes satisfeitos', delay: 100 },
  { Icon: Truck, iconClass: 'lucide-truck', value: '50', suffix: '+', label: 'Veículos na frota', delay: 200 },
  { Icon: Award, iconClass: 'lucide-award', value: '100', suffix: '%', label: 'Conformidade ambiental', delay: 300 },
];

export default function Stats() {
  return (
    <section className="bg-[rgb(40,120,80)] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(130,196,92,0.2)] flex items-center justify-center">
                <stat.Icon className={`lucide ${stat.iconClass} w-8 h-8 text-[rgb(130,196,92)]`} />
              </div>
              <div className="text-5xl font-extrabold text-white mb-2">
                <span>{stat.value}</span>
                {stat.suffix}
              </div>
              <div className="text-sm font-semibold uppercase tracking-wide text-[rgb(130,196,92)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
