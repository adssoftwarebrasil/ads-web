const stats = [
  { value: '+30', label: 'anos de experiência no setor automotivo', delay: '0ms' },
  { value: '+10.000', label: 'veículos atendidos com qualidade', delay: '100ms' },
  { value: '+500', label: 'clientes empresariais atendidos', delay: '200ms' },
  { value: '2', label: 'unidades estrategicamente localizadas', delay: '300ms' },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center transition-all duration-800 opacity-100 translate-y-0"
              style={{ transitionDelay: stat.delay }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gold mb-4">
                {stat.value}
              </div>
              <p className="text-base md:text-lg text-gray-700 max-w-xs mx-auto leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
