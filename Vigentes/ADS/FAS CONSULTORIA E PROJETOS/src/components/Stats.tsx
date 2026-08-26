const stats = [
  { value: '+10', label: 'Anos de Mercado' },
  { value: '+500', label: 'Veículos Recuperados' },
  { value: '24h', label: 'Monitoramento Contínuo' },
  { value: '2', label: 'Estados Atendidos' },
];

export default function Stats() {
  return (
    <section className="py-12" style={{ backgroundColor: 'rgb(5, 31, 52)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="intersection-animate stat-divider text-center py-6 px-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold mb-1" style={{ color: 'rgb(203, 219, 233)' }}>
                {s.value}
              </div>
              <div className="text-sm font-medium" style={{ color: 'rgb(112, 136, 160)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
