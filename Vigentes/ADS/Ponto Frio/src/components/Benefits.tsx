import { Package, Clock, Users, ThumbsUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Package,
      title: 'Estoque Completo',
      description: 'Amplo catálogo de peças multimarcas para refrigeração e climatização sempre disponíveis.'
    },
    {
      icon: Clock,
      title: 'Atendimento Ágil',
      description: 'Equipe preparada para atender suas necessidades com rapidez e eficiência de segunda a sábado.'
    },
    {
      icon: Users,
      title: 'Especialistas',
      description: 'Profissionais experientes prontos para orientar e encontrar a solução ideal para seu projeto.'
    },
    {
      icon: ThumbsUp,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com marcas reconhecidas no mercado para garantir durabilidade e desempenho.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#082432] mb-4">
            Por que escolher a <span className="text-[#166188]">Ki Ponto Frio</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos referência em Palmas quando o assunto é refrigeração. Qualidade, variedade e atendimento diferenciado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-[#166188] to-[#6ed2e1] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#082432] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
