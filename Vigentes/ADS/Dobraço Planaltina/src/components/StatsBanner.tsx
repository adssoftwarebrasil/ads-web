import { Award, Settings, Users, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  big: string;
  title: string;
  subtitle: string;
}

const stats: Stat[] = [
  { Icon: Award, big: '+10', title: 'ANOS', subtitle: 'Mercado DF e Entorno' },
  { Icon: Settings, big: 'TECH', title: 'TECNOLOGIA', subtitle: 'Corte a Laser Computadorizado' },
  { Icon: Users, big: 'PRO', title: 'ATENDIMENTO', subtitle: 'Equipe Técnica Especializada' },
  { Icon: Zap, big: 'FAST', title: 'AGILIDADE', subtitle: 'Entrega no Prazo' },
];

export default function StatsBanner() {
  return (
    <section className="bg-[rgb(139,0,2)] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ Icon, big, title, subtitle }) => (
            <div
              key={title}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all shadow-lg hover:shadow-2xl"
            >
              <Icon width={48} height={48} className="text-white mx-auto mb-4" />
              <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
                {big}
              </div>
              <div className="text-xl text-white font-semibold mb-1">{title}</div>
              <div className="text-white text-opacity-90">{subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
