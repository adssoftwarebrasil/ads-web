import { Sprout, BookOpen, ClipboardCheck, ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Sprout,
      title: 'Plante Conosco',
      subtitle: 'Tecnologia que Gera Conexão',
      description:
        'Mais do que um programa comercial, o Plante Conosco é o elo estratégico entre tecnologia de ponta e relacionamento verdadeiro. Oferecemos condições especiais, suporte técnico dedicado e acompanhamento em todas as fases do plantio para garantir que cada safra alcance seu máximo potencial produtivo.',
      image: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FPlantaSozinhaGerminandoEmUmaPlanta%C3%A7%C3%A3oGrande.jpg',
      color: 'from-green-600 to-emerald-700',
    },
    {
      icon: BookOpen,
      title: 'P.T.A',
      subtitle: 'Portfólio Técnico Agrocolméia',
      description:
        'Tecnologia avançada, conhecimento especializado e estratégia agronômica para transformar o campo. O PTA reúne nossas melhores soluções técnicas, análises detalhadas e recomendações personalizadas baseadas em dados reais para impulsionar produtividade e rentabilidade em cada hectare.',
      image: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FProdutorApertandoM%C3%A3oDeUmaPessoaNoMeioDaSoja.jpg',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: ClipboardCheck,
      title: 'Agrocolméia Serviços',
      subtitle: 'Excelência do Solo à Colheita',
      description:
        'Com foco em análises de solo e biológicas de alta precisão, consultoria agronômica especializada e manejo técnico de culturas, oferecemos suporte completo para decisões assertivas. Cada serviço é projetado para maximizar eficiência, reduzir custos e aumentar a produtividade sustentável.',
      image: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FSoloComMudas.jpg',
      color: 'from-blue-600 to-cyan-700',
    },
  ];

  return (
    <section id="programas" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-[#fdaf2a] font-bold text-sm uppercase tracking-wider bg-[#fdaf2a]/10 px-4 py-2 rounded-full inline-block mb-4">
            Programas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12441f] mb-6 leading-tight">
            Inovação, Produtividade e Sustentabilidade
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Agrocolméia desenvolve projetos integrados que unem tecnologia, relacionamento e estratégia técnica. Cada programa foi criado para fortalecer o produtor rural, gerar valor e promover crescimento sustentável no agronegócio.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${program.color} rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-500`}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                </div>

                <div className={`p-8 lg:p-12 text-white flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-2">
                    <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                      {program.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">{program.title}</h3>

                  <p className="text-lg text-white/90 leading-relaxed mb-8">{program.description}</p>

                  <a
                    href="https://wa.me/5567999564186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-[#12441f] px-6 py-3 rounded-full font-bold hover:bg-[#fdaf2a] hover:text-white transition-all duration-300 self-start shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Conheça o Programa</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-8 lg:p-12 max-w-4xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#12441f] mb-4">
              Vamos Crescer Juntos, do Plantio à Colheita?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Na Agrocolméia, cada safra é uma nova oportunidade de construir produtividade, rentabilidade e sustentabilidade lado a lado com o produtor.
            </p>
            <a
              href="https://wa.me/5567999564186"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#12441f] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0d3317] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span>Fale com Nossa Equipe</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
