import { CheckCircle2, TrendingUp, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const benefits = [
    {
      icon: CheckCircle2,
      text: 'Redução de até 40% nos custos tributários'
    },
    {
      icon: TrendingUp,
      text: 'Gestão financeira com BI'
    },
    {
      icon: Shield,
      text: 'Conformidade fiscal garantida'
    }
  ];

  const stats = [
    { value: '7+', label: 'Anos' },
    { value: '500+', label: 'Clientes' },
    { value: '4', label: 'Estados' }
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden bg-gradient-to-br from-[#000000] via-[#111111] to-[#2B2B2B]"
    >
      {/* Animated background elements - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8CE8A]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8CE8A]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A44C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="text-white space-y-4 md:space-y-6 z-10 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-xs md:text-sm animate-fade-in">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#E8CE8A]" />
              <span className="font-medium">Excelência em Contabilidade</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              Contabilidade{' '}
              <span className="bg-gradient-to-r from-[#F0DDAE] to-[#C9A44C] bg-clip-text text-transparent">
                Estratégica
              </span>{' '}
              para Seu Negócio
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Mais de 7 anos transformando empresas em Goiás com soluções contábeis personalizadas e tecnológicas
            </p>

            {/* Benefits - Compact version */}
            <div className="space-y-2 md:space-y-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 md:gap-3 group hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1.5 md:p-2 group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
                    <benefit.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-sm md:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Compact */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a
                href="https://wa.me/5562999732807?text=Olá! Gostaria de solicitar uma proposta da Fonseca Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#C9A44C] text-[#0A0A0A] px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-semibold text-sm md:text-base text-center hover:bg-[#E8CE8A] hover:shadow-2xl hover:shadow-[#C9A44C]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Solicitar Proposta
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <button
                onClick={() => scrollToSection('servicos')}
                className="border-2 border-white/30 backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-semibold text-sm md:text-base hover:bg-[#C9A44C] hover:text-[#0A0A0A] hover:border-[#C9A44C] transition-all duration-300"
              >
                Ver Serviços
              </button>
            </div>

            {/* Image and Stats - Mobile (After CTA) */}
            <div className="lg:hidden space-y-4 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              {/* Main Image - Mobile */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8CE8A] to-[#C9A44C] rounded-xl blur-xl opacity-20"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 overflow-hidden">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/wpfcontabilidade%2Fanalise-graficos-documentos_1_11zon.webp"
                    alt="Análise de gráficos e documentos contábeis"
                    className="w-full h-auto rounded-lg shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/20 to-transparent rounded-lg"></div>
                </div>
              </div>

              {/* Stats Card - Mobile */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/20">
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-[#111111] to-[#2B2B2B] bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#5A5A5A] font-medium leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image and Stats Section - Desktop Only */}
          <div className="relative hidden lg:flex justify-center items-center z-10 order-1 lg:order-2">
            <div className="space-y-4 md:space-y-6">
              {/* Main Image - Compact on mobile */}
              <div className="relative group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8CE8A] to-[#C9A44C] rounded-xl md:rounded-2xl blur-xl opacity-20 md:opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-1.5 md:p-2 overflow-hidden">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/wpfcontabilidade%2Fanalise-graficos-documentos_1_11zon.webp"
                    alt="Análise de gráficos e documentos contábeis"
                    className="w-full h-auto rounded-lg md:rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/20 to-transparent rounded-lg md:rounded-xl"></div>
                </div>
              </div>

              {/* Stats Card - Compact */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border border-white/20 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center group hover:transform hover:scale-110 transition-all duration-300"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br from-[#111111] to-[#2B2B2B] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-[#5A5A5A] font-medium leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge - Only on desktop */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-br from-[#E8CE8A] to-[#C9A44C] text-white rounded-full p-2.5 md:p-4 shadow-2xl animate-float hidden lg:block">
                <Shield className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
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