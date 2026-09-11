interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '10+', label: 'Anos' },
  { value: '500+', label: 'Clientes Satisfeitos' },
  { value: '1,000+', label: 'Pets Atendidos' },
  { value: '30+', label: 'Produtos em Estoque' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#09b588] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trabalhamos apenas com as melhores marcas do mercado pet
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-lg text-white/90 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
