import { Award, Heart, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: '+15',
      subtitle: 'Anos de Experiência',
      description: 'Na adaptação de aparelhos auditivos',
      color: 'from-[#007E7A] to-[#007E7A]'
    },
    {
      icon: Heart,
      title: '100%',
      subtitle: 'Aprovação dos Clientes',
      description: 'Atendimento humanizado do início ao fim',
      color: 'from-[#ED0180] to-[#ED0180]'
    },
    {
      icon: Sparkles,
      title: 'Tecnologia',
      subtitle: 'de Ponta',
      description: 'Usamos as marcas mais avançadas do mercado',
      color: 'from-[#007E7A] to-[#ED0180]'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher a <span className="text-[#007E7A]">Amplia</span><span className="text-[#ED0180]">Som</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Garantimos tecnologia, acompanhamento personalizado em todas as fases do tratamento e facilidades que atendem, principalmente, pessoas da melhor idade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${feature.color}`}></div>

                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-xl font-semibold text-gray-800">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
