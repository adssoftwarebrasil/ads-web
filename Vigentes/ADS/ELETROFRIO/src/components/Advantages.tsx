const stats = [
  { value: '0+', label: 'Anos de Experiência' },
  { value: '0+', label: 'Clientes Atendidos' },
  { value: '0+', label: 'Motores Reparados/Mês' },
  { value: '0+', label: 'Parceiros Comerciais' },
];

const cards = [
  { title: 'Qualidade Comprovada', desc: 'Serviços realizados com padrão elevado de qualidade.' },
  { title: 'Atendimento Personalizado', desc: 'Conhecimento profundo das necessidades dos clientes.' },
  { title: 'Manutenção Rápida', desc: 'Agilidade na execução dos serviços.' },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 bg-[rgb(28,85,163)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-white/80 font-semibold text-lg mb-3">Vantagens</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Vantagens de Escolher Nossos Serviços
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Entenda porque somos a melhor escolha para suas necessidades em manutenção e revenda.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3">
                <span>{s.value}</span>
              </div>
              <p className="text-lg text-white/90 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div key={c.title} className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-3">{c.title}</h3>
              <p className="text-white/90">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/5564999368011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(28,85,163)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
