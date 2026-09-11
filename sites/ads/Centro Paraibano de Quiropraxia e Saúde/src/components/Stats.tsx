import { Calendar, Users, Star, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Calendar, iconClass: 'lucide lucide-calendar text-cyan-brand', value: '+14', label: 'Anos de Experiência' },
  { Icon: Users, iconClass: 'lucide lucide-users text-cyan-brand', value: '+60 mil', label: 'Pacientes Atendidos' },
  { Icon: Star, iconClass: 'lucide lucide-star text-cyan-brand', value: '531+', label: 'Avaliações 5 Estrelas' },
  { Icon: Award, iconClass: 'lucide lucide-award text-cyan-brand', value: '16', label: 'Anos de Método Exclusivo' },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-navy py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-brand/15 border border-cyan-brand/30 flex items-center justify-center group-hover:bg-cyan-brand/25 transition-colors">
                <s.Icon width={22} height={22} className={s.iconClass} />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-white">{s.value}</p>
                <p className="text-white/60 text-xs md:text-sm mt-0.5 leading-tight">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
