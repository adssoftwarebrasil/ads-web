import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/ricardorodrigues/hero.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[rgb(47,44,34)]/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Excelência em
          <span className="block text-[#d9b33c] mt-2">Advocacia e Consultoria</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          No escritório Ricardo Rodrigues Advocacia e Consultoria, seu caso é a nossa prioridade.
          Comprometidos com a excelência desde 2017.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 bg-[#d9b33c] text-[rgb(47,44,34)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c4a336] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Fale Conosco
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
          >
            Conheça-nos
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
