import { TrendingUp, Briefcase, Package, Users } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '10+', label: 'Anos de mercado', suffix: '' },
  { icon: Briefcase, value: '30+', label: 'Projetos executados', suffix: '' },
  { icon: Package, value: '5+', label: 'Linhas de produtos', suffix: '' },
  { icon: Users, value: '100+', label: 'Clientes satisfeitos', suffix: '' },
];

export default function Stats() {
  return (
    <section className="bg-dark-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-dark-800 border border-dark-700 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon size={22} className="text-primary" />
              </div>
              <span className="font-heading font-black text-3xl md:text-4xl text-white mb-1">
                {stat.value}
              </span>
              <span className="text-dark-300 text-sm font-body text-center leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
