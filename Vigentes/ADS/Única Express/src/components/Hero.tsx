import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/unicaexpressoficial%2Fentregademalotes.webp"
          alt="Entrega de Malotes - Serviço de entrega rápida e segura"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-0">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-center px-2">
            Entregas Rápidas e Urgentes em <span className="text-[rgb(38,129,196)]">Goiânia</span> e Região Metropolitana
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium text-center px-4">
            Atendemos Pessoas Físicas e Jurídicas
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-6 md:mt-8 px-4">
            <a
              href="https://wa.me/5562998549294"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[rgb(38,129,196)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[rgb(28,109,176)] transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2 group"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
              Fale com um consultor
            </a>
            <button
              onClick={scrollToServicos}
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-[rgb(38,129,196)] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Nossos Serviços
            </button>
          </div>
          <div className="mt-8 md:mt-12 flex justify-center w-full">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20">
              <div className="flex items-center justify-center gap-2 text-white">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium text-sm sm:text-base whitespace-nowrap">
                  <span className="hidden sm:inline">Segunda a Sexta 8h - 18h | Sábado 8h - 14h</span>
                  <span className="sm:hidden">Seg-Sex 8h-18h | Sáb 8h-14h</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
