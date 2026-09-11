import { Users, Shield, Sparkles, Award, type LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: Users,
    number: '1',
    title: 'Atendimento Especializado',
    description: 'Profissionais dedicados ao bem-estar do seu pet.',
  },
  {
    icon: Shield,
    number: '2',
    title: 'Ambiente Seguro',
    description: 'Espaço projetado para conforto e segurança.',
  },
  {
    icon: Sparkles,
    number: '3',
    title: 'Serviços Personalizados',
    description: 'Cuidados adaptados às necessidades de cada animal.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Nossas Vantagens
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Descubra o que torna a Animaly Pet Shop a melhor escolha
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Oferecemos uma experiência completa e diferenciada para seu pet,
              com profissionais qualificados e um ambiente acolhedor.
            </p>
            <div className="space-y-8">
              {advantages.map((adv) => {
                const Icon = adv.icon;
                return (
                  <div
                    key={adv.number}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#b900ba] to-[#38d060] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#38d060] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {adv.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {adv.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 bg-gradient-to-r from-[#b900ba]/10 to-[#38d060]/10 border-l-4 border-[#b900ba] rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <Award className="text-[#b900ba] flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Profissionais experientes e qualificados
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A cada 6 meses são feitos cursos de reciclagem com nossos
                    colaboradores para que se mantenham atualizados.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/animalyp%2FPor%20Que%20Contratar.jpg"
              alt="Por que contratar"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-8 max-w-xs hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-[#b900ba] to-[#38d060] p-4 rounded-xl">
                  <svg
                    className="text-white"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">Foco</div>
                  <div className="text-gray-600">Na Saúde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
