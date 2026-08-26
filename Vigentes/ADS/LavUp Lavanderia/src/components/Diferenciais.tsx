import { Award, CalendarCheck, Clock, Smile } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  color: string;
  value: string;
  label: string;
  delay: number;
}

const stats: Stat[] = [
  {
    Icon: Clock,
    color: 'rgb(38, 182, 230)',
    value: '75 min',
    label: 'Ciclo completo lava e seca',
    delay: 0,
  },
  {
    Icon: Award,
    color: 'rgb(190, 83, 160)',
    value: '5.0 ★',
    label: 'Avaliação média no Google',
    delay: 100,
  },
  {
    Icon: Smile,
    color: 'rgb(118, 203, 199)',
    value: '100%',
    label: 'Clientes satisfeitos',
    delay: 200,
  },
  {
    Icon: CalendarCheck,
    color: 'rgb(84, 46, 145)',
    value: 'Maio 2024',
    label: 'Inauguração em Araraquara',
    delay: 300,
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="relative -mt-8 z-10 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 section-fade">
          {stats.map(({ Icon, color, value, label, delay }) => (
            <div
              key={label}
              className="stagger-child"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color }}
                >
                  <Icon size={28} />
                </div>
                <p
                  className="text-2xl lg:text-3xl font-black text-gray-900 mb-1"
                  style={{ color }}
                >
                  {value}
                </p>
                <p className="text-sm text-gray-500 font-medium leading-snug">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
