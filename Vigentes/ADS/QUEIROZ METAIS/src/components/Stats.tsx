import { TrendingUp, Users, Package, Building2, type LucideIcon } from 'lucide-react';

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: TrendingUp, value: '10+', label: 'Anos de Mercado' },
  { icon: Users, value: '500+', label: 'Clientes Satisfeitos' },
  { icon: Package, value: '5000+', label: 'Produtos Vendidos' },
  { icon: Building2, value: '300+', label: 'Projetos Realizados' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-40 w-32 h-32 border-4 border-white rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Números que Falam por Si</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Mais de uma década oferecendo qualidade e excelência no atendimento
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Icon size={40} />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
