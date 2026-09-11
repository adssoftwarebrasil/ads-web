import { Headset, Grid3x3, UserCheck, Store, Lightbulb, CreditCard, MapPin } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: Headset,
      title: 'Excelência no Atendimento',
      description: 'Nossa equipe é treinada para oferecer a melhor experiência',
    },
    {
      icon: Grid3x3,
      title: 'Variedade de Produtos',
      description: 'Mostramos opções que atendem a todas as preferências e necessidades',
    },
    {
      icon: UserCheck,
      title: 'Atendimento Personalizado',
      description: 'Consultoria para escolher o colchão perfeito para você',
    },
    {
      icon: Store,
      title: 'Showroom Amplo',
      description: 'Variedade de modelos para você testar antes de comprar',
    },
    {
      icon: Lightbulb,
      title: 'Soluções Inovadoras',
      description: 'Colchões anatomicamente projetados para seu conforto máximo',
    },
    {
      icon: CreditCard,
      title: 'Pagamento Facilitado',
      description: 'Parcelamento em até 12x sem juros para sua conveniência',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">
            Por Que Escolher a UDI Colchões
          </h2>
          <p className="text-lg text-primary-medium leading-relaxed">
            Optar pela UDI Colchões é garantir qualidade, conforto e atendimento excepcional para
            suas noites de sono
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-accent-pastel rounded-2xl p-9 text-center transition-all duration-300 hover:-translate-y-3 hover:border-primary-vibrant hover:shadow-2xl hover:bg-gradient-to-b hover:from-accent-offwhite hover:to-white"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-vibrant mb-6 shadow-lg">
                  <Icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-primary-medium leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary-vibrant text-white text-lg font-bold rounded-xl hover:bg-primary-medium transition-all hover:scale-105 shadow-xl"
          >
            <MapPin size={24} />
            Visite Nosso Showroom - Experimente nossos colchões
          </a>
        </div>
      </div>
    </section>
  );
}
