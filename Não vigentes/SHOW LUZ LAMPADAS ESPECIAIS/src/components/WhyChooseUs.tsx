import { Star, Zap, ThumbsUp, Package } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Star,
      title: '30 Anos de Mercado',
      description: 'Experiência consolidada e confiança de milhares de clientes em Goiás.'
    },
    {
      icon: Zap,
      title: 'Lâmpadas Especiais',
      description: 'Especialistas em lâmpadas para equipamentos hospitalares e odontológicos.'
    },
    {
      icon: ThumbsUp,
      title: 'Melhor Atendimento',
      description: 'Equipe técnica qualificada para indicar a solução ideal para você.'
    },
    {
      icon: Package,
      title: 'Estoque Variado',
      description: 'Grande variedade de produtos sempre disponíveis em nossa loja física.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#010510] relative overflow-hidden border-t border-[#00a6ff]/10">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #00a6ff 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00a6ff] text-white px-4 py-2 rounded-full font-semibold mb-6">
            Diferenciais
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Por Que Nos Escolher
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Tradição, qualidade e atendimento diferenciado para garantir a melhor solução em iluminação
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-[#1a1a2e] p-6 md:p-8 rounded-2xl border-2 border-[#00a6ff]/30 hover:border-[#fff457] transition-all duration-300 hover:shadow-xl hover:shadow-[#00a6ff]/20 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00a6ff] to-[#00a6ff]/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Visite nossa loja física ou entre em contato conosco
          </p>
          <a
            href="https://wa.me/5562993950049"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#fff457] text-[#010510] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffe621] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
