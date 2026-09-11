const stats = [
  { value: '8+', title: 'Anos de Mercado', subtitle: 'Empresa consolidada e confiável', delay: 0 },
  { value: '2017', title: 'Fundação', subtitle: 'Reabertura com foco em excelência', delay: 100 },
  { value: '100%', title: 'Qualidade', subtitle: 'Produtos selecionados e garantidos', delay: 200 },
  { value: 'MT', title: 'Mato Grosso', subtitle: 'Cuiabá, Várzea Grande e região', delay: 300 },
];

export default function StatsBar() {
  return (
    <section className="bg-[#E93235] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="text-center transition-all duration-700 opacity-100 translate-y-0"
            style={{ transitionDelay: `${stat.delay}ms` }}
          >
            <div className="text-4xl sm:text-5xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-white font-bold text-base sm:text-lg mb-1">{stat.title}</div>
            <div className="text-white/70 text-xs sm:text-sm">{stat.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
