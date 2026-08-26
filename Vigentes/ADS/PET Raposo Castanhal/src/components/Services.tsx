const services = [
  {
    emoji: '🩺',
    title: 'Consultório Veterinário',
    desc: 'Atendimento clínico geral, garantindo a saúde e o bem-estar do seu pet',
    gradient: 'from-[rgb(6,168,232)] to-[rgb(4,140,200)]',
    delay: 0,
  },
  {
    emoji: '💊',
    title: 'Farmácia Veterinária',
    desc: 'Medicamentos, vacinas, suplementos e produtos de higiene essenciais',
    gradient: 'from-[rgb(253,118,22)] to-[rgb(230,100,15)]',
    delay: 150,
  },
  {
    emoji: '🍖',
    title: 'Rações Premium',
    desc: 'As melhores marcas de rações, petiscos saudáveis e dietas específicas',
    gradient: 'from-green-500 to-green-600',
    delay: 300,
  },
  {
    emoji: '🎾',
    title: 'Acessórios e Brinquedos',
    desc: 'Coleiras, caminhas confortáveis e brinquedos interativos',
    gradient: 'from-[rgb(6,168,232)] to-[rgb(100,200,255)]',
    delay: 450,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`bg-gradient-to-br ${s.gradient} rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in-up`}
              style={{ animationDelay: `${s.delay}ms` }}
            >
              <div className="text-6xl mb-4">{s.emoji}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-white/90 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
