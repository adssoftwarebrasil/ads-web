const stats = [
  { value: '0+', label: 'Anos de Experiência' },
  { value: '0+', label: 'Clientes Atendidos' },
  { value: '0/7', label: 'Atendimento Disponível' },
  { value: '0%', label: 'Satisfação Garantida' },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 transition-all duration-1000 opacity-100 translate-y-0">
          Números que Falam por Si
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-yellow-500 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
