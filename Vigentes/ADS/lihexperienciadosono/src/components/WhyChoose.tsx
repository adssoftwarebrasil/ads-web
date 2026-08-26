import { Award, Shield, Star } from 'lucide-react';

const WhyChoose = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Experiência Reconhecida',
      description: 'Mais de 20 anos de expertise em conforto do sono'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com os melhores materiais internacionais'
    },
    {
      icon: Star,
      title: 'Conforto Superior',
      description: 'Garanta noites de sono reparador e tranquilo com produtos premium'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
            Diferenciais
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por Que Escolher a LIH?
          </h2>

          <p className="text-lg md:text-xl text-secondary">
            Entenda porque somos a referência em sonhos de qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-secondary leading-relaxed">
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

export default WhyChoose;
