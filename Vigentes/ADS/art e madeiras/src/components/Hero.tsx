import { Star, MessageCircle, ArrowRight, CheckCircle2, Shield, Clock, Award, ChevronDown } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const heroImg =
  'https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2Fpergolado-madeira-piscina.webp';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-stone-950 -mt-[1px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url("${heroImg}")` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/80 to-stone-900/60 md:bg-gradient-to-r md:from-stone-950 md:via-stone-950/90 md:to-transparent"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Star className="lucide lucide-star w-3 h-3 fill-amber-300" />
              Excelência em Acabamento
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
              A Arte da Madeira <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Transformando Ambientes
              </span>
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl text-balance">
              Especialista em madeira , cortes precisos e acabamento&nbsp;de&nbsp;alto&nbsp;padrão.
              Sofisticação e durabilidade para Goiás e região.
            </p>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-3 pt-2">
              <button
                onClick={() => scrollToId('contato')}
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white px-6 py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
                Orçamento Gratuito
              </button>
              <button
                onClick={() => scrollToId('galeria')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-base text-stone-200 border border-stone-700 bg-stone-900/50 hover:bg-stone-800 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-amber-500/50"
              >
                Ver Portfólio
                <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
              </button>
            </div>
            <div className="w-full pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center justify-center lg:justify-start gap-2 p-1.5 rounded-lg bg-white/5 lg:bg-transparent">
                  <CheckCircle2 className="lucide lucide-check-circle2 text-amber-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-stone-300 text-sm font-medium">10+ Anos de Exp.</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 p-1.5 rounded-lg bg-white/5 lg:bg-transparent">
                  <Shield className="lucide lucide-shield text-amber-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-stone-300 text-sm font-medium">Garantia Total</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 p-1.5 rounded-lg bg-white/5 lg:bg-transparent">
                  <Clock className="lucide lucide-clock text-amber-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-stone-300 text-sm font-medium">Entrega no Prazo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative perspective-1000 group pl-8">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform transition-transform duration-700 hover:rotate-y-2 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent z-10"></div>
              <img
                src={heroImg}
                alt="Estrutura de madeira premium"
                className="w-full h-[550px] object-cover"
              />
            </div>
            <div className="absolute -inset-0 border-2 border-amber-600/20 rounded-2xl -z-10 translate-x-6 translate-y-6"></div>
            <div className="absolute -bottom-8 -left-2 z-20 bg-stone-900/95 backdrop-blur-md p-4 rounded-xl border border-stone-700 shadow-xl flex items-center gap-4 animate-float">
              <div className="bg-amber-500 rounded-full p-2.5">
                <Award className="lucide lucide-award w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">Qualidade Comprovada</p>
                <p className="text-white text-sm font-bold">Acabamento Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => scrollToId('servicos')}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
      >
        <ChevronDown className="lucide lucide-chevron-down text-white w-6 h-6 md:w-8 md:h-8" />
      </div>
    </section>
  );
}
