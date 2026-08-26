import { TrendingUp, Users, Star, Award, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = { TrendingUp, Users, Star, Award };

const STATS = [
  { value: '0+', label: 'Anos de Experiência', icon: 'TrendingUp' },
  { value: '0+', label: 'Clientes Atendidos', icon: 'Users' },
  { value: '0.0', label: 'Estrelas no Google', icon: 'Star' },
  { value: '0', label: 'Serviços Especializados', icon: 'Award' },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20" style={{ background: 'rgb(77, 29, 88)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Números que refletem o compromisso da Meta Contabilidade com a excelência e o sucesso
            dos nossos clientes.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-white/10">
          {STATS.map((stat, i) => {
            const Icon = ICONS[stat.icon];
            return (
              <div key={i} className="flex flex-col items-center text-center p-8 animate-on-scroll">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-5">
                  <Icon size={26} className="text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
