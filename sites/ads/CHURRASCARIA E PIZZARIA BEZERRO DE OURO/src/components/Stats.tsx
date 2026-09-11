const stats = [
  { value: '24+', label: 'anos de tradição em churrasco' },
  { value: '0+', label: 'milhão de clientes atendidos' },
  { value: '17+', label: 'opções de carnes e acompanhamentos' },
  { value: '0°', label: 'rodízio pioneiro em MS' },
];

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-[rgb(31,29,30)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-6xl font-bold text-[rgb(180,137,27)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-white font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
