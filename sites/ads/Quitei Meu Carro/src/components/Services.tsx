import { useState } from 'react';
import { FileSearch, TrendingDown, Shield, Sparkles, ArrowRight, CheckCircle2, Percent, Users } from 'lucide-react';

const services = [
  {
    title: 'Revisão Contratual Completa',
    description: 'Análise detalhada de todo seu contrato para identificar possíveis abusos financeiros, cobranças indevidas e cláusulas abusivas que podem estar prejudicando você',
    icon: FileSearch,
    color: 'from-emerald-500 to-teal-500',
    benefits: [
      'Identificação de juros abusivos',
      'Análise de cláusulas contratuais',
      'Verificação de cobranças indevidas',
      'Relatório completo em 24h'
    ],
    stats: { value: '87%', label: 'encontram irregularidades' }
  },
  {
    title: 'Negociação Estratégica',
    description: 'Nossa equipe especializada negocia diretamente com as instituições financeiras usando técnicas avançadas para conseguir os melhores descontos e condições do mercado',
    icon: TrendingDown,
    color: 'from-teal-500 to-cyan-500',
    benefits: [
      'Desconto médio de 40%',
      'Redução de juros e taxas',
      'Novos prazos flexíveis',
      'Atendimento personalizado'
    ],
    stats: { value: '40%', label: 'economia média' }
  }
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
    <section id="servicos" className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-emerald-500/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        {/* Premium Header - COMPACTADO NO MOBILE */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-emerald-200 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
            <Sparkles size={14} className="text-emerald-600 md:w-4 md:h-4" />
            <span className="text-slate-700">Soluções Especializadas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight px-4">
            Nossos Serviços
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Especializados
            </span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Serviços completos para garantir a quitação do seu veículo nas melhores condições
          </p>
        </div>

        {/* Services Grid - OTIMIZADO PARA MOBILE */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                className={`group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                  isActive
                    ? 'border-emerald-300 shadow-2xl shadow-emerald-500/20 scale-[1.02]'
                    : 'border-slate-200 shadow-lg hover:border-slate-300'
                }`}
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative p-5 md:p-8 lg:p-10">
                  {/* Icon and Stats Badge - COMPACTADO NO MOBILE */}
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} shadow-lg flex items-center justify-center transition-transform duration-500 ${
                      isActive ? 'scale-110 rotate-3' : ''
                    }`}>
                      <Icon size={24} className="text-white md:w-8 md:h-8" strokeWidth={2} />
                    </div>

                    {/* Stats Badge - REDUZIDO NO MOBILE */}
                    <div className="text-right">
                      <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.stats.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-slate-500 font-medium">
                        {service.stats.label}
                      </div>
                    </div>
                  </div>

                  {/* Title - REDUZIDO NO MOBILE */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description - REDUZIDO NO MOBILE */}
                  <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Benefits List - COMPACTADO NO MOBILE */}
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 md:gap-3 group/item"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-md md:rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center transition-transform group-hover/item:scale-110`}>
                          <CheckCircle2 size={12} className="text-white md:w-[14px] md:h-[14px]" strokeWidth={3} />
                        </div>
                        <span className="text-xs md:text-sm text-slate-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - COMPACTADO NO MOBILE */}
                  <button 
                    onClick={scrollToSimulator}
                    className={`w-full py-2.5 md:py-3.5 rounded-lg md:rounded-xl font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}>
                    <span>Saber Mais</span>
                    <ArrowRight size={16} className={`transition-transform md:w-[18px] md:h-[18px] ${isActive ? 'translate-x-1' : ''}`} />
                  </button>
                </div>

                {/* Animated Border Glow */}
                {isActive && (
                  <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${service.color} opacity-20 blur-xl -z-10`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust Section - COMPACTADO NO MOBILE */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            {/* Stats Grid - COMPACTADO NO MOBILE */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 mb-2 md:mb-4">
                  <Shield size={24} className="text-emerald-400 md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">100%</div>
                <div className="text-slate-400 text-[10px] md:text-sm">Seguro e Confiável</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 mb-2 md:mb-4">
                  <Users size={24} className="text-teal-400 md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">5.000+</div>
                <div className="text-slate-400 text-[10px] md:text-sm">Clientes Atendidos</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 mb-2 md:mb-4">
                  <Percent size={24} className="text-cyan-400 md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">98%</div>
                <div className="text-slate-400 text-[10px] md:text-sm">Taxa de Sucesso</div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-6 md:mb-10"></div>

            {/* CTA - COMPACTADO NO MOBILE */}
            <div className="text-center space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white px-4">
                Pronto para Quitar Seu Veículo?
              </h3>
              <p className="text-slate-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
                Comece agora e descubra como podemos ajudar você a economizar
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <button 
                  onClick={scrollToSimulator}
                  className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-slate-900 rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                >
                  Fazer Simulação Gratuita
                  <ArrowRight size={18} className="md:w-5 md:h-5" />
                </button>
                <button 
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Falar com Especialista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}