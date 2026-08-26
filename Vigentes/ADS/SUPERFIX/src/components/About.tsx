import { Award, Package, Truck, HeartHandshake, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Mais de 10 Anos de Experiência',
      description: 'Consolidados no mercado de materiais de fixação e ferramentas profissionais em Mato Grosso.',
      color: 'text-[#0b77aa]',
      bg: 'bg-[#0b77aa]'
    },
    {
      icon: Package,
      title: 'Marcas Líderes do Mercado',
      description: 'Trabalhamos exclusivamente com as melhores e mais confiáveis marcas do setor.',
      color: 'text-[#b13437]',
      bg: 'bg-[#b13437]'
    },
    {
      icon: HeartHandshake,
      title: 'Atacado e Varejo',
      description: 'Atendemos desde grandes empresas até profissionais autônomos com a mesma excelência.',
      color: 'text-[#0b77aa]',
      bg: 'bg-[#0b77aa]'
    },
    {
      icon: Truck,
      title: 'Entregas para Todo Mato Grosso',
      description: 'Logística eficiente para atender todas as regiões do estado com agilidade.',
      color: 'text-[#b13437]',
      bg: 'bg-[#b13437]'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Produtos certificados e com garantia de fábrica para sua total segurança.',
      color: 'text-[#0b77aa]',
      bg: 'bg-[#0b77aa]'
    },
    {
      icon: TrendingUp,
      title: 'Atendimento Especializado',
      description: 'Equipe técnica capacitada para orientar na escolha da melhor solução para seu projeto.',
      color: 'text-[#b13437]',
      bg: 'bg-[#b13437]'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher a <span className="text-[#0b77aa]">SUPERFIX</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Somos referência em soluções completas para fixação e ferramentas profissionais.
            Nossa missão é fornecer produtos de alta qualidade com atendimento diferenciado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#0b77aa] hover:shadow-xl transition-all duration-300"
            >
              <div className={`${feature.bg} bg-opacity-10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={feature.color} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#0b77aa] to-[#095f88] rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Seu Parceiro em Soluções de Fixação
              </h3>
              <p className="text-lg text-white text-opacity-90 leading-relaxed">
                Com mais de uma década de atuação, a SUPERFIX se consolidou como distribuidora
                de confiança para profissionais e empresas que buscam qualidade, variedade e
                atendimento especializado em todo Mato Grosso.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">+10</p>
                <p className="text-sm opacity-90">Anos de Mercado</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">27</p>
                <p className="text-sm opacity-90">Categorias</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-sm opacity-90">Qualidade</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold mb-2">MT</p>
                <p className="text-sm opacity-90">Cobertura Total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
