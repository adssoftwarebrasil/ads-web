const stats: { value: string; suffix: string; label: string }[] = [
  { value: '19', suffix: '+', label: 'Anos de Mercado' },
  { value: '750', suffix: ' kVA', label: 'Potência Máxima' },
  { value: 'SC', suffix: '', label: 'Estado Atendido' },
  { value: '4', suffix: '+', label: 'Serviços Especializados' },
];

export default function Stats() {
  return (
    <section className="bg-brand-blue py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
                <span className="text-brand-red">{stat.suffix}</span>
              </div>
              <div className="text-white/60 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
