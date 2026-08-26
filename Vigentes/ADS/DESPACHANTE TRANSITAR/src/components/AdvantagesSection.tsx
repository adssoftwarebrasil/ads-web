import { Zap, Heart, Award } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      number: '01',
      icon: <Zap size={56} />,
      title: 'Agilidade no Atendimento',
      description: 'Processos rápidos e sem complicações. Resolvemos sua documentação em tempo recorde'
    },
    {
      number: '02',
      icon: <Heart size={56} />,
      title: 'Atendimento Personalizado',
      description: 'Foco nas necessidades específicas de cada cliente. Cada caso é único e merece atenção especial'
    },
    {
      number: '03',
      icon: <Award size={56} />,
      title: 'Experiência e Confiabilidade',
      description: '20 anos de atuação no mercado com milhares de clientes satisfeitos'
    }
  ];

  return (
    <section id="vantagens" className="relative bg-gradient-to-br from-[#0F5577] to-[#062E43] py-24 lg:py-32 overflow-hidden">
      {/* Pattern de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFB84D]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border-2 border-[#FFB84D]/40">
            <span className="text-[#FFB84D] font-bold text-sm uppercase tracking-widest">
              Vantagens
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Benefícios que Garantem sua Satisfação
          </h2>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Optar pela DESPACHANTE TRANSITAR é garantir agilidade, eficiência e atendimento personalizado
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-3xl p-10 hover:bg-white/15 hover:border-[#FFB84D] hover:-translate-y-3 transition-all duration-500 group shadow-2xl"
            >
              {/* Número de fundo gigante */}
              <div className="absolute top-4 right-6 text-[140px] font-black text-white/5 leading-none select-none">
                {advantage.number}
              </div>

              {/* Conteúdo */}
              <div className="relative z-10">
                {/* Ícone com fundo laranja */}
                <div className="bg-[#FFB84D] w-24 h-24 rounded-2xl flex items-center justify-center mb-8 text-[#062E43] shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {advantage.icon}
                </div>

                {/* Título - BRANCO PURO */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {advantage.title}
                </h3>

                {/* Descrição - BRANCO PURO */}
                <p className="text-white text-base lg:text-lg leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;