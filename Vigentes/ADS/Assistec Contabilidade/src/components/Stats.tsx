interface Stat {
  value: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  { value: '30+', label: 'Anos de Experiência', sub: 'Atuando desde 1994' },
  { value: '500+', label: 'Empresas Assessoradas', sub: 'Em toda a região de MT' },
  { value: '5.0', label: 'Estrelas no Google', sub: 'Nota máxima de satisfação' },
  { value: '100%', label: 'Conformidade Fiscal', sub: 'Zero autuações nos clientes' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-brand-burgundy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:text-brand-blue-light transition-colors duration-300">
                <span>{stat.value}</span>
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-1">{stat.label}</div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
