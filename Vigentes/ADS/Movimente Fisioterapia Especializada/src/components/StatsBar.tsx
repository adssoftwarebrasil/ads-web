const stats = [
  { value: '+20', title: 'Anos de Experiência', sub: 'em Fisioterapia em Sorriso', delay: '0ms' },
  { value: '+10', title: 'Anos no Formato Atual', sub: 'com excelência e evolução', delay: '100ms' },
  { value: '5', title: 'Anos como Movimente', sub: 'consolidando nossa missão', delay: '200ms' },
  { value: '11', title: 'Especialidades', sub: 'em um único espaço', delay: '300ms' },
];

export default function StatsBar() {
  return (
    <section
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, rgb(62, 48, 123) 0%, rgb(26, 1, 96) 50%, rgb(13, 5, 32) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="text-center transition-all duration-600 opacity-100 translate-y-0"
              style={{ transitionDelay: stat.delay }}
            >
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 mx-auto"
                style={{ background: 'rgba(255, 255, 255, 0.08)' }}
              >
                <span
                  className="font-black text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgb(245, 197, 202), rgb(219, 67, 43)) text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </span>
              </div>
              <p className="text-white font-bold text-sm mb-1">{stat.title}</p>
              <p className="text-white/50 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
