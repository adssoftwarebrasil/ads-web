const STATS = [
  { value: '5+', label: 'Marcas Premium' },
  { value: 'Lins', label: 'e Guaiçara-SP' },
  { value: '100%', label: 'Originais' },
  { value: 'Rápido', label: 'Atendimento' },
];

export default function StatsBar() {
  return (
    <section className="py-10 bg-[#b31115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-3xl sm:text-4xl font-black text-[#fcc209]">{stat.value}</span>
              <span className="text-white/80 text-sm mt-1 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
