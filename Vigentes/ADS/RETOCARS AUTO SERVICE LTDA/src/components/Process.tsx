import { Clipboard, Search, Wrench, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: 1,
      icon: Clipboard,
      title: 'Avaliação Gratuita',
      description: 'Entre em contato e receba um orçamento sem compromisso'
    },
    {
      number: 2,
      icon: Search,
      title: 'Diagnóstico Detalhado',
      description: 'Analisamos cada detalhe e explicamos o serviço necessário'
    },
    {
      number: 3,
      icon: Wrench,
      title: 'Execução Profissional',
      description: 'Nossa equipe trabalha com precisão e produtos premium'
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Entrega com Garantia',
      description: 'Seu veículo renovado com garantia de qualidade'
    }
  ];

  return (
    <section className="bg-white text-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black">
            Processo Simples e Transparente
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Do orçamento à entrega, você acompanha cada etapa
          </p>
        </div>

        {/* Steps Grid - 2 colunas mobile, 4 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 relative">
          {/* Connection Line - Desktop only */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-[#fafe05]/30">
            <div className="h-full bg-[#fafe05] w-3/4"></div>
          </div>

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              >
                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#fafe05] rounded-full flex items-center justify-center mb-3 md:mb-5 lg:mb-6 mx-auto">
                    <span className="text-xl md:text-2xl lg:text-3xl font-black text-black">{step.number}</span>
                  </div>

                  {/* Icon - tamanho único responsivo */}
                  <div className="bg-black/5 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-3 lg:mb-4 mx-auto">
                    <Icon className="text-black w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs md:text-lg lg:text-xl font-bold mb-1.5 md:mb-3 text-center leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] md:text-sm lg:text-base text-gray-600 text-center leading-tight md:leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}