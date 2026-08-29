interface Stat {
  value: string;
  suffix: string;
  label: string;
  delay: number;
}

const stats: Stat[] = [
  { value: '4.9', suffix: '', label: 'Avaliação no Google', delay: 0 },
  { value: '100', suffix: '%', label: 'Clientes Satisfeitos', delay: 100 },
  { value: '1000', suffix: '+', label: 'Veículos Atendidos', delay: 200 },
  { value: '8', suffix: 'h/dia', label: 'Horas de Atendimento', delay: 300 },
];

export default function Stats() {
  return (
    <section className="bg-[#034087] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 transition-all duration-700 opacity-100 translate-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                {stat.value}
                <span className="text-sky-300 text-3xl lg:text-4xl">{stat.suffix}</span>
              </div>
              <div className="text-white/70 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
