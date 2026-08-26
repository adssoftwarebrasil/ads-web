const stats = [
  { value: '12', label: 'anos de experiência' },
  { value: '+80', label: 'produtos em estoque' },
  { value: '+100', label: 'clientes atendidos' },
  { value: '+10', label: 'marcas parceiras' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[rgb(45,48,145)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl lg:text-6xl font-bold text-[rgb(248,232,48)] mb-2">{s.value}</div>
              <div className="text-white text-sm lg:text-lg font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
