import { useState } from 'react';
import { FileText, Search, Phone, CheckCircle, FileCheck, Key, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Organize suas finanças',
    description: 'Levante todas as informações sobre seu contrato e capacidade de pagamento atual',
    icon: FileText,
    color: 'from-emerald-400 to-emerald-600',
    highlight: 'Análise completa em minutos'
  },
  {
    number: 2,
    title: 'Verifique o contrato',
    description: 'Análise detalhada de taxas, juros e possíveis cláusulas abusivas',
    icon: Search,
    color: 'from-teal-400 to-teal-600',
    highlight: 'Transparência total'
  },
  {
    number: 3,
    title: 'Negociação estratégica',
    description: 'Nossa equipe negocia diretamente com as instituições financeiras',
    icon: Phone,
    color: 'from-cyan-400 to-cyan-600',
    highlight: 'Até 40% de economia'
  },
  {
    number: 4,
    title: 'Revisão detalhada',
    description: 'Avaliamos todos os termos e condições antes da sua aprovação',
    icon: CheckCircle,
    color: 'from-blue-400 to-blue-600',
    highlight: 'Segurança garantida'
  },
  {
    number: 5,
    title: 'Formalização do acordo',
    description: 'Documentação completa e juridicamente segura do novo contrato',
    icon: FileCheck,
    color: 'from-indigo-400 to-indigo-600',
    highlight: 'Processo 100% digital'
  },
  {
    number: 6,
    title: 'Veículo quitado',
    description: 'Celebre a conquista do seu veículo completamente livre de dívidas',
    icon: Key,
    color: 'from-violet-400 to-violet-600',
    highlight: 'Liberdade financeira'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5508005552569?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações', '_blank');
  };

  return (
    <section className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        {/* Premium Header - COMPACTADO NO MOBILE */}
        <div className="text-center mb-10 md:mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-emerald-200 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
            <Sparkles size={14} className="text-emerald-600 md:w-4 md:h-4" />
            <span className="text-slate-700">Processo Simplificado</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight px-4">
            Como Funciona a
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Quitação do Seu Veículo
            </span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Um processo transparente e eficiente em 6 etapas estratégicas
          </p>
        </div>

        {/* Modern Timeline with Interactive Cards - OTIMIZADO PARA MOBILE */}
        <div className="relative">
          {/* Connection line - OCULTA NO MOBILE */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-teal-200 to-violet-200 hidden lg:block"></div>

          <div className="space-y-4 md:space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`group relative transition-all duration-500 ${
                    isActive ? 'scale-[1.02]' : 'scale-100'
                  }`}
                >
                  <div className={`bg-white rounded-xl md:rounded-2xl border-2 transition-all duration-500 ${
                    isActive 
                      ? 'border-emerald-300 shadow-2xl shadow-emerald-500/10' 
                      : 'border-slate-200 shadow-lg hover:border-slate-300'
                  }`}>
                    <div className="p-5 md:p-8 lg:p-10">
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                        {/* Icon Section - REDUZIDO NO MOBILE */}
                        <div className="relative flex-shrink-0">
                          <div className={`relative w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center transition-transform duration-500 ${
                            isActive ? 'scale-110 rotate-3' : 'scale-100'
                          }`}>
                            <Icon size={24} className="text-white md:w-8 md:h-8" strokeWidth={2} />
                          </div>
                          
                          {/* Step number badge - REDUZIDO NO MOBILE */}
                          <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900 text-white text-xs md:text-sm font-bold flex items-center justify-center shadow-lg">
                            {step.number}
                          </div>
                        </div>

                        {/* Content - COMPACTADO NO MOBILE */}
                        <div className="flex-1 space-y-3 md:space-y-4">
                          <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-1.5 md:mb-2 group-hover:text-emerald-600 transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                              {step.description}
                            </p>
                          </div>

                          {/* Highlight badge - COMPACTADO NO MOBILE */}
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500"></div>
                            <span className="text-xs md:text-sm font-semibold text-emerald-700">
                              {step.highlight}
                            </span>
                          </div>

                          {/* Progress bar - COMPACTADO NO MOBILE */}
                          <div className="flex items-center gap-3 md:gap-4 pt-1 md:pt-2">
                            <div className="flex-1 h-1 md:h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000 ${
                                  isActive ? 'w-full' : `w-[${(step.number / 6) * 100}%]`
                                }`}
                              ></div>
                            </div>
                            <span className="text-[10px] md:text-xs font-bold text-slate-400 tabular-nums">
                              {step.number}/6
                            </span>
                          </div>
                        </div>

                        {/* Arrow indicator - OCULTO NO MOBILE */}
                        <div className={`hidden md:flex items-center transition-all duration-500 ${
                          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}>
                          <ArrowRight size={24} className="text-emerald-600" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Animated border glow on active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-xl -z-10"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium CTA Section - COMPACTADO NO MOBILE */}
        <div className="mt-12 md:mt-16 lg:mt-24 relative">
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center space-y-5 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm font-medium text-white">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span>Processo 100% Online</span>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white px-4">
                  Pronto para conquistar seu veículo?
                </h3>
                <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto px-4">
                  Comece agora sua simulação gratuita e descubra quanto pode economizar
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
                <button 
                  onClick={scrollToSimulator}
                  className="w-full sm:w-auto group px-6 py-3 md:px-8 md:py-4 bg-white text-slate-900 rounded-xl font-semibold text-sm md:text-base hover:bg-emerald-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 md:gap-3 shadow-xl"
                >
                  Iniciar Simulação Gratuita
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                </button>
                
                <button 
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl font-semibold text-sm md:text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
                >
                  Falar com Especialista
                  <Phone size={18} className="md:w-5 md:h-5" />
                </button>
              </div>

              {/* Trust indicators - COMPACTADO NO MOBILE */}
              <div className="pt-6 md:pt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-8 text-white/80 text-xs md:text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400 md:w-[18px] md:h-[18px]" />
                  <span>Sem taxas ocultas</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400 md:w-[18px] md:h-[18px]" />
                  <span>Aprovação em 24h</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400 md:w-[18px] md:h-[18px]" />
                  <span>Suporte especializado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}