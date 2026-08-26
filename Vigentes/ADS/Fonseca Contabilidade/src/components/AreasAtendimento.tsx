import { MapPin, Map, Award, CheckCircle } from 'lucide-react';

export default function AreasAtendimento() {
  const cidades = [
    { nome: 'Goiânia', destaque: true },
    { nome: 'Aparecida de Goiânia', destaque: false },
    { nome: 'Senador Canedo', destaque: false },
    { nome: 'Trindade', destaque: false },
    { nome: 'Anápolis', destaque: false },
    { nome: 'Santo Antônio de Goiás', destaque: false },
    { nome: 'Goianira', destaque: false },
    { nome: 'Nerópolis', destaque: false },
  ];

  const estados = [
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Tocantins', sigla: 'TO' },
    { nome: 'Maranhão', sigla: 'MA' }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#164972]/10 to-cyan-500/10 backdrop-blur-sm border border-[#164972]/20 text-[#164972] px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
            <Map className="w-4 h-4" />
            COBERTURA REGIONAL
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#164972] mb-3 md:mb-4 px-4">
            Atendemos Empresas em Todo o{' '}
            <span className="bg-gradient-to-r from-[#164972] to-cyan-600 bg-clip-text text-transparent">
              Centro-Oeste e Norte
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Presença estratégica nas principais cidades e estados para oferecer o melhor suporte contábil
          </p>
        </div>

        {/* Cidades Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          {cidades.map((cidade, index) => (
            <div
              key={cidade.nome}
              className={`group relative bg-white p-4 md:p-6 rounded-xl md:rounded-2xl text-center 
                transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer
                ${cidade.destaque 
                  ? 'border-2 border-[#164972] shadow-lg shadow-[#164972]/10' 
                  : 'border border-gray-200 hover:border-[#164972]/50 hover:shadow-lg'
                }`}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                cidade.destaque 
                  ? 'bg-gradient-to-br from-[#164972]/5 to-cyan-500/5' 
                  : 'bg-gradient-to-br from-gray-50 to-blue-50'
              }`}></div>

              <div className="relative z-10">
                {/* Icon container */}
                <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full mb-2 md:mb-3 transition-all duration-300
                  ${cidade.destaque 
                    ? 'bg-gradient-to-br from-[#164972] to-[#1a5280] shadow-lg shadow-[#164972]/30' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-[#164972]/10 group-hover:to-cyan-500/10'
                  }`}>
                  {cidade.destaque ? (
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  ) : (
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-[#164972] transition-colors duration-300" />
                  )}
                </div>

                {/* City name */}
                <h3 className={`text-xs md:text-sm lg:text-base font-semibold transition-colors duration-300 ${
                  cidade.destaque 
                    ? 'text-[#164972]' 
                    : 'text-gray-700 group-hover:text-[#164972]'
                }`}>
                  {cidade.nome}
                </h3>

                {/* Badge for highlighted city */}
                {cidade.destaque && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-lg">
                    Principal
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Estados Section */}
        <div className="bg-gradient-to-r from-[#164972] to-[#1a5280] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-white">
                <p className="text-xs md:text-sm font-medium opacity-90 mb-1">
                  Também atendemos em
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  {estados.map((estado, index) => (
                    <div key={estado.sigla} className="flex items-center">
                      <span className="text-base md:text-lg lg:text-xl font-bold">
                        {estado.nome}
                      </span>
                      {index < estados.length - 1 && (
                        <span className="mx-2 text-white/50">•</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {estados.map((estado) => (
                <div 
                  key={estado.sigla}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-white">{estado.sigla}</div>
                  <div className="text-xs text-white/80">{estado.nome}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-xs md:text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Atendimento online para todo o Brasil
            </span>
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
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

        .grid > div {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}