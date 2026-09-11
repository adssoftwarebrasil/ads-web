import { Calendar, Clock, Users, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  value: string;
  suffix?: string;
  label: string;
  delay: number;
}

const stats: Stat[] = [
  { Icon: Calendar, value: '+20', label: 'Anos de Experiência', delay: 0 },
  { Icon: Clock, value: '24', suffix: 'h', label: 'Horas de Atendimento', delay: 120 },
  { Icon: Users, value: '+500', label: 'Clientes Atendidos', delay: 240 },
  { Icon: Building2, value: '+1000', label: 'Equipamentos Mantidos', delay: 360 },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-[rgb(42,30,75)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ Icon, value, suffix, label, delay }) => (
            <div
              key={label}
              className="text-center transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgb(219,38,27)]/20 rounded-2xl mb-4">
                <Icon width={28} height={28} className="text-[rgb(219,38,27)]" />
              </div>
              <div className="text-4xl font-black text-white mb-1">
                {value}
                <span className="text-[rgb(219,38,27)]">{suffix}</span>
              </div>
              <p className="text-gray-300 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
