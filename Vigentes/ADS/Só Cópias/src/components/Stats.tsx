import { Award, Package, Users, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Award, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', value: '15+', label: 'Anos de Experiência' },
  { Icon: Package, iconBg: 'bg-orange-100', iconColor: 'text-orange-600', value: '200k+', label: 'Produtos Entregues' },
  { Icon: Users, iconBg: 'bg-green-100', iconColor: 'text-green-600', value: '5k+', label: 'Clientes Satisfeitos' },
  { Icon: TrendingUp, iconBg: 'bg-purple-100', iconColor: 'text-purple-600', value: '100%', label: 'de Aprovação' },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Números que <span className="text-blue-800">Impressionam</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600">Experiência e qualidade comprovadas</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative text-center p-4 md:p-6 lg:p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 ${stat.iconBg} rounded-xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.Icon className={`w-7 h-7 md:w-8 md:h-8 ${stat.iconColor}`} />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium leading-tight">
                {stat.label}
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 flex items-center justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
