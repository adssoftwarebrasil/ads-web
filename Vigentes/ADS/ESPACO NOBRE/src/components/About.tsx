import { AirVent, Maximize2, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: AirVent,
    title: 'Espaço 100% Climatizado',
    text: 'Conforto térmico perfeito em todas as estações',
  },
  {
    icon: Maximize2,
    title: 'Ambiente Amplo e Versátil',
    text: 'Espaço adaptável para diferentes tipos de eventos',
  },
  {
    icon: Users,
    title: 'Camarim Exclusivo e Climatizado',
    text: 'Conforto e privacidade para os anfitriões',
  },
  {
    icon: Heart,
    title: 'Atmosfera Aconchegante e Familiar',
    text: 'Um ambiente que faz você se sentir em casa',
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-[#cba26c]/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Nossa História:{' '}
              <span style={{ color: 'rgb(203, 162, 108)' }}>
                Nascemos Para Celebrar a Sua
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              O Espaço Nobre nasceu em 2014 de um sonho: criar um lugar que
              faltava em nossa região. Um espaço completo, sofisticado e
              acolhedor, onde cada detalhe é pensado para oferecer a melhor
              experiência. Hoje, com mais de uma década de história, nos
              orgulhamos de ser "a sua casa de festa", o cenário de centenas de
              histórias felizes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-[#cba26c]/20 hover:border-[#cba26c]/40 hover:-translate-y-2"
                  style={{ boxShadow: 'rgba(203, 162, 108, 0.1) 0px 8px 30px' }}
                >
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-all shadow-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgb(203, 162, 108) 0%, rgb(184, 149, 106) 100%)',
                      boxShadow: 'rgba(203, 162, 108, 0.3) 0px 8px 25px',
                    }}
                  >
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {f.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
