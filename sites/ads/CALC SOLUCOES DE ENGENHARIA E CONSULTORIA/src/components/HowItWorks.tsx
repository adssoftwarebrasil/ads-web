interface Step {
  number: string;
  emoji: string;
  title: string;
  description: string;
  barGradient: string;
  badgeGradient: string;
  progressGradient: string;
  delay: string;
}

const steps: Step[] = [
  {
    number: '1',
    emoji: '📞',
    title: 'Consulta',
    description:
      'Entre em contato conosco para avaliar suas necessidades e realizar um estudo personalizado da sua demanda energética.',
    barGradient: 'from-[#facc22] to-[#f88c00]',
    badgeGradient: 'from-[#facc22] to-[#f88c00]',
    progressGradient: 'from-[#facc22] to-[#f88c00]',
    delay: '400ms',
  },
  {
    number: '2',
    emoji: '📋',
    title: 'Planejamento',
    description:
      'Desenvolvemos um projeto completo com a melhor solução em energia solar para o seu caso, incluindo dimensionamento e orçamento detalhado.',
    barGradient: 'from-[#f88c00] to-[#facc22]',
    badgeGradient: 'from-[#f88c00] to-[#facc22]',
    progressGradient: 'from-[#f88c00] to-[#facc22]',
    delay: '550ms',
  },
  {
    number: '3',
    emoji: '⚡',
    title: 'Instalação',
    description:
      'Nossa equipe técnica realiza a instalação completa do sistema fotovoltaico com qualidade e segurança.',
    barGradient: 'from-[#facc22] to-[#f88c00]',
    badgeGradient: 'from-[#facc22] to-[#f88c00]',
    progressGradient: 'from-[#facc22] to-[#f88c00]',
    delay: '700ms',
  },
  {
    number: '4',
    emoji: '🛠️',
    title: 'Suporte',
    description:
      'Acompanhamento contínuo, manutenção preventiva e suporte técnico para garantir o melhor desempenho do seu sistema.',
    barGradient: 'from-[#f88c00] to-[#facc22]',
    badgeGradient: 'from-[#f88c00] to-[#facc22]',
    progressGradient: 'from-[#f88c00] to-[#facc22]',
    delay: '850ms',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00108a]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#facc22]/5 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00108a] mb-4 transition-all duration-1000 opacity-0 translate-y-8">
            Como Funciona
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#facc22] via-[#f88c00] to-[#facc22] rounded-full transition-all duration-1000 delay-200 opacity-0 scale-x-0"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 opacity-0 translate-y-8">
            Processo simples e transparente do início ao fim
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-[35px] top-[35px] bottom-[35px] w-1 bg-gradient-to-b from-[#facc22] via-[#f88c00] to-[#facc22] rounded-full"></div>
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative transition-all duration-1000 opacity-0 -translate-x-8"
                style={{ transitionDelay: step.delay }}
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="relative flex-shrink-0 z-10">
                    <div
                      className="w-[70px] h-[70px] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl relative overflow-hidden group"
                      style={{
                        background:
                          'linear-gradient(135deg, rgb(0, 16, 138) 0%, rgb(0, 21, 184) 100%)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10">{step.number}</span>
                      <div className="absolute inset-0 rounded-full border-2 border-[#facc22] scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl transform hover:scale-110 transition-transform duration-300">
                      {step.emoji}
                    </div>
                  </div>
                  <div className="flex-1 group">
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.barGradient}`}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#facc22]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-[#00108a] group-hover:text-[#001570] transition-colors duration-300">
                            {step.title}
                          </h3>
                          <div
                            className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.badgeGradient} flex items-center justify-center text-white text-sm font-bold shadow-md`}
                          >
                            {step.number}
                          </div>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                        <div className="mt-6 flex items-center gap-2">
                          <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${step.progressGradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">{step.number}/4</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#facc22]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-8">
                    <svg
                      className="w-8 h-8 text-[#facc22] animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center transition-all duration-1000 delay-1000 opacity-0 translate-y-8">
          <div className="bg-gradient-to-r from-[#00108a] to-[#0015b8] rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#facc22]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#f88c00]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Pronto para começar?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Entre em contato e receba uma proposta personalizada para seu projeto
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-[#facc22] text-[#00108a] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#f88c00] transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Solicitar Orçamento
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
