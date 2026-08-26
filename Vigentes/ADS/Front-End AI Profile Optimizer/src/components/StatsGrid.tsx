import { Users, BarChart3, TrendingUp, type LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  iconWrapper: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, iconWrapper: 'bg-blue-100 text-blue-600', value: '12', label: 'Perfis Ativos' },
  { icon: BarChart3, iconWrapper: 'bg-green-100 text-green-600', value: '48', label: 'Posts Gerados' },
  { icon: TrendingUp, iconWrapper: 'bg-purple-100 text-purple-600', value: '24', label: 'Otimizações' },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 mb-12">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.iconWrapper}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
