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
            'url("https://storage.lucasmendes.dev/site-sp/mecrolamentos/hero03.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#EC3132] to-transparent opacity-60"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#2B559F] to-transparent opacity-60"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#EC3132]/20 border border-[#EC3132]/40 text-[#EC3132] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-2xl">
          Rolamentos e <span className="text-[#EC3132]">Peças</span>{' '}
          <br className="hidden sm:block" />
          para Qualquer <span className="text-[#2B559F]">Aplicação</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
          Especialistas em rolamentos agrícolas, automotivos e industriais. As melhores marcas do
          mercado com atendimento especializado.
        </p>
        <p className="text-sm text-gray-400 mb-10">
          NSK · Timken · SKF · Koyo · FAG · NTN · INA · SNR e muito mais
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5566999952065"
            className="w-full sm:w-auto bg-[#EC3132] hover:bg-[#c82828] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#EC3132]/30 hover:scale-105 active:scale-95"
          >
            Solicitar Orçamento
          </a>
          <a
            href="tel:6635315352"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            (66) 3531-5352
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#EC3132]">+15</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Marcas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#EC3132]">150km</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Raio de Atendimento</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#EC3132]">Anos</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">de Experiência</div>
          </div>
        </div>
      </div>
      <a
        href="#produtos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      ></a>
    </section>
  );
}
