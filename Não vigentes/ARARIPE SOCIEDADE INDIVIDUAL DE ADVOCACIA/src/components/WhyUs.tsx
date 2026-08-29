import { Target, Heart, Lightbulb, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Heart,
    title: 'Humanidade',
    description: 'Tratamos cada caso com empatia e respeito, entendendo o impacto das questões jurídicas na vida das pessoas.',
  },
  {
    icon: Target,
    title: 'Estratégia',
    description: 'Cada processo recebe uma abordagem estratégica personalizada, maximizando as chances de sucesso.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Equipe jovem e atualizada, utilizando as mais modernas ferramentas e técnicas jurídicas disponíveis.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados',
    description: 'Histórico sólido em todas as áreas de atuação, com centenas de casos resolvidos com êxito em Goiás.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#003F5C] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <img
          src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
              Por que nos escolher
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Um escritório diferente,{' '}
              <span className="text-[#EAE6AE]">resultados excepcionais.</span>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              A Araripe Chagas se destaca pela combinação única de profissionalismo com uma abordagem humana e dinâmica. Não somos apenas advogados, somos parceiros jurídicos comprometidos com o seu sucesso.
            </p>
            <a
              href="http://wa.me/556281124626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#b8963e] text-[#003F5C] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A84C]/30 hover:-translate-y-0.5"
            >
              Agende sua consulta gratuita
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9A84C]/40 rounded-2xl p-7 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 bg-[#C9A84C]/20 group-hover:bg-[#C9A84C]/30 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                    <Icon size={22} className="text-[#EAE6AE]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{pillar.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
