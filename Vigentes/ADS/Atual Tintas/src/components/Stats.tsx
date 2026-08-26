const stats = [
  { value: '25+', label: 'Anos no Mercado', color: 'rgb(164, 209, 58)' },
  { value: '1200+', label: 'Clientes Atendidos', color: 'rgb(124, 205, 223)' },
  { value: '100%', label: 'Compromisso com Qualidade', color: 'rgb(252, 224, 15)' },
  { value: '5.0', label: 'Avaliação no Google', color: 'rgb(217, 164, 0)' },
];

export default function Stats() {
  return (
    <section className="py-12 lg:py-16" style={{ backgroundColor: 'rgb(2, 2, 2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-4">
              <div
                className="text-4xl lg:text-5xl font-black mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <p className="text-sm font-medium text-white/60 max-w-[120px] leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
