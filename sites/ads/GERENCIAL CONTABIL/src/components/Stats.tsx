import { Award, Users, Clock, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const gold = 'rgb(192, 160, 98)';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  subtitle: string;
}

const stats: Stat[] = [
  { Icon: Award, iconClass: 'lucide lucide-award', title: 'Desde 2000', subtitle: '25 Anos de Experiência' },
  { Icon: Users, iconClass: 'lucide lucide-users', title: 'Foco em', subtitle: 'Excelência Empresarial' },
  { Icon: Clock, iconClass: 'lucide lucide-clock', title: 'Atendimento', subtitle: 'Personalizado' },
  { Icon: Shield, iconClass: 'lucide lucide-shield', title: 'Equipe', subtitle: 'Experiente' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ Icon, iconClass, title, subtitle }) => (
            <div key={subtitle} className="text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: 'rgb(241, 241, 241)' }}
              >
                <Icon size={32} className={iconClass} style={{ color: gold }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              <p className="text-gray-600">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
