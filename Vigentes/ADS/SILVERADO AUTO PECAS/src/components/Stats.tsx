const stats = [
  { value: '20+', label: 'Anos no Mercado' },
  { value: '100%', label: 'Rastreabilidade' },
  { value: 'Todo', label: 'Brasil Atendido' },
  { value: 'Verde', label: 'Economia Circular' },
];

export default function Stats() {
  return (
    <section className="bg-brand-blue py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">{s.value}</p>
              <p className="text-blue-200 text-sm md:text-base font-medium tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
