import { Calendar, Users, Trophy, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  value: string;
  title: string;
  sub: string;
  delay: number;
}

const stats: Stat[] = [
  {
    Icon: Calendar,
    value: '+30',
    title: 'Anos no mercado',
    sub: 'Fundada no início dos anos 90',
    delay: 0,
  },
  {
    Icon: Users,
    value: 'Casting',
    title: 'Completo de profissionais',
    sub: 'Colaboradores treinados e comprometidos',
    delay: 100,
  },
  {
    Icon: Trophy,
    value: '7+',
    title: 'Prêmios Liga',
    sub: 'Reconhecimento nacional consecutivo',
    delay: 200,
  },
  {
    Icon: MapPin,
    value: 'MT',
    title: 'Todo Mato Grosso',
    sub: 'Cuiabá e região atendidos',
    delay: 300,
  },
];

export default function StatsBar() {
  return (
    <section className="bg-[rgb(53,53,53)] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ Icon, value, title, sub, delay }) => (
            <div
              key={title}
              className="reveal text-center group"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[rgb(249,171,118)]/20 mb-4 group-hover:bg-[rgb(249,171,118)]/30 transition-colors">
                <Icon width={26} height={26} className="text-[rgb(249,171,118)]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[rgb(255,241,18)] mb-1">
                {value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">{title}</div>
              <div className="text-white/50 text-xs mt-1 hidden sm:block">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
