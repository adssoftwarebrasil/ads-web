import { ArrowRight, Wrench } from 'lucide-react';
import { scrollToSection } from '../lib/constants';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col bg-black overflow-x-hidden fade-in">
      <div className="flex-grow flex items-start md:items-center justify-center relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-[rgb(231,189,44)] opacity-10 blur-[60px] md:blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-600 opacity-10 blur-[50px] md:blur-[90px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-8 items-center pt-32 pb-12 md:py-24">
            <div className="flex flex-col gap-6 md:gap-8 transition-all duration-1000 ease-out order-1 opacity-100 translate-y-0">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-gray-800 bg-gray-900/80 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-[rgb(231,189,44)] animate-pulse"></span>
                <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Assistência Especializada</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Tecnologia Xiaomi em <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(231,189,44)] via-[rgb(255,220,100)] to-[rgb(231,189,44)]">Dourados</span>
              </h1>
              <div className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed space-y-4 text-justify md:text-left">
                <p><strong className="text-white">Há dois anos conectando você ao melhor da tecnologia.</strong> A Órion Celulares nasceu com a missão de oferecer qualidade, confiança e atendimento humanizado na venda de smartphones Xiaomi.</p>
                <p>Hoje, ampliamos nossa atuação e nos tornamos uma loja completa, unindo vendas, acessórios e assistência técnica especializada em um só lugar.</p>
                <p>Além disso, oferecemos uma variedade de capas, películas, carregadores, cabos e smartwatches, sempre com foco em durabilidade e estilo.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection('produtos')}
                  className="group flex items-center justify-center gap-2 bg-[rgb(231,189,44)] text-black px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[rgb(255,210,60)] transition-all duration-300 active:scale-95"
                >
                  Ver Catálogo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('assistencia')}
                  className="group flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg text-white border border-gray-700 hover:border-[rgb(231,189,44)] hover:bg-[rgb(231,189,44)]/10 transition-all duration-300 active:scale-95"
                >
                  <Wrench className="w-5 h-5 text-gray-400 group-hover:text-[rgb(231,189,44)] transition-colors" />
                  Agendar Reparo
                </button>
              </div>
            </div>
            <div className="relative w-full flex items-center justify-center transition-all duration-1000 delay-300 ease-out order-2 lg:order-2 mt-4 lg:mt-0 opacity-100 translate-y-0">
              <img
                src="/fachada.webp"
                alt="Fachada da loja Órion Celulares e Assistência Técnica em Dourados"
                className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-contain drop-shadow-2xl z-10 rounded-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-4 right-0 md:bottom-10 md:right-10 bg-black/80 backdrop-blur-md border border-gray-800 p-3 md:p-4 rounded-xl shadow-2xl hidden sm:block z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-[rgb(231,189,44)] p-1.5 md:p-2 rounded-lg text-black">
                    <span className="font-bold text-lg md:text-xl">100%</span>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-white font-bold">Original</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
