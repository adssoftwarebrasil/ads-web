import { Trophy, Star, Package, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Trophy, value: '45+', label: 'Anos de Tradição' },
  { icon: Star, value: '20000+', label: 'Clientes Satisfeitos' },
  { icon: Package, value: '5000+', label: 'Produtos Disponíveis' },
  { icon: Award, value: '100%', label: 'Qualidade Garantida' },
];

export default function StatsBar() {
  return (
    <section className="bg-[#FDF341] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center p-6">
                <div className="text-[#363435] mb-4">
                  <Icon size={48} />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-[#363435] mb-2">{stat.value}</div>
                <div className="text-lg text-[#2C2C2C] font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
