import { Calendar, Users, Wrench, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  value: string;
  title: string;
  sub: string;
}

const stats: Stat[] = [
  { Icon: Calendar, iconClass: 'lucide lucide-calendar', value: '20+', title: 'Anos de Experiência', sub: 'Atuando desde 2005' },
  { Icon: Users, iconClass: 'lucide lucide-users', value: '5.000+', title: 'Clientes Atendidos', sub: 'Residências e comércios' },
  { Icon: Wrench, iconClass: 'lucide lucide-wrench', value: '10.000+', title: 'Instalações Realizadas', sub: 'Em Pará de Minas e região' },
  { Icon: Award, iconClass: 'lucide lucide-award', value: '98%', title: 'Satisfação dos Clientes', sub: 'Nota máxima no Google' },
];

export default function Stats() {
  return (
    <section className="bg-gradient-brand py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s) => (
            <div key={s.title} className="stat-card text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <s.Icon className={`${s.iconClass} h-6 w-6 text-white`} />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
                <span>{s.value}</span>
              </div>
              <div className="text-white font-semibold text-sm lg:text-base mb-1">{s.title}</div>
              <div className="text-white/60 text-xs hidden sm:block">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
