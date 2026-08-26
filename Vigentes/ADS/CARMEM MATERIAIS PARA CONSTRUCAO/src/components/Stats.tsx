const STATS: { value: string; label: string }[] = [
  { value: '16+', label: 'Anos de Experiência' },
  { value: '4.7★', label: 'Avaliação no Google' },
  { value: '5000+', label: 'Clientes Atendidos' },
  { value: '3', label: 'Cidades Atendidas' },
];

export default function Stats() {
  return (
    <section className="bg-[#29394C] py-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-white/60 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
