import { Clock, Star, Users, Award, type LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Clock, iconClass: 'lucide lucide-clock text-red-500', value: '8+', label: 'Anos de Mercado' },
  { Icon: Star, iconClass: 'lucide lucide-star text-red-500', value: '4.9', label: 'Avaliação no Google' },
  { Icon: Users, iconClass: 'lucide lucide-users text-red-500', value: 'Milhares', label: 'de Clientes Atendidos' },
  { Icon: Award, iconClass: 'lucide lucide-award text-red-500', value: '100%', label: 'Produtos de Qualidade' },
];

export default function Stats() {
  return (
    <section className="bg-black border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-red-700/10 border border-red-700/30 rounded-xl flex items-center justify-center mb-3 group-hover:bg-red-700/20 transition-colors">
                <stat.Icon className={stat.iconClass} width={22} height={22} />
              </div>
              <span className="text-2xl lg:text-3xl font-black text-white">{stat.value}</span>
              <span className="text-sm text-gray-400 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
