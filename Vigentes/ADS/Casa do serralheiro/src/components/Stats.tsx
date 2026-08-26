import { Calendar, Users, Package, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Calendar, value: '44+', label: 'Anos de mercado' },
  { Icon: Users, value: '150,000+', label: 'Clientes atendidos' },
  { Icon: Package, value: '50+', label: 'Tipos de produtos' },
  { Icon: MapPin, value: '40+', label: 'Cidades atendidas' },
];

export default function Stats() {
  return (
    <section className="bg-white border-t-4 border-[rgb(122,21,25)] py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-3 sm:p-4 lg:p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <stat.Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[rgb(122,21,25)] mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[rgb(122,21,25)] mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
