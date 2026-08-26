import { Package, Users, Shield, Zap, Clock, Award, CheckCircle, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Ampla Variedade de Produtos',
    description: 'Atendemos desde projetos pequenos residenciais até grandes demandas industriais com nosso extenso catálogo de produtos.',
    color: 'from-imperio-light-blue to-imperio-mid-blue',
    stats: [
      { value: '500+', label: 'Produtos' },
      { value: '10+', label: 'Marcas' },
    ],
    benefits: [
      'Bombas d\'água de todas as capacidades',
      'Ferramentas elétricas profissionais',
      'Acessórios e peças de reposição',
      'Produtos para piscinas completos',
    ]
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Buscamos entender suas necessidades específicas e oferecer as soluções mais adequadas para cada projeto.',
    color: 'from-imperio-blue to-imperio-dark',
    stats: [
      { value: '1000+', label: 'Clientes' },
      { value: '100%', label: 'Satisfação' },
    ],
    benefits: [
      'Consultoria técnica especializada',
      'Suporte antes e pós-venda',
      'Orçamentos personalizados',
      'Orientação para escolha ideal',
    ]
  },
];

const additionalBenefits = [
  {
    icon: Shield,
    title: 'Garantia de Qualidade',
    description: 'Produtos certificados das melhores marcas',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Zap,
    title: 'Pronta Entrega',
    description: 'Estoque sempre atualizado e disponível',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Agilidade em toda Belém e região',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Award,
    title: 'Melhor Custo-Benefício',
    description: 'Preços competitivos sem abrir mão da qualidade',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-10 md:py-14 lg:py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 md:gap-2 text-imperio-light-blue text-xs md:text-sm font-semibold uppercase tracking-wider mb-1.5 md:mb-2 bg-imperio-light-blue/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full">
            <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
            Nossos Diferenciais
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-imperio-dark mb-2 md:mb-3">
            Por Que Escolher o Império das Bombas?
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
            Garantimos qualidade, variedade e um atendimento que faz a diferença
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-6 md:space-y-10 lg:space-y-16 mb-6 md:mb-10 lg:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 lg:gap-12 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content Side */}
                <div className={isReversed ? 'lg:col-start-2' : ''}>
                  {/* Icon + Title */}
                  <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-5">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${feature.color} rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl lg:text-2xl font-bold text-imperio-dark mb-1 md:mb-2">
                        {feature.title}
                      </h3>
                      <div className="flex gap-3 md:gap-5">
                        {feature.stats.map((stat, idx) => (
                          <div key={idx} className="flex items-baseline gap-1">
                            <span className="text-base md:text-lg font-black text-imperio-light-blue">
                              {stat.value}
                            </span>
                            <span className="text-[10px] md:text-xs text-gray-500">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed mb-3 md:mb-5">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-1.5 md:space-y-2.5">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 md:gap-2.5">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-gray-700 leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Side - Card with gradient */}
                <div className={`${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`relative bg-gradient-to-br ${feature.color} rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-7 lg:p-12 shadow-xl md:shadow-2xl overflow-hidden group`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Large Icon */}
                      <div className="mb-4 md:mb-6 lg:mb-8">
                        <IconComponent className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white/90 group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 mb-4 md:mb-6 lg:mb-8">
                        {feature.stats.map((stat, idx) => (
                          <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl p-2.5 md:p-3 lg:p-4 border border-white/30">
                            <div className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-0.5 md:mb-1">
                              {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-white/90 font-medium">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quote or highlight */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 border border-white/20">
                        <p className="text-white/95 text-xs md:text-sm lg:text-base font-medium italic leading-relaxed">
                          "{feature.description}"
                        </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-7 lg:p-12 border border-gray-200">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-imperio-dark text-center mb-5 md:mb-7 lg:mb-12">
            Vantagens Adicionais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {additionalBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-lg md:rounded-xl p-3.5 md:p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-imperio-light-blue/30"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${benefit.bgColor} rounded-lg md:rounded-xl flex items-center justify-center mb-2.5 md:mb-3.5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`${benefit.color} w-5 h-5 md:w-6 md:h-6`} />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-imperio-dark mb-1 md:mb-1.5">
                    {benefit.title}
                  </h4>
                  <p className="text-[11px] md:text-xs text-gray-600 leading-snug">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;