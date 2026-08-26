import { TrendingUp, Award, CheckCircle, Clock, LucideIcon } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  Icon: LucideIcon;
}

const stats: Stat[] = [
  { value: '+70', label: '% de ocupação mínima desejada', Icon: TrendingUp },
  { value: '+1', label: 'ano de experiência acumulada', Icon: Award },
  { value: '+3', label: 'casos de sucesso em estadias corporativas', Icon: CheckCircle },
  { value: '+24', label: 'h por dia operando', Icon: Clock },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[rgb(51,58,114)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label, Icon }) => (
            <div
              key={label}
              className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <Icon width={48} height={48} className="text-[rgb(251,246,199)]" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">{value}</div>
              <div className="text-[rgb(251,246,199)] text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
