const stats = [
  { value: '15+', label: 'Anos de Experiência', sub: 'Desde 2010 no mercado' },
  { value: '8', label: 'Cidades Atendidas', sub: 'Norte Goiano' },
  { value: '100%', label: 'Aprovação Técnica', sub: 'SUVISA e Corpo de Bombeiros' },
  { value: '5.0', label: 'Avaliação Google', sub: 'Clientes satisfeitos' },
];

export default function Stats() {
  return (
    <section className="bg-pr-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-pr-dark p-8 text-center flex flex-col items-center group">
              <span className="font-serif text-4xl lg:text-5xl font-semibold text-pr-rose mb-2 transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </span>
              <span className="text-white text-sm font-medium mb-1">{stat.label}</span>
              <span className="text-pr-grey text-xs">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
