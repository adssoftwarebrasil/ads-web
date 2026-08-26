import { Leaf, Zap, Handshake, Target, TrendingUp, DollarSign } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Leaf,
      title: 'Sustentabilidade e Responsabilidade Agrícola',
      description:
        'Boas práticas de manejo sustentável e uso racional de insumos, respeitando o meio ambiente e garantindo produtividade a longo prazo.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Inovação e Tecnologia Aplicada',
      description:
        'Programas exclusivos e soluções técnicas baseadas em dados reais, validações de campo e tecnologia de ponta para resultados superiores.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Handshake,
      title: 'Relacionamento e Parceria Verdadeira',
      description:
        'Proximidade genuína com o produtor e suporte contínuo em todas as etapas da produção, construindo relações duradouras.',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Target,
      title: 'Acompanhamento Especializado',
      description:
        'Equipe técnica altamente qualificada com experiência prática e foco em resultados reais a campo, não apenas teoria.',
      gradient: 'from-red-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Resultados Comprovados',
      description:
        'Aumento consistente de produtividade e redução significativa de custos operacionais em cada safra de nossos parceiros.',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      icon: DollarSign,
      title: 'Entrega de Valor Real',
      description:
        'Cada solução é pensada estrategicamente para gerar retorno líquido positivo e crescimento sustentável do seu negócio.',
      gradient: 'from-green-600 to-teal-600',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#12441f] rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fdaf2a] rounded-full opacity-5 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-[#fdaf2a] font-bold text-sm uppercase tracking-wider bg-[#fdaf2a]/10 px-4 py-2 rounded-full inline-block mb-4">
            Por Que Escolher a Agrocolméia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12441f] mb-6 leading-tight">
            Seu Parceiro de Confiança no Campo
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Agrocolméia une conhecimento técnico profundo, relacionamento genuíno e inovação constante para entregar soluções completas que fortalecem o produtor e transformam resultados em cada safra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className={`w-full h-full bg-gradient-to-br ${reason.gradient} rounded-full blur-2xl`}></div>
              </div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#12441f] mb-4 group-hover:text-[#fdaf2a] transition-colors duration-300">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#12441f] to-[#1a5f2e] rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FPlanta%C3%A7%C3%A3oDeMilho.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Unidos com o Produtor para Resultados Extraordinários
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Produtividade, rentabilidade e sustentabilidade não são apenas promessas. São compromissos que cumprimos em cada safra, lado a lado com você.
            </p>
            <a
              href="https://wa.me/5567999564186"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#fdaf2a] text-[#12441f] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e89d1e] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span>Fale com Nossa Equipe</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
