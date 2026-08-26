import { CheckCircle, ArrowRight } from 'lucide-react';
import { scrollToId } from '../utils/scroll';

const badges = ['PIONEIROS EM LASER', '+23 ANOS EXPERIÊNCIA', 'DF E ENTORNO'];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2Fhero.png")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[rgb(139,0,2)]/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 drop-shadow-2xl leading-tight">
          SOLUÇÕES EM METAL<br />DE ALTA PRECISÃO
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white text-opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Corte a Laser | Dobra de Chapas | Estruturas Metálicas<br />
          <span className="text-base sm:text-lg md:text-xl">
            Mais de 10 anos transformando metal em resultado
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 bg-black bg-opacity-70 border-2 border-[rgb(139,0,2)] px-4 sm:px-6 py-3 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all"
            >
              <CheckCircle
                width={20}
                height={20}
                className="text-[rgb(139,0,2)] flex-shrink-0"
              />
              <span className="text-white font-semibold text-sm sm:text-base">{badge}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <button
            onClick={() => scrollToId('contato')}
            className="group flex items-center justify-center gap-2 bg-[rgb(139,0,2)] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold hover:bg-[rgb(180,0,3)] transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto"
          >
            <span>SOLICITAR ORÇAMENTO GRÁTIS</span>
            <ArrowRight
              width={20}
              height={20}
              className="group-hover:translate-x-1 transition-transform flex-shrink-0"
            />
          </button>
          <button
            onClick={() => scrollToId('servicos')}
            className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold hover:bg-[rgb(139,0,2)] hover:border-[rgb(139,0,2)] transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            <span>VER NOSSOS SERVIÇOS</span>
            <ArrowRight
              width={20}
              height={20}
              className="group-hover:translate-x-1 transition-transform flex-shrink-0"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
