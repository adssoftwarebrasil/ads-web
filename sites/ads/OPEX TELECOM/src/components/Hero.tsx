import { ArrowRight, Wifi, Shield, Server, Sparkles, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#FF5500] via-[#FF6000] to-[#FF7700]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="text-white" size={14} />
              <span className="text-xs sm:text-sm font-semibold text-white">
                Atendimento 24/7 • Suporte Especializado
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Soluções em{' '}
              <span className="relative inline-block">
                {/* MUDANÇA AQUI: Texto alterado para preto para destaque máximo */}
                <span className="text-black">
                  Telecomunicações
                </span>
                {/* Sublinhado mantido branco para contraste com o texto preto */}
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 7C66.6667 3.66667 133.333 3.66667 200 7" stroke="white" strokeWidth="2" strokeOpacity="0.6"/>
                </svg>
              </span>
              <br />
              <span className="text-orange-50/90">
                que Impulsionam Resultados
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-orange-50 leading-relaxed max-w-xl font-medium">
              Conectividade de alta performance, segurança inteligente e consultoria especializada para provedores, empresas e condomínios em todo território brasileiro.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 sm:gap-2 text-white font-medium">
                <CheckCircle2 className="text-white" size={16} />
                <span>Certificações ISO</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-white font-medium">
                <CheckCircle2 className="text-white" size={16} />
                <span>+10 Anos</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-white font-medium">
                <CheckCircle2 className="text-white" size={16} />
                <span>+500 Clientes</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-white text-[#FF5500] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 hover:bg-orange-50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Solicitar Orçamento
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </button>

              <a
                href="https://wa.me/5562993741022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Service Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 sm:pt-8">
              <div className="group bg-white p-3.5 sm:p-5 rounded-2xl shadow-lg shadow-black/5 hover:scale-105 transition-all duration-300">
                <div className="bg-[#FF5500] p-2 sm:p-3 rounded-xl w-fit mb-2">
                  <Wifi className="text-white" size={18} />
                </div>
                <p className="font-bold text-slate-900 mb-0.5 text-sm sm:text-base leading-tight">Internet</p>
                <p className="text-xs sm:text-sm text-slate-500">Corporativa</p>
              </div>

              <div className="group bg-white p-3.5 sm:p-5 rounded-2xl shadow-lg shadow-black/5 hover:scale-105 transition-all duration-300">
                <div className="bg-[#FF5500] p-2 sm:p-3 rounded-xl w-fit mb-2">
                  <Shield className="text-white" size={18} />
                </div>
                <p className="font-bold text-slate-900 mb-0.5 text-sm sm:text-base leading-tight">Segurança</p>
                <p className="text-xs sm:text-sm text-slate-500">Eletrônica</p>
              </div>

              <div className="group bg-white p-3.5 sm:p-5 rounded-2xl shadow-lg shadow-black/5 hover:scale-105 transition-all duration-300 col-span-2 sm:col-span-1">
                <div className="bg-[#FF5500] p-2 sm:p-3 rounded-xl w-fit mb-2">
                  <Server className="text-white" size={18} />
                </div>
                <p className="font-bold text-slate-900 mb-0.5 text-sm sm:text-base leading-tight">Consultoria</p>
                <p className="text-xs sm:text-sm text-slate-500">Especializada</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] mt-8 lg:mt-0">
            <div className="relative z-10 h-full">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=OPEX%20TELECOM%2FInternet-corporativa-para-empresas-mulher-laptop-reuniao.webp&version_id=null"
                alt="Internet Corporativa OPEX TELECOM"
                className="rounded-3xl shadow-2xl shadow-black/20 w-full h-full object-cover border-4 border-white/20"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-white p-4 sm:p-6 rounded-2xl shadow-xl z-20 max-w-[160px] sm:max-w-xs animate-float">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-xl">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#FF5500]">24/7</p>
                  <p className="text-slate-600 font-medium text-xs sm:text-sm">Suporte Técnico</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-2xl shadow-xl z-20 max-w-[160px] sm:max-w-xs animate-float-delayed">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-xl">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#FF5500]">100%</p>
                  <p className="text-slate-600 font-medium text-xs sm:text-sm">Satisfação</p>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/30 rounded-3xl blur-3xl -z-10 transform scale-105"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;