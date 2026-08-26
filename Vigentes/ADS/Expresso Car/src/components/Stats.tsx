const stats = [
  { value: '10+', label: 'Anos de experiência' },
  { value: '5mil+', label: 'Veículos atendidos' },
  { value: '100+', label: 'Clientes satisfeitos' },
  { value: '20+', label: 'Tonalidades de pintura' },
];

export default function Stats() {
  return (
    <section className="bg-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center group">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-red-500 leading-none mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
