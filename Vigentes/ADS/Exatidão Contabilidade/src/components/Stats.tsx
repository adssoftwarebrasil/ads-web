import { Award, Users, FileText, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Award, value: '50+', label: 'Anos de Experiência' },
  { icon: Users, value: '1000+', label: 'Clientes Atendidos' },
  { icon: FileText, value: '15000+', label: 'Documentos Processados' },
  { icon: Briefcase, value: '500+', label: 'MEIs Regularizados' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-[rgb(54,55,58)] border-2 border-[rgb(202,162,106)] p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-4 text-[rgb(202,162,106)]">
                  <Icon size={48} />
                </div>
                <div className="text-5xl font-bold text-[rgb(202,162,106)] mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
