import { ChevronDown } from 'lucide-react';
import { scrollToId } from '../lib/site';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL%2Fimg%2Fcopos-cerveja-brinde.webp")',
          filter: 'brightness(1.05)',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(40,44,115)]/65 via-[rgb(40,44,115)]/55 to-[rgb(40,44,115)]/70"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[rgb(176,146,71)]/20 backdrop-blur-sm border border-[rgb(176,146,71)]/40 rounded-full mb-4">
            <span className="text-[rgb(176,146,71)] font-semibold text-sm md:text-base tracking-wide uppercase">
              Desde 2018
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Transforme Seus Momentos em{' '}
            <span className="bg-gradient-to-r from-[rgb(176,146,71)] to-[rgb(206,176,101)] bg-clip-text text-transparent">
              Celebrações Inesquecíveis
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Chopp premium, atendimento personalizado e a qualidade que seu evento merece
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <button
              onClick={() => scrollToId('contato')}
              className="group h-16 px-10 md:px-14 bg-[rgb(176,146,71)] text-white text-lg font-bold rounded-full hover:bg-[rgb(156,126,51)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[rgb(176,146,71)]/50 shadow-xl w-full sm:w-auto"
            >
              Solicite um Orçamento
            </button>
            <button
              onClick={() => scrollToId('servicos')}
              className="h-16 px-10 md:px-14 border-2 border-white/80 backdrop-blur-sm text-white text-lg font-bold rounded-full hover:bg-white hover:text-[rgb(40,44,115)] hover:border-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
        <button
          onClick={() => scrollToId('sobre')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce-smooth cursor-pointer hover:text-[rgb(176,146,71)] transition-colors duration-300 group"
          aria-label="Rolar para baixo"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Role
            </span>
            <ChevronDown size={36} strokeWidth={2.5} />
          </div>
        </button>
      </div>
    </section>
  );
}
