import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

const stats = [
  { value: '2019', label: 'Fundação' },
  { value: '6.000m²', label: 'Construídos' },
  { value: '100%', label: 'Satisfação' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/manzi/logo%2Fhero.jpg")',
          transform: 'translateY(0px)',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,40,71,0.88)] via-[rgba(0,40,71,0.78)] to-[rgba(42,49,51,0.88)]"></div>
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 border-2 border-white rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rotate-45 animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-white animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-white/5 rounded-full animate-pulse-slow"></div>
      </div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-1000 translate-y-0 opacity-100">
          <Sparkles className="lucide lucide-sparkles w-4 h-4 text-white animate-pulse" width={24} height={24} />
          <span className="text-white text-xs md:text-sm font-semibold tracking-[0.2em]">
            EXCELÊNCIA DESDE 2019
          </span>
        </div>
        <h1 className="text-white mb-6">
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 transition-all duration-1000 delay-200 translate-y-0 opacity-100"
            style={{
              letterSpacing: '0.02em',
              lineHeight: 1.2,
              textShadow:
                'rgba(0, 0, 0, 0.7) 0px 4px 30px, rgba(0, 0, 0, 0.5) 0px 2px 10px',
            }}
          >
            CADA PROJETO,
          </div>
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent transition-all duration-1000 delay-400 translate-y-0 opacity-100"
            style={{ letterSpacing: '0.02em', lineHeight: 1.2 }}
          >
            UMA HISTÓRIA
          </div>
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold transition-all duration-1000 delay-600 translate-y-0 opacity-100"
            style={{
              letterSpacing: '0.02em',
              lineHeight: 1.2,
              textShadow:
                'rgba(0, 0, 0, 0.7) 0px 4px 30px, rgba(0, 0, 0, 0.5) 0px 2px 10px',
            }}
          >
            DE SUCESSO
          </div>
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-opacity-95 font-light mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-800 translate-y-0 opacity-100"
          style={{ lineHeight: 1.7, textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 10px' }}
        >
          Construindo sonhos com excelência e qualidade
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 transition-all duration-1000 delay-1000 translate-y-0 opacity-100">
          {stats.map((stat, i) => (
            <div key={stat.label} className="contents">
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1"
                  style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 10px' }}
                >
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 md:h-12 bg-white/30 self-center"></div>
              )}
            </div>
          ))}
        </div>
        <div className="transition-all duration-1000 delay-1200 translate-y-0 opacity-100">
          <a
            href="#empreendimentos"
            className="group relative inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-[rgb(0,40,71)] text-white rounded-full text-sm md:text-base lg:text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              boxShadow:
                'rgba(0, 40, 71, 0.5) 0px 4px 20px, rgba(0, 40, 71, 0.3) 0px 10px 40px',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10 tracking-wide">
              CONHEÇA NOSSOS EMPREENDIMENTOS
            </span>
            <ArrowRight className="lucide lucide-arrow-right relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" width={24} height={24} />
          </a>
        </div>
        <div className="mt-6 transition-all duration-1000 delay-1400 translate-y-0 opacity-100">
          <a
            href="#institucional"
            className="text-white/70 hover:text-white text-xs md:text-sm font-medium transition-all duration-300 underline underline-offset-4 decoration-white/30 hover:decoration-white"
          >
            ou saiba mais sobre a Manzi Construtora
          </a>
        </div>
      </div>
      <a
        href="#institucional"
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white cursor-pointer group transition-all duration-1000 delay-1600 translate-y-0 opacity-100"
        aria-label="Rolar para baixo"
      >
        <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1 group-hover:text-white/70 transition-colors">
          Role para explorar
        </span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 group-hover:border-white/60 transition-colors">
          <ChevronDown className="lucide lucide-chevron-down w-4 h-4 text-white/60 animate-bounce group-hover:text-white/80 transition-colors" width={24} height={24} />
        </div>
      </a>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}
