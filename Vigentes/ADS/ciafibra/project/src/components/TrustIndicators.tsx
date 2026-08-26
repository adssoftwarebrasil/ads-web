import { Shield, Edit3, Heart, MapPin } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Tecidos resistentes e acabamento de alto padrão para maior durabilidade',
    },
    {
      icon: Edit3,
      title: 'Personalização Completa',
      description: 'Bordado, silk e modelagem sob medida para a identidade da sua marca',
    },
    {
      icon: Heart,
      title: 'Conforto e Segurança',
      description: 'Uniformes que unem praticidade, conforto e proteção no dia a dia',
    },
    {
      icon: MapPin,
      title: 'Atendimento Regional',
      description: 'Piracicaba e região - Atendimento ágil e prazos confiáveis para empresas de todos os portes',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-[#D7B46A] to-[#c19e56] p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;