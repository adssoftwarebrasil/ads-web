import { MessageCircle, Shield, Zap, ThumbsUp, Sparkles, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#145bcc] via-[#0d4a99] to-[#e3130c] py-12 lg:py-20 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white rounded-full blur-2xl animate-float" />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge Premium */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-xs lg:text-sm font-bold mb-4 lg:mb-6 shadow-lg hover:scale-105 transition-transform">
            <Sparkles size={14} className="lg:w-4 lg:h-4" />
            <span>Atendimento Especializado</span>
          </div>

          {/* Main Title with Animation */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black leading-[1.1] mb-4 lg:mb-6 drop-shadow-2xl animate-fade-in">
            Fale Conosco e Encontre{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Exatamente</span>
              <span className="absolute bottom-0.5 lg:bottom-1 left-0 w-full h-2 lg:h-3 bg-[#f8cd21]/40 -rotate-1"></span>
            </span>{' '}
            O Que Você Precisa
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-95 mb-6 lg:mb-8">
            Nossa equipe está <span className="font-bold text-[#fdef87]">pronta para atender você</span> pelo WhatsApp. 
            Tire dúvidas, solicite orçamentos e garanta as melhores ofertas!
          </p>

          {/* CTA Button */}
          <div className="mb-5 lg:mb-7">
            
              <a href="https://wa.me/5577999948600?text=Olá! Vim do site da Barreiras Informática e gostaria de fazer um orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 lg:gap-3 bg-white text-[#145bcc] px-8 py-4 lg:px-12 lg:py-5 rounded-xl lg:rounded-2xl text-base lg:text-lg font-black shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.5)] hover:scale-105 transition-all overflow-hidden"
            >
              {/* Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              <div className="relative flex items-center gap-2 lg:gap-3">
                <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-1.5 lg:p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <MessageCircle size={18} className="lg:w-5 lg:h-5 text-white" />
                </div>
                <span>Chamar no WhatsApp</span>
                <ArrowRight size={18} className="lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-2 mb-6 lg:mb-8">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#f8cd21] to-[#d4a800] flex items-center justify-center border-2 border-white shadow-lg">
                <Sparkles size={12} className="lg:w-3.5 lg:h-3.5 text-white" />
              </div>
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center border-2 border-white shadow-lg">
                <MessageCircle size={12} className="lg:w-3.5 lg:h-3.5 text-white" />
              </div>
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#69bfd6] to-[#4a9fb8] flex items-center justify-center border-2 border-white shadow-lg">
                <Shield size={12} className="lg:w-3.5 lg:h-3.5 text-white" />
              </div>
            </div>
            <p className="text-xs lg:text-sm font-bold">
              <span className="text-[#fdef87]">Resposta em minutos</span> • Milhares satisfeitos
            </p>
          </div>

          {/* Features Grid - 3 Columns Always */}
          <div className="grid grid-cols-3 gap-3 lg:gap-4 max-w-2xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-xl hover:bg-white/20 hover:scale-105 transition-all">
              <div className="bg-white/20 w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform">
                <Shield size={20} className="lg:w-6 lg:h-6" />
              </div>
              <h3 className="font-bold text-sm lg:text-base mb-0.5">Confiável</h3>
              <p className="text-xs opacity-90">Atendimento profissional</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-xl hover:bg-white/20 hover:scale-105 transition-all">
              <div className="bg-white/20 w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform">
                <Zap size={20} className="lg:w-6 lg:h-6" />
              </div>
              <h3 className="font-bold text-sm lg:text-base mb-0.5">Rápido</h3>
              <p className="text-xs opacity-90">Resposta imediata</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-xl hover:bg-white/20 hover:scale-105 transition-all">
              <div className="bg-white/20 w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform">
                <ThumbsUp size={20} className="lg:w-6 lg:h-6" />
              </div>
              <h3 className="font-bold text-sm lg:text-base mb-0.5">Garantido</h3>
              <p className="text-xs opacity-90">Satisfação total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.08);
          }
        }

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

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite 2s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}