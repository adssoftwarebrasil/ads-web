const stats = [
  { value: '95%', title: 'Redução na Conta', sub: 'de economia na conta de luz' },
  { value: '25+', title: 'Anos de Garantia', sub: 'nos painéis fotovoltaicos' },
  { value: '4.9★', title: 'Avaliação Google', sub: 'nota média dos clientes' },
  { value: '100%', title: 'Projetos Entregues', sub: 'satisfação garantida' },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-brand-blue py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.title} className="text-center group">
              <div className="text-4xl sm:text-5xl font-bold text-brand-yellow mb-2 tabular-nums">
                <span>{s.value}</span>
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-1">{s.title}</div>
              <div className="text-white/50 text-xs sm:text-sm">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
