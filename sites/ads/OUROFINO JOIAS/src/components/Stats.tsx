import { Award, Briefcase, Gem, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: Award, value: '20+', label: 'Anos de Experiência' },
  { icon: Briefcase, value: '50+', label: 'Projetos Realizados' },
  { icon: Gem, value: '10+', label: 'Tipos de Joias' },
  { icon: Users, value: '100+', label: 'Clientes Satisfeitos' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-[rgb(186,176,97)] via-[rgb(126,102,42)] to-[rgb(186,176,97)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="bg-[rgb(29,29,27)]/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[rgb(29,29,27)]/40 transition-all duration-300">
                  <Icon size={32} className="text-[rgb(29,29,27)]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[rgb(29,29,27)] mb-2">{stat.value}</div>
                <div className="text-[rgb(29,29,27)]/80 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
