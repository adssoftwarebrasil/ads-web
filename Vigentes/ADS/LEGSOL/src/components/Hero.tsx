import { ArrowRight, Calculator, Zap, CheckCircle2 } from 'lucide-react';
import { scrollToId } from '../lib/utils';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/legsol%2Fimg%2Fhero-background.webp")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b2d72] via-[#1b2d72]/95 to-[#1b2d72]/70 mix-blend-multiply"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-[rgb(235,156,51)] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide text-gray-200">Soluções Sustentáveis</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Economia Real na <br className="hidden lg:block" /> Sua Conta de Luz
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Transforme o sol de Franca em lucro. Reduza até{' '}
              <span className="font-bold text-[rgb(235,156,51)]">95% dos gastos</span> com energia elétrica.
              Instalação profissional com garantia total.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToId('contact')}
                className="group relative bg-[rgb(26,110,76)] hover:bg-[rgb(31,130,90)] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(26,110,76,0.3)] hover:shadow-[0_15px_25px_rgba(26,110,76,0.5)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                Solicitar Orçamento
                <ArrowRight className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" width={20} height={20} />
              </button>
              <button
                onClick={() => scrollToId('cta')}
                className="group bg-white/5 hover:bg-white text-white hover:text-[#1b2d72] border border-white/30 hover:border-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Calculator className="lucide lucide-calculator" width={20} height={20} />
                Calcular Economia
              </button>
            </div>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10">
              <div className="flex items-center gap-3 justify-center lg:justify-start text-gray-300">
                <div className="p-2 rounded-lg bg-white/5 text-[rgb(235,156,51)]">
                  <Zap className="lucide lucide-zap" width={18} height={18} />
                </div>
                <span className="text-sm font-medium">3+ anos de exp.</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start text-gray-300">
                <div className="p-2 rounded-lg bg-white/5 text-[rgb(235,156,51)]">
                  <CheckCircle2 className="lucide lucide-check-circle2" width={18} height={18} />
                </div>
                <span className="text-sm font-medium">Garantia Total</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start text-gray-300">
                <div className="p-2 rounded-lg bg-white/5 text-[rgb(235,156,51)]">
                  <Calculator className="lucide lucide-calculator" width={18} height={18} />
                </div>
                <span className="text-sm font-medium">Sem Surpresas</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block group perspective-1000 max-w-[85%] ml-auto">
            <div className="absolute -inset-4 bg-[rgb(235,156,51)]/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2 transform transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/legsol%2Fimg%2Fhero.webp"
                alt="Instalação de Energia Solar em Franca"
                className="rounded-xl w-full h-auto object-cover shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
