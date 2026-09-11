const stats = [
  { number: '40+', title: 'Anos', subtitle: 'de experiência' },
  { number: '8.000+', title: 'Produtos', subtitle: 'em catálogo' },
  { number: '5.000+', title: 'Clientes', subtitle: 'atendidos' },
];

export default function Stats() {
  return (
    <section className="relative py-16 md:py-24 bg-[#FFE600]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-xl md:text-2xl font-semibold text-black mb-1">{stat.title}</div>
              <div className="text-base md:text-lg text-black/80">{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
