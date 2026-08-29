import { Calendar, Award, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  iconColor: string;
  value: string;
  suffix: string;
  label: string;
  delay: number;
}

const stats: Stat[] = [
  {
    icon: Calendar,
    iconColor: 'text-[rgb(230,10,12)]',
    value: '13',
    suffix: '+',
    label: 'Anos de Mercado',
    delay: 0,
  },
  {
    icon: Award,
    iconColor: 'text-yellow-400',
    value: '3',
    suffix: '',
    label: 'Top 3 Brasil em ABS',
    delay: 150,
  },
  {
    icon: Settings,
    iconColor: 'text-blue-400',
    value: '100',
    suffix: '%',
    label: 'Tecnologia de Ponta',
    delay: 300,
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-[rgb(6,28,58)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="relative group p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-900/20 opacity-100 translate-y-0"
                style={{ transitionDelay: `${s.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-[rgb(8,36,75)] to-black border border-white/10 shadow-[0_0_15px_rgba(230,10,12,0.15)] group-hover:shadow-[0_0_25px_rgba(230,10,12,0.4)] group-hover:scale-110 transition-all duration-300">
                    <Icon className={s.iconColor} width={32} height={32} />
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight tabular-nums bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    {s.value}
                    <span className="text-[rgb(230,10,12)] text-4xl align-top ml-1">{s.suffix}</span>
                  </div>
                  <div className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-widest group-hover:text-white transition-colors">
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
