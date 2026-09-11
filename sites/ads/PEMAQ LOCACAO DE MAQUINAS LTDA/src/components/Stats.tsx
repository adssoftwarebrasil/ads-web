import { Clock, Wrench, Users, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Stat = { icon: LucideIcon; value: string; suffix: string; label: string };

const STATS: Stat[] = [
  { icon: Clock, value: '4', suffix: '', label: 'Anos de Experiência' },
  { icon: Wrench, value: '50', suffix: '+', label: 'Máquinas Disponíveis' },
  { icon: Users, value: '24', suffix: 'h', label: 'Horas de Suporte Técnico' },
  { icon: TrendingUp, value: '95', suffix: '%', label: 'Satisfação de Clientes' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-[#B87333]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-[#FFA500]/20">
                    <Icon size={32} className="text-[#FFA500]" />
                  </div>
                </div>
                <div>
                  <p className="text-5xl font-bold text-white">
                    {stat.value}
                    <span className="text-[#FFA500]">{stat.suffix}</span>
                  </p>
                  <p className="text-gray-300 mt-2 text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
