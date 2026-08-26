import { Target, Zap, Award, LineChart, Handshake, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function Sobre() {
  const diferenciais = [
    {
      icone: Target,
      titulo: 'Metodologia Própria e Personalizada',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icone: Zap,
      titulo: 'Agilidade na Resolução de Demandas',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icone: Award,
      titulo: 'Equipe Altamente Capacitada',
      gradient: 'from-orange-500 to-pink-500',
    },
    {
      icone: LineChart,
      titulo: 'Foco em Redução de Custos',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icone: Handshake,
      titulo: 'Parcerias Duradouras',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icone: Clock,
      titulo: 'Cumprimento Rigoroso de Prazos',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  const stats = [
    { value: '7+', label: 'Anos de Mercado', gradient: 'from-blue-500 to-cyan-500' },
    { value: '500+', label: 'Clientes Satisfeitos', gradient: 'from-purple-500 to-indigo-500' },
    { value: '98%', label: 'Taxa de Satisfação', gradient: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="sobre" className="relative py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#164972]/10 to-cyan-500/10 backdrop-blur-sm border border-[#164972]/20 text-[#164972] px-4 py-2 rounded-full text-xs md:text-sm font-semibold animate-fade-in">
              <Sparkles className="w-4 h-4" />
              NOSSA HISTÓRIA
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#164972] animate-fade-in-up">
              <span className="bg-gradient-to-r from-[#164972] to-cyan-600 bg-clip-text text-transparent">
                7 Anos
              </span>{' '}
              de Excelência em Contabilidade
            </h2>

            {/* Description */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Fundada em junho de 2017, a Fonseca Contabilidade nasceu com o propósito de revolucionar o atendimento
                contábil em Goiás. Oferecemos muito mais que serviços tradicionais: somos{' '}
                <span className="font-semibold text-[#164972]">parceiros estratégicos</span> no crescimento do seu negócio.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Independente do porte da sua empresa, nossa metodologia personalizada garante praticidade, segurança e
                resultados mensuráveis na gestão administrativa e financeira.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl md:rounded-t-2xl bg-gradient-to-r ${stat.gradient}`}></div>
                  <div className="text-center">
                    <div className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 md:mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-600 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a
                href="https://wa.me/5562999732807?text=Olá! Gostaria de conhecer mais sobre a Fonseca Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#164972] to-[#1a5280] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#164972]/30 hover:scale-105 transition-all duration-300"
              >
                Falar com Especialista
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image and Diferenciais Section */}
          <div className="space-y-6 md:space-y-8">
            {/* Hero Image */}
            <div className="relative group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl md:rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl md:rounded-3xl p-2 md:p-3 overflow-hidden shadow-xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/wpfcontabilidade%2Fhomem-analisando-graficos_4_11zon.webp"
                  alt="Profissional analisando gráficos e dados contábeis"
                  className="w-full h-auto rounded-xl md:rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164972]/10 to-transparent rounded-xl md:rounded-2xl pointer-events-none"></div>
              </div>
            </div>

            {/* Diferenciais Grid */}
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {diferenciais.map((diferencial, index) => {
                const IconComponent = diferencial.icone;
                return (
                  <div
                    key={diferencial.titulo}
                    className="group relative bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${500 + index * 50}ms` }}
                  >
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl md:rounded-t-2xl bg-gradient-to-r ${diferencial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="flex items-center gap-3 md:gap-4">
                      {/* Icon */}
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${diferencial.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-[#164972] transition-colors duration-300 leading-tight">
                        {diferencial.titulo}
                      </h3>
                    </div>

                    {/* Checkmark indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle2 className={`w-4 h-4 bg-gradient-to-r ${diferencial.gradient} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                );
              })}
            </div>
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