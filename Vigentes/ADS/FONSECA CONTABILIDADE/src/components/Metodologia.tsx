import { Search, ClipboardList, Settings, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

export default function Metodologia() {
  const etapas = [
    {
      numero: 1,
      titulo: 'Diagnóstico',
      descricao: 'Análise completa das necessidades do seu negócio',
      icone: Search,
    },
    {
      numero: 2,
      titulo: 'Planejamento',
      descricao: 'Estratégia personalizada com foco em resultados',
      icone: ClipboardList,
    },
    {
      numero: 3,
      titulo: 'Implantação',
      descricao: 'Processos otimizados e equipe dedicada',
      icone: Settings,
    },
    {
      numero: 4,
      titulo: 'Acompanhamento',
      descricao: 'Monitoramento contínuo e relatórios gerenciais',
      icone: TrendingUp,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A44C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A44C]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C9A44C]/10 backdrop-blur-sm border border-[#C9A44C]/40 text-[#8E6F2C] px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            PROCESSO ESTRUTURADO
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-3 md:mb-4 animate-fade-in-up">
            Nossa Metodologia de Trabalho
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#5A5A5A] max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Um processo estruturado em 4 etapas para garantir resultados excepcionais
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mb-12 mt-8">
          {/* Connection Line */}
          <div className="absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#111111]/20 to-transparent"></div>

          <div className="grid grid-cols-4 gap-6 relative pt-6">
            {etapas.map((etapa, index) => {
              const IconComponent = etapa.icone;
              const delay = index * 150;
              
              return (
                <div
                  key={etapa.numero}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {/* Card */}
                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-[#ECE8DE] hover:border-[#111111]/20 transition-all duration-500 overflow-visible hover:-translate-y-2">
                    {/* Top Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#111111] to-[#2B2B2B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"></div>

                    <div className="p-6 md:p-8 pt-12">
                      {/* Number Badge - Positioned absolutely */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#111111] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#111111] to-[#0A0A0A] flex items-center justify-center font-bold text-xl text-white shadow-xl group-hover:scale-110 transition-transform duration-500 border-2 border-white">
                            {etapa.numero}
                          </div>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-6 mt-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#C9A44C]/20 rounded-2xl blur-xl group-hover:bg-[#C9A44C]/30 transition-colors duration-500"></div>
                          <div className="relative w-16 h-16 rounded-2xl bg-[#C9A44C]/10 flex items-center justify-center group-hover:bg-[#C9A44C]/20 transition-colors duration-500">
                            <IconComponent className="w-8 h-8 text-[#8E6F2C] group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-[#111111] mb-3 text-center group-hover:text-[#0A0A0A] transition-colors duration-300">
                        {etapa.titulo}
                      </h3>
                      <p className="text-sm text-[#5A5A5A] leading-relaxed text-center">
                        {etapa.descricao}
                      </p>

                      {/* Progress Indicator */}
                      <div className="mt-6 pt-4 border-t border-[#ECE8DE] opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#8E6F2C]">
                          <span>Etapa {etapa.numero} de 4</span>
                        </div>
                      </div>
                    </div>

                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#111111]/0 to-[#111111]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 mb-12 mt-8 pt-6">
          {etapas.map((etapa, index) => {
            const IconComponent = etapa.icone;
            return (
              <div
                key={etapa.numero}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-[#ECE8DE] hover:border-[#111111]/20 transition-all duration-500 overflow-visible hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#111111] to-[#2B2B2B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"></div>
                <div className="p-6 pt-12">
                  <div className="absolute -top-6 left-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#111111] to-[#0A0A0A] flex items-center justify-center font-bold text-lg text-white shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                      {etapa.numero}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A44C]/10 flex items-center justify-center group-hover:bg-[#C9A44C]/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#8E6F2C]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#0A0A0A] transition-colors duration-300">{etapa.titulo}</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">{etapa.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6 mb-12">
          {etapas.map((etapa, index) => {
            const IconComponent = etapa.icone;
            return (
              <div key={etapa.numero} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Vertical Line */}
                {index < etapas.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#111111]/30 to-transparent translate-y-6"></div>
                )}

                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-lg border border-[#ECE8DE] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#111111] to-[#2B2B2B]"></div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#111111] to-[#0A0A0A] flex items-center justify-center font-bold text-lg text-white shadow-lg flex-shrink-0 z-10">
                        {etapa.numero}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-[#C9A44C]/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-[#8E6F2C]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#111111] mb-2">{etapa.titulo}</h3>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed">{etapa.descricao}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-block bg-gradient-to-r from-[#111111] to-[#2B2B2B] rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
              Pronto para transformar sua contabilidade?
            </h3>
            <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8">
              Comece agora com nossa metodologia comprovada
            </p>
            <a
              href="https://wa.me/5562999732807?text=Olá! Gostaria de conhecer a metodologia da Fonseca Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A44C] text-[#0A0A0A] px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-[#E8CE8A] hover:shadow-2xl hover:shadow-[#C9A44C]/30 hover:scale-105 transition-all duration-300"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .animate-fade-in-up {
            animation-duration: 0.5s;
          }
        }
      `}</style>
    </section>
  );
}