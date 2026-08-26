import { Clock, Award, HeartHandshake, CheckCircle } from 'lucide-react';

const WhyHireSection = () => {
  const reasons = [
    {
      icon: <Clock size={72} />,
      title: 'Economia de Tempo',
      description: 'Resolvemos todas as questões de documentação para você',
      detail: 'Você não precisa ir ao DETRAN'
    },
    {
      icon: <Award size={72} />,
      title: 'Expertise Comprovada',
      description: 'Profissionais experientes e qualificados',
      detail: '20 anos de mercado'
    },
    {
      icon: <HeartHandshake size={72} />,
      title: 'Atendimento Dedicado',
      description: 'Foco total nas suas necessidades',
      detail: 'Cada cliente é único'
    },
    {
      icon: <CheckCircle size={72} />,
      title: 'Simplicidade e Eficiência',
      description: 'Cuidamos de tudo para você, de forma simples e eficiente',
      detail: 'Sem burocracia'
    }
  ];

  return (
    <section className="bg-blue-off-white py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">
              Porque Contratar?
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-4">
            Nossa Expertise a Seu Serviço
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos serviços especializados e de alta qualidade para facilitar sua vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl hover:scale-105 hover:border-t-4 hover:border-accent transition-all group"
            >
              <div className="bg-gradient-to-br from-primary to-blue-light w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-2xl group-hover:rotate-12 transition-transform">
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold text-secondary mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {reason.description}
              </p>

              <span className="inline-block bg-blue-very-light px-5 py-2 rounded-full text-primary text-sm font-semibold">
                {reason.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;
