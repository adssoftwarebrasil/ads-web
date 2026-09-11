const stats = [
  { value: '+8', label: 'Anos de Tradição', delay: 'section-reveal-delay-1' },
  { value: '4.6', label: 'Avaliação no Google', delay: 'section-reveal-delay-2' },
  { value: '7+', label: 'Categorias de Produtos', delay: 'section-reveal-delay-3' },
  { value: '2016', label: 'Ano de Fundação', delay: 'section-reveal-delay-4' },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-brand-dark-2 py-12 border-y border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className={`text-center ${s.delay}`}>
              <div
                className="font-display text-4xl md:text-5xl font-bold text-brand-gold mb-2"
                style={{ textShadow: 'rgba(252, 199, 35, 0.3) 0px 2px 12px' }}
              >
                {s.value}
              </div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
