import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const stats: { icon: LucideIcon; iconClass: string; value: string; label: string }[] = [
  { icon: Calendar, iconClass: 'text-[rgb(64,102,215)]', value: '13+', label: 'Anos de Mercado' },
  { icon: MapPin, iconClass: 'text-[rgb(62,215,252)]', value: '15+', label: 'Cidades Atendidas' },
  { icon: Briefcase, iconClass: 'text-[rgb(64,102,215)]', value: '100+', label: 'Empresas Assessoradas' },
  { icon: GraduationCap, iconClass: 'text-[rgb(62,215,252)]', value: 'Mestres', label: 'Especialistas Pós-Graduados' },
];

export default function StatsStrip() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex flex-col items-center text-center space-y-4">
                <Icon width={48} height={48} className={s.iconClass} />
                <div>
                  <div className="text-4xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-gray-600 font-medium mt-2">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
