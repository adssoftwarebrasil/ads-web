import { Calendar, Zap, TrendingDown, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  value: string;
  title: string;
  subtitle: string;
}

const stats: Stat[] = [
  { Icon: Calendar, iconClass: 'lucide lucide-calendar text-[rgb(255,100,30)]', value: '4+', title: 'Anos no Mercado', subtitle: 'Experiência comprovada' },
  { Icon: Zap, iconClass: 'lucide lucide-zap text-[rgb(255,100,30)]', value: '1000+', title: 'Projetos Instalados', subtitle: 'Clientes satisfeitos' },
  { Icon: TrendingDown, iconClass: 'lucide lucide-trending-down text-[rgb(255,100,30)]', value: '95%', title: 'Economia Média', subtitle: 'Na conta de luz' },
  { Icon: Clock, iconClass: 'lucide lucide-clock text-[rgb(255,100,30)]', value: '24h', title: 'Atendimento', subtitle: 'Suporte dedicado' },
];

export default function Stats() {
  return (
    <section className="bg-[rgb(20,85,200)] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div
              key={s.title}
              className="text-center space-y-3 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center">
                <s.Icon width={48} height={48} className={s.iconClass} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white">{s.value}</div>
              <div className="text-xl font-semibold text-white">{s.title}</div>
              <div className="text-sm text-gray-300">{s.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
