interface Stat {
  value: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: '5+', suffix: '', label: 'Anos de Experiência' },
  { value: '1000', suffix: '+', label: 'Projetos Entregues' },
  { value: '5.0', suffix: '★', label: 'Avaliação no Google' },
  { value: '100', suffix: '%', label: 'Clientes Satisfeitos' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-brand-red relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 opacity-100 translate-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-white">
                {stat.value}
                <span className="text-white/80">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm sm:text-base text-white/75 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
