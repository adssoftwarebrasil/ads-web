const STATS: { value: string; label: string }[] = [
  { value: '+10', label: 'produtos na linha' },
  { value: '+5', label: 'certificações de qualidade' },
  { value: '+2.000', label: 'clientes satisfeitos' },
  { value: '+10', label: 'anos de experiência' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-700 opacity-100 translate-y-0"
            >
              <div className="text-5xl md:text-6xl font-bold text-[rgb(6,173,244)] mb-3">{stat.value}</div>
              <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
