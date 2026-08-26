import { Shield, Users, CreditCard } from 'lucide-react';

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: Shield,
      title: 'Qualidade Garantida em Todos os Produtos',
      description: 'Utilizamos somente materiais de alta qualidade das melhores marcas do mercado',
      bgColor: 'bg-accent-offwhite',
    },
    {
      icon: Users,
      title: 'Atendimento Especializado e Consultivo',
      description: 'Equipe pronta para atender suas necessidades e ajudar na escolha perfeita',
      bgColor: 'bg-accent-pastel',
    },
    {
      icon: CreditCard,
      title: 'Facilidade de Pagamento',
      description: 'Parcelamento em até 12x sem juros no cartão de crédito',
      bgColor: 'bg-accent-soft',
    },
  ];

  const stats = [
    { value: '+10 anos', label: 'De experiência' },
    { value: '+1.000', label: 'clientes satisfeitos' },
    { value: '+5', label: 'marcas de destaque' },
    { value: '+200', label: 'produtos disponíveis' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">
            Vantagens de Comprar na UDI Colchões
          </h2>
          <p className="text-lg text-primary-medium leading-relaxed">
            Descubra os benefícios de escolher a UDI Colchões para suas noites de sono
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-b from-white to-accent-offwhite rounded-3xl p-12 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 ${advantage.bgColor} rounded-full mb-7 p-5`}
                >
                  <Icon size={40} className="text-primary-vibrant" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 leading-snug">
                  {advantage.title}
                </h3>
                <p className="text-primary-medium leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary-light mb-2 sm:mb-3">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white/90 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
