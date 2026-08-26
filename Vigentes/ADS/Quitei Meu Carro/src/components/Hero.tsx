import { MessageCircle, Sparkles, TrendingDown, Shield } from 'lucide-react';

export default function Hero() {
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
    <section id="inicio" className="relative min-h-screen pt-[70px] md:pt-[80px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Elementos de fundo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[60px] h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 min-h-[calc(100vh-80px)] py-6 md:py-12">
          
          {/* Conteúdo */}
          <div className="flex-1 max-w-2xl z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-6 shadow-lg shadow-emerald-500/20 animate-fade-in">
              <Sparkles size={14} className="animate-pulse" />
              100% Online e Gratuito
            </div>

            {/* Título - REDUZIDO NO MOBILE */}
            <h1 className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-emerald-200 leading-[1.1] mb-3 md:mb-6 animate-fade-in">
              Reduza suas parcelas e quite seu veículo com desconto
            </h1>

            {/* Descrição - REDUZIDA NO MOBILE */}
            <p className="text-sm sm:text-base md:text-xl text-slate-300 mb-4 md:mb-8 leading-relaxed animate-fade-in">
              Negociação especializada com revisão contratual e correção de abusos financeiros
            </p>

            {/* Features rápidas - COMPACTADAS NO MOBILE */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row items-center sm:gap-2 text-slate-300">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-1 sm:mb-0">
                  <TrendingDown size={14} className="text-emerald-400 md:w-4 md:h-4" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center sm:text-left">Até 70% off</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:gap-2 text-slate-300">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-1 sm:mb-0">
                  <Shield size={14} className="text-blue-400 md:w-4 md:h-4" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center sm:text-left">100% Seguro</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:gap-2 text-slate-300">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mb-1 sm:mb-0">
                  <Sparkles size={14} className="text-purple-400 md:w-4 md:h-4" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center sm:text-left">Sem burocracia</span>
              </div>
            </div>

            {/* Botões - COMPACTADOS NO MOBILE */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in">
              <button
                onClick={scrollToSimulator}
                className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Fazer Simulação Gratuita
                  <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={openWhatsApp}
                className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-5 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                Falar com Especialista
              </button>
            </div>

            {/* Social proof - COMPACTADO NO MOBILE */}
            <div className="mt-4 md:mt-8 flex items-center gap-3 md:gap-4 text-slate-400 text-xs md:text-sm animate-fade-in">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-slate-900"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
              </div>
              <p>
                <span className="text-white font-semibold">+12.500</span> clientes atendidos
              </p>
            </div>
          </div>

          {/* Imagem - REDUZIDA NO MOBILE */}
          <div className="flex-1 w-full max-w-md lg:max-w-xl z-10 animate-slide-in-right">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75"></div>
              
              {/* Imagem container */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 backdrop-blur-sm bg-white/5">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/quiteimeucarro%2Fcliente-carro-teste.webp"
                  alt="Cliente satisfeito após quitar seu veículo"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              </div>

              {/* Floating badge - REDUZIDO NO MOBILE */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-2xl shadow-emerald-500/50 font-bold animate-bounce-slow">
                <div className="text-xl md:text-2xl">70%</div>
                <div className="text-[10px] md:text-xs opacity-90">de desconto</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* @ts-expect-error - styled-jsx uses custom jsx attribute */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}