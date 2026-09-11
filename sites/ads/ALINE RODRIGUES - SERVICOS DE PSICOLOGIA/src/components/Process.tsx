import { MessageCircle, UserPlus, Target, Calendar, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Primeiro Contato',
      description: 'Entre em contato pelo WhatsApp. Vou tirar suas dúvidas e agendar a primeira sessão.',
    },
    {
      icon: UserPlus,
      title: 'Primeira Sessão',
      description: 'Momento de acolhimento em que vou conhecer mais sobre a sua história, entender suas dificuldades emocionais e o que você está buscando na terapia.',
    },
    {
      icon: Target,
      title: 'Definição de Metas',
      description: 'Juntos, estabelecemos metas claras que irão guiar todo o processo terapêutico.',
    },
    {
      icon: Calendar,
      title: 'Acompanhamento Semanal',
      description: 'Sessões semanais estruturadas com técnicas da TCC.',
    },
    {
      icon: TrendingUp,
      title: 'Evolução e Alta',
      description: 'Trabalho com início, meio e fim. A alta ocorre quando você desenvolve habilidades suficientes para lidar melhor com seus desafios no dia a dia.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-beige-dark mb-4">
            Como Funciona
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            O Processo Terapêutico
          </h2>
        </div>

        {/* Versão Desktop (Grid com linha conectora) */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-16 left-0 right-0 h-1 bg-beige-light"></div>
            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-6 border-4 border-white shadow-lg transition-all hover:scale-110"
                    style={{
                      backgroundColor:
                        index % 3 === 0 ? '#9FB8AD' : index % 3 === 1 ? '#B6A792' : '#C4A896',
                    }}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-xl font-bold text-text-main mb-3">{step.title}</div>
                  <p className="text-sm text-beige-dark px-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Versão Mobile (Lista vertical) */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor:
                    index % 3 === 0 ? '#9FB8AD' : index % 3 === 1 ? '#B6A792' : '#C4A896',
                }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-text-main mb-2">{step.title}</div>
                <p className="text-beige-dark">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}