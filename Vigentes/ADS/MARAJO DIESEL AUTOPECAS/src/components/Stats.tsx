const stats = [
  { value: '+10', label: 'Anos de Experiência' },
  { value: '+5', label: 'Funcionários Dedicados' },
  { value: '+100', label: 'Fornecedores Parceiros' },
  { value: '+200', label: 'Clientes Atendidos' },
];

export default function Stats() {
  return (
    <section className="bg-[rgb(1,51,153)] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(255,116,16)] mb-2">
                {stat.value}
              </div>
              <div className="text-base md:text-lg text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
