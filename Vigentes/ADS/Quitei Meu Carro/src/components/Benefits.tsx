import { Handshake, CalendarCheck, Calculator } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const benefits = [
  {
    icon: Handshake,
    title: 'Negociação Especializada',
    description: 'Equipe experiente negocia as melhores condições para você',
    image: 'https://storage.lucasmendes.dev/site-sp/redeconsig%2Fatendente-apertando-mao-de-cliente.jpg',
    alt: 'Equipe de especialistas negociando financiamento',
    color: '#5ca57a'
  },
  {
    icon: CalendarCheck,
    title: 'Quite o Saldo Antes do Tempo',
    description: 'Reduza o prazo e economize nos juros do financiamento',
    image: 'https://storage.lucasmendes.dev/site-sp/quiteimeucarro%2Fchave-carro-contrato.webp',
    alt: 'Contrato de financiamento e chaves do veículo',
    color: '#06367a'
  },
  {
    icon: Calculator,
    title: 'Saiba Quanto é Possível Reduzir',
    description: 'Simulação gratuita mostra sua economia real',
    image: 'https://storage.lucasmendes.dev/site-sp/redeconsig%2Fsegurando-dinheiro-na-m%C3%A3o.png',
    alt: 'Cliente satisfeito com a economia obtida',
    color: '#5ca57a'
  }
];

export default function Benefits() {
  const ref = useScrollAnimation();

  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header - COMPACTADO NO MOBILE */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Por que escolher nosso serviço?
          </h2>
          <div className="w-20 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Benefits Grid - OTIMIZADO PARA MOBILE */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image Container - ALTURA REDUZIDA NO MOBILE */}
                <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden bg-gray-100">
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Badge - REDUZIDO NO MOBILE */}
                  <div 
                    className="absolute top-3 right-3 md:top-5 md:right-5 w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                    style={{ backgroundColor: `${benefit.color}15`, border: `2px solid ${benefit.color}30` }}
                  >
                    <Icon size={20} className="md:w-[26px] md:h-[26px]" style={{ color: benefit.color }} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content - PADDING REDUZIDO NO MOBILE */}
                <div className="p-5 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
                    <div 
                      className="h-0.5 md:h-1 rounded-full transition-all duration-500 w-0 group-hover:w-12 md:group-hover:w-16"
                      style={{ backgroundColor: benefit.color }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - COMPACTADO NO MOBILE */}
        <div className="text-center mt-10 md:mt-16 px-4">
          <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
            Pronto para economizar no seu financiamento?
          </p>
          <button 
            onClick={scrollToSimulator}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          >
            Faça sua Simulação Gratuita
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}